# Generated by Django 4.1.5 on 2023-02-02 16:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('external_imgs', '0002_external_img_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='external_img',
            name='image',
        ),
        migrations.AddField(
            model_name='external_img',
            name='href',
            field=models.URLField(blank=True, max_length=255),
        ),
    ]
