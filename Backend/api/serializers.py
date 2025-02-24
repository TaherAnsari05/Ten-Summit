from summit_app.models import *
from rest_framework import serializers
from datetime import date

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
        
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ['user', 'created_at']

        def create(self,validated_data):
            request = self.context.get('request')
            validated_data['user']= request.user
            return super().create(validated_data)
        


class AgendaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agenda
        fields = '__all__'
    
    def validate_day(self,value):
        if value< date.today():
            raise serializers.ValidationError('The day cannot be in past ')
        return value
