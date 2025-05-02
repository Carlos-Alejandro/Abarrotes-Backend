# 🛒 Sistema de Abarrotes – Backend API

Bienvenido al backend del **Sistema de Abarrotes**, una API RESTful construida con **Node.js**, **Express** y **MongoDB**. Este sistema permite gestionar productos, clientes, ventas, proveedores, cierres de caja y usuarios, todo protegido con autenticación JWT y documentado con Swagger.

---

## 🚀 Características

- ✅ Autenticación segura con JWT  
- ✅ CRUD completo de productos, clientes, ventas, proveedores y usuarios  
- ✅ Control de cierre de caja diario  
- ✅ Documentación interactiva con Swagger  
- ✅ Middleware de protección para rutas privadas  
- ✅ Estructura modular y mantenible  
- ✅ MongoDB + Mongoose para almacenamiento de datos  

---

## 📁 Estructura del proyecto

carlos-alejandro-abarrotes-backend/
│
├── config/ # Configuración de base de datos
├── controllers/ # Lógica de negocio por entidad
├── docs/ # Documentación Swagger
├── middlewares/ # Middleware de autenticación
├── models/ # Modelos Mongoose
├── routes/ # Definición de rutas por módulo
├── server.js # Entrada principal del servidor
└── .env # Variables de entorno (excluido del repo)

yaml
Copiar
Editar

---

## ⚙️ Instalación y ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/abarrotes-backend.git
cd abarrotes-backend
Instala las dependencias:

bash
Copiar
Editar
npm install
Crea un archivo .env:

env
Copiar
Editar
PORT=3000
MONGO_URI=mongodb://localhost:27017/abarrotes_db
JWT_SECRET=tu_clave_secreta
Inicia el servidor:

bash
Copiar
Editar
node server.js
🧪 Endpoints principales
Recurso	Ruta base	Requiere Token
Auth	/api/auth	❌ No
Productos	/api/productos	✅ Sí
Clientes	/api/clientes	✅ Sí
Ventas	/api/ventas	✅ Sí
Proveedores	/api/proveedores	✅ Sí
Usuarios	/api/usuarios	❌ Solo registro
Cierre Caja	/api/cierreCaja	✅ Sí

📘 Swagger – Documentación Interactiva
Abre tu navegador en:

bash
Copiar
Editar
http://localhost:3000/api-docs
Y explora todos los endpoints, esquemas, y pruebas en tiempo real 🔍.

🔐 Autenticación
Al iniciar sesión recibirás un token JWT. Para acceder a rutas protegidas, debes incluir el token en los headers:

makefile
Copiar
Editar
Authorization: Bearer <tu_token_aquí>
👨‍💻 Autor
Carlos Alejandro
Desarrollador Fullstack
📧 carlos@example.com
📍 Cancún, México

📝 Licencia
Este proyecto está licenciado bajo ISC. Puedes usarlo, adaptarlo y distribuirlo libremente.

🧠 Próximas mejoras
🔄 Validaciones de datos con express-validator

🔐 Roles avanzados (admin/empleado)

📊 Dashboard con métricas

🖼️ Subida de imágenes para productos

💥 Mejor manejo de errores
