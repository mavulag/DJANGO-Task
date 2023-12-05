from rest_framework.views import APIView
from .serializers import TaskSerializer
from django.http.response import JsonResponse
from .models import Task
from django.http.response import Http404
from rest_framework.response import Response 

# Create your views here.
class TaskView(APIView):
    
    def get_Task(self, pk):
        try:
            task = Task.objects.get(taskId=pk)
            return task
        except Task.DoesNotExist():
            raise JsonResponse("Task doesnot exist", safe=False)

    def get(self, request, pk=None):
        if pk:
            data = self.get_Task(pk)
            serializer = TaskSerializer(data)
        else:
            data = Task.objects.all()
            serializer = TaskSerializer(data, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        data = request.data
        serializer = TaskSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Task created successfully', safe=False)
        return JsonResponse('Falled to add Task', safe=False)
    
    def put(self, request, pk=None):
        task_to_update = Task.objects.get(taskId=pk)
        serializer = TaskSerializer(instance=task_to_update, data=request.dta, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Task updated successfully", safe=False)
        return JsonResponse("Failed to update!")
    
    def delete(self, request, pk=None):
        task_to_delete = Task.objects.get(taskId=pk)
        task_to_delete.delete()
        return JsonResponse("Task deleted!")