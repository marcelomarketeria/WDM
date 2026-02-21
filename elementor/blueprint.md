
# Guía de Importación: WDM Template Kit para Elementor Pro

Esta guía detalla cómo recrear la aplicación de React utilizando los widgets nativos de Elementor Pro 3.34.3.

## Paso 1: Configuración Global (Site Settings)
1. Ve a cualquier página y abre **Elementor**.
2. Entra en el menú hamburguesa (arriba a la izquierda) > **Ajustes del Sitio**.
3. **Colores Globales**:
   - Primary: `#0056D2`
   - Secondary: `#FF5733`
   - Text: `#334155`
   - Accent: `#A62C23`
4. **Fuentes Globales**:
   - Configura **Inter** para todo. 
   - Para Títulos (H1-H6), pon el peso en 900 y estilo cursivo.
5. **Layout**: Ancho de contenido: `1280px`.
6. **CSS Personalizado**: Pega el contenido del archivo `elementor/styles.css`.

## Paso 2: Creación de Secciones (Component Mapping)

### 1. Header (Theme Builder)
- **Estructura**: Sección de 2 columnas (15% / 85%).
- **Izquierda**: Widget de HTML con el código del logo:
  ```html
  <div style="display:flex; align-items:center; gap:10px;">
    <span class="wdm-heading-italic" style="color:#FF5733; font-size:24px;">WDM</span>
    <div class="wdm-logo-stripes">
      <div class="stripe-blue"></div><div class="stripe-white"></div><div class="stripe-red"></div>
    </div>
  </div>
  ```
- **Derecha**: Widget **Nav Menu** + Widget **Button** (Clase CSS: `wdm-button`).

### 2. Hero Section
- **Widget**: Sección con Imagen de Fondo (Fija o Scroll).
- **Overlay**: Degradado de Negro (#0F172A) a Transparente.
- **Contenido**: 
  - Widget **Heading** (H2, Clase: `wdm-heading-italic`).
  - Widget **Button** con color de fondo `#FF5733`.

### 3. Saturday Sale (El Banner de Impacto)
- **Widget**: Sección de una columna.
- **Avanzado > Clases CSS**: `wdm-sale-gradient`.
- **Efecto**: Añade un widget de **Inner Section** con fondo blanco para la tarjeta de "50% OFF".

### 4. Inventory Grid
- **Widget**: Usa el widget **"Call to Action"** de Elementor Pro.
- **Diseño**: Skin "Classic", Imagen de fondo, y en la pestaña de Estilo ajusta el "Hover Effect" a "Zoom In".

## Paso 3: Tip Pro de Senior Engineer
Para que el mapa se vea profesional (grisáceo como en la app):
1. Arrastra el widget de **Google Maps**.
2. En la pestaña **Estilo > Filtros CSS**, pon la **Saturación** en `0` y el **Contraste** en `110`.

## Paso 4: Publicación
Asegúrate de configurar las "Display Conditions" en el Theme Builder para que el Header y Footer aparezcan en "Entire Site".
