from django.contrib import admin
from .models import *

class ScheduleAdmin(admin.ModelAdmin):
    list_display = ('day', 'start_time', 'end_time', 'plan_detail')
    list_filter = ('day',)
admin.site.register(Schedule, ScheduleAdmin)
admin.site.register(Speaker)
admin.site.register(Comment)


from .models import Category, Job

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ('role', 'category', 'location', 'seniority', 'job_type', 'link','about_the_position','responsibilities','requirements','nice_to_have')
    list_filter = ('category', 'seniority', 'job_type')
    search_fields = ("role", "location")
