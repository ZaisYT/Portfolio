---
title: "BUG REPORT: ZB-5"
date: "31/01/2025"
---

**Descripcion:**  El popup de ayuda es inconsistente al resto de popups.

**Estado:** Solucionado (v.2.0-beta-2)

**Implementacion:** Tras una revision, el popup de ayuda tenia un espacio extra sin nada haciendo que el contenido hiciera overflow y a la vez, arruinaba la consistencia entre popups, por lo que hemos adaptado su diseño para que use el clasico diseño de cualquier popup.
