
from django.urls import path
from . import views

urlpatterns = [
path('',views.home,name="homepage"),
   path('hello/',views.hello,name="hello"),
   path("todolist/",views.TodoList,name="TodoList"),
   path("createTodo/",views.createTodo,name="createTodo"),
   path("completeTodo/<str:pk>/",views.completeTodo,name="completeTodo"),
   path("updateTodo/<str:pk>/",views.updateTodo,name="updateTodo"),
   path("deleteTodo/<str:pk>/",views.deleteTodo,name="deleteTodo"),
   path("completedTodoList/",views.completedTodoList,name="completedTodoList"),
   path("inProgessTodoList/",views.inProgessTodoList,name="inProgessTodoList"),
]
