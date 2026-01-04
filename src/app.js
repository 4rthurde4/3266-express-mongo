import expres from 'express';

const app = express();

const livros = [
    {
        id: 1,
        titulo: 'O Senhor dos Aneis'
    },
    {
        id:2,
        titulo: 'O Hobbit'
    }
]

app.get('/', (req, res)=>{
    res.status(200).send('Curso de node JS')
})

app.get('/livros', (req, res)=>{
res.status(200).json(livros)
})

app.post('/livros', (req, res)=>
{
    livros.push(req.body)
    res.status(201).send('Livro adicionado!')
})

export default app;