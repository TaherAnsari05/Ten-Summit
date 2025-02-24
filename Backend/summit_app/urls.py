from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', home, name='home'),
    path('schedule/', schedule_view, name='schedule_view'),
    path('speaker_details/<int:pk>/', speaker_details, name='speaker_details'),
    path('add_comment/', add_comment, name='add_comment'),
    path('view_comment/',view_comment , name='view_comment'),
    path('careers/', careers_home, name='careers_home'),
    path('list/', careers_list, name='careers_list'),
    path('<int:job_id>/', job_detail, name='job_detail'),
    path('agenda/', agenda_view, name='agenda'),
    path('contact/', contact_view, name='contact'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)