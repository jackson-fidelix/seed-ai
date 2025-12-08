from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .llm import seed_responder

def index(request):
    return render(request, 'index.html')

@csrf_exempt
def falar(request):
    if request.method == "POST":
        msg = request.POST.get("msg", "").strip()
        if not msg:
            return JsonResponse({"erro": "vazio"})
        resposta = seed_responder(msg)
        return JsonResponse({"resposta": resposta})
    return JsonResponse({"erro": "bad request"})