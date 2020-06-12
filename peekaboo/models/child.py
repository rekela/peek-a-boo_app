from django.db import models
from django.core.validators import MinLengthValidator, MaxLengthValidator
from .team import Team

from django.contrib.auth import get_user_model
User = get_user_model()


DIET_LIST = (
    ("STANDARD", "standardowa"),
    ("GLUTEN_FREE", "bezglutenowa"),
    ("LACTOSE_FREE", "bez laktozy"),
    ("CUSTOM", "niestandardowa")
)


class Child(models.Model):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    date_of_birth = models.DateField()
    pesel = models.IntegerField(null=True, blank=True) # validators=[MinLengthValidator(11), MaxLengthValidator(11)])
    diet = models.CharField(max_length=50, choices=DIET_LIST, default="STANDARD")
    start_hour = models.TimeField()
    end_hour = models.TimeField()
    parent = models.ManyToManyField(User)
    team = models.ForeignKey(Team, on_delete=models.PROTECT)
    kdr = models.NullBooleanField(default=False)
    additional_info = models.TextField(null=True, blank=True)

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)