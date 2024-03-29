# Generated by Django 5.0.3 on 2024-03-12 16:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Images',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.ImageField(upload_to='images/')),
                ('titre', models.CharField(max_length=64)),
                ('page', models.CharField(max_length=64)),
                ('texte', models.CharField(max_length=1000))
            ],
        ),
    ]
