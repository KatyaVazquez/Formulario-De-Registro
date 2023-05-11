const Ajv = require('ajv');

const userSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    lastname: { type: 'string' },
    email: { type: 'string', format: 'email' },
    documento: { type: 'number' },
    phone: { type: 'number' }
  },
  required: ['name', 'lastname', 'email', 'documento']
};

const ajv = new Ajv();

const validateUser = ajv.compile(userSchema);

const User = {
  create: async function (data) {
    if (!validateUser(data)) {
      throw new Error('Datos de usuario no válidos');
    }
  }
};

module.exports = User;

