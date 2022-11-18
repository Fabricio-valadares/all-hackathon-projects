# Backend

## Rodar Aplicação em modo desenvolvimento

<pre>
    <code> npm run dev:up  </code>
</pre>


## Rodar Aplicação com build de producção

<pre>
    <code> docker compose --env-file ./config/.env up </code>
</pre>

### Aplicar seeds

<pre>
    <code> docker compose -f docker-compose.dev.yml --env-file ./config/.env run api npm run prisma:seed </code>
</pre>

### migrate dev

<pre>
    <code> docker compose -f docker-compose.dev.yml --env-file ./config/.env run api npx prisma migrate dev</code>
</pre>

<hr>

## Rodar Aplicação em abiente de tests

<pre>
    <code> npm run test:up </code>
</pre>

### testes unitarios

<pre>
    <code> npm run test:unit </code>
</pre>

### Teste de integração

<pre>
    <code> npm run test:int </code>
</pre>

### Teste E2E

<pre>
    <code> npm run test:e2e </code>
</pre>



