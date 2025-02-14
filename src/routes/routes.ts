import { Express } from 'express';
import express from 'express'
import person from './person.js'
import user from './usuarios.js'

export default function (app: Express) {
app
    .use(express.json())
    .use('/api/person', person)
    .use('/usuarios', user)
}