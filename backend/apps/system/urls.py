from django.conf.urls import include, url
from .views import SystemObtainAuthToken


urlpatterns = [
    # Examples:
    url(r'^system-token/$', SystemObtainAuthToken.as_view(), name='system_token'),

]
