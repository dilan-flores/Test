import {Router} from 'express'
const router = Router()

import verificarAutenticacion from "../middlewares/autenticacion.js";

import{
    listarAuditorio,
    detalleAuditorio,
    registrarAuditorio,
    actualizarAuditorio,
    eliminarAuditorio
} from "../controllers/auditorio_controller.js";

router.get("/Auditorio",verificarAutenticacion,listarAuditorio);
router.get("/Auditorio/:id",verificarAutenticacion,detalleAuditorio);
router.post("/Auditorio/registro",verificarAutenticacion,registrarAuditorio);
router.put("/Auditorio/actualizar/:id",verificarAutenticacion,actualizarAuditorio);
router.delete("/Auditorio/eliminar/:id",verificarAutenticacion,eliminarAuditorio);

export default router