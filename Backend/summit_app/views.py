from django.shortcuts import render,redirect
from .models import *
from django.db.models import DateField

def schedule_view(request):
    schedules = Schedule.objects.all().order_by('day', 'start_time')
    grouped_schedules = {}
    
    for schedule in schedules:
        if schedule.day not in grouped_schedules:
            grouped_schedules[schedule.day] = []
        grouped_schedules[schedule.day].append(schedule)
    
    return render(request, 'schedule.html', {'grouped_schedules': grouped_schedules})

# --------------------Comment views---------------
def add_comment(request):
    if request.method == 'POST':
        f=CmtForm(request.POST)
        f.save()
        return redirect('/add_comment')
    else:
        f=CmtForm
        context={'form':f}
        return render(request,'add_comment.html',context)
    
def display_cmt(request):
    cmt=Comment.objects.all()
    context={'comment':cmt}
    return render(request,'display_cmt.html',context)

def speaker(request):
    sk=Speakers.objects.all()
    return render(request,'index.html',{'sk':sk})

def result(request,id):
    a=Speakers.objects.get(pk=id)
    b=Result.objects.filter(speaker_id=a)
    return render(request,'result.html',{'b':b})