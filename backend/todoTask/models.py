from django.db import models

# Create your models here.
from django.contrib.auth.models import User

class Task(models.Model):
    taskId = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    expiration_date = models.DateField()

    def __str__(self):
        return (f"{self.title}")