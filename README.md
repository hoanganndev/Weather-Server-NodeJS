# Server Weather
Backend weather api for project sso client 

Step 1: clone this project

Step 2: settings library :   npm i

Step 3: setup .env (database, port...)

Step 4: run  helloworld:     npm start

Step 5: 
After creating the database and editing the .env file, then:
- Create all tables in db: 
``sh
npx sequelize-cli db:migrate
``
- Create data for tables: 
``sh
npx sequelize-cli db:seed:all
``

Step 6: enjoy !
