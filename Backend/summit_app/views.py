from django.shortcuts import render,redirect, HttpResponse,get_object_or_404
from .models import *
from django.db.models import DateField
from django.contrib.auth.decorators import login_required
from .forms import JobApplicationForm


def home(request):
    speaker = Speaker.objects.all()
    return render(request, 'speakers.html', context={'speaker':speaker})

def speaker_details(request,pk):
    speaker_details = get_object_or_404(Speaker, pk=pk)
    return render(request, 'speakers.html' , context={'speaker_details':speaker_details})

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
            comment.user = request.user  # Assign logged-in user
            comment.save()
            return redirect('/display_cmt')  # Redirect to home instead of 'add_comment'
    else:
        form = CommentForm()

    return render(request, 'comments.html', {'add_cmt': True, 'form': form})
    
def view_comment(request):
    cmt=Comment.objects.all()
    context={'comment':cmt, 'show_cmt': True}
    return render(request,'comments.html',context)


# ----------career section-----------
def careers_home(request):
    return render(request, 'careers_home.html')

def careers_list(request):
    categories = Category.objects.prefetch_related('jobs').all()
    return render(request, 'careers_list.html', {'categories': categories})

def job_detail(request, job_id):
    job = get_object_or_404(Job, id=job_id)
    form = JobApplicationForm()
    message = None  # Initialize message as None

    if request.method == "POST":
        form = JobApplicationForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            request.session['message'] = "Your application has been submitted successfully!"
            return redirect(request.path)  # Reload the same page to clear the form

    # Get the message from the session and then clear it
    message = request.session.pop('message', None)
    
    return render(request, 'job_detail.html', {'job': job, 'form': form, 'message': message})

