update products
set description = ${description}
where id = ${id};

select * from products;