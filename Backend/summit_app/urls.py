from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home),
    path('schedule/', views.schedule_view),
    path('add_comment/', views.add_comment, name='add_comment'),
    path('display_cmt/',views.display_cmt , name='display_cmt'),
    path('speaker/',views.speaker,name='sk'),
    path('result/<int:id>',views.result,name='result'),
]