---
title: "Política de Privacidad"
description: "Política de Privacidad oficial y transparente para la aplicación móvil PetCare HN y sus servicios asociados, en cumplimiento con los lineamientos de Google Play Store."
lastUpdated: "24 de Noviembre de 2026"
effectiveDate: "24 de Noviembre de 2026"
version: "1.0.0"
badge: "Cumplimiento Google Play Console"
---

Esta Política de Privacidad describe cómo **PetCare HN** (desarrollada y administrada por el **Equipo de Desarrollo Grupo 5 - Programación Móvil 1**) recopila, utiliza, almacena, comparte y protege la información personal y los datos médicos de las mascotas cuando utilizas nuestra aplicación móvil para Android y nuestros servicios web asociados.

Nos tomamos muy en serio la confidencialidad de tus datos. Al utilizar **PetCare HN**, aceptas las prácticas descritas en esta política, formulada en estricta conformidad con las políticas de datos del usuario de **Google Play Store**.

---

## 1. Identificación del Responsable y Contacto

- **Nombre de la Aplicación:** PetCare HN (Sistema de Gestión Veterinaria y Cuidado de Mascotas).
- **Desarrollador Responsable:** Grupo 5 - PM1.
- **Correo Electrónico de Contacto y Privacidad:** [soporte@petcarehn.com](mailto:soporte@petcarehn.com)
- **Canal de Soporte Oficial:** [soporte@petcarehn.com](mailto:soporte@petcarehn.com)
- **Ubicación:** San Pedro Sula, Honduras.

Si tienes dudas, inquietudes o deseas ejercer tus derechos sobre tus datos personales, puedes contactarnos directamente a través del correo indicado.

---

## 2. Información y Datos que Recopilamos

PetCare HN recopila únicamente la información necesaria para proporcionar servicios eficientes de gestión veterinaria, programación de citas y seguimiento del bienestar animal.

### 2.1 Datos Personales del Usuario (Propietarios y Veterinarios)
- **Datos de Registro:** Nombre completo, dirección de correo electrónico válida, número telefónico de contacto.
- **Datos de Autenticación:** Identificador único de usuario (UID) generado por Firebase Authentication. PetCare HN **nunca almacena contraseñas en texto plano**.
- **Rol en la Plataforma:** Definición de perfil como "Dueño de Mascota" o "Clínica Veterinaria / Profesional de la Salud Animal".

### 2.2 Información de las Mascotas
- **Ficha Identificativa:** Nombre de la mascota, especie (canino, felino, etc.), raza, sexo, fecha de nacimiento o edad estimada, peso, color y número de microchip (opcional).
- **Fotografías:** Imágenes subidas voluntariamente por el usuario para identificar el perfil de la mascota y documentar condiciones físicas o de piel.

### 2.3 Historial Clínico, Citas y Observaciones Médicas
- **Registros de Citas:** Fecha, hora, motivo de consulta, estado de la cita (pendiente, confirmada, cancelada, atendida).
- **Expediente Clínico Veterinario:** Diagnósticos emitidos por profesionales veterinarios certificados, signos vitales registrados, recetas médicas, tratamientos prescritos, notas de evolución y observaciones de seguimiento.
- **Control Sanitario:** Registro de vacunas aplicadas, fechas de refuerzo, desparasitaciones y alergias conocidas.

---

## 3. Servicios de Terceros y Transferencia Segura

Para garantizar la estabilidad, escalabilidad y seguridad de la plataforma, PetCare HN utiliza servicios de infraestructura tecnológica líderes en la industria:

1. **Google Firebase Authentication (Google LLC):**
   - **Propósito:** Gestión de identidad, inicio de sesión seguro y validación de tokens.
   - [Política de Privacidad de Firebase](https://firebase.google.com/support/privacy)

2. **Firebase Cloud Messaging - FCM (Google LLC):**
   - **Propósito:** Entrega de notificaciones push en tiempo real para recordar citas médicas programadas, vencimientos de vacunas y notas de veterinarios.

3. **API Backend Propietaria en ASP.NET Core (.NET 8):**
   - **Propósito:** Lógica de negocio, validaciones sanitarias, gestión de roles y orquestación de datos.
   - **Seguridad:** Todas las comunicaciones entre la aplicación móvil y el backend se realizan mediante canales cifrados **HTTPS/TLS 1.3**.

4. **Base de Datos Relacional MySQL:**
   - **Propósito:** Almacenamiento seguro, estructurado y persistente de las fichas clínicas y relaciones de usuarios.
   - **Seguridad:** Cifrado en reposo (Data-at-Rest Encryption) y acceso restringido por credenciales aisladas.

---

## 4. Permisos Solicitados en el Dispositivo Android

La aplicación PetCare HN solicita únicamente los permisos estrictamente indispensables para el funcionamiento de sus características:

| Permiso de Android | Propósito Específico y Justificación |
| :--- | :--- |
| `android.permission.CAMERA` | Permite tomar fotografías directamente desde la cámara del teléfono para asignar la foto de perfil de la mascota o adjuntar evidencia visual de una afección durante una consulta. |
| `android.permission.READ_MEDIA_IMAGES` / `READ_EXTERNAL_STORAGE` | Permite al usuario seleccionar imágenes de su galería para la foto de la mascota o adjuntar resultados de exámenes de laboratorio previos. |
| `android.permission.POST_NOTIFICATIONS` | Requerido en Android 13 (API 33) y superior para notificar oportunamente recordatorios de citas veterinarias, confirmaciones y avisos de salud preventiva. |
| `android.permission.INTERNET` y `ACCESS_NETWORK_STATE` | Necesario para sincronizar los registros clínicos en tiempo real con la nube y verificar la conectividad de red activa. |

> **Nota de Control:** Ningún permiso es utilizado en segundo plano para rastreo publicitario o espionaje. El usuario puede revocar estos permisos en cualquier momento desde los Ajustes de su dispositivo Android.

---

## 5. Principio de No Comercialización de Datos

**PetCare HN NO vende, NO alquila, NO comercializa ni transfiere bajo ningún concepto tus datos personales ni los expedientes clínicos de tus mascotas a terceros**, centrales de riesgo, compañías de seguros o plataformas publicitarias.

La información almacenada en el sistema se utiliza única y exclusivamente para brindar el servicio de gestión veterinaria solicitado por el usuario y su médico veterinario tratante.

---

## 6. Seguridad y Protección de la Información

Implementamos rigurosas medidas técnicas y organizativas para salvaguardar tu información:
- **Cifrado en Tránsito:** Toda transmisión de datos entre la app móvil Jetpack Compose y los servidores se encripta con TLS 1.3.
- **Cifrado en Reposo:** Las bases de datos MySQL y los archivos adjuntos se almacenan con algoritmos de cifrado estándar de la industria (AES-256).
- **Control de Acceso Basado en Roles (RBAC):** Un veterinario solo puede acceder a los expedientes de pacientes que hayan agendado o asistido a una consulta en su respectiva clínica. Un dueño de mascota únicamente visualiza los datos de sus mascotas registradas.

---

## 7. Retención y Conservación de Datos

- **Cuentas Activas:** Los datos se conservan mientras tu cuenta de usuario permanezca activa.
- **Solicitud de Eliminación:** Cuando un usuario solicita la baja de su cuenta, sus datos personales, credenciales y perfiles son eliminados en un plazo máximo de **30 días hábiles**.
- **Excepción Sanitaria/Legal:** Ciertos registros médicos veterinarios (diagnósticos, tratamientos farmacológicos prescritos y aplicaciones de vacunas) pueden mantenerse de forma anonimizada y desvinculada de la identidad del propietario para dar cumplimiento a normativas sanitarias y de trazabilidad médica animal.

---

## 8. Derechos del Usuario y Eliminación de Datos

Como usuario, tienes derecho a:
1. Conocer qué datos personales e historiales tenemos almacenados.
2. Solicitar la corrección o actualización de información inexacta.
3. Solicitar la eliminación total y definitiva de tu cuenta y datos personales.

Para conocer el procedimiento detallado de eliminación conforme a las políticas de Google Play Store, visita nuestra página dedicada:  
👉 **[Instrucciones de Eliminación de Cuenta y Datos](/eliminar-cuenta)**

---

## 9. Modificaciones a esta Política

Podemos actualizar nuestra Política de Privacidad periódicamente para reflejar mejoras operativas o cambios normativos. Notificaremos cualquier cambio sustancial publicando la nueva política en esta página y actualizando la fecha de "Última Actualización".

---

## 10. Contacto Oficial

Si tienes preguntas sobre esta Política de Privacidad, comunícate con nosotros:
- **Correo:** [soporte@petcarehn.com](mailto:soporte@petcarehn.com)
- **Equipo:** PetCare HN - Grupo 5 PM1
- **Página Web:** [https://petcarehn.com](https://petcarehn.com)
