import fastify from "fastify";
import {knex} from './database'


const app = fastify({
  logger: true
});

app.get("/domain", ()=>{
  return 'Hello world from GET'
});

app.get("/hello", async ()=>{
  const test = await knex('sqlite_schema').select("*")
  return test
});

app.listen({
  port: 8989,
}).then(()=>{
  console.log("HTTP Server is Running!")
});

