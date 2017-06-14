
from django.shortcuts import render
def index(request):
    return render(request, "first_app/index.html")

def project(request):
    return render(request, "first_app/project.html")


def about(request):
    return render(request, "first_app/about.html")

def test(request):
    return render(request, "first_app/testimonials.html")

