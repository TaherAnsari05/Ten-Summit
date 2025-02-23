from summit_app.models import *
from rest_framework import serializers

class scheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = '__all__'

class SpeakerSerializer(serializers.ModelSerializer):
    speaker_image = serializers.ImageField()  
    speaker_Linkedin_account = serializers.URLField(allow_blank=True, required=False)
    speaker_Twitter_account = serializers.URLField(allow_blank=True, required=False)
    class Meta:
        model = Speaker
        fields = ['id', 'speaker_image', 'speaker_name', 'speaker_position', 
                  'speaker_description', 'speaker_Linkedin_account', 'speaker_Twitter_account']        