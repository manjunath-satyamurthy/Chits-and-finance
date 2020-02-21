from django.db import models
from django.contrib.auth.models import User


class Member(models.Model):

    MALE = 1
    FEMALE = 2

    GENDER_CHOICES = [(MALE, "MALE"), (FEMALE, "FEMALE")]

    firstname = models.CharField(max_length=25)
    lastname = models.CharField(max_length=25)
    address = models.CharField(max_length=25)
    gender = models.IntergerField(choices=GENDER_CHOICES, default=FEMALE)
    phone_number = models.CharField(max_length=20, unique=True)
    photo = models.ImageField(blank=True)
    reference = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)

    # def add_photo(self, photo):
    #     self.photo = photo
    #     self.save()
    #     return self

    class Meta:
        unique_together = ("firstname", "lastname")

