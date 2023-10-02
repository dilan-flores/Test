import Cabecera_factura from "../models/Cabecera_factura.js";
import Detalle_factura from "../models/Detalle_factura.js";
import Stock from "../models/Stock.js";

import mongoose from "mongoose"

const listarFactura = async (req, res) => {
    try {
      const facturas = await Cabecera_factura.find()
        .select('-createdAt -updatedAt -__v -id')
        .populate('Cliente','CI_cliente Nombre_cliente').populate('Stock', 'Nombre_producto Inversion');
        //Cabecera_factura.find()
        //.select('-createdAt -updatedAt -__v -id').populate('Stock', 'Nombre_producto Inversion');
      res.status(200).json(facturas);
    } catch (error) {
      console.log(error); // Agrega esta línea para imprimir el error en la consola
      res.status(500).json({ msg: 'Error al obtener la lista de facturas', error });
    }
  };
  

const detalleFactura = async (req, res) => {
    const { id } = req.params;
    try {
        const factura = await Cabecera_factura.findById(id).select('-createdAt -updatedAt -__v -id')
        .populate('Cliente','CI_cliente Nombre_cliente').populate('Stock', 'Nombre_producto Inversion');

        if (!factura) {
            return res.status(404).json({ msg: `La factura con ID ${id} no fue encontrada` });
        }

        res.status(200).json(factura);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener la factura', error });
    }
}


const registrarFactura = async(req,res)=>{
    if(Object.values(req.body). includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const nuevaFactura = new Cabecera_factura(req.body)
    //nuevaFactura.Factura = req.body.id
    
    const stock = await Stock.findById(nuevaFactura.Stock).select('-createdAt -updatedAt -__v');
    if (!stock) {
        return res.status(404).json({ msg: `No se encontró el stock con ID ${nuevaFactura.Stock}` });
    }
    //const actualizarCantidad = stock.Cantidad - 1;
    //console.log(stock);
    stock.Cantidad = stock.Cantidad - 1;
    //console.log(stock);
    //await Stock.findByIdAndUpdate(nuevaFactura.Stock, stock);

    await stock.save();
    await nuevaFactura.save()

    
    res.status(200).json({msg:"Registro exitoso del paciente"})
}

const actualizarFactura = async(req,res)=>{
    const {id} = req.params
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el Factura ${id}`});
    await Cabecera_factura.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({msg:"Actualización exitosa del Factura"})
}

const eliminarFactura = async (req,res)=>{
    const {id} = req.params
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el Factura ${id}`})

    await Cabecera_factura.findByIdAndRemove(id)
    res.status(200).json({ msg: 'Factura eliminado con éxito' });
}

export{
    listarFactura,
    detalleFactura,
    registrarFactura,
    actualizarFactura,
    eliminarFactura
}