create table products (
id serial primary key,
name varchar(30),
description varchar(70),
price integer not null,
image_url varchar
);