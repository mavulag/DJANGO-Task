from django.contrib import admin

# Register your models here.
from .models import Task

models_list = [Task]
admin.site.register(models_list)