main/urls.py

  from django.conf.urls import url, include # Notice we added include
  from django.contrib import admin
  urlpatterns = [
      url(r'^', include('apps.first_app.urls')) # And now we use the include function to pull in our first_app.urls...
  ]
  