# Generated by Django 4.1.2 on 2022-10-08 04:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('todo', models.TextField(max_length=500)),
                ('completed', models.BooleanField(default=False)),
            ],
        ),
    ]
