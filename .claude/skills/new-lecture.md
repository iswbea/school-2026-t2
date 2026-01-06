---
type: prompt
name: new-lecture
description: Create a new lecture folder and HTML file
invocable: user
---

# Create New Lecture

I'll create a new lecture folder and HTML file for your course notes.

## What I need:

1. **Course number**: 410, 420, 436, 440, or 404
2. **Lecture date**: YYYY-MM-DD format

## Course Options:

- **410** - CPSC 410: Advanced Software Engineering (Caroline Lemieux)
- **420** - CPSC 420: Advanced Algorithms (Bruce Shepherd)
- **436** - CPSC 436: Computer Security (Michael Feeley)
- **440** - CPSC 440: Advanced Machine Learning (Danica Sutherland)
- **404** - CPSC 404: Advanced Relational Databases (Ed Knorr)

## What I'll do:

1. Run `node create-lecture.js <course> <date>`
2. Create the lecture folder: `CPSC_XXX_CourseName/YYYY-MM-DD/`
3. Generate `notes.html` from the template
4. Automatically update `index.html` to link to the new lecture

---

## Usage:

**Example 1: Let me ask you for details**
```
/new-lecture
```

**Example 2: Provide details directly**
```
/new-lecture 440 2026-01-06
```

---

Please provide the course number and date, or just confirm and I'll ask you for them!
