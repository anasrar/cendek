const Express = require('express')
const BodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID

const randStr = (a = 3) => {
    const posibleChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
    let result = ""
    for (let i = 0; i < a; i++) {
        result += posibleChar.charAt(Math.floor(Math.random() * posibleChar.length));
    }
    return result
}
const loadLinkColl = async () => {
    const client = await MongoClient.connect("mongodb+srv://test123:test123@cluster0-zixgj.mongodb.net/test?retryWrites=true", { useNewUrlParser: true })
    return client.db("test").collection("links")
}

const app = Express()
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))
app.use(require('cors')())

app.disable('x-powered-by')

app.use(Express.static(__dirname + '/dist'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html')
})

app.post('/', async (req, res) => {
    const links = await loadLinkColl()
    const check = await links.find({ link: req.body.link }).toArray()
    const str = check.length ? check[0].result : randStr(5)
    if (!check.length) {
        await links.insertOne({
            link: req.body.link,
            result: str
        })
    }
    res.status(201).send(JSON.stringify({
        status: "success", result: `${req.get('host')}/${str}`
    }))
})

app.get('^/:link([a-zA-Z0-9-_]+)$', async (req, res) => {
    const links = await loadLinkColl();
    const result = await links.find({ result: req.params.link }).toArray()
    if (result.length) {
        res.sendFile(__dirname + '/dist/index.html')
    } else {
        res.status(404)
        res.redirect('/')
    }
})

app.post('^/:link([a-zA-Z0-9-_]+)$', async (req, res) => {
    const links = await loadLinkColl()
    const check = await links.find({ result: req.params.link }).toArray()
    res.status(201).send({ link: check[0].link })
})

app.use((req, res) => {
    res.status(404)
    res.redirect('/')
})

const port = process.env.PORT || 4500
app.listen(port, _ => console.log(`Server Running On Port ${port}`))