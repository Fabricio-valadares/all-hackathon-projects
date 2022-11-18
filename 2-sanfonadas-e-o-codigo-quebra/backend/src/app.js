const express = require('express')
const rls = require("ml-regression-multivariate-linear")
const app = express()

// niveis, 0,1,2 , baixo, médio, alto

const x = [
  [10, 0],
  [20, 1],
  [30, 2],
  [60, 1],
  [365, 0],
  [180, 1],
  [460,1],
  [1000,0],
  ]
  
  // 0 - poupança
  // 1 - CDB liquidez diaria
  // 2 - Tesouro direto
  // 3 - Fundo de investimento

  const y = [
  0,
  0,
  0,
  1,
  1,
  2,
  3,
  2
  ]


const mlr = new rls(x, y);

app.get('/api', (req, res) => {
const days = Number(req.query.days);
const risk = Number(req.query.risk);
 const resposta = Math.round(mlr.predict([days, risk]));
  res.json({investimento: resposta})
})
const port = 3500;

app.listen(port, () =>
  console.log(`Server on port ${port}`)
);