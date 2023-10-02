import Reserva from "../models/Reserva.js";
//import Stock from "../models/Stock.js";

import mongoose from "mongoose"

const listarReserva = async (req, res) => {
    try {
      const reserva = await Reserva.find()
        .select('-createdAt -updatedAt -__v -id')
        .populate('Conferencista','Nombre_conf').populate('Auditorio', 'Codigo_auditorio Capacidad_auditorio');
        //Cabecera_factura.find()
        //.select('-createdAt -updatedAt -__v -id').populate('Stock', 'Nombre_producto Inversion');
      res.status(200).json(reserva);
    } catch (error) {
      console.log(error); // Agrega esta línea para imprimir el error en la consola
      res.status(500).json({ msg: 'Error al obtener la lista de Reserva', error });
    }
  };
  

const detalleReserva = async (req, res) => {
    const { id } = req.params;
    try {
        const reserva = await Reserva.findById(id).select('-createdAt -updatedAt -__v -id')
        .populate('Conferencista','Nombre_conf').populate('Auditorio', 'Codigo_auditorio Capacidad_auditorio');

        if (!reserva) {
            return res.status(404).json({ msg: `La Reserva con ID ${id} no fue encontrada` });
        }

        res.status(200).json(reserva);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener la Reserva', error });
    }
}


const registrarReserva = async(req,res)=>{
    if(Object.values(req.body). includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const nuevaReserva = new Reserva(req.body)
    //nuevaFactura.Factura = req.body.id
    
    // const reserva = await Reserva.findById(nuevaReserva.Stock).select('-createdAt -updatedAt -__v');
    // if (!stock) {
    //     return res.status(404).json({ msg: `No se encontró el stock con ID ${nuevaFactura.Stock}` });
    // }
    // //const actualizarCantidad = stock.Cantidad - 1;
    // //console.log(stock);
    // stock.Cantidad = stock.Cantidad - 1;
    // //console.log(stock);
    // //await Stock.findByIdAndUpdate(nuevaFactura.Stock, stock);

    // await stock.save();
    await nuevaReserva.save()

    
    res.status(200).json({msg:"Registro exitoso del paciente"})
}

const actualizarReserva = async(req,res)=>{
    const {id} = req.params
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el Reserva ${id}`});
    await Reserva.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({msg:"Actualización exitosa del Reserva"})
}

const eliminarReserva = async (req,res)=>{
    const {id} = req.params
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el Reserva ${id}`})

    await Reserva.findByIdAndRemove(id)
    res.status(200).json({ msg: 'Reserva eliminado con éxito' });
}

export{
    listarReserva,
    detalleReserva,
    registrarReserva,
    actualizarReserva,
    eliminarReserva
}