from django.urls import path
from .views import *

urlpatterns = [
    path('schedule/', ScheduleView.as_view(), name='schedule_view'),
    path('speakers/', SpeakerView.as_view(), name='speaker_view'),
    path('speakers/<int:pk>/', SpeakerView.as_view(), name='speaker_view'),
]