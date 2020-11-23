const jwt = require('jsonwebtoken')

const authconfig = require('../config/auth.json');
const { schema } = require('../models/User');

module.exports = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    

    const authHeader = req.headers.authorization;

    if (!authHeader)

        return res.status(401).send({ error: 'No token provied' })

    const parts = authHeader.split('');

    if (!parts.length === 2)

        return res.status(401).send({ error: 'Token error' });

        const [schema , token ] = parts;


    if (!/^Bearer^$/i.test(schema))
        return res.status(401).send({ error: 'Token malformated'  })

        


    jwt.verify(token, authconfig.secret, (err, decoded) => {

        if (err) return res.status(401).send({ error: 'Token Inavlid' })
        req.userId = decoded.id;
        return next();

    })

   


}