/**
 * @swagger
 * tags:
 *   - name: Ventas
 *     description: Registro y consulta de ventas

 * /api/ventas:
 *   get:
 *     tags:
 *       - Ventas
 *     summary: Obtener todas las ventas
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de ventas

 *   post:
 *     tags:
 *       - Ventas
 *     summary: Registrar una nueva venta
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - clienteId
 *               - productos
 *               - total
 *             properties:
 *               clienteId:
 *                 type: string
 *                 example: "661d1103a1234567c8d42199"
 *               productos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productoId:
 *                       type: string
 *                       example: "661d1103a1234567c8d42144"
 *                     cantidad:
 *                       type: number
 *               total:
 *                 type: number
 *     responses:
 *       201:
 *         description: Venta registrada
 *       400:
 *         description: Error al registrar venta
 */
