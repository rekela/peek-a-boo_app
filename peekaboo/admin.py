from django.contrib import admin
from .models import (Child, Team, Presence)

# Register your models here.
admin.site.register(Child)
admin.site.register(Team)
admin.site.register(Presence)