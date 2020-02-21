from django.contrib.auth.models import User
from django.db.models import Model, ForeignKey, CharField, ManyToManyField, SmallIntegerField, \
    IntegerField, DateField, TimeField, BooleanField, DateTimeField 

from globals.models import Member


class ChitBatch(Model):
    name = CharField(max_length=25, unique=True, blank=False)
    members = ManyToManyField(Member)
    no_of_members = SmallIntegerField(blank=False, default=0)
    principal = IntegerField(blank=False)
    commission_percent = IntegerField(default=5, blank=False)
    balance = IntegerField(blank=False, default=0)
    shortage = IntegerField(blank=False, default=0)
    period = SmallIntegerField(blank=False)
    dues = SmallIntegerField(blank=False)
    start_date = DateField(blank=False)
    start_time = TimeField(blank=False)
    is_active = BooleanField(default=True)
    end_date = TimeField(blank=True, null=True)
    created_on = DateTimeField(auto_now_add=True)

    @property
    def commission(self):
        return (self.principal * self.commission_percent)/100

    @property
    def auction_amt(self):
        return (self.principal - self.get_commission()) + self.balance
    
    @property
    def last_auction_date(self):
        if self.next_auction != self.start_date:
            return self.next_auction-relativedelta(months=+1)

    def max_shortage(self, bid_amount):
        possible_balance = self.balance + bid_amount - self.get_commission()
        return (self.principal - bid_amount) - (possible_balance)
  
    def update_balance(self, bid_amt):
        self.balance = self.balance + bid_amt - self.get_commission()

    def update_payment_record(self):
        if self.next_auction:
            if not self.is_multiple_auction:
                paid = PaymentRecordEnum.UN_PAID
            else:
                paid = PaymentRecordEnum.CHIT_BENIFIT
            prs = []
            for member in self.members.all():
                prs.append(PaymentRecord(
                    chitbatch=self, member=member,
                    bid_date=self.next_auction,
                    paid=paid,
                ))
            PaymentRecord.objects.bulk_create(prs)

    def is_another_auction_possible(self, bid_amount):
        latest_balance = self.balance + (bid_amount - self.get_commission())
        if (latest_balance - bid_amount) > (0.06*self.principal):
            return True
        return False


class PaymentRecordEnum(object):
    UNKNOWN = -1
    UN_PAID = 0
    PAID = 1
    CHIT_BENIFIT = 2

    CHOICES = (
        (UNKNOWN, 'UNKNOWN'),
        (PAID, 'PAID'),
        (UN_PAID, 'UN_PAID'),
        (CHIT_BENIFIT, 'CHIT_BENIFIT')
    )


class PaymentRecord(Model):
    chitbatch = ForeignKey(ChitBatch, related_name='payments', on_delete="CASCADE")
    member = ForeignKey(Member, related_name='payments', on_delete="CASCADE")
    paid = IntegerField(blank=True, null=True,
        default=PaymentRecordEnum.PAID, choices=PaymentRecordEnum.CHOICES)
    bid_date = DateField(blank=False)


class BidRecord(Model):
    chitbatch = ForeignKey(ChitBatch, related_name='records', on_delete="CASCADE")
    bidder = ForeignKey(Member, related_name='bids', on_delete="CASCADE")
    bid_date = DateField(blank=False)
    bid_amount = IntegerField(blank=False)
    balance = IntegerField(blank=False)
    bid_count = SmallIntegerField(default=1)
    payment_record = ManyToManyField(PaymentRecord)
    shortage = IntegerField(default=0)

    class Meta:
        get_latest_by = "bid_date"
