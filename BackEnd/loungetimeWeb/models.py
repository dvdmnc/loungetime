from django.db import models
# Create your models here.

PAGE_CHOICE = [('ACCUEIL','ACCUEIL'),('LES MUSICIENS','LES MUSICIENS'),('MRS ROBINSON BAND','MRS ROBINSON BAND'),('PHOTOS','PHOTOS'),('AGENDA','AGENDA'),('VIDEOS COMPLEMENTAIRES','VIDEOS COMPLEMENTAIRES'),('CONTACT','CONTACT')]

class Videos(models.Model):
    IdVideo = models.CharField(max_length=128)
    titre = models.CharField(max_length=64)
    page = models.CharField(max_length = 64, choices=PAGE_CHOICE, default='ACCUEIL')

    def __str__(self):
        return f"Vidéo : {self.titre}, sera affichée sur la page {self.page}"

class Images(models.Model):
    url = models.ImageField(upload_to='images/')
    titre = models.CharField(max_length=64)
    page = models.CharField(max_length = 64,choices=PAGE_CHOICE, default='ACCUEIL')
    texte = models.CharField(max_length = 1000, default='Tapez votre texte ici')

    def __str__(self):
        return f"Image : {self.titre}, sera affichée sur la page {self.page}"

class Agenda(models.Model):
    MONTH_CHOICES = [('Janvier','Janvier'),('Février','Février'),('Mars','Mars'),('Avril','Avril'),('Mai','Mai'),('Juin','Juin'),('Juillet','Juillet'),('Aout','Aout'),('Septembre','Septembre'),('Octobre','Octobre'),('Novembre','Novembre'),('Décembre','Décembre')]
    DAY_CHOICES = [(i,i) for i in range(1,32)]
    YEAR_CHOICES = [(j,j) for j in range(2016,2051)]
    HOUR_CHOICES=[(k,k) for k in range(1,24)]

    jour = models.IntegerField(default=1, choices=DAY_CHOICES)
    mois = models.CharField(choices=MONTH_CHOICES, default='Janvier', max_length=10)
    année = models.IntegerField(default=1, choices=YEAR_CHOICES)
    heure = models.IntegerField(default=1, choices=HOUR_CHOICES)
    titre = models.CharField(max_length=256)

    def __str__(self):
        return f"Le {self.jour} {self.mois} {self.année} à {self.heure}h : {self.titre}"