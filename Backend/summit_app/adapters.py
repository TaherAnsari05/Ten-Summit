# your_app/adapters.py

from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
from django.urls import reverse

class CustomSocialAccountAdapter(DefaultSocialAccountAdapter):
    def get_connect_redirect_url(self, request, socialaccount):
        return reverse('api:get_token')