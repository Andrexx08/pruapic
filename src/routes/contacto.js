const express = require('express')
const router = express.Router();
const mysqlConnection = require('../database');

module.exports = router;

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM contacto ', (err, rows, fields) => {
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });  
  });
  // obtener un contacto 
router.get('/:idcontacto', (req, res) => {
    const { idcontacto } = req.params; 
    mysqlConnection.query('SELECT * FROM contacto WHERE idcontacto = ?', [idcontacto], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });
  
  //eliminar un contacto
  router.delete('/:idcontacto', (req, res) => {
    const { idcontacto } = req.params;
    mysqlConnection.query('DELETE FROM contacto WHERE idcontacto = ?', [idcontacto], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'contacto eliminado'});
      } else {
        console.log(err);
      }
    });
  });
  
  // insertar un contacto
  router.post('/', (req, res) => {

    const {idcontacto, nombre, apellido, correo, telefono, celular, direccion, id_ciudad} = req.body;
    mysqlConnection.query('INSERT INTO contacto set ?', [req.body], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'contacto guardado'});
      } else {
        console.log(err);
      }
    });
    
  
  });

   // Modificar un contacto
   router.put('/:idcontacto', (req, res) => {

  
    mysqlConnection.query('UPDATE contacto SET  ? WHERE idcontacto = ?', [req.body,req.params.idcontacto ], (err, rows, fields) => {
     if(!err) {
       res.json({status: 'contacto actualizado'});
     } else {
       console.log(err); 
     }
   });
    
  
  });