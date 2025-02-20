# Generated by Django 5.1.6 on 2025-02-20 15:32

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('summit_app', '0002_comment_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='JobApplication',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=15)),
                ('resume', models.FileField(upload_to='resumes/')),
                ('linkedin_url', models.CharField(max_length=50)),
                ('cover_letter', models.FileField(blank=True, null=True, upload_to='cover_letters/')),
                ('portfolio', models.FileField(blank=True, null=True, upload_to='portfolios/')),
                ('personal_note', models.TextField(blank=True, null=True)),
                ('submitted_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('role', models.CharField(max_length=255)),
                ('location', models.CharField(max_length=255)),
                ('seniority', models.CharField(blank=True, max_length=255, null=True)),
                ('job_type', models.CharField(max_length=255)),
                ('link', models.URLField(blank=True, null=True)),
                ('about_the_position', models.TextField(max_length=1000)),
                ('responsibilities', models.TextField(max_length=1000)),
                ('requirements', models.TextField(max_length=1000)),
                ('nice_to_have', models.TextField(max_length=1000)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='jobs', to='summit_app.category')),
            ],
        ),
    ]
