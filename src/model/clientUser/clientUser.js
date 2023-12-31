const { Schema, model } = require('mongoose');

const clientUserSchema = new Schema({
  name: String,
  lastname: String,
  phone: String,
  email: String,
  password: String,
  company: { type: Schema.Types.ObjectId, ref: 'clients' },
  role: { type: String, default: 'customer' },
  faena: { type: Schema.Types.ObjectId, ref: 'faenas' },
});

module.exports = model('cliente', clientUserSchema);
