const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset,
    });
  }else{
    res.json({
      message: 'No hay parametros',
    });
  }
})

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'usuario creado',
    data: body
  });
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(201).json({
    message: 'usuario actualizado',
    data: body,
    id,
  });
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'usuario eliminado',
    id,
  });
})

module.exports = router;
