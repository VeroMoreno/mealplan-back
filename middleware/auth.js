/* Este middleware protege las rutas seleccionadas y asegura que un usuario esté autenticado antes de permitir que sus solicitudes pasen. */
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // nos aseguramos con try catch.. ¡hay muchas cosas que pueden salir mal!
  try {
    // extraemos el token de headers.authorization. También contendrá la   Bearer, asi que dividimos para obtener todo que viene después. Cualquier error aquí terminará en el catch
    const token = req.headers.authorization.split(' ')[1];
    // luego usamos verify para decodificar nuestro token, si el token no es válido, esto arrojará un error
    const decodedToken = jwt.verify(token, process.env.JWTSECRET, {algorithm: 'HS512'});
    console.log("decodedToken : ", decodedToken)
    // extraemos el ID de usuario de nuestro token
    const userId = decodedToken.id;
    // si la solicitud contiene un ID de usuario, lo comparamos con el extraído del token; si no son iguales, error!
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      // de lo contrario, todo está bien y nuestro usuario está autenticado: pasamos la ejecución utilizando next()
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};