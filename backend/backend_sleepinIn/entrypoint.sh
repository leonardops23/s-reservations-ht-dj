#!/bin/sh

# Verifica si estamos usando la base de datos de PostgreSQL
if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for PostgreSQL to start..."

    # Bucle para esperar a que la base de datos esté lista
    # -z: modo de escaneo (zero-I/O), solo para comprobar el puerto
    # $SQL_HOST: host de la base de datos (por ejemplo, 'db')
    # $SQL_PORT: puerto de la base de datos (por ejemplo, '5432')
    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started!"
fi

# Ejecuta las migraciones de Django
python manage.py makemigrations
python manage.py migrate

# Pasa el control al comando principal del contenedor (el CMD)
exec "$@"
