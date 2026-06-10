// This short line...
//const normalizeName = (name) => ...

// ...is exactly identical to writing this:
//function normalizeName(name) { ... }
//Arrow function covered

//A question mark ? and a colon : form a Ternary Operator. It is a short, one-line version of an if-else statement.
//Use:
//const normalizeName = (name) => name ? name.toString().toLowerCase().replace(/[\s-]/g, "").trim() : "";
//Checks if the name exists or not, if exists, execute the code after the question mark, (convert to string and then to lower case and then replace the whitespaces with nothing using RegEx, g says that search through the whole string and use trim as well if any whitespace still exists)