const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));

Promise.try(() => {
	return db.schema.createTable("customer", (table) => {
		table.increments("id").primary();
		table.text("firstName");
		table.text("lastName");
		table.text("email");
	}); 
}).then(() => {
 	return db("customer").insert([{
		firstName: "John",
		lastName: "Doe",
		email: 'John.Doe@hotmail.com'
	}, {
		firstName: "Jane",
		lastName: "Doe",
		email: 'Jane.Doe@gmail.com'
	}]);
}).then(() => {
	return db("customer");
}).then((customer) => {
	console.log("All the customers:", customer);

}).then(() => {
	console.log("Done!");

}).finally(() => {
	db.destroy();
});