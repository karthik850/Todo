# Generated by Django 4.1.2 on 2022-10-08 05:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('TodoApp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todo',
            name='title',
        ),
    ]
