# Alivio Tinnitus 🎧

Una Aplicación Web Progresiva (PWA) minimalista y utilitaria diseñada para el enmascaramiento acústico del acúfeno (tinnitus). Construida con React y la Web Audio API, la herramienta genera frecuencias y ruidos estandarizados en tiempo real para proporcionar alivio auditivo mediante la saturación controlada de frecuencias.

🔗 **[Ver aplicación en producción](https://tinnitus-frequency.vercel.app/)**

## ⚙️ Características Técnicas

*   **Motor de Audio en Tiempo Real:** Utiliza algoritmos matemáticos a través de la Web Audio API para generar Ruido Blanco, Ruido Rosa y Ruido Rojo (Marrón), sin depender de archivos de audio pregrabados.
*   **Optimización Psicoacústica:** Implementación de búferes de memoria extendidos (20 segundos) en la generación de estática para destruir la percepción de patrones rítmicos o bucles mecánicos en el cerebro.
*   **Oscilador Tonal Preciso:** Generador de tono puro ajustable entre 8000 Hz y 17000 Hz para realizar *Notch Therapy* o emparejamiento exacto de la frecuencia del acúfeno.
*   **Temporizador de Sesión Absoluto:** Sistema de medición de tiempo basado en marcas de tiempo reales (`Date.now()`), garantizando precisión clínica incluso cuando el sistema operativo móvil entra en modo de suspensión (*throttling*).
*   **Persistencia de Estado:** Guardado automático de los niveles de volumen y configuración de frecuencias en el almacenamiento local (`localStorage`).
*   **Diseño Pragmático:** Interfaz de usuario (UI) limpia, sin distracciones visuales, enfocada en la usabilidad y el control absoluto de los parámetros.

## 🛠️ Tecnologías Utilizadas

*   **Frontend:** React.js
*   **Audio:** Web Audio API (Nativo del navegador)
*   **Estilos:** CSS-in-JS (Inline) minimalista
*   **Despliegue:** Vercel

## 🚀 Instalación y Desarrollo Local

Para auditar o modificar el código en un entorno de desarrollo local:

1. Clonar el repositorio:
   
```bash
   git clone [https://github.com/EricLuna97/AlivioTinnitus.git](https://github.com/EricLuna97/AlivioTinnitus.git)
Navegar al directorio del proyecto:

Bash
   cd AlivioTinnitus
Instalar las dependencias:

Bash
   npm install
Levantar el servidor de desarrollo:

Bash
   npm run dev 
   # o npm start, dependiendo del empaquetador utilizado
📋 Control de Calidad (QA)
Este proyecto ha sido sometido a pruebas de estrés en dispositivos físicos reales, asegurando la mitigación de falsos positivos en entornos móviles, el correcto manejo de la memoria caché del Service Worker y la estabilidad del motor de audio bajo políticas estrictas de ahorro de batería de Android/iOS.