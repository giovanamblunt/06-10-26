import { Router } from "express";
import { veiculosService } from "../services/veiculo.services.js";
export const veiculosRouter = Router()

veiculosRouter.get("/", async (req, res) => {
    try {
        const veiculos = await veiculosService.listarVeiculos()
        res.json(veiculos);
    } catch (error) {
        console.error(error);
    }
    veiculosRouter.post("/", async (req, res) => {
        try {
            const veiculos = await veiculosService.listarVeiculos()
            res.json(veiculos);
        } catch (error) {
            console.error(error);
        }
    })
})