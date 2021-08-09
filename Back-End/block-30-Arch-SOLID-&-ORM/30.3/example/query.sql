SELECT
  `Employee`.`id`,
  `Employee`.`first_name` AS `firstName`,
  `Employee`.`last_name` AS `lastName`,
  `Employee`.`age`,
  `addresses`.`id` AS `addresses.id`,
  `addresses`.`city` AS `addresses.city`,
  `addresses`.`street` AS `addresses.street`,
  `addresses`.`number` AS `addresses.number`,
  `addresses`.`employee_id` AS `addresses.employeeId`,
  `addresses`.`employee_id` AS `addresses.employee_id`
FROM
  `Employees` AS `Employee`
  LEFT OUTER JOIN `Addresses` AS `addresses` ON `Employee`.`id` = `addresses`.`employee_id`;