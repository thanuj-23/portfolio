### What is SQL Injection?
SQL Injection (SQLi) is one of the oldest, dirtiest tricks in the book. It happens when an application blindly trusts user input and pastes it directly into a database query. 

Think of it like this: You ask a user for their name, and instead of just saying "Bob", they say "Bob, and also delete the entire database." If your app is gullible, it will execute that delete command.

### The Classic Example
Imagine a login form. Behind the scenes, the code might look like this:
`SELECT * FROM users WHERE username = '$username' AND password = '$password';`

If a hacker enters `' OR '1'='1` into the username field, the query becomes:
`SELECT * FROM users WHERE username = '' OR '1'='1' AND ...`

Because `1=1` is **always true**, the database shrugs and says "Okay, come on in." It usually logs them in as the first user in the table—the Administrator.

### How to Fix It
**Parameterized Queries.** That is the only real answer.
Never concatenate strings to build SQL queries. When you use prepared statements, the database treats user input as just *data*, not executable *code*.

**Vulnerable:**
`query("SELECT * FROM users WHERE name = '" + name + "'");`

**Secure:**
`query("SELECT * FROM users WHERE name = ?", [name]);`
