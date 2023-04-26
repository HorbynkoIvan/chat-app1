# chat-app1

**sequelize db:migrate** - command is used to apply any pending database migrations. It will look for migration files in
the migrations-path directory specified in your Sequelize configuration, and apply any migrations that have not yet been
run. This command should be run after creating or modifying any migration files.

**sequelize db:migrate:undo** - is a command used with Sequelize CLI to undo the last migration that was applied to the
database. When you run sequelize db:migrate:undo, it will find the last migration that was applied to the database and
revert it, effectively rolling back the changes that were made to the database schema.

**sequelize seed:create --name users** command will create a new seed migration file in the seeders folder. The file
will be named yyyy-mm-dd-users.js, where yyyy-mm-dd is the current date.

**sequelize seed:create --name** - users will create a new file in the seeders directory with a filename like
20230426152512-users.js. You can then add the necessary code to insert data into the database in this file.

