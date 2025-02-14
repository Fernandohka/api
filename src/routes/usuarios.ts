import express, { Request, Response, Router } from 'express';

interface Iuser {
    nome: string,
    sobrenome: string
    id: number
}

const router: Router = express.Router();
const user: Iuser[] = [];

//....

export default router

.post('', (req: Request, res: Response) => {
    const { nome, sobrenome } = req.body
    user.push({
        "nome": nome,
        "sobrenome": sobrenome,
        "id": user.length
    })
    res.status(200).send(`Usuario ${nome} ${sobrenome} registrado com sucesso!`);
})

.get('', (req: Request, res: Response) => {
    res.status(200).send(user);
})

.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params
    res.status(200).send(user[Number(id)]);
})

.put('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome, sobrenome } = req.body;
    
    user[Number(id)].nome = nome
    user[Number(id)].sobrenome = sobrenome
    res.status(200).send(`Pessoa com o id: ${id} foi atualizado para ${nome} ${sobrenome}`)
})

.patch('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome } = req.body;
    user[Number(id)].nome = nome
    res.send(`Nome da pessoa com ID ${id} foi atualizado para: ${nome}`);
})

.delete('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    user.splice(Number(id), 1)
    res.status(200).send(`Pessoa com o id: ${id} foi deletada `)
})