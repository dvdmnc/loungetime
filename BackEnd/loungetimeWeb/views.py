from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Videos,Images, Agenda
from django.forms.models import model_to_dict
from rest_framework.response import Response

# Create your views here.
@api_view()
def accueil(request):
    vids = [model_to_dict(v) for v in Videos.objects.filter(page='ACCUEIL')]
    imgs = [model_to_dict(i) for i in Images.objects.filter(page='ACCUEIL')]
    for dict in imgs:
        dict['url'] = request.build_absolute_uri(dict['url'].url)
    return Response({"vids":vids, "imgs":imgs})

@api_view()
def musiciens(request):
    imgs = [model_to_dict(i) for i in Images.objects.filter(page='LES MUSICIENS')]
    for dict in imgs:
        dict['url'] = request.build_absolute_uri(dict['url'].url)
    return Response(imgs)

@api_view()
def robinson(request):
    vids = [model_to_dict(v) for v in Videos.objects.filter(page='MRS ROBINSON BAND')]
    imgs = [model_to_dict(i) for i in Images.objects.filter(page='MRS ROBINSON BAND')]
    for dict in imgs:
        dict['url'] = request.build_absolute_uri(dict['url'].url)
    return Response({"vids":vids, "imgs":imgs})

@api_view()
def photos(request):
    imgs = [model_to_dict(i) for i in Images.objects.filter(page='PHOTOS')]
    for dict in imgs:
        dict['url'] = request.build_absolute_uri(dict['url'].url)
    return Response(imgs)

@api_view()
def agenda(request):
    dates = [model_to_dict(i) for i in Agenda.objects.all().order_by('-année')]
    group_by_years = {}
    for dict in dates:
        try:
            group_by_years[dict['année']].append(dict)
        except KeyError:
            group_by_years[dict['année']] = [dict]
    return Response(group_by_years)

@api_view()
def contact(request):
    imgs = [model_to_dict(i) for i in Images.objects.filter(page='CONTACT')]
    for dict in imgs:
        dict['url'] = request.build_absolute_uri(dict['url'].url)
    return Response(imgs)