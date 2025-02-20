from django import forms
from .models import JobApplication

class JobApplicationForm(forms.ModelForm):
    class Meta:
        model = JobApplication
        fields = [
            'first_name', 'last_name', 'email', 'phone', 'resume', 
            'linkedin_url', 'cover_letter', 'portfolio', 'personal_note'
        ]
