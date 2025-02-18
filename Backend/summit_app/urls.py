from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.schedule_view),
    path('add_comment', views.add_comment, name='add_comment'),
    path('display_cmt',views.display_cmt , name='display_cmt'),
]