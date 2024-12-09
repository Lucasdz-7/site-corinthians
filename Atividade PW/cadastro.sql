create database SiteCorinthians;
use SiteCorinthians;

create table cadastro(
id_usuario int auto_increment primary key,
nome varchar(40) not null,
email varchar(50) not null,
senha varchar(30) not null
);

select * from cadastro;