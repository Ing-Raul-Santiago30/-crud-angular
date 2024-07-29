const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  ubicacion: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Producto', productoSchema);
