const {Router} = require('express');
const router = Router();

router.get('/prueba', (req, res)=>{
    console.log("Se hizo una visita");
    res.json({id:1, name: "Jose"})
});

router.use('/signIn', require('./signIn/createAccount.js'));

module.exports = router;