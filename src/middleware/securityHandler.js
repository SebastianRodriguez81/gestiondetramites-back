function securityHandler(req, res, next) {
  if (!req.headers.authorization) { return res.status(403).json({ error: 'No se enviaron credenciales.' }); }

  const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
  const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

  console.log(login)
  console.log(password)

  if (false) {
    // Fallo la autenticacion!
    return res.status(403).json({
      error: 'No autorizado'
    });
  }

  req.user = login
  next();
}

export default securityHandler