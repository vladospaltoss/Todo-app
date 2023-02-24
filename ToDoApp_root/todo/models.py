from django.db import models

# Create your models here.
class ToDoList(models.Model):
    content = models.TextField()
