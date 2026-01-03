### What is SQL Injection?
SQL Injection (SQLi) occurs when untrusted user input is directly concatenated into a database query without validation. This allows an attacker to manipulate the query.

### The Classic Example
Imagine a login query like this:
`SELECT * FROM users WHERE username = '$username' AND password = '$password';`

If a user enters `' OR '1'='1` as the username, the query becomes:
`SELECT * FROM users WHERE username = '' OR '1'='1' AND ...`

Since `'1'='1'` is always true, the database returns the first user record (usually the Admin) without checking the password.

### How to Fix It?
**Always use Parameterized Queries (Prepared Statements).**
Never concatenate strings to build SQL queries.

**Vulnerable:**
`query("SELECT * FROM users WHERE name = '" + name + "'");`

**Secure:**
`query("SELECT * FROM users WHERE name = ?", [name]);`
