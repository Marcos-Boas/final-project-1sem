create database markleberSkins;

use markleberSkins;


create table usuario(
	idUsuario int primary key auto_increment,
    nomeUsuario varchar(45),
    emailUsuario varchar(45),
    senhaUsuario varchar(45),
	dataNasc date
);

create table informacoesDeContato(
	idInformacoesDeContato int,
    numero char(11),
    fkUsuario int,
    foreign key (fkUsuario) references usuario(idUsuario),
    primary key (idInformacoesDeContato, fkUsuario)
);


create table skin(
	idSkin int primary key auto_increment,
    nomePersonagem varchar(45),
    nomeSkin varchar(45),
    jogo varchar(45)
);


create table skinFavorita(
	fkUsuario int,
    fkSkin int,
    foreign key (fkUsuario) references usuario(idUsuario),
    foreign key (fkSkin) references skin(idSkin)
);




