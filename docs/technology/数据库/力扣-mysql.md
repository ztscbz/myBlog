---
title: mysql
date: '2020-05-18'
type: 技术
sidebarDepth: 3
sidebar: auto
tags: sql
note: sql练习
---
## 题目（1）
```
编写一个 SQL 查询，查找所有至少连续出现三次的数字。（力扣）基于mysql实现
+----+-----+
| Id | Num |
+----+-----+
| 1  |  1  |
| 2  |  1  |
| 3  |  1  |
| 4  |  2  |
| 5  |  1  |
| 6  |  2  |
| 7  |  2  |
+----+-----+
例如，给定上面的 Logs 表， 1 是唯一连续出现至少三次的数字。
+-----------------+
| ConsecutiveNums |
+-----------------+
| 1               |
+-----------------+
```

```sql
# 代码实现（借鉴并学习
select distinct num as ConsecutiveNums
from (
select id,num, if((@b=(@b:=num)), @a:=@a+1, @a:=1) as n
from logs, (select @a:=0, @b:='x') t
) as temp
where n >= 3
order by Num desc

```

## 题目（2）
```
Employee 表包含所有员工信息，每个员工有其对应的Id, salary 和 department Id。

+----+-------+--------+--------------+
| Id | Name  | Salary | DepartmentId |
+----+-------+--------+--------------+
| 1  | Joe   | 70000  | 1            |
| 2  | Henry | 80000  | 2            |
| 3  | Sam   | 60000  | 2            |
| 4  | Max   | 90000  | 1            |
+----+-------+--------+--------------+
Department表包含公司所有部门的信息。

+----+----------+
| Id | Name     |
+----+----------+
| 1  | IT       |
| 2  | Sales    |
+----+----------+
编写一个 SQL 查询，找出每个部门工资最高的员工。例如，根据上述给定的表格，Max 在 IT 部门有最高工资，Henry 在 Sales 部门有最高工资。

+------------+----------+--------+
| Department | Employee | Salary |
+------------+----------+--------+
| IT         | Max      | 90000  |
| Sales      | Henry    | 80000  |
+------------+----------+--------+

```
```sql
# 个人代码
SELECT
	d.NAME Department,
	t.Employee,
	t.salary 
FROM
	department d
	JOIN (
SELECT
	e.NAME Employee,
	t1.* 
FROM
	employee e
	JOIN ( SELECT departmentid, max( salary ) salary FROM employee GROUP BY departmentid ) t1 ON e.departmentid = t1.departmentid 
	AND e.salary = t1.salary 
	) t ON d.id = t.departmentid
	
# 官方代码	
SELECT
	Department.NAME AS 'Department',
	Employee.NAME AS 'Employee',
	Salary 
FROM
	Employee
	JOIN Department ON Employee.DepartmentId = Department.Id 
WHERE
	( Employee.DepartmentId, Salary ) IN ( SELECT DepartmentId, MAX( Salary ) FROM Employee GROUP BY DepartmentId )

```

## 题目（3）
```sql
编写一个 SQL 查询来实现分数排名。

如果两个分数相同，则两个分数排名（Rank）相同。请注意，平分后的下一个名次应该是下一个连续的整数值。换句话说，名次之间不应该有“间隔”。

+----+-------+
| Id | Score |
+----+-------+
| 1  | 3.50  |
| 2  | 3.65  |
| 3  | 4.00  |
| 4  | 3.85  |
| 5  | 4.00  |
| 6  | 3.65  |
+----+-------+
例如，根据上述给定的Scores 表，你的查询应该返回（按分数从高到低排列）：

+-------+------+
| Score | Rank |
+-------+------+
| 4.00  | 1    |
| 4.00  | 1    |
| 3.85  | 2    |
|3.65  | 3    |
| 3.65  | 3    |
| 3.50  | 4    |
+-------+------+

# 现学现用
SELECT
	score,
IF
	( @b = ( @b := score ), @a := @a, @a := @a + 1 ) + 0 AS `Rank` 
FROM
	`scores`,
	( SELECT @a := 0, @b :=- 5 ) AS init 
ORDER BY
	score DESC

```
