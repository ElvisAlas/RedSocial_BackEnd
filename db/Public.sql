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
  Foto              bytea , 
  Estado            int,
  Creado TIMESTAMP DEFAULT current_timestamp
)

drop table Publicaciones_Header

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
    IDUsuario   int,
    Comentario  varchar(1000),   
    Estado      int,
    Creado TIMESTAMP DEFAULT current_timestamp
)


select * from Publicaciones_Header

select IDHeader, 
Publicacion, 
Usuario,
encode(foto, 'base64') as imagen 
, CONVERT(varchar,creado,9) as creado                                              
from Publicaciones_Header 
where estado = 1
order by Creado desc