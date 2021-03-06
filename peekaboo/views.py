from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from peekaboo.serializers import UserSerializer, GroupSerializer, ChildSerializer
from peekaboo.models import Child
from django.http import Http404


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class UsersList(APIView):
    def get(self, request, format=None):
        serializer = UserSerializer(User.objects.all(), many=True)
        return Response(serializer.data)


class ChildrenList(APIView):

    def get(self, request, format=None):
        children = Child.objects.all()
        serializer = ChildSerializer(children, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ChildSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=Http404)


class ChildView(APIView):
    def get_object(self, child_id):
        return Child.object.get(pk=child_id)

    def get(self, request, child_id, format=None):
        child = self.get_object(child_id)
        serializer = ChildSerializer(child)
        return Response(serializer.data)

