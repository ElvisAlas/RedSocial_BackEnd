import { db } from "../db/conn.js";

const GetUsuario = async (req, res) => {
    try {
        const { Usuario, Contrasena } = req.params;

        if (!Usuario || !Contrasena) {
            return res.status(400).json({ error: "Los campos 'Usuario' y 'Contrasena' son requeridos." });
        }

        const sql = `
            SELECT COUNT(1) as validado
            FROM Usuarios
            WHERE Usuario = $1 AND Contrasena = $2
        `;
        const params = [Usuario, Contrasena];

        const result = await db.query(sql, params);
              
        if (result[0].validado === "1") {
            res.status(200).json({ success: true, message: "Usuario validado correctamente." });
        } else {
            res.status(401).json({ success: false, message: "Usuario o contraseña incorrectos." });
        }
    } catch (error) {
        console.error("Error al validar usuario:", error);
        res.status(500).json({ error: "Hubo un error al procesar la solicitud." });
    }
};

export { GetUsuario };
