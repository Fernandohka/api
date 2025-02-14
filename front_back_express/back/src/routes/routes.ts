import { Express } from 'express';
import express from 'express'
import tarefa from './tarefa.ts';

export default function (app: Express) {
app
    .use(express.json())
    .use('/tasks', tarefa)
}