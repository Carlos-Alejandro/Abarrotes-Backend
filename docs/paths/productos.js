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
 *         direccion:
 *           type: string
 *         correo:
 *           type: string
 *       required:
 *         - nombre
 */
