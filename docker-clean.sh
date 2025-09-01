#!/bin/bash
# Script para limpiar Docker en Linux

echo "🛑 Deteniendo todos los contenedores..."
docker stop $(docker ps -q) 2>/dev/null

echo "🗑️ Eliminando todos los contenedores..."
docker rm -f $(docker ps -aq) 2>/dev/null

echo "🧹 Eliminando imágenes sin usar..."
docker rmi -f $(docker images -q) 2>/dev/null

echo "🔗 Eliminando redes no utilizadas..."
docker network prune -f

echo "💾 Eliminando volúmenes no utilizados..."
docker volume prune -f

echo "⚡ Limpiando todo el sistema..."
docker system prune -af --volumes

echo "✅ Docker limpiado correctamente."
