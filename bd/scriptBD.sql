create database markleberSkins;

use markleberSkins;

-- select * from usuario;

create table skinFavorita(
	idSkinFavorita int primary key auto_increment,
    nomePersonagem varchar(45),
    nomeSkin varchar(45),
    jogo varchar(45),
    caminhoImg varchar(1000)
);


create table usuario(
	idUsuario int primary key auto_increment,
    nomeUsuario varchar(45),
    emailUsuario varchar(45),
    senhaUsuario varchar(45),
	dataNasc date,
    fkSkinFavorita int,
    foreign key (fkSkinFavorita) REFERENCES skinFavorita(idSkinFavorita)
);



 select * from informacoesDeContato;

create table informacoesDeContato(
	idInformacoesDeContato int auto_increment,
    numero char(11),
    fkUsuario int,
    foreign key (fkUsuario) references usuario(idUsuario),
    primary key (idInformacoesDeContato, fkUsuario)
);


-- inserindo valores para exemplificar a KPI
insert into usuario values
	(null, 'Roberto', 'roberto@hotmail.com', '12345', '2003-06-09', 1),
    (null, 'Maria', 'maria@hotmail.com', '12345', '2000-05-23', 2),
    (null, 'Jose', 'jose@hotmail.com', '12345', '2004-07-15', 3),
    (null, 'Fabio', 'fabio@hotmail.com', '12345', '2001-08-30', 4),
    (null, 'Rayssa', 'rayssa@hotmail.com', '12345', '2002-08-30', 5),
    (null, 'Alberto', 'alberto@hotmail.com', '12345', '2003-07-15', 6),
    (null, 'Flavio', 'flavio@hotmail.com', '12345', '2005-07-15', 7),
    (null, 'Fernanda', 'fernanda@hotmail.com', '12345', '2006-07-15', 8),
    (null, 'Alessandro', 'alessandro@hotmail.com', '12345', '2007-07-15', 9),
    (null, 'Dan', 'dan@hotmail.com', '12345', '2008-07-15', 1);


-- select * from skin;
-- Cs: go
insert into skinFavorita values
	(null, 'AWP', 'Asiimov', 'Counter Strike: Global Offensive', 'https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hd3BfY3VfYXdwX2FzaW1vdl9saWdodF9sYXJnZS4zMmQ5MDQ1ZjhhMmJjZDEzY2ExODM5MGNjOWZkODIwMjZlNzE5NWFiLnBuZw--/auto/auto/85/notrim/3f3705a2adf75e891fdb212e6309755e.webp'),
	(null, 'AWP', 'Neo-Noir', 'Counter Strike: Global Offensive', 'https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hd3BfY3VfYXdwX25lb25vaXJfbGlnaHRfbGFyZ2UuYzVkZDU3Zjg1NTVkMTNjNDFmMDgwMjRmMjdhOTMxNDA3NGI2OThhZi5wbmc-/auto/auto/85/notrim/35a4c7d7ca4975146774f46c26106407.webp'),
    (null, 'AWP', 'Atheris', 'Counter Strike: Global Offensive', 'https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hd3BfY3VfYXdwX3ZpcGVyX2xpZ2h0X2xhcmdlLjJkZTc1NDA4YTdjNTk1MzEyZDU4MjAzZjUzYzczYTNhMThmYWE0YTMucG5n/auto/auto/85/notrim/306e0ba35cae9b3d42c540fa2a9c7726.webp'),
    (null, 'AK-47', 'Ice Coaled', 'Counter Strike: Global Offensive', 'https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X2N1X2FrNDdfY29ndGhpbmdzX2xpZ2h0X2xhcmdlLjliNDY3OGE3MGMzMTVlNWQ2MGEyMDM0MzZiN2E5NWNkNGM1ZGNjODkucG5n/auto/auto/85/notrim/bc13b2fd9ea48a6ffc74b418aac13e32.webp'),
    (null, 'AK-47', 'Slate', 'Counter Strike: Global Offensive', 'https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X2dzX2FrNDdfcHJvZmVzc2lvbmFsX2xpZ2h0X2xhcmdlLmQwOWQ2MjNkMGE3MjVjNjNlOGEzOTA1ZjY2YmJhNDFiYTJlZDU5ZTgucG5n/auto/auto/85/notrim/80e5e7d932106d10badb93ccfc10b648.webp'),
    (null, 'AK-47', 'Nightwish', 'Counter Strike: Global Offensive', 'https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X2N1X2FrNDdfbmlnaHR3aXNoX2xpZ2h0X2xhcmdlLjBjNDU4MWJlMDk0ZTJiZDczMmJlYzE4ZWJkYWQyZjcxYjEwMThhZjIucG5n/auto/auto/85/notrim/3bf736c4f8a790cfddb4158587415b44.webp'),
    (null, 'Desert Eagle', 'Code Red', 'Counter Strike: Global Offensive', 'https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9kZWFnbGVfZ3NfZGVhZ2xlX2FnZ3Jlc3Nvcl9saWdodF9sYXJnZS41MWZmYjg3ZjAzYWUwZDNjNDY3ZDQ0MTJmM2MyNDYwNjc3NDhlNjFkLnBuZw--/auto/auto/85/notrim/9ec696896d67fe4daec5179807eb50e7.webp'),
    (null, 'Desert Eagle', 'Kumicho Dragon', 'Counter Strike: Global Offensive', 'https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9kZWFnbGVfYXFfZGVzZXJ0ZWFnbGVfa3VtaWNob2RyYWdvbl9saWdodF9sYXJnZS4xOTg3NGU5YTIwY2ZhYzQ5ZWZiZTFmMTU1N2I5OTVlNDUzNjMzZmZlLnBuZw--/auto/auto/85/notrim/d5a83f4d1ebf38f24e1bcf03a45eed21.webp'),
    (null, 'Desert Eagle', 'Fennec Fox', 'Counter Strike: Global Offensive', 'https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9kZWFnbGVfZ3NfZGVhZ2xlX2Zlbm5lY19saWdodF9sYXJnZS45MmRiZGE3M2VkY2M2ZWI2MDIyZjFmMDI0OGNiMTkwNjNkNzEwN2FhLnBuZw--/auto/auto/85/notrim/ae6b08a591d811a10d5251ecaf80de56.webp');
    
-- Valorant
insert into skinFavorita values 
	(null, "Ghost", "Luxe", 'Valorant', 'https://static.wikia.nocookie.net/valorant/images/1/10/Luxe_Ghost.png/revision/latest/scale-to-width-down/125?cb=20210707185727'),
    (null, "Ghost", "Prism", 'Valorant', 'https://static.wikia.nocookie.net/valorant/images/c/ce/Prism_Ghost.png/revision/latest/scale-to-width-down/125?cb=20200623202609'),
    (null, "Ghost", "Ego", 'Valorant', 'https://static.wikia.nocookie.net/valorant/images/6/6f/Ego_Ghost.png/revision/latest/scale-to-width-down/125?cb=20210707185619'),
    (null, "Vandal", "Aristocrat", 'Valorant', 'https://static.wikia.nocookie.net/valorant/images/d/d4/Aristocrat_Vandal.png/revision/latest/scale-to-width-down/125?cb=20210707202447'),
    (null, "Vandal", "Sakura", 'Valorant', 'https://static.wikia.nocookie.net/valorant/images/5/5f/Sakura_Vandal.png/revision/latest/scale-to-width-down/125?cb=20210707203414'),
    (null, "Vandal", "Avalanche", 'Valorant', 'https://static.wikia.nocookie.net/valorant/images/b/b2/Avalanche_Vandal.png/revision/latest/scale-to-width-down/125?cb=20200408121231'),
    (null, "Spectre", "Wasteland", 'Valorant', 'https://static.wikia.nocookie.net/valorant/images/f/fe/Wasteland_Spectre.png/revision/latest/scale-to-width-down/125?cb=20201027171118'),
    (null, "Spectre", "BlastX", 'Valorant', 'https://static.wikia.nocookie.net/valorant/images/c/c6/BlastX_Spectre.png/revision/latest/scale-to-width-down/125?cb=20210708104407'),
    (null, "Spectre", "Horizon", 'Valorant', 'https://static.wikia.nocookie.net/valorant/images/8/82/Horizon_Spectre.png/revision/latest/scale-to-width-down/125?cb=20210708104951');
    
-- League Of Legendes
insert into skinFavorita values 
	(null, "Kow'Maw", "Zap'Maw", 'League of Legends', 'https://www.mobafire.com/images/champion/skins/portrait/kog-maw-zap-maw.jpg'),
    (null, "Kow'Maw", "Bee'Maw", 'League of Legends', 'https://www.mobafire.com/images/champion/skins/portrait/kog-maw-bee-maw.jpg'),
    (null, "Kog'Maw", "Battlecast ", 'League of Legends', 'https://www.mobafire.com/images/champion/skins/portrait/kogmaw-battlecast.jpg'),
    (null, "Graves", "EDG", 'League of Legends', 'https://www.mobafire.com/images/champion/skins/portrait/graves-sentinel.jpg'),
    (null, "Graves", "Sentinel", 'League of Legends', 'https://www.mobafire.com/images/champion/skins/portrait/graves-sentinel.jpg'),
    (null, "Graves", "Battle Professor", 'League of Legends', 'https://www.mobafire.com/images/champion/skins/portrait/graves-battle-professor.jpg'),
    (null, "Lee Sin", "Storm Dragon", 'League of Legends', 'https://www.mobafire.com/images/champion/skins/portrait/lee-sin-storm-dragon.jpg'),
    (null, "Lee Sin", "FPX", 'League of Legends', 'https://www.mobafire.com/images/champion/skins/portrait/lee-sin-fpx.jpg'),
    (null, "Lee Sin", "Muay Thai", 'League of Legends', 'https://www.mobafire.com/images/champion/skins/portrait/lee-sin-muay-thai.jpg');
    
    
    
    