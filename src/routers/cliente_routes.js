import {Router} from 'express'
import{
    listarClientes,
    registrarCliente,
    actualizarCliente,
    eliminarCliente
} from "../controllers/cliente_controller.js";

import verificarAutenticacion from "../middlewares/autenticacion.js";

const router = Router()

router.get("/cliente",verificarAutenticacion,listarClientes);
router.post("/cliente/registrar",verificarAutenticacion,registrarCliente);
router.put("/cliente/actualizar/:id",verificarAutenticacion,actualizarCliente);
router.delete("/cliente/eliminar/:id", verificarAutenticacion,eliminarCliente);

export default router
