const blogData = [
    {
        id: "getting-started-with-ctfs",
        title: "How to Start Playing CTFs (Capture The Flag)",
        author: "Thanuj",
        date: "Jan 03, 2026",
        category: "Guide",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        excerpt: "Capture The Flag (CTF) competitions are the best way to learn practical cybersecurity skills. Here is a roadmap to get started.",
        content: `
### What is a CTF?
Capture The Flag (CTF) competitions are cybersecurity exercises where participants are challenged to find hidden "flags" in vulnerable programs or websites.

### Why Play CTFs?
- **Hands-on Experience:** You learn how systems are actually broken into.
- **Problem Solving:** It forces you to think outside the box.
- **Career Boost:** Top companies hire potential candidates based on their CTF performance.

### Platforms to Start
1. **TryHackMe:** Best for absolute beginners. Guided rooms and learning paths.
2. **HackTheBox:** More advanced. Real-world scenarios.
3. **PicoCTF:** Great for students and beginners.

### Pro Tip
Don't just use tools. Understand *why* the tool works. Read the source code, analyze the network traffic, and maintain a writeup of everything you learn.
        `
    },
    {
        id: "basic-sql-injection",
        title: "Understanding SQL Injection (SQLi) for Beginners",
        author: "Thanuj",
        date: "Dec 28, 2025",
        category: "Web Security",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        excerpt: "SQL Injection is one of the oldest and most dangerous web vulnerabilities. Learn how it works and how to prevent it.",
        content: `
### What is SQL Injection?
SQL Injection (SQLi) occurs when untrusted user input is directly concatenated into a database query without validation. This allows an attacker to manipulate the query.

### The Classic Example
Imagine a login query like this:
\`SELECT * FROM users WHERE username = '$username' AND password = '$password';\`

If a user enters \`' OR '1'='1\` as the username, the query becomes:
\`SELECT * FROM users WHERE username = '' OR '1'='1' AND ...\`

Since \`'1'='1'\` is always true, the database returns the first user record (usually the Admin) without checking the password.

### How to Fix It?
**Always use Parameterized Queries (Prepared Statements).**
Never concatenate strings to build SQL queries.

**Vulnerable:**
\`query("SELECT * FROM users WHERE name = '" + name + "'");\`

**Secure:**
\`query("SELECT * FROM users WHERE name = ?", [name]);\`
        `
    }
];

export default blogData;
