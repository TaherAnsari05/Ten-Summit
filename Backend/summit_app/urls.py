from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.schedule_view),
    path('speaker/',views.speaker,name='sk'),
    path('result/<int:id>',views.result,name='result'),
]