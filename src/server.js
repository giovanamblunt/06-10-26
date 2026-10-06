import { veiculosRouter } from "./routes/veiculo.routes.js";
import express from 'express'

const app = express()
const port = 3000

app.use(express.json())
app.use("/veiculos", veiculosRouter)
app.listen(port, () => {
    console.log(`APP rodando em http://localhost:3000`);
})