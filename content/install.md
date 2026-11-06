---
title: 'Instalación'
description: 'Información importante antes de instalar CambonOS.'
---

El instalador disponible actualmente en la ISO está basado en shell. Ofrece dos configuraciones de escritorio para CambonOS desarrolladas por [Cambon18](https://github.com/Cambon18): [XFCE](https://github.com/Cambon18/xfce), recomendada por el instalador actual, y [Qtile](https://github.com/Cambon18/qtile). Las opciones y el flujo pueden cambiar a medida que evolucione el proyecto.

## Antes de empezar

- Haz una copia de seguridad de tus archivos importantes.
- Comprueba que la ISO y el equipo corresponden a la arquitectura x86_64.
- Conecta el equipo a la alimentación y asegúrate de contar con tiempo suficiente.

## Modos de instalación

El instalador permite instalar en un disco seleccionado o usar espacio libre. **La instalación en disco limpio borra el contenido del disco elegido.** Revisa cuidadosamente la selección antes de confirmar.

La opción de espacio libre solo funciona cuando el hueco libre está al final del disco. Si no está al final, el instalador no puede usarlo correctamente porque toma el último espacio libre detectado y particiona ahí. La opción requiere un sistema con arranque UEFI. Si no estás seguro de cuál elegir, detén la instalación y consulta antes de modificar las particiones.

## Entorno de escritorio

Las configuraciones de escritorio XFCE y Qtile para CambonOS son desarrolladas por Cambon18. El instalador actual recomienda XFCE; Qtile también está disponible. Estas opciones son configuraciones de escritorio, no ediciones independientes de la distribución.