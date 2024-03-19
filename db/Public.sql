-- Active: 1705366363032@@localhost@5432@redsocial

create table Usuarios 
(
    id serial PRIMARY KEY,
    Usuario varchar(50),
    Correo varchar(100),
    Contrasena varchar(100),
    Creado TIMESTAMP DEFAULT current_timestamp
);

insert into Usuarios(Usuario,Correo,Contrasena)
values('Ealas','Ealas@gmail.com','Ealas2201*')

select * from usuarios

create table Publicaciones_Header
(
  IDHeader serial PRIMARY KEY,
  Usuario           varchar(50),
  Publicacion       varchar(300),
  Foto              bytea NULL, 
  Estado            int,
  Creado TIMESTAMP DEFAULT current_timestamp
)

--drop table Publicaciones_Header
TRUNCATE table Publicaciones_Header

select * from Publicaciones_Header

select IDHeader, 
        Publicacion, 
        Usuario,
        encode(foto, 'base64') as imagen  
from Publicaciones_Header 
where estado = 1
order by Creado desc


create table Publicaciones_Detail
(
    ID serial PRIMARY KEY,
    IDHeader    int,
     Usuario    varchar(50),
    Comentario  varchar(1000),   
    Estado      int,
    Creado TIMESTAMP DEFAULT current_timestamp
)


select * from Publicaciones_Header

select IDHeader, 
Publicacion, 
Usuario,
encode(foto, 'base64') as imagen 
, TO_CHAR(creado, 'Mon DD YYYY HH:MI:SS:MSAM') as creado                                            
from Publicaciones_Header 
where estado = 1
order by Creado desc

truncate table Publicaciones_Header


select * from Publicaciones_detail



INSERT INTO Publicaciones_detail
(idheader,comentario, usuario)
VALUES
(110, 'test','Aquí va el nombre del usuario actual')


select detail.usuario,comentario,detail.creado as fechapublicacion from Publicaciones_Header header
inner join Publicaciones_detail detail  on header.IDHeader=detail.IDHeader
where header.IDHeader=110 and detail.estado=1