from django.urls import path, include
from .views import *
from .views import careers_home, careers_list, job_detail
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', home),
    path('schedule/', schedule_view),
    path('speaker_details/<int:pk>/', speaker_details, name='speaker_details'),
    path('add_comment/', add_comment, name='add_comment'),
    path('view_comment/',view_comment , name='view_comment'),
    path('careers/', careers_home, name='careers_home'),
    path('list/', careers_list, name='careers_list'),
    path('<int:job_id>/', job_detail, name='job_detail'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)