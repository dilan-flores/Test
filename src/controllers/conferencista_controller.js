import Conferencista from "../models/Conferencista.js"
import mongoose from "mongoose"

const listarConferencista = async (req,res)=>{
    try {
        const conferencista = await Conferencista.find().select('-createdAt -updatedAt -__v -id');
        res.status(200).json(conferencista);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener la lista de clientes', error });
    }
}

const registrarConferencista = async(req,res)=>{
    if(Object.values(req.body). includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const nuevoConferencista = new Conferencista(req.body)
    nuevoConferencista.Conferencista = req.body.id
    await nuevoConferencista.save()
    res.status(200).json({msg:"Registro exitoso del paciente"})
}

const actualizarConferencista= async(req,res)=>{
    const {id} = req.params
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el Conferencista ${id}`});
    await Conferencista.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({msg:"Actualización exitosa del cliente"})
}

const eliminarConferencista = async (req,res)=>{
    const {id} = req.params
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el Conferencista ${id}`})

    await Conferencista.findByIdAndRemove(id)
    res.status(200).json({ msg: 'Conferencista eliminado con éxito' });
}

export{
    listarConferencista,
    registrarConferencista,
    actualizarConferencista,
    eliminarConferencista
}