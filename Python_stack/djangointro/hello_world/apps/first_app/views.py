# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

def index(request):
    # response = "Hello, I am your request"
    # return HttpResponse(response)
    return render (request, "first_app/index.html")
# Create your views here.
