const express = require('express')
const router = express.Router();
const mysqlConnection = require('../database');

module.exports = router;

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM ciudad ', (err, rows, fields) => {
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });  
  });
  // obtener un ciudad
router.get('/:id_ciudad', (req, res) => {
    const { id_ciudad } = req.params; 
    mysqlConnection.query('SELECT * FROM ciudad WHERE id_ciudad = ?', [id_ciudad], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });
  
  //eliminar un ciudad
  router.delete('/:id_ciudad', (req, res) => {
    const { id_ciudad } = req.params;
    mysqlConnection.query('DELETE FROM ciudad WHERE id_ciudad = ?', [id_ciudad], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'ciudad eliminado'});
      } else {
        console.log(err);
      }
    });
  });
  
  // insertar un ciudad
  router.post('/', (req, res) => {

    const {id_ciudad, nombre} = req.body;
    mysqlConnection.query('INSERT INTO ciudad set ?', [req.body], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'ciudad guardado'});
      } else {
        console.log(err);
      }
    });
    
  
  });

   