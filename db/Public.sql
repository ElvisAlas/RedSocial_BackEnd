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
  IDUsuario         int,
  Publicacion       varchar(1000),
  Foto              bytea , 
  Estado            int,
  Creado TIMESTAMP DEFAULT current_timestamp
)

create table Publicaciones_Detail
(
    ID serial PRIMARY KEY,
    IDHeader    int,
    IDUsuario   int,
    Comentario  varchar(1000),   
    Estado      int,
    Creado TIMESTAMP DEFAULT current_timestamp
)
