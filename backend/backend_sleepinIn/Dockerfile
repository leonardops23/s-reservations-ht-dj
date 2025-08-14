FROM python:3.14.0rc1-slim

WORKDIR /usr/src/backend_sleepinIn

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN pip install --upgrade pip
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

