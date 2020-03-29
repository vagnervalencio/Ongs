const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/** 
 * Query Paramns : Parametros nomeados enviados na rota apos "?""(Filtros , Paginacao)
    ex: http://localhost:3333/users?name=Diego 
 */

 /**
  * Route Params: Paremetros utilizados para identificar recursos
  * ex:  http://localhost:3333/id -> valor colocado no insominia 
  * ex:  http://localhost:3333/2 -> Valor enviado
  */

app.listen(3333)