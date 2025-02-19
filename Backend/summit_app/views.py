from django.shortcuts import render,redirect, HttpResponse
from .models import *
from django.db.models import DateField
from django.contrib.auth.decorators import login_required

def home(request):
    speaker = Speaker.objects.all()
    return render(request, 'index.html', context={'context':speaker})

def speaker_details(request,pk):
    speaker = get_object_or_404(Speaker, pk=pk)
    return render(request, 'result.html' , context={'context':speaker})

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
        f=CommentForm(request.POST)
        f.save()
        return redirect('/add_comment')
    else:
        return render(request,'comments.html',context={'add_cmt': 'add_cmt', 'form':CmtForm})
    
def display_cmt(request):
    cmt=Comment.objects.all()
    context={'comment':cmt}
    return render(request,'comments.html',context={'show_cmt': 'show_cmt'})

def speaker(request):
    sk=Speakers.objects.all()
    return render(request,'index.html',{'sk':sk})

def result(request,id):
    a=Speakers.objects.get(pk=id)
    b=Result.objects.filter(speaker_id=a)
    return render(request,'result.html',{'b':b})