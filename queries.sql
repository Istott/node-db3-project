-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT Product.ProductName
    , Category.CategoryName
FROM Product
INNER JOIN Category on Product.CategoryId = Category.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT "Order".Id
    , Shipper.CompanyName  
FROM "Order"
INNER JOIN Shipper on "Order".ShipVia = Shipper.Id
WHERE "Order".OrderDate < "2012-09-09"

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

Select Product.ProductName
    , OrderDetail.quantity
From OrderDetail
Inner JOIN Product on OrderDetail.ProductId = Product.Id
WHERE OrderDetail.OrderId = ("10251");

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

Select OrderDetail.OrderId
    , Customer.CompanyName
    , Employee.LastName
FROM "Order"
INNER JOIN OrderDetail on "Order".Id = OrderDetail.OrderId
INNER JOIN Customer on "Order".CustomerId = Customer.Id
INNER JOIN Employee on "Order".EmployeeId = Employee.Id