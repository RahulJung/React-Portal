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

INSERT INTO logIn (userName, password) VALUES ('Admin','123');
INSERT INTO logIn (userName, password) VALUES ('Finance Admin','123');
INSERT INTO logIn (userName, password) VALUES ('HR Admin','123');
INSERT INTO logIn (userName, password) VALUES ('Sales Admin','123');
INSERT INTO logIn (userName, password) VALUES ('Tech Admin','123');

INSERT INTO adminLinks (adminRole, links) VALUES ('Admin','Manage User Accounts');
INSERT INTO adminLinks (adminRole, links) VALUES ('Admin','Assign Roles');
INSERT INTO adminLinks (adminRole, links) VALUES ('Admin','Help Desk');
INSERT INTO adminLinks (adminRole, links) VALUES ('Finance Admin','Finance Report');
INSERT INTO adminLinks (adminRole, links) VALUES ('Finance Admin','Accounts Payable');
INSERT INTO adminLinks (adminRole, links) VALUES ('Finance Admin','Accounts Receivable');
INSERT INTO adminLinks (adminRole, links) VALUES ('Finance Admin','Tax');
INSERT INTO adminLinks (adminRole, links) VALUES ('Sales Admin','Sales Report');
INSERT INTO adminLinks (adminRole, links) VALUES ('Sales Admin','Sales Lead');
INSERT INTO adminLinks (adminRole, links) VALUES ('Sales Admin','Sales Demo');
INSERT INTO adminLinks (adminRole, links) VALUES ('HR Admin','New Hire On-boarding');
INSERT INTO adminLinks (adminRole, links) VALUES ('HR Admin','Benefits');
INSERT INTO adminLinks (adminRole, links) VALUES ('HR Admin','Payroll');
INSERT INTO adminLinks (adminRole, links) VALUES ('HR Admin','Off-boarding');
INSERT INTO adminLinks (adminRole, links) VALUES ('HR Admin','HR Reports');
INSERT INTO adminLinks (adminRole, links) VALUES ('Tech Admin','Application Monitoring');
INSERT INTO adminLinks (adminRole, links) VALUES ('Tech Admin','Tech Supports');
INSERT INTO adminLinks (adminRole, links) VALUES ('Tech Admin','App Developments');
INSERT INTO adminLinks (adminRole, links) VALUES ('Tech Admin','App Admin');
INSERT INTO adminLinks (adminRole, links) VALUES ('Tech Admin','Release Management');