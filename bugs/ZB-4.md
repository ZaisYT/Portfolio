---
title: "BUG REPORT: ZB-4"
date: "31/01/2025"
---

**Descripcion:** La pagina about muestra generos musicales y artistas desactualizados.

**Estado:** Solucionado (v.2.0-beta-2)

**Implementacion:** Este bug es debido a que los generos y artistas se encontraban hardcoded dentro de la pagina, para solucionarlo, hemos implementado una API Local la cual devuelve los datos de generos y artistas mas escuchados recientemente en spotify por zais.
