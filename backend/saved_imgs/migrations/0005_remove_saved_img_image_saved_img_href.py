# Generated by Django 4.1.5 on 2023-02-02 16:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('saved_imgs', '0004_saved_img_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='saved_img',
            name='image',
        ),
        migrations.AddField(
            model_name='saved_img',
            name='href',
            field=models.URLField(blank=True, max_length=255),
        ),
    ]
