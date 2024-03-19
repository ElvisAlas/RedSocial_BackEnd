import { db } from "../db/conn.js";

const getPublicaciones = async (req, res) => {

    try {

        const sql = `select IDHeader, 
                            Publicacion, 
                            Usuario,
                            TO_CHAR(creado, 'Mon DD YYYY HH:MI:SS:MSAM') as creado                                                 
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

const GetComentario = async (req, res) => {
    try {
        console.loG(1)
        const { IDHeader } = req.params;
        console.log(req.params)
        const sql = ` select detail.usuario,comentario,detail.creado as fechapublicacion 
                    from Publicaciones_Header header
                        inner join 
                              Publicaciones_detail detail  on header.IDHeader=detail.IDHeader
                    where detail.idHeader=$1 and detail.estado=1 oreder by detail.creado desc   `;
       
                        const params = [IDHeader];

        const result = await db.query(sql, params);           
      
       console.log(result)
    } catch (error) {
        console.error("Error al validar comentarios:", error);
        res.status(500).json({ error: "Hubo un error al procesar la solicitud." });
    }
};




const postPublicacion = async (req, res) => {
    try {
        const { publicacion, usuario } = req.body;
        console.log('Cuerpo de la solicitud:', req.body);


        const params = [publicacion, usuario];
        const sql = `INSERT INTO Publicaciones_Header 
                        (publicacion, usuario)
                        VALUES 
                        ($1, $2)
                      RETURNING IDHeader, Usuario, 'Insercion Exitosa' AS mensaje`;
 
        const result = await db.query(sql, params);
        res.json({ mensaje: result[0].mensaje });
    } catch (err) {
        res.status(500).json({ mensaje: err.message });
    }
};

const postComentario = async (req, res) => {

    try {
        const { idheader,comentario, usuario } = req.body;
      
        const params = [idheader,comentario, usuario];
        const sql = `INSERT INTO Publicaciones_detail 
                        (idheader,comentario, usuario)
                        VALUES 
                        ($1, $2,$3)
                      RETURNING  usuario, 'Insercion Exitosa' AS mensaje`;

        const result = await db.query(sql, params);
        console.log(result[0])
        res.json({ mensaje: result[0].mensaje });
    } catch (err) {
        res.status(500).json({ mensaje: err.message });
    }
};



export { postPublicacion,getPublicaciones,postComentario,GetComentario };
