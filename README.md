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

 ``` import ao inves de loader
   npm run knex -- migrate:make create-documents
 ```
``` rodar migration
 npm run knex -- migrate:latest
 ```

voltar atras para add, mudar
 npm run knex -- migrate:rollback