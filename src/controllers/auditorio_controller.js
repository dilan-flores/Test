import Auditorio from "../models/Auditorio.js"
import mongoose from "mongoose"

const listarAuditorio = async (req,res)=>{
    try {
        const auditorio = await Auditorio.find().select('-createdAt -updatedAt -__v -_id');
        res.status(200).json(auditorio);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener la lista de clientes', error });
    }
}

const detalleAuditorio = async(req,res)=>{
    const {id} = req.params
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el Auditorio${id}`});
    const auditorio = await Auditorio.findById(id).select("-createdAt -updatedAt -__v")
    res.status(200).json(auditorio)
}

const registrarAuditorio = async(req,res)=>{
    if(Object.values(req.body). includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})

    const nuevoAuditorio = new Auditorio(req.body)
    nuevoAuditorio.Auditorio = req.body.id
    //nuevoStock.Precio_venta_unitario = nuevoStock.Inversion + nuevoStock.Ganancia;
    //nuevoStock.Precio_total = nuevoStock.Precio_venta_unitario * nuevoStock.Cantidad;
    await nuevoAuditorio.save()
    res.status(200).json({msg:"Registro exitoso del paciente"})
}

const actualizarAuditorio= async(req,res)=>{
    const {id} = req.params
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el Auditorio ${id}`});
    await Auditorio.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({msg:"Actualización exitosa del Auditoria"})
}

const eliminarAuditorio = async (req,res)=>{
    const {id} = req.params
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el Auditorio ${id}`})

    await Auditorio.findByIdAndRemove(id)
    res.status(200).json({ msg: 'Auditorio eliminado con éxito' });
}

export{
    listarAuditorio,
    detalleAuditorio,
    registrarAuditorio,
    actualizarAuditorio,
    eliminarAuditorio
}