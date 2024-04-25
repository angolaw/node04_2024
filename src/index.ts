import fastify from "fastify";
import {knex} from './database'
import { randomUUID } from "crypto";


const app = fastify({
  logger: true
});

app.get("/domain", ()=>{
  return 'Hello world from GET'
});

app.get("/hello", async ()=>{
  const transaction = await knex("transactions").insert({
    id:  randomUUID(),
    title: "Transação alta 2 ",
    amount: 500_000,
    created_at: Date.now().toLocaleString("pt-BR")
  }).returning("*")
  return transaction
});

app.get("/transactions",async()=>{
  const allTransactions = await knex("transactions").select("*")
  return allTransactions
})

app.listen({
  port: 8989,
}).then(()=>{
  console.log("HTTP Server is Running!")
});

