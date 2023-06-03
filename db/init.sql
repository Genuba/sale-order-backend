DROP TABLE IF EXISTS Product CASCADE;
DROP TABLE IF EXISTS SaleOrder CASCADE;
DROP TABLE IF EXISTS SaleOrderItem CASCADE;

-- create tables
CREATE TABLE Product(
   id SERIAL PRIMARY KEY,
   name VARCHAR(100) NOT NULL,
   description VARCHAR(255) NOT NULL,
   category VARCHAR(15),
   manufacturer VARCHAR(100)
);

CREATE TABLE SaleOrder(
   id SERIAL PRIMARY KEY,
   custormer VARCHAR(100) NOT NULL,
   date DATE NOT NULL,
   status VARCHAR(15)
);

CREATE TABLE SaleOrderItem(
   id SERIAL PRIMARY KEY,
   quantity INT NOT NULL,
   unitPrice NUMERIC NOT NULL,
   totalPrice NUMERIC NOT NULL,
   productId INT NOT NULL,
   saleOrderId INT NOT NULL,
   CONSTRAINT fk_Product
      FOREIGN KEY(productId) 
	  REFERENCES Product(id),
   CONSTRAINT fk_SaleOrder
      FOREIGN KEY(saleOrderId) 
	  REFERENCES SaleOrder(id)
);

-- create init data

INSERT INTO product(
	name, description, category, manufacturer)
	VALUES ('laptop', 'a laptop description', 'computer', 'Asus');

INSERT INTO product(
	name, description, category, manufacturer)
	VALUES ('iphone10', 'a phone description', 'phone', 'Apple');

INSERT INTO product(
	name, description, category, manufacturer)
	VALUES ('xiaomiA10', 'a phone description', 'phone', 'Xiaomi');

INSERT INTO saleorder(
	custormer, date, status)
	VALUES ('Mario', '2023-06-06', 'Pending');

INSERT INTO saleorder(
	custormer, date, status)
	VALUES ('Tienda 1', '2023-07-02', 'Pending');

INSERT INTO saleorderitem(
	quantity, unitprice, totalprice, productid, saleorderid)
	VALUES ('1', '1000', '1000', 1, 1);

INSERT INTO saleorderitem(
	quantity, unitprice, totalprice, productid, saleorderid)
	VALUES ('10', '2000', '20000', 2, 2);

INSERT INTO saleorderitem(
	quantity, unitprice, totalprice, productid, saleorderid)
	VALUES ('5', '500', '2500', 3, 2);