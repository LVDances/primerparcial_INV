const express=require ('express');
const mongoose =require('mongoose');
//llamar ...........configuracion
require('dotenv').config();
////llamar rutas
const inventaRutas=require('./routes/inventaRutas');
const app =express ();
const PORT=process.env.PORT || 3000;
const MONGODB_URI= process.env.MONGO_URL
///validacion controlar con CATCH
///////////////configurar express json
app.use(express.json());
///////
//conexion a bd
mongoose.connect(MONGODB_URI)
.then(()=> {console.log('conexion exitosa')
app.listen(PORT, () => {console.log(`Servidor en funcionando en puerto: ${PORT}`)});

})
.catch(error=>console.log("error de conexion",error));
///ruta-tarea solo es nombre, el otro es el JS
app.use('/EnlacePOS',inventaRutas)
///EL ENLACE SALTARA DE INDEX.JS A INVENTARUTAS Y SE JUNTARAN