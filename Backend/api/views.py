from .serializers import *
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import IsAuthenticated,AllowAny
from allauth.socialaccount.models import SocialAccount
from rest_framework_simplejwt.tokens import RefreshToken
from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.utils.html import strip_tags
from django.template.loader import render_to_string

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
    def get(self, request, pk=None):
        if pk:
            speaker = get_object_or_404(Speaker, pk=pk)
            serializer = SpeakerSerializer(speaker)
        else:
            speakers = Speaker.objects.all()
            serializer = SpeakerSerializer(speakers, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class CommentView(APIView):
    def get(self, request):
        comment = Comment.objects.all()
        serializer = CommentSerializer(comment, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)  # ✅ Added status

class AgendaView(APIView):
    def get(self,request):
        agenda = Agenda.objects.all()
        serializers = AgendaSerializer(agenda, many=True)
        return Response(serializers.data)
    
class JobView(APIView):
    def get(self,request):
        job = Job.objects.all()
        serializer = jobSerializer(job, many=True)
        return Response(serializer.data)

class JobApplicationView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [IsAuthenticated]
    def post(self,request):
        try:    
            existingApplication = JobApplication.objects.get(user = request.user)
            if existingApplication.exist():
                return Response({'message':'you have already submitted your application'}, status=status.HTTP_400_BAD_REQUEST)
        except:
            serializer = JobApplicationSerializer(data = request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=201)
            return Response(serializer.errors, status=400)

class JobApplicationView(APIView):
    parser_classes = (MultiPartParser, FormParser)  # For handling file uploads
    permission_classes = [IsAuthenticated]  # Ensure the user is authenticated

    def post(self, request):
        # Check if the user has already submitted an application
        try:
            existing_application = JobApplication.objects.get(user=request.user)
            return Response({'message': 'You have already submitted your application.'}, status=status.HTTP_400_BAD_REQUEST)
        except JobApplication.DoesNotExist:
            # If no application exists for the user, proceed with the creation
            serializer = JobApplicationSerializer(data=request.data, context={'request': request})
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)