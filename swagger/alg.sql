create table person_data as
with recursive tmp(id, idx, idz, name, surname, age, sex, problem) as (
    select 1, 1, 1, 'Аннастасия', 'Мандаржап', 10, 0, 1
    union all
    select
        tmp.id + 1 as id,
        abs(FLOOR(RAND()*(10-5+4)+1)) as idx,
    	abs(FLOOR(RAND()*(10-5+4)+1)) as idz,
        (select name from names where id = idx) as name,
    	(select surname from surnames where id = idz) as surname,
        abs(FLOOR(RAND()*(10-5+4)+1)) as age,
    	if(idx > 4, 1, 0) as sex,
    	FLOOR(RAND()*(2-1+1)) as problem
    from tmp
    limit 10000
)
select id, name, surname, age, sex, problem from tmp;

SET GLOBAL cte_max_recursion_depth=10000000;