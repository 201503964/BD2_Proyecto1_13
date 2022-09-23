
use practica1
## dia 1
mysql -u root -p practica1 < C:\Users\luiss\OneDrive\Escritorio\ArchivosPractica2\Carga1.sql;
SELECT * FROM Practica2 LIMIT 5;
SELECT * FROM Practica2 ORDER BY dpi DESC LIMIT 5;
mysqldump -u root -p practica1 > C:\Users\luiss\OneDrive\Escritorio\backup\backupdia1.sql
mysqldump --single-transaction --quick --skip-extended-insert --routines -u root -p practica1 > C:\Users\luiss\OneDrive\Escritorio\backup\backupincrementaldia1.sql

## dia 2
mysql -u root -p practica1 < C:\Users\luiss\OneDrive\Escritorio\ArchivosPractica2\Carga2.sql;
SELECT * FROM Practica2 LIMIT 5;
SELECT * FROM Practica2 ORDER BY dpi DESC LIMIT 5;
mysqldump -u root -p practica1 > C:\Users\luiss\OneDrive\Escritorio\backup\backupdia2.sql
mysqldump --single-transaction --quick --skip-extended-insert --routines -u root -p practica1 > C:\Users\luiss\OneDrive\Escritorio\backup\backupincrementaldia2.sql

## dia 3
mysql -u root -p practica1 < C:\Users\luiss\OneDrive\Escritorio\ArchivosPractica2\Carga3.sql;
SELECT * FROM Practica2 LIMIT 5;
SELECT * FROM Practica2 ORDER BY dpi DESC LIMIT 5;
mysqldump -u root -p practica1 > C:\Users\luiss\OneDrive\Escritorio\backup\backupdia3.sql
mysqldump --single-transaction --quick --skip-extended-insert --routines -u root -p practica1 > C:\Users\luiss\OneDrive\Escritorio\backup\backupincrementaldia3.sql

## dia 4
mysql -u root -p practica1 < C:\Users\luiss\OneDrive\Escritorio\ArchivosPractica2\Carga4.sql;
SELECT * FROM Practica2 LIMIT 5;
SELECT * FROM Practica2 ORDER BY dpi DESC LIMIT 5;
mysqldump -u root -p practica1 > C:\Users\luiss\OneDrive\Escritorio\backup\backupdia4.sql
mysqldump --single-transaction --quick --skip-extended-insert --routines -u root -p practica1 > C:\Users\luiss\OneDrive\Escritorio\backup\backupincrementaldia4.sql

## dia 5
mysql -u root -p practica1 < C:\Users\luiss\OneDrive\Escritorio\ArchivosPractica2\Carga5.sql;
SELECT * FROM Practica2 LIMIT 5;
SELECT * FROM Practica2 ORDER BY dpi DESC LIMIT 5;
mysqldump -u root -p practica1 > C:\Users\luiss\OneDrive\Escritorio\backup\backupdia5.sql
mysqldump --single-transaction --quick --skip-extended-insert --routines -u root -p practica1 > C:\Users\luiss\OneDrive\Escritorio\backup\backupincrementaldia5.sql


##restauracion full backups
mysql -u root -p practica1 < C:\Users\luiss\OneDrive\Escritorio\backup\backupdia1.sql
mysql -u root -p practica1 < C:\Users\luiss\OneDrive\Escritorio\backup\backupdia2.sql
mysql -u root -p practica1 < C:\Users\luiss\OneDrive\Escritorio\backup\backupdia3.sql
mysql -u root -p practica1 < C:\Users\luiss\OneDrive\Escritorio\backup\backupdia4.sql
mysql -u root -p practica1 < C:\Users\luiss\OneDrive\Escritorio\backup\backupdia5.sql

##restauracion  backups incrementales
mysql -u root -p practica1 < C:\Users\luiss\OneDrive\Escritorio\backup\backupincrementaldia1.sql
mysql -u root -p practica1 < C:\Users\luiss\OneDrive\Escritorio\backup\backupincrementaldia2.sql
mysql -u root -p practica1 < C:\Users\luiss\OneDrive\Escritorio\backup\backupincrementaldia3.sql
mysql -u root -p practica1 < C:\Users\luiss\OneDrive\Escritorio\backup\backupincrementaldia4.sql
mysql -u root -p practica1 < C:\Users\luiss\OneDrive\Escritorio\backup\backupincrementaldia5.sql


