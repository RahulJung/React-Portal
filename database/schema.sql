DROP DATABASE IF EXISTS adminPortal;

CREATE DATABASE adminPortal;

USE adminPortal;

CREATE TABLE logIN (
  id varchar(100) NOT NULL,
  userName varchar(50) NOT NULL,
  passsword varchar(20) NOT NULL
);