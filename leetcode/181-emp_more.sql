# Write an SQL query to find the employees who earn more than their managers.
SELECT emp.name AS Employee
#select it twice so that it can be referenced as a different instance
FROM employee AS emp, Employee AS manager
WHERE emp.managerId = manager.id
AND emp.salary > manager.salary;