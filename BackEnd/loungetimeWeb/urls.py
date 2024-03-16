from django.contrib import admin
from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.accueil, name='accueil'),
    path('musiciens', views.musiciens, name='musiciens'),
    path('mrs-robinson-band', views.robinson, name='robinson'),
    path('photos', views.photos, name='photos'),
    path('agenda', views.agenda, name='agenda'),
    path('contact', views.contact, name='contact')
]