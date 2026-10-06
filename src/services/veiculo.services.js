import { pool } from "../config/db.js"; 

class VeiculosService {
    async listarVeiculos() {
        const res = await pool.query("SELECT * FROM veiculos");
        return res.rows;
    }
}

export const veiculosService = new VeiculosService()