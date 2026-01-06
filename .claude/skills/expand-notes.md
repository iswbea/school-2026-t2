---
type: prompt
name: expand-notes
description: Expand rough lecture notes into comprehensive HTML
invocable: user
---

# Expand Lecture Notes

I'll help you expand your rough lecture notes into comprehensive, detailed HTML notes for your course notes system.

## What I need from you:

1. **Course number** (410, 420, 436, 440, or 404)
2. **Lecture date** (YYYY-MM-DD format)
3. **Your rough notes** (markdown format is fine)

## What I'll do:

Following the guidelines in `.claude/CLAUDE.md`, I will:

### Content Expansion
- ✅ Define all key terms and concepts (assuming minimal prior knowledge)
- ✅ Provide thorough explanations of the "why" and "how"
- ✅ Use analogies to help you remember complex concepts
- ✅ Include concrete examples that illustrate abstract ideas
- ✅ Make connections between concepts and to real-world applications
- ✅ Highlight key takeaways with proper formatting

### Interactive Elements
- ✅ Create interactive HTML/JS diagrams **ONLY when truly valuable** for understanding:
  - Algorithm visualizations
  - State machines and transitions
  - Data structure operations
  - Mathematical concepts with visual components
  - Process flows and architectures

### HTML Structure
I'll update your lecture's `notes.html` file with:
1. **Quick Notes** - Your original rough notes (lightly formatted)
2. **Detailed Notes** - Comprehensive expansion with proper HTML formatting
3. **Topics Covered** - 3-7 main topics from the lecture
4. **Assignments & Action Items** - Any homework, readings, or tasks

### Quality Standards
The expanded notes will be:
- Comprehensive enough to study from without the textbook
- Clear and accessible with proper technical terminology
- Well-formatted with syntax highlighting for code
- Visually organized with clear hierarchy
- Engaging and educational

---

## How to use this command:

Simply type `/expand-notes` and I'll guide you through the process, or provide all info at once:

**Example 1: Let me guide you**
```
/expand-notes
```

**Example 2: Provide everything at once**
```
/expand-notes 440 2026-01-06

# Supervised Learning Intro
- classification vs regression
- training/test sets
- overfitting problem
- bias-variance tradeoff
- cross-validation
```

---

Now, please provide your course number, date, and rough notes!
