# -*- coding: utf-8 -*-
# from __future__ import unicode_literals 

from django.shortcuts import render, HttpResponse

def index(request):
    response = "Hello World"
    return HttpResponse(response)
# Create your views here.
