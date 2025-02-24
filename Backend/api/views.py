from .serializers import *
from rest_framework.generics import ListAPIView,RetrieveAPIView
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

class ScheduleView(APIView):
    def get(self,request):
        schedules = Schedule.objects.all().order_by('day', 'start_time')
        grouped_schedules = {}
    
        for schedule in schedules:
            if schedule.day not in grouped_schedules:
                grouped_schedules[schedule.day] = []
            grouped_schedules[schedule.day].append(schedule)
    
        serialized_data = {}
        for day, schedule_list in grouped_schedules.items():
            serializer = scheduleSerializer(schedule_list, many=True)
            serialized_data[day.strftime("%Y-%m-%d")] = serializer.data
        return Response(serialized_data, status=status.HTTP_200_OK)
            
class SpeakerView(APIView):
    def get(self,request,pk=None):
        if pk is not None:
            speaker = get_object_or_404(Speaker, pk = pk)
            serializer = SpeakerSerializer(speaker)
            return Response(serializer.data)
        else:
            speakers = Speaker.objects.all()
            serializer = SpeakerSerializer(speakers, many=True)
            return Response(serializer.data)
        
class CommentView(APIView):
    def get(self,request):
        comment = Comment.objects.all()
        serializer = CommentSerializer(comment, many=True)
        return Response(serializer.data)
