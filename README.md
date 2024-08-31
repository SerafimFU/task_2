Test task. </br>

The database can contain more than 1 million users (you need to fill the database with data yourself. For example, write a migration that will do this). Each user has fields: </br>
- Name
- Surname
- Age
- Gender
- problems: boolean // whether the user has problems </br>

We need to create an endpoint that will set the problem flag for users to false and count how many users had true in this flag. </br>

swagger/openapi.yaml - swagger API </br>
swagger/alg.sql - query for filling the database (data on names and surnames taken from tables of the same name created manually) </br>
scr/.. - nest.js logic </br>


