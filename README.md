# UBC Course Notes - Winter 2026

A personal note-taking system for CPSC courses, hosted on GitHub Pages.

## Courses

- **CPSC 410** - Advanced Software Engineering (Caroline Lemieux)
- **CPSC 420** - Advanced Algorithms (Bruce Shepherd)
- **CPSC 436** - Computer Security (Michael Feeley)
- **CPSC 440** - Advanced Machine Learning (Danica Sutherland)
- **CPSC 404** - Advanced Relational Databases (Ed Knorr)

## Creating a New Lecture

To create a new lecture, use the `create-lecture.js` script:

```bash
node create-lecture.js <course_number> <date>
```

**Examples:**
```bash
node create-lecture.js 410 2026-01-06
node create-lecture.js 420 2026-01-05
node create-lecture.js 436 2026-01-07
node create-lecture.js 440 2026-01-05
node create-lecture.js 404 2026-01-06
```

This will:
1. Create a new folder under the course directory with the date
2. Generate a `notes.html` file from the template
3. Automatically update `index.html` to link to the new lecture

## Workflow

1. **During lecture:** Take quick, rough markdown notes
2. **After lecture:** Run `node create-lecture.js [course#] [date]` to create the lecture folder
3. **Expand notes:** Use the prompt template in `LECTURE_NOTES_PROMPT.md` to have Claude expand your rough notes into comprehensive HTML
4. **Review:** Quick review to ensure accuracy
5. **Done:** Your detailed notes are ready!

See [LECTURE_NOTES_PROMPT.md](LECTURE_NOTES_PROMPT.md) for the full expansion prompt and guidelines.

## Structure

```
school/
├── index.html                          # Main page with schedule and navigation
├── styles.css                          # Styling
├── script.js                          # Tab switching and search
├── create-lecture.js                  # Script to create new lectures
├── lecture-template.html              # Template for lecture pages
└── CPSC_XXX_CourseName/
    └── YYYY-MM-DD/
        └── notes.html                 # Individual lecture notes
```

## Features

- 📅 Course schedule overview
- 🗂️ Tab-based navigation between courses
- 🔍 Search functionality across all notes
- 📱 Responsive design for mobile/tablet
- 💻 Syntax highlighting for code snippets
- 🎨 Clean, modern UI

## Publishing to GitHub Pages

1. Push to GitHub
2. Go to repository Settings → Pages
3. Select branch `main` and root directory `/`
4. Your site will be live at `https://yourusername.github.io/school/`

## Technologies

- Pure HTML/CSS/JavaScript (no build process required)
- highlight.js for code syntax highlighting
- Marked.js for markdown support (optional)
- GitHub Pages for hosting
