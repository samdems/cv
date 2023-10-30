import express  from "express";
import mustacheExpress from "mustache-express";
import { promises as fsPromises } from 'fs';

const { readFile } = fsPromises;

const app = express()
const port = 3000

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.use(express.static('public'))

app.get('/', async (req, res) => {
  console.log('index');
  const data = await readFile("./data/cv.json")
  const json = JSON.parse(data)
  console.log(json.version)

  res.render('index.mustache', {data:json})
})

app.get('/cv', async (req, res) => {
    console.log('cv');
    const data = await readFile("./data/cv.json")
    const json = JSON.parse(data)
    console.log(json.version)

    res.render('cv.mustache', {data:json})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})