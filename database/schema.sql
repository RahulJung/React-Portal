DROP DATABASE IF EXISTS adminPortal;

CREATE DATABASE adminPortal;

USE adminPortal;

CREATE TABLE logIn (
  userName varchar(50) NOT NULL,
  adminRole varchar(50) NOT NULL,  
  password varchar(20) NOT NULL
);

CREATE TABLE adminLinks (
  adminRole varchar(50) NOT NULL,  
  links varchar(20) NOT NULL
);
