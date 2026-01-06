#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Course mapping
const courses = {
    '410': {
        code: 'CPSC_410',
        name: 'Advanced Software Engineering',
        instructor: 'Caroline Lemieux',
        tab: 'cpsc410',
        folder: 'CPSC_410_Advanced_Software_Engineering'
    },
    '420': {
        code: 'CPSC_420',
        name: 'Advanced Algorithms',
        instructor: 'Bruce Shepherd',
        tab: 'cpsc420',
        folder: 'CPSC_420_Advanced_Algorithms'
    },
    '436': {
        code: 'CPSC_436',
        name: 'Computer Security',
        instructor: 'Michael Feeley',
        tab: 'cpsc436',
        folder: 'CPSC_436_Computer_Security'
    },
    '440': {
        code: 'CPSC_440',
        name: 'Advanced Machine Learning',
        instructor: 'Danica Sutherland',
        tab: 'cpsc440',
        folder: 'CPSC_440_Advanced_Machine_Learning'
    },
    '404': {
        code: 'CPSC_404',
        name: 'Advanced Relational Databases',
        instructor: 'Ed Knorr',
        tab: 'cpsc404',
        folder: 'CPSC_404_Advanced_Relational_Databases'
    }
};

// Get command line arguments
const args = process.argv.slice(2);
if (args.length < 2) {
    console.log('Usage: node create-lecture.js <course_number> <date>');
    console.log('Example: node create-lecture.js 410 2026-01-05');
    console.log('\nAvailable courses: 410, 420, 436, 440, 404');
    process.exit(1);
}

const courseNum = args[0];
const lectureDate = args[1];

if (!courses[courseNum]) {
    console.error(`Error: Unknown course number ${courseNum}`);
    console.log('Available courses: 410, 420, 436, 440, 404');
    process.exit(1);
}

const course = courses[courseNum];
const lectureDir = path.join(__dirname, course.folder, lectureDate);

// Create lecture directory
if (!fs.existsSync(lectureDir)) {
    fs.mkdirSync(lectureDir, { recursive: true });
    console.log(`✓ Created directory: ${lectureDir}`);
} else {
    console.log(`⚠ Directory already exists: ${lectureDir}`);
}

// Read template
const template = fs.readFileSync(path.join(__dirname, 'lecture-template.html'), 'utf-8');

// Replace placeholders
const lectureHtml = template
    .replace(/{{COURSE_CODE}}/g, course.code)
    .replace(/{{COURSE_NAME}}/g, course.name)
    .replace(/{{LECTURE_DATE}}/g, lectureDate)
    .replace(/{{INSTRUCTOR}}/g, course.instructor)
    .replace(/{{COURSE_TAB}}/g, course.tab)
    .replace(/{{RAW_NOTES}}/g, '<p>Add your quick notes here...</p>')
    .replace(/{{EXPANDED_NOTES}}/g, '<p>Expanded notes will be added here...</p>')
    .replace(/{{TOPICS}}/g, '<li>Topics will be listed here</li>')
    .replace(/{{ASSIGNMENTS}}/g, '<li>No assignments yet</li>');

// Write notes.html
const notesPath = path.join(lectureDir, 'notes.html');
fs.writeFileSync(notesPath, lectureHtml);
console.log(`✓ Created lecture notes: ${notesPath}`);

// Update index.html to include this lecture
updateIndexHtml(course, lectureDate);

console.log('\n✅ Lecture created successfully!');
console.log(`   Course: ${course.code} - ${course.name}`);
console.log(`   Date: ${lectureDate}`);
console.log(`   Location: ${notesPath}`);

function updateIndexHtml(course, lectureDate) {
    const indexPath = path.join(__dirname, 'index.html');
    let indexHtml = fs.readFileSync(indexPath, 'utf-8');

    // Find the tab content for this course
    const tabId = course.tab;
    const lectureLink = `${course.folder}/${lectureDate}/notes.html`;

    // Create lecture item HTML
    const lectureItem = `                <div class="lecture-item">
                    <a href="${lectureLink}">
                        <span class="lecture-date">${lectureDate}</span>
                        <span class="lecture-title">Lecture Notes</span>
                    </a>
                </div>`;

    // Replace "No lectures yet" or add to existing list
    const noLecturesPattern = new RegExp(`(<div id="${tabId}"[^>]*>.*?<div class="lectures-list">)\\s*<p class="no-lectures">.*?</p>`, 's');

    if (noLecturesPattern.test(indexHtml)) {
        // First lecture - replace "No lectures yet"
        indexHtml = indexHtml.replace(noLecturesPattern, `$1\n${lectureItem}`);
    } else {
        // Add to existing lectures
        const insertPattern = new RegExp(`(<div id="${tabId}"[^>]*>.*?<div class="lectures-list">)`, 's');
        indexHtml = indexHtml.replace(insertPattern, `$1\n${lectureItem}`);
    }

    fs.writeFileSync(indexPath, indexHtml);
    console.log(`✓ Updated index.html with new lecture`);
}
