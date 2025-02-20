from django.shortcuts import render,redirect, HttpResponse,get_object_or_404
from .models import *
from django.db.models import DateField
from django.contrib.auth.decorators import login_required

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



