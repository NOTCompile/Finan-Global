# 🏦 Roles del Sistema Bancario

Este documento describe los roles definidos dentro del aplicativo bancario y sus responsabilidades principales.

## 👑 Administrador (`admin`)

**Descripción:**
Usuario con acceso total al sistema.

**Permisos:**

* Crear, editar y eliminar usuarios.
* Gestionar módulos (clientes, casas de empeño, préstamos, tasas, divisas).
* Visualizar reportes globales.
* Autorizar o bloquear operaciones críticas.

---

## 👤 Cliente (`client`)

**Descripción:**
Usuario final que utiliza los servicios bancarios.

**Permisos:**

* Consultar cuentas, préstamos, tarjetas y tasas.
* Realizar solicitudes de servicios (tarjetas, préstamos, cambios).
* Gestionar su perfil e historial de operaciones.
* Acceder a los servicios aprobados por el banco.

---

## 💱 Agente Cambista (`pawnshop`)

**Descripción:**
Entidad o usuario que gestiona operaciones de **empeño** y **tasación de bienes**.

**Permisos:**

* Registrar y evaluar bienes para empeño.
* Solicitar aprobación de préstamos asociados a bienes.
* Consultar tasas de cambio y de interés aplicables.
* Coordinar con el banco para liberar o ejecutar empeños.

---

## 🏛️ Agente Financiero (`bank`)

**Descripción:**
Entidad que **administra y aprueba préstamos**, actuando como el núcleo financiero del sistema.

**Permisos:**

* Recibir solicitudes de crédito desde clientes o casas de empeño.
* Evaluar condiciones financieras y aprobar préstamos.
* Actualizar tasas de interés y políticas crediticias.
* Monitorear fondos y operaciones activas.

---

## 📘 Resumen de Roles

| Rol                   | Tipo de Usuario   | Función Principal                    | Nivel de Acceso |
| --------------------- | ----------------- | ------------------------------------ | --------------- |
| **Administrador**     | Interno del banco | Control total del sistema            | Alto            |
| **Cliente**           | Externo           | Uso de servicios bancarios           | Bajo            |
| **Agente Cambista**   | Externo Asociado  | Gestión de empeños y bienes          | Medio           |
| **Agente Financiero** | Interno/Asociado  | Evaluación y aprobación de préstamos | Medio-Alto      |
