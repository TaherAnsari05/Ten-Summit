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
        widgets = {'comment':forms.Textarea(attrs={'rows':4, 'placeholder':'Write your comment here'})}

class Category(models.Model):
    name = models.CharField(max_length=255)
    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

class Job(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='jobs')
    role = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    seniority = models.CharField(max_length=255, blank=True, null=True)
    job_type = models.CharField(max_length=255)
    link = models.URLField(blank=True, null=True)
    about_the_position = models.TextField(max_length=1000)
    responsibilities = models.TextField(max_length=1000)
    requirements = models.TextField(max_length=1000)
    nice_to_have = models.TextField(max_length=1000)

    def __str__(self):
        return self.role

class JobApplication(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    resume = models.FileField(upload_to='resumes/')
    linkedin_url = models.CharField(max_length=50)
    cover_letter = models.FileField(upload_to='cover_letters/', blank=True, null=True)
    portfolio = models.FileField(upload_to='portfolios/', blank=True, null=True)
    personal_note = models.TextField(blank=True, null=True)
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.email}"