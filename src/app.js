const express = require('express');
const productsRouter = require('./routers/products');
const cartsRouter = require('./routers/carts');
const app = express();
const PORT = 8080;

app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${PORT}`);
});