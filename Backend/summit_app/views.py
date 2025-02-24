from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.contrib import messages
from django.conf import settings
from .models import *
from .forms import *

def home(request):
    speaker = Speaker.objects.all()
    return render(request, 'speakers.html', {'speaker': speaker})

def speaker_details(request, pk):
    speaker_details = get_object_or_404(Speaker, pk=pk)
    return render(request, 'speakers.html', {'speaker_details': speaker_details})

def schedule_view(request):
    schedules = Schedule.objects.all().order_by('day', 'start_time')
    grouped_schedules = {}
    
    for schedule in schedules:
        if schedule.day not in grouped_schedules:
            grouped_schedules[schedule.day] = []
        grouped_schedules[schedule.day].append(schedule)
    return render(request, 'schedule.html', {'grouped_schedules': grouped_schedules})

@login_required
def add_comment(request):
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.user = request.user
            comment.save()
            messages.success(request, 'Your comment has been added successfully!')
            return redirect('/view_comment')
        else:
            messages.error(request, 'Please correct the errors and try again.')
    else:
        form = CommentForm()
    return render(request, 'comments.html', {'add_cmt': True, 'form': form})

def view_comment(request):
    cmt = Comment.objects.all()
    return render(request, 'comments.html', {'comment': cmt, 'show_cmt': True})

def careers_home(request):
    return render(request, 'careers.html', {'home': True})

def careers_list(request):
    categories = Category.objects.prefetch_related('jobs').all()
    return render(request, 'careers.html', {'categories': categories, 'careers': True})

def job_detail(request, job_id):
    job = get_object_or_404(Job, id=job_id)
    form = JobApplicationForm()
    message = None

    if request.method == "POST":
        form = JobApplicationForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your application has been submitted successfully!')
            return redirect(request.path)
    message = request.session.pop('message', None)
    return render(request, 'jobs.html', {'job': job, 'form': form, 'message': message})

def agenda_view(request):
    agenda_items = Agenda.objects.all().order_by('day', 'start_time')
    grouped_agenda = {day: list(items) for day, items in groupby(agenda_items, lambda x: x.day)}
    return render(request, 'agenda.html', {'grouped_agenda': grouped_agenda})

def send_contact_email(user_name, user_email):
    html_content = render_to_string('contact.html', {'name': user_name, 'mail': True})
    text_content = strip_tags(html_content)  # Convert HTML to plain text

    email = EmailMultiAlternatives(
        subject="Thank You for Contacting Us!",
        body=text_content,
        from_email=settings.EMAIL_HOST_USER,
        to=[user_email])
    email.attach_alternative(html_content, "text/html")
    email.send()

def contact_view(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            contact = form.save()
            user_email = contact.email
            user_name = contact.first_name
            send_contact_email(user_name, user_email)
            messages.success(request, "Your message has been received successfully!")
            return redirect('contact')
    else:
        form = ContactForm()
    return render(request, 'contact.html', {'form': form, 'home': True})