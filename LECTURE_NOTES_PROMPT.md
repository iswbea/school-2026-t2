# Lecture Notes Expansion Prompt

Use this prompt when asking Claude to expand your rough lecture notes into detailed, comprehensive HTML notes.

---

## Prompt Template

```
I have rough lecture notes from [COURSE CODE - COURSE NAME] that I need you to expand into comprehensive, detailed notes for my course notes HTML system.

**Course:** [e.g., CPSC 410 - Advanced Software Engineering]
**Date:** [e.g., 2026-01-06]
**Instructor:** [e.g., Caroline Lemieux]

Here are my rough notes in markdown:

```md
[PASTE YOUR ROUGH NOTES HERE]
```

Please expand these notes following these guidelines:

### Content Requirements:
1. **Assume minimal prior knowledge** - Define all key terms, concepts, and jargon
2. **Provide thorough explanations** - Don't just state facts, explain the "why" and "how"
3. **Use analogies for complex concepts** - Help me remember and reason through difficult ideas
4. **Include examples** - Concrete examples that illustrate abstract concepts
5. **Highlight key takeaways** - Make important points stand out
6. **Connect concepts** - Show how ideas relate to each other and to previous lectures

### Format Requirements:
1. **Proper HTML structure** - Use semantic HTML5 elements
2. **Syntax highlighting** - Use `<pre><code class="language-[type]">` for code blocks
3. **Clear headings** - Use h3, h4, h5 for hierarchical organization
4. **Lists and tables** - Use when appropriate for clarity
5. **Visual emphasis** - Use `<strong>`, `<em>`, `<mark>` to highlight important terms

### Interactive Diagrams:
**ONLY create interactive HTML/JS diagrams when they are truly valuable for understanding.** Examples of when diagrams are useful:
- Visualizing algorithms (sorting, graph traversal, etc.)
- Showing state transitions or workflows
- Demonstrating data structure operations
- Illustrating mathematical concepts or transformations
- Interactive timelines or process flows

**Do NOT create diagrams for:**
- Simple lists or hierarchies (use HTML lists instead)
- Basic definitions or explanations
- Concepts that are clearer with text

When you do create diagrams:
- Make them interactive and educational
- Include clear labels and annotations
- Use colors meaningfully
- Add controls if appropriate (play/pause, step-through, etc.)

### Output Structure:
Update the lecture notes HTML file at:
`CPSC_[XXX]_[Course_Name]/[YYYY-MM-DD]/notes.html`

Fill in these sections:
1. **Quick Notes** - Keep my original rough notes (lightly formatted)
2. **Detailed Notes** - Your expanded, comprehensive explanation
3. **Topics Covered** - Bulleted list of main topics (3-7 items)
4. **Assignments & Action Items** - Any homework, readings, or tasks mentioned

### Tone & Style:
- Write as if you're an excellent teaching assistant explaining to a student
- Be thorough but not overwhelming
- Use clear, precise language
- Include memory aids and mnemonics where helpful
- Make connections to real-world applications

Please expand my notes now and update the HTML file.
```

---

## Quick Usage

When you have rough notes ready:

1. Open the lecture's `notes.html` file location
2. Copy the prompt above
3. Replace the bracketed sections with your specific details
4. Paste your rough markdown notes
5. Ask Claude to process it

## Example Usage

```
I have rough lecture notes from CPSC 410 - Advanced Software Engineering that I need you to expand.

**Course:** CPSC 410 - Advanced Software Engineering
**Date:** 2026-01-06
**Instructor:** Caroline Lemieux

Here are my rough notes:

```md
# Intro to DSLs

- Domain Specific Languages
- vs general purpose langs (Java, Python)
- internal vs external DSLs
- ex: SQL, regex, HTML/CSS
- benefits: expressiveness, easier for domain experts
- tradeoffs: learning curve, limited scope

## Internal DSLs
- embedded in host language
- uses host syntax
- ex: builder pattern in Java

## External DSLs
- own syntax & parser
- more flexibility
- ex: GraphQL, Markdown
```

Please expand these notes following the guidelines in LECTURE_NOTES_PROMPT.md
```

---

## Tips for Writing Rough Notes

- ✅ Use markdown headers to organize topics
- ✅ Bullet points for quick facts
- ✅ Jot down examples, even incomplete ones
- ✅ Note any questions or confusing parts
- ✅ Include assignment/reading mentions
- ✅ Capture diagrams as descriptions ("draw: state machine with 3 states")
- ❌ Don't worry about grammar or complete sentences
- ❌ Don't worry about formatting or structure
- ❌ Don't spend time on definitions - Claude will add them

## Workflow

1. **During lecture:** Take quick, rough markdown notes
2. **After lecture:** Run `node create-lecture.js [course#] [date]` if not done
3. **Expansion:** Use this prompt to have Claude expand your notes
4. **Review:** Quickly review the expanded HTML to ensure accuracy
5. **Done:** Your comprehensive notes are ready!
