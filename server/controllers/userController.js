const User = require('../models/userModel')

exports.getUser = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    console.log(error)
    res.status(500).json({ mensaje: 'Error al obtener los usuarios' })
  }
}

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.json({ mensaje: 'Paciente creado exitosamente', user })
  } catch (error) {
    console.log(error)
    res.status(500).json({ mensaje: 'Error al crear el usuario' })
  }
}

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' })
    }
    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ mensaje: 'Error al obtener el usuario' })
  }
}

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!user) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' })
    }
    res.json({ mensaje: 'Usuario actualizado exitosamente', user })
  } catch (error) {
    console.log(error)
    res.status(500).json({ mensaje: 'Error al actualizar el Usuario' })
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' })
    }
    res.json({ mensaje: 'Usuario eliminado exitosamente', user })
  } catch (error) {
    console.log(error)
    res.status(500).json({ mensaje: 'Error al eliminar el Usuario' })
  }
}
