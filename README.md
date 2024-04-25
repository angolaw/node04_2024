A simple hello world express server. Run it in the terminal with

```
npm run start
```

and cmd+click (or ctrl+click) on "http://localhost:3000" to access the server.


## Knex
 
 Instalação do knex

 ```javascript
    npm i knex sqlite3
 ```

 ``` 
 import ao inves de loader
     npm run knex -- migrate:make create-documents
 ```
``` 
    rodar migration
    npm run knex -- migrate:latest
 ```

voltar atras para add, mudar
 ```
 npm run knex -- migrate:rollback
 ```
 
```
  const transaction = await knex("transactions").insert({
    id:  randomUUID(),
    title: "Primeira transação",
    amount: 250,
    created_at: Date.now().toLocaleString("pt-BR")
  }).returning("*")
  permite retornar tudo 
  return transaction
```

Instalando zod

```
npm i zod
```