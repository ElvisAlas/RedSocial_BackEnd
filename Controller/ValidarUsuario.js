import { db } from "../db/conn";


const GetUsuario = async (req, res) => {

    const { Usuario, Contrasena } = req.body;
    const params = [Usuario, Contrasena];
    const sql = `select count(1)
                from Usuarios
                where Usuario=$1 and Contrasena=$2 returning * `
    const result = await db.query(sql, params);
    res.json(result);
    

}
