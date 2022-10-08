from django.http import HttpResponse,HttpResponseRedirect,JsonResponse
from urllib import response
from django.shortcuts import render
from .serializers import TodoSerializer
from .models import Todo
from rest_framework.serializers import Serializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.


def hello(request):
    print("helo world")
    return HttpResponse("hello world")

def home(request):
    return HttpResponse("hai ")

@api_view(["GET"])
def TodoList(request):
    todoList = Todo.objects.all().order_by('-id')
    serializer = TodoSerializer(todoList, many=True)
    return Response(serializer.data)

@api_view(["POST"])
def createTodo(request):
    serializer =TodoSerializer(data=request.data)
    print("Karthik insid create todo")
    if serializer.is_valid():
        print("karthik inside isvalid")
        serializer.save()
    return Response(serializer.data)

@api_view(["PUT"])
def completeTodo(request,pk):
    todo=Todo.objects.get(id=pk)
    todo.completed=True
    todo.save()
    return Response({'ok':'True'})

@api_view(["POST"])
def updateTodo(request,pk):
    todo=Todo.objects.get(id=pk)
    serializer = TodoSerializer(instance=todo, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(["DELETE"])
def deleteTodo(request,pk):
    todo = Todo.objects.get(id=pk)
    todo.delete()

    return Response('Item succsesfully delete!')

@api_view(["GET"])
def completedTodoList(request):
    todoList=Todo.objects.filter(completed=True).order_by('-id')
    serializer = TodoSerializer(todoList, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def inProgessTodoList(request):
    todoList=Todo.objects.filter(completed=False).order_by('-id')
    serializer = TodoSerializer(todoList, many=True)
    return Response(serializer.data)
