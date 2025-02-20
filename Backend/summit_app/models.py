from django.db import models
from django import forms
from django.contrib.auth.models import User
class Schedule(models.Model):
    day = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    plan_detail = models.TextField()

    def __str__(self):
        return f"{self.day.strftime('%A, %B %d')} - {self.start_time.strftime('%H:%M')} to {self.end_time.strftime('%H:%M')}"
    
    class Meta:
        ordering = ['day', 'start_time']  # Sort by date and then by start time

class Speaker(models.Model):
    logo = models.CharField(max_length=500, null=True)
    speaker_image = models.ImageField(upload_to='speakers/')
    speaker_name = models.CharField(max_length=100)
    speaker_position = models.CharField(max_length=100)
    speaker_description = models.TextField()
    speaker_Linkedin_account = models.URLField(null=True, blank=True)
    speaker_Twitter_account = models.URLField(null=True, blank=True)

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE , default=1)
    comment=models.TextField()
    created_at = models.DateTimeField(auto_now_add=True, null=True)

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['comment']
        widgets = {
            'comment':forms.Textarea(attrs={'rows':4, 'placeholder':'Write your comment here'})
}