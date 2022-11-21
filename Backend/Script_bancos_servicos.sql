drop database if exists cadastro_clinica;
create database if not exists cadastro_clinica;
use cadastro_clinica;

create table if not exists tb_cadastro (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    rg VARCHAR(20) NOT NULL,
    cpf VARCHAR(25) NOT NULL,
    data_nascimento VARCHAR(15) NOT NULL,
	nome_mae VARCHAR(100) NOT NULL,
    nome_pai VARCHAR(100) NOT NULL,
    funcao_clinica VARCHAR(20) NOT NULL,
    status_cadastro BOOLEAN NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

insert into tb_cadastro values
(0, "Lucas", "12.345.678-9", "123.456.789-10", "07/10/2001","Dulcilene", "Valderi", "medico", true, current_date(), current_date()),
(0, "Matheus", "12.000.678-0", "109.876.543-21", "05/08/1995","Maria", "Jose", "medico", true, current_date(), current_date()),
(0, "Pedro", "12.345.000-9", "010.203.040-50", "12/02/2008","Tarsila", "Pablo", "paciente", true, current_date(), current_date()),
(0, "Paula", "12.123.123-1", "111.222.333.44", "15/06/2000","Ester", "Moacir", "paciente", true, current_date(), current_date()),
(0, "Leandro", "12.689.000-3", "555.444.888-22", "25/11/1990","Julia", "Andre", "medico", true, current_date(), current_date()),
(0, "Giovana", "12.268.555-7", "123.987.546-10", "30/01/1987","Luana", "Antonio", "medico", true, current_date(), current_date()),
(0, "Jessica", "65.123.448-5", "525.693.001-26", "15/12/1998","Tereza", "Marcos", "paciente", true, current_date(), current_date());

drop database if exists login_clinica;
create database if not exists login_clinica;
use login_clinica;

create table if not exists tb_login (
	id INT PRIMARY KEY AUTO_INCREMENT,
    id_user INT NOT NULL,
    login_user VARCHAR(50) NOT NULL,
    senha_user VARCHAR(512) NOT NULL,
    status_ultimo_acesso BOOLEAN NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

insert into tb_login values
(0, 1,"Lucmate","1234", true, current_date(), current_date()),
(0, 2,"Matheus","1234", true, current_date(), current_date()),
(0, 3,"Pedro","1234", true, current_date(), current_date()),
(0, 4,"Paula","1234", true, current_date(), current_date()),
(0, 5,"Leandro","1234", true, current_date(), current_date()),
(0, 6,"Giovana","1234", true, current_date(), current_date()),
(0, 7,"Jessica","1234", true, current_date(), current_date());

drop database if exists relatorios_pacientes;
create database if not exists relatorios_pacientes;
use relatorios_pacientes;

create table if not exists tb_relatorio_paciente (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome_paciente VARCHAR(100) NOT NULL,
    nome_medico VARCHAR(100) NOT NULL,
    relatorio VARCHAR(5000) NOT NULL,
    data_relatorio DATE NOT NULL,
	createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

drop database if exists historico_consultas;
create database if not exists historico_consultas;
use historico_consultas;

create table if not exists tb_historico_consultas (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome_medico VARCHAR(100) NOT NULL,
    nome_paciente VARCHAR(100) NOT NULL,
    data_atendimento DATE ,
	createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

insert into tb_historico_consultas values 
(0, "Lucas","Pedro", convert('2022-07-15', date), current_date(), current_date()),
(0, "Lucas","Pedro", convert('2022-08-15', date), current_date(), current_date()),
(0, "Lucas","Pedro", convert('2022-09-15', date), current_date(), current_date()),
(0, "Lucas","Pedro", convert('2022-10-15', date), current_date(), current_date()),
(0, "Giovana","Paula", convert('2022-07-16', date), current_date(), current_date()),
(0, "Giovana","Paula", convert('2022-08-16', date), current_date(), current_date()),
(0, "Giovana","Paula", convert('2022-09-16', date), current_date(), current_date()),
(0, "Giovana","Paula", convert('2022-10-16', date), current_date(), current_date()),
(0, "Matheus","Jessica", convert('2022-07-17', date), current_date(), current_date()),
(0, "Matheus","Jessica", convert('2022-08-17', date), current_date(), current_date()),
(0, "Matheus","Jessica", convert('2022-09-17', date), current_date(), current_date()),
(0, "Matheus","Jessica", convert('2022-10-17', date), current_date(), current_date());