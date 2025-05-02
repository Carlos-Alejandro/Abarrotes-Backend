<h1 align="center">🛒 Sistema de Abarrotes – Backend API</h1>

<p align="center">
  <strong>API RESTful construida con Node.js, Express y MongoDB</strong><br />
  Gestiona productos, clientes, ventas, proveedores, cierres de caja y usuarios.<br />
  <em>Autenticación segura con JWT y documentación interactiva con Swagger</em>
</p>

---

## 🚀 Características

<ul>
  <li>✅ Autenticación segura con <strong>JWT</strong></li>
  <li>✅ CRUD completo de productos, clientes, ventas, proveedores y usuarios</li>
  <li>✅ Control de cierre de caja diario</li>
  <li>✅ Documentación interactiva con <strong>Swagger</strong></li>
  <li>✅ Middleware para proteger rutas privadas</li>
  <li>✅ Estructura modular y mantenible</li>
  <li>✅ Base de datos MongoDB con <strong>Mongoose</strong></li>
</ul>

---

## 📁 Estructura del proyecto

<pre>
carlos-alejandro-abarrotes-backend/
│
├── config/             # Configuración de base de datos
├── controllers/        # Lógica de negocio por entidad
├── docs/               # Documentación Swagger
├── middlewares/        # Middleware de autenticación
├── models/             # Modelos Mongoose
├── routes/             # Definición de rutas por módulo
├── server.js           # Entrada principal del servidor
└── .env                # Variables de entorno (excluido del repo)
</pre>

---

## ⚙️ Instalación y ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/abarrotes-backend.git
cd abarrotes-backend
