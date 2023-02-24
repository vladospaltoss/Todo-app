from django.shortcuts import render
from .models import ToDoList
from django.http import HttpResponseRedirect
# Create your views here.

def todoView(request):
    all_todo_items = ToDoList.objects.all()
    return render(request, 'main.html', {'all_items' : all_todo_items})


def addtodoview(request):
    item = request.POST['content']
    new_item = ToDoList(content = item)
    new_item.save()
    return HttpResponseRedirect('/todo/')