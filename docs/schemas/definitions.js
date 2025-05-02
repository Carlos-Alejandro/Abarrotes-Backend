/**
 * @swagger
 * components:
 *   schemas:
 *     Producto:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *         codigoBarras:
 *           type: string
 *         precio:
 *           type: number
 *         categoria:
 *           type: string
 *         stock:
 *           type: number
 *         unidad:
 *           type: string
 *         imagenUrl:
 *           type: string
 *       required:
 *         - nombre
 *         - codigoBarras
 *         - precio

 *     Usuario:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *         email:
 *           type: string
 *         rol:
 *           type: string

 *     Cliente:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *         telefono:
 *           type: string
 *         adeudo:
 *           type: number
 *         frecuente:
 *           type: boolean
 *           example: true
 *         fechaRegistro:
 *           type: string
 *           format: date-time
 *           example: 2024-03-25T00:00:00.000Z
 *       required:
 *         - nombre
 *         - adeudo

 *     ProductoVenta:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *         cantidad:
 *           type: integer
 *         precioUnitario:
 *           type: number
 *       required:
 *         - nombre
 *         - cantidad
 *         - precioUnitario

 *     Venta:
 *       type: object
 *       properties:
 *         cliente:
 *           type: string
 *         productos:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ProductoVenta'
 *         total:
 *           type: number
 *         tipoPago:
 *           type: string
 *         fecha:
 *           type: string
 *           format: date-time
 *       required:
 *         - cliente
 *         - productos
 *         - total
 *         - tipoPago
 *         - fecha

 *     CierreCaja:
 *       type: object
 *       properties:
 *         fecha:
 *           type: string
 *           format: date
 *           example: 2024-05-01
 *         ventasTotales:
 *           type: number
 *           example: 1500.50
 *         egresos:
 *           type: number
 *           example: 300
 *         ganancia:
 *           type: number
 *           example: 1200.50
 *         efectivo:
 *           type: number
 *           example: 800
 *         tarjeta:
 *           type: number
 *           example: 700
 *         totalProductosVendidos:
 *           type: number
 *           example: 53
 *         observaciones:
 *           type: string
 *           example: "Día con ventas altas"
 *       required:
 *         - fecha
 *         - ventasTotales
 *         - ganancia
 * 
 * 
 *     Proveedor:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           example: "Distribuidora La Canasta"
 *         telefono:
 *           type: string
 *           example: "9981010101"
 *         productosSuministrados:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Arroz 1kg", "Frijol", "Aceite 1L"]
 *         ultimaCompra:
 *           type: string
 *           format: date-time
 *           example: "2024-03-20T00:00:00.000Z"
 *       required:
 *         - nombre
 *         - telefono

 */
