from django.urls import path
from .views import TaskView

urlpatterns = [
    path('todo/', TaskView.as_view()),
    path('todo/<int:pk>/', TaskView.as_view()),
]
