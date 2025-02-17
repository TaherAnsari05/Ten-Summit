from django.db import models
from django import forms

class Schedule(models.Model):
    day = models.DateField()  # The date of the event
    start_time = models.TimeField()  # Start time
    end_time = models.TimeField()  # End time
    plan_detail = models.TextField()  # Description of the event

    def __str__(self):
        return f"{self.day.strftime('%A, %B %d')} - {self.start_time.strftime('%H:%M')} to {self.end_time.strftime('%H:%M')}"
    
    class Meta:
        ordering = ['day', 'start_time']  # Sort by date and then by start time

class Speakers(models.Model):
    name=models.CharField(max_length=100,null=True)
    designation=models.CharField(max_length=100,null=True)
    image=models.ImageField(upload_to='images',null=True,blank=True)

class Result(models.Model):
    speaker=models.ForeignKey(Speakers,on_delete=models.CASCADE,null=True)
    name=models.CharField(max_length=100,null=True)
    designation=models.CharField(max_length=100,null=True)
    image=models.ImageField(upload_to='images',blank=True,null=True)
    description=models.CharField(max_length=100,null=True)

#-----------------Comment Model------------------------
class Comment(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment=models.TextField(max_length=500)

    class Meta:
        db_table = 'cmt'

    def __str__(self):
        return self.name

class CmtForm(forms.ModelForm):
    class Meta:
        model=Comment
        fields='__all__'
