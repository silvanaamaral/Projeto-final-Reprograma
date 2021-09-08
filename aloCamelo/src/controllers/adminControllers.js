//require("dotenv-safe").config();
/* const administrador = require('../models/admin')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET;
const { auth } = require("./authorization");

//connect();

const allAdmin = (req, res) => {
  auth(req, res);

  adminModel.find((err, administrators) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    }
    res.status(200).send(administrators);
  });
}; 

const createAdmin = async (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
  req.body.senha = senhaComHash

  const administrador = new Administrador(req.body)
  try {
    const novoAdministrador = await administrador.save()
    res.status(201).json(novoAdministrador)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
const loginAdmin = async (req, res) => {
  const administradorEncontrado = new Administrador(req.body)

    administrador.findOne({ email: administradorEncontrado.email }, (err, administradorEncontrado) => {
    if (!administradorEncontrado) {
      return res.status(404).send({ message: 'administrador nao encontrado', email: '${req.body.email}' })
    }
    const senhaValida = bcrypt.compareSync(req.body.senha, administradorEncontrado.senha)

    if (!senhaValida) {
      return res.status(401).send({ message: 'Login inválido' })
    }
    
    const id = administradorEncontrado.Id;
    const sec = process.env.SECRET;

    const token = jwt.sign({ id }, '${sec}', {
      expiresIn: 300 // expires in 5min
    });

     return res.status(200).send({ messagem: 'Login realizado com sucesso', token: token })
  })

}
const updateAdmin = (req, res) => {
  auth(req, res);

  const id = req.params.id;
  const updateInformation = req.body;
  updateInformation.password = bcrypt.hashSync(req.body.password, 10);

  adminModel.findByIdAndUpdate(id, updateInformation, (err, admin) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    } else if (admin) {
      return res.status(200).send("Administrator update successfully!");
    }
    res.status(404).send("Administrator not found!");
  });
};
const removeAdminByEmail = (req, res) => {
  auth(req, res);

  const params = req.query;
  adminModel.deleteOne(params, (err, email) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    } else if (email) {
      return res.status(200).send("Administrator successfully removed!");
    }
    res.status(404).send("Administrator not found!");
  });
};


module.exports = { allAdmin, createAdmin, loginAdmin, updateAdmin, removeAdminByEmail }
 */