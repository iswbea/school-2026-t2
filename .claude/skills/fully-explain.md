# Fully Explain - Concept Guide Generator

## Command Pattern
```
fully-explain [CONCEPT_NAME] [COURSE_CODE]
```

## Description
Generates a comprehensive, interactive HTML concept guide with beginner → intermediate → advanced progression. Creates beautiful, educational pages with interactive demos, visualizations, quizzes, and real-world examples.

## Examples
- `fully-explain naive bayes 440`
- `fully-explain gradient descent 440`
- `fully-explain dependency injection 410`
- `fully-explain SQL injection 436`
- `fully-explain ACID properties 404`

## What Gets Generated

### 1. File Structure
Creates: `CPSC_[CODE]_CourseName/concepts/[concept-name].html`

Example: `CPSC_440_Advanced_Machine_Learning/concepts/naive-bayes.html`

### 2. Content Sections

#### Beginner Level (🌱)
- **ELI5 Explanation**: Explain like I'm 5 with simple language
- **Real-World Analogy**: Memorable comparison to everyday concepts
- **Simple Example**: Basic code or walkthrough
- **Interactive Demo**: Hands-on visualization
- **Common Mistakes**: What beginners typically get wrong

#### Intermediate Level (🚀)
- **How It Actually Works**: Detailed technical explanation
- **Mathematical Foundation**: Formulas and notation
- **Step-by-Step Breakdown**: Process decomposition
- **Interactive Visualization**: Canvas-based animation
- **Practical Example**: Real-world code implementation
- **Common Mistakes**: Intermediate pitfalls

#### Advanced Level (🎓)
- **Theoretical Foundations**: Deep dive into theory
- **Optimizations**: Performance improvements and best practices
- **Advanced Playground**: Interactive parameter tweaking
- **Real-World Applications**: Industry use cases
- **Complete Implementation**: Production-ready code

#### Additional Features
- **Quiz Section**: Self-assessment with explanations
- **Related Concepts**: Links to similar topics
- **Further Reading**: External resources
- **Prerequisites**: What to know before studying
- **Difficulty Badge**: Visual indicator of complexity level

### 3. Interactive Elements

All guides include:
- ✅ Interactive JavaScript demos
- ✅ Canvas-based visualizations
- ✅ Live code examples
- ✅ Quiz with instant feedback
- ✅ Color-coded difficulty progression
- ✅ Responsive mobile design
- ✅ Syntax-highlighted code blocks

## Course Codes
- **410** - Advanced Software Engineering
- **420** - Advanced Algorithms
- **436** - Computer Security
- **440** - Advanced Machine Learning
- **404** - Advanced Relational Databases

## Workflow

When you invoke this skill:

1. **I will read** the concept template at `c:\school\concept-template.html`
2. **I will research** the concept thoroughly
3. **I will generate** all three difficulty levels with appropriate depth
4. **I will create** interactive demos specific to the concept
5. **I will write** quiz questions to test understanding
6. **I will save** to the appropriate course's concepts folder
7. **I will update** index.html:
   - Create a "📖 Concept Guides" section if it doesn't exist
   - Add a new entry with green gradient styling (matching the Naive Bayes example)
   - Place it before the "Study Guides" section
   - Use the format: `💡 CONCEPT | [Concept Name] - Interactive Guide`

## Quality Standards

Every concept guide will:
- ✅ Build from simple to complex progressively
- ✅ Include working, tested JavaScript code
- ✅ Have clear, accurate explanations
- ✅ Use memorable analogies and examples
- ✅ Provide interactive learning experiences
- ✅ Be visually beautiful and engaging
- ✅ Link to related concepts
- ✅ Include self-assessment quizzes

## Template Placeholders

When creating a new guide, I fill in these placeholders:

- `[CONCEPT_NAME]` - The concept being explained
- `[COURSE_ID]` - Course identifier (e.g., CPSC_440)
- `[COURSE_NAME]` - Full course name
- `[OVERALL_DIFFICULTY]` - beginner/intermediate/advanced
- `[SIMPLE_EXPLANATION]` - ELI5 version
- `[ANALOGY_TEXT]` - Real-world comparison
- `[CODE_EXAMPLES]` - Language-specific implementations
- `[INTERACTIVE_DEMOS]` - Custom JavaScript visualizations
- `[QUIZ_QUESTIONS]` - Assessment items
- And many more...

## Notes

- Diagrams are created **only when truly valuable** for understanding
- Code is **functional and tested**, not pseudocode
- Explanations are **thorough but accessible**
- Math notation is **clear and properly formatted**
- Examples are **practical and realistic**
- Analogies are **memorable and accurate**

## Usage

Simply say:
```
fully-explain [concept] [course code]
```

And I'll handle the rest! 🚀
