from django.db import models

# Create your models here.
class Task(models.Model):
    taskId = models.AutoField(primary_key=True)
    Title = models.CharField(max_length=250)
    Description = models.TextField()