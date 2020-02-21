import json
from django.shortcuts import render, redirect
from django.template import loader, RequestContext
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login as dj_login
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required

from rest_framework import serializers, viewsets

from globals.models import Member


@csrf_exempt
def login(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username, password = data['username'], data['password']
        user = authenticate(username=username, password=password)

        if user:
            dj_login(request, user)
            return HttpResponse(status=200)
        return HttpResponse(status=401)
        
@login_required
def is_authenticated(request):
    if request.method == "GET":
        return JsonResponse(data={"username": request.user.username}, status=200)


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['firstname', 'lastname', 'address', 'phone_number', 'photo']

class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer


