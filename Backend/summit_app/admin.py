from django.contrib import admin
from .models import Schedule,Speakers,Result

class ScheduleAdmin(admin.ModelAdmin):
    list_display = ('day', 'start_time', 'end_time', 'plan_detail')
    list_filter = ('day',)
admin.site.register(Schedule, ScheduleAdmin)
admin.site.register(Speakers)
admin.site.register(Result)