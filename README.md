# aeione-server
Node server

## Project start 

To start project run npm start

## Project flow 

When any request call come in post api it will create a file (filename.json) in request_data folder with set flag unread and in other side app.js one watcher chokidar is running. If any file is created in request_data folder with flag insdie file 'unread' so it will insert data into databse (here am using postgreysql db) using knex querry. If data inserted successfully then it will change the flag status to 'read' which help to not read againg and again same file. On other api get call select entire data from table user using knex querry. 

## Sql file

Here i attached sql file also in folder (bd_file)
