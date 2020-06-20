from django.contrib.auth.models import User, Group
from peekaboo.models import Child
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['id', 'name']


class ChildSerializer(serializers.ModelSerializer):
    class Meta:
        model = Child
        fields = ['id', 'first_name', 'last_name', 'team_name', 'date_of_birth', 'pesel', 'diet', 'start_hour',
                  'end_hour', 'parent', 'kdr', 'additional_info']
