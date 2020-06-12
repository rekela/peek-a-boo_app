from django.db import models
from .child import Child

# start_hour = Child.start_hour
# end_hour = Child.end_hour


class Presence(models.Model):
    child = models.ForeignKey(Child, on_delete=models.PROTECT)
    date = models.DateField()
    present = models.BooleanField(default=True)
    arrival_time = models.TimeField(null=True, blank=True)
    leave_time = models.TimeField(null=True, blank=True)
    breakfast = models.BooleanField(default=True)
    brunch = models.BooleanField(default=True)
    lunch = models.BooleanField(default=True)
    supper = models.BooleanField(default=True)

    def __str__(self):
        return "{} {}".format(self.date, self.child)

