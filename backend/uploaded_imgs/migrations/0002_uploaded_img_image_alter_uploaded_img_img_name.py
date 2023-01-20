# Generated by Django 4.1.5 on 2023-01-19 22:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('uploaded_imgs', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='uploaded_img',
            name='image',
            field=models.ImageField(null=True, upload_to='uploaded_imgs'),
        ),
        migrations.AlterField(
            model_name='uploaded_img',
            name='img_name',
            field=models.CharField(max_length=100),
        ),
    ]