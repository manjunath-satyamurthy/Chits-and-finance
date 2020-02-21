from django.urls import path
from .views import login, is_authenticated

urlpatterns = [
    path('login/', login),
    path('is_authenticated/', is_authenticated)
]

