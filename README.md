# 🚀 Marvel Superheroes App

## 📌 Descripción

Marvel Superheroes App es una aplicación desarrollada con **Ionic 8**, **Angular 19** y **Capacitor** que permite a los usuarios ver una lista de superhéroes obtenidos desde la API de Marvel. Además, ofrece la opción de visualizar detalles de cada superhéroe seleccionado.

---

## ✅ **Requisitos Cumplidos**

### 📌 **Tecnologías Utilizadas**

- **Ionic:** Versión 8
- **Capacitor:** Última versión
- **Angular:** Versión 19
- **TypeScript**
- **SCSS**

### 📌 **Funcionalidades Implementadas**

1. **Pantalla de Listado de Superhéroes**
   - Se conecta a la API de Marvel.
   - Muestra los primeros 20 superhéroes en una lista.
   - Cada superhéroe muestra su nombre y una miniatura de su imagen.
   - Permite hacer clic en un superhéroe para ver su detalle.

2. **Pantalla de Detalle de Superhéroe**
   - Muestra la información detallada del superhéroe seleccionado.
   - Incluye:
     - Nombre del superhéroe.
     - Imagen en miniatura.
     - Cantidad de cómics disponibles.
     - Cantidad de series disponibles.
     - Cantidad de historias disponibles.
   - Botón para regresar a la lista de superhéroes.

3. **Manejo de Estado con NGXS**
   - Se utiliza NGXS para la gestión del estado global.
   - Se mantiene un store con la lista de superhéroes y el héroe seleccionado.
   - Se maneja el estado de carga y errores dentro del store.

4. **Manejo de Idiomas (Español / Inglés)**
   - Se implementa **@ngx-translate/core** para manejar traducciones dinámicas.
   - Se detecta automáticamente el idioma del dispositivo.
   - Se proporciona un selector de idioma en un modal para cambiar manualmente entre español e inglés.

---

## 🎯 **Extras Implementados**

- **Se utiliza Capacitor HTTP para las llamadas a la API de Marvel**
  - Se optimiza el rendimiento de las peticiones con Capacitor.
  - Se maneja el `loader` y los errores de manera centralizada en el `store`.

---

## 📥 **Instalación y Ejecución**

### 📌 **1. Clonar el Repositorio**

```sh
git clone https://github.com/Sebas15897/ion-super-heroes.git
cd ion-super-heroes
```

### 📌 **2. Instalar Dependencias**

```sh
npm install
```

### 📌 **3. Agregar Capacitor y Sincronizar**

```sh
npx cap sync
```

### 📌 **4. Ejecutar en el Navegador**

```sh
ionic serve
```

### 📌 **5. Construir para Android o iOS**

```sh
ionic build
npx cap add android  # Para Android
npx cap add ios      # Para iOS
npx cap sync
npx cap open android # Para abrir en Android Studio
npx cap open ios     # Para abrir en Xcode
```

---

## 📧 **Contacto**

📌 **Nombre:** Julio Sebastián Contreras Peralta  
📌 **Correo:** <sebastiancontreras15897@gmail.com>  
📌 **Teléfono:** +57 3244692094  
📌 **LinkedIn:** [Sebastián Contreras](https://www.linkedin.com/in/sebasti%C3%A1n-contreras15897/)  

---

## 🚀 **Conclusión**

Esta aplicación cumple con todos los requisitos establecidos, además de implementar mejoras adicionales como **manejo de estado con NGXS, soporte para múltiples idiomas y uso de Capacitor HTTP para mejorar el rendimiento de las peticiones**. ¡Espero que les guste! 🎉
