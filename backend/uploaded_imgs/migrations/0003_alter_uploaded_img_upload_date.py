# Generated by Django 4.1.5 on 2023-02-03 19:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('uploaded_imgs', '0002_uploaded_img_image_alter_uploaded_img_img_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='uploaded_img',
            name='upload_date',
            field=models.DateField(blank=True),
        ),
    ]