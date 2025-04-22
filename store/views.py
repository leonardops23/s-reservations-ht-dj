from django.shortcuts import render

def home(request):
    hello = "Hello, World!"
    context = {
        'hello': hello,
    }
    return render(request, 'home.html', context)
