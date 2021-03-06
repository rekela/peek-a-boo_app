# Generated by Django 2.2.13 on 2020-06-12 16:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32)),
            ],
        ),
        migrations.CreateModel(
            name='Child',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=64)),
                ('last_name', models.CharField(max_length=64)),
                ('date_of_birth', models.DateField()),
                ('pesel', models.IntegerField(blank=True, null=True)),
                ('diet', models.CharField(choices=[('STANDARD', 'standardowa'), ('GLUTEN_FREE', 'bezglutenowa'), ('LACTOSE_FREE', 'bez laktozy'), ('CUSTOM', 'niestandardowa')], default='STANDARD', max_length=50)),
                ('start_hour', models.TimeField()),
                ('end_hour', models.TimeField()),
                ('kdr', models.NullBooleanField(default=False)),
                ('additional_info', models.TextField()),
                ('parent', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
                ('team', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='peekaboo.Team')),
            ],
        ),
    ]
