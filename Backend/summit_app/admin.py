from django.contrib import admin
from .models import *

class ScheduleAdmin(admin.ModelAdmin):
    list_display = ('day', 'start_time', 'end_time', 'plan_detail')
    list_filter = ('day',)
admin.site.register(Schedule, ScheduleAdmin)
admin.site.register(Speaker)
admin.site.register(Comment)