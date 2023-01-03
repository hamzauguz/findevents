-- Create database
CREATE DATABASE react_crud;

-- Create users table
CREATE TABLE `react_crud`.`users`
(
    `id` int NOT NULL auto_increment,
    `email` varchar(60),
    `password` varchar(60),
    `created_at` timestamp,
    
);
