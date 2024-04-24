import fastify from "fastify";


const app = fastify()

app.get("/domain", ()=>{
  return 'Hello world from GET'
})

app.get("/", ()=>{
  return 'Hello root from GET'
})

app.listen({
  port: 8989,
}).then(()=>{
  console.log("HTTP Server is Running!")
})