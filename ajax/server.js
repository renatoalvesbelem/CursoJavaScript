const bodyParse = require('body-parser')
const express = require('express')
const multer = require('multer')
const app = express()

app.use(express.static('.'))
//dentro da pasta atual, servir os arquivos staticos

app.use(bodyParse.urlencoded({ extended: true }))
app.use(bodyParse.json())

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }
        res.end('Consluído com sucesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    //req.body
    //req.query
    //req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})
app.get('/teste', (req, res) => res.send('ok'))
app.listen(8089, () => console.log('Executando...'))