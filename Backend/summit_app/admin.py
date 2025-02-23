from django.contrib import admin
from .models import *

# Customizing the admin panel
class ScheduleAdmin(admin.ModelAdmin):
    list_display = ('day', 'start_time', 'end_time', 'plan_detail')
    list_filter = ('day',)

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)

class JobAdmin(admin.ModelAdmin):
    list_display = ('role', 'category', 'location', 'job_type')
    list_filter = ('category', 'seniority', 'job_type')
    search_fields = ("role", "location")

# Register your models here.
admin.site.register(Schedule, ScheduleAdmin)
admin.site.register(Speaker)
admin.site.register(Comment)
admin.site.register(Category)
admin.site.register(Job)
admin.site.register(JobApplication)
admin.site.register(Agenda)