import { db } from "../db/conn.js";

const getPublicaciones = async (req, res) => {

    try {

        const sql = `select IDHeader, 
                            Publicacion, 
                            Usuario,
                            encode(foto, 'base64') as imagen 
                            , TO_CHAR(creado, 'Mon DD YYYY HH:MI:SS:MSAM') as creado                                                 
                            from Publicaciones_Header 
                            where estado = 1
                            order by Creado desc`

        const result = await db.query(sql);

        if (result.length > 0) {
            res.json(result);
        } else {
            res.status(404).json({ mensaje: "Sin datos que mostrar" });
        }



    } catch (err) {

        res.status(500).json({ mensaje: "Error en busqueda de post" });

    }


}



const postPublicacion = async (req, res) => {
    try {
        const { Publicacion, Usuario } = req.body;
        const { buffer } = req.file;

        const params = [buffer, Publicacion, Usuario];

        const sql = `INSERT INTO Publicaciones_Header 
                        (Foto, Publicacion, Usuario)
                        VALUES 
                        ($1, $2, $3)
                      RETURNING IDHeader, Usuario, 'Insercion Exitosa' AS mensaje`;

        const result = await db.query(sql, params);
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ mensaje: err.message });
    }
};

export { postPublicacion,getPublicaciones };
