# Generated by Django 4.1.5 on 2023-01-31 17:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('external_imgs', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='external_img',
            name='image',
            field=models.ImageField(null=True, upload_to='saved_imgs'),
        ),
    ]
