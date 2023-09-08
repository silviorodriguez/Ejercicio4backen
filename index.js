//importamos el modulo con Emmascript modules a
import express from 'express'
//inicializamos el modulo y lo guardamos en una variable (app)
const api = express()


api.use(express.json())

api.get('/', function(req, res) {
    res.send('Hola Mundo')    
})

api.post('/suma', function(req, res) {
    function sumar(){
     return req.body.Num1 + req.body.Num2
    }
   res.send('la suma fue un exito ' + sumar())
})

api.get('/suma', function(req, res) {
    function sumar(a,b){
     return a + b
    }
   res.send('el numero sumado es ' + sumar(2,5))
})


api.get('/usuario', function(req, res) {
    const usuario = ['usuario: Edwin']
    res.send(usuario)
})

api.post('/usuario', function(req, res) {
    const userName = req.query.name
    if(!req.query.name) {
        res.send('Por favor envia nombre')
    }
    res.send('usuario creado')
    console.log(req.query)
})

api.get('/swapi', function(req, res) {
    const swapi = [{ 'personaje': { 'name': 'Luke Skywalker' } }]
    res.send(swapi)
})

api.post('/swapi', function(req, res) {
    const userName = req.query.personaje
    if(!req.query.personaje) {
        res.send('Por favor envia nombre')
    }
    res.send('personaje Encontrado')
    console.log(req.query)
})

api.get('/body', function(req, res) {
    res.send(body)
})

api.post('/body', function(req, res) {
    const userName = req.body
    if(!req.body) {
        res.send('Por favor envia nombre')
    }
    res.send('personaje Encontrado')
    console.log(req.body)
})


// utilizamos la funcion listen del modulo para correr el servidor 
api.listen(200, ( )=> {
    console.log('servidor corriendo')
}  )

