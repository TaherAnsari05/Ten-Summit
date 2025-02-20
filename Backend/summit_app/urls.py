from django.urls import path, include
from .views import *

urlpatterns = [
    path('', home),
    path('schedule/', schedule_view),
    path('speaker_details/<int:pk>/', speaker_details, name='speaker_details'),
    path('add_comment/', add_comment, name='add_comment'),
    path('display_cmt/',display_cmt , name='display_cmt'),
]