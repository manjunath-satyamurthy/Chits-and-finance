from django.contrib import admin

from django.contrib import admin
from .models import ChitBatch, PaymentRecord, BidRecord

admin.site.register(ChitBatch)
admin.site.register(PaymentRecord)
admin.site.register(BidRecord)