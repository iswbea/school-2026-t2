# Music DSL - User Study Materials & Check-In 2

## User Study Document

### Introduction

This is a Domain-Specific Language (DSL) for creating music through code. You'll write programs that define sounds as mathematical functions and organize rhythmic patterns using arrays. The program runs inside a step sequencer that executes your code repeatedly at musical time intervals.

### Basic Concepts

**Step Sequencer Clock:**
- Music is divided into **bars** (measures)
- Each bar contains a fixed number of **steps** (default: 8)
- Your code runs once per step
- The **tempo** determines how fast steps happen (in BPM)

**Special Variables (read-only):**
- `step` - Current step number (0 to 7 in an 8-step bar)
- `bar` - Current bar number (starts at 0)
- `t` - Time in seconds since the current sound started (for synthesis)

**Special Variables (mutable):**
- `tempo` - Beats per minute (can be changed)
- `steps` - Number of steps per bar (can be changed)

---

### Language Features

#### 1. Variables and Types

```
int x = 5;
float volume = 0.8;
int[] pattern = [1, 0, 1, 0];
```

Supported types: `int`, `float`, `int[]`, `float[]`, `function[]`

#### 2. Arrays

Arrays hold patterns, sequences of numbers, or even functions:

```
int[] kicks = [1, 0, 0, 1, 0, 0, 1, 0];
float[] melody = [C4, E4, G4, E4];
function[] drums = [kick, snare, hihat];
```

**Accessing arrays:**
```
int value = kicks[0];        // gets first element (1)
kicks[3] = 1;                // changes 4th element to 1
```

**Array repetition operator:**
```
int[] pattern = [1, 0] * 4;  // creates [1, 0, 1, 0, 1, 0, 1, 0]
```

#### 3. Functions

Functions define sounds (returning audio samples) or trigger events (mutating state):

**Sound function (returns audio):**
```
function float kick() {
    return sin(t * 60) * exp(-t * 10);
}
```
This creates a kick drum sound using a sine wave that decays exponentially.

**Event function (changes state):**
```
function void drop() {
    tempo = 140;
    kicks = [1, 1, 1, 1] * 2;
}
```

**Functions with parameters:**
```
function float bass(float freq) {
    return saw(t * freq) * exp(-t * 3);
}
```

#### 4. Playing Sounds

```
play(kick);              // play the kick function
play(bass, 220);         // play bass function at 220 Hz
play(drums[step]);       // play function from array
```

#### 5. Main Loop

```
function void main() {
    // Your code here runs every step
    if (kicks[step] == 1) {
        play(kick);
    }
}

tick(main);  // Register main to run every step
```

#### 6. Built-in Waveforms

- `sin(frequency)` - Sine wave
- `saw(frequency)` - Sawtooth wave
- `square(frequency)` - Square wave
- `triangle(frequency)` - Triangle wave
- `noise()` - White noise

#### 7. Note Names

Instead of frequencies, you can use note names:
```
C4   // Middle C (261.63 Hz)
A#3  // A sharp
Bb5  // B flat
```

---

### Example Snippets for User Study

#### Example 1: Simple Kick Drum Pattern
**Code:**
```
function float kick() {
    return sin(t * 60) * exp(-t * 10);
}

int[] pattern = [1, 0, 0, 0, 1, 0, 0, 0];

function void main() {
    if (pattern[step] == 1) {
        play(kick);
    }
}

tick(main);
```

**What happens:**
- A kick drum sound plays on steps 0 and 4 of each bar
- This creates a basic four-on-the-floor rhythm at the current tempo
- The kick sound is a sine wave that starts at 60Hz and decays quickly

**Audio output:** "boom ... ... ... boom ... ... ..." (repeating)

---

#### Example 2: Bassline with Melody Array
**Code:**
```
function float bass(float freq) {
    return saw(t * freq) * exp(-t * 3);
}

float[] melody = [C2, C2, G2, G2] * 2;

function void main() {
    play(bass, melody[step]);
}

tick(main);
```

**What happens:**
- Every step plays a bass note
- The melody array has 8 elements: C2, C2, G2, G2, C2, C2, G2, G2
- Creates a repeating two-note bassline

**Audio output:** Low "vroom vroom vroooom vroooom" pattern repeating

---

#### Example 3: Multiple Drums with Array of Functions
**Code:**
```
function float kick() {
    return sin(t * 60) * exp(-t * 10);
}

function float snare() {
    return noise() * exp(-t * 8);
}

function float hihat() {
    return noise() * exp(-t * 50);
}

function[] drums = [kick, snare, hihat];
int[] pattern = [0, 2, 1, 2] * 2;

function void main() {
    play(drums[pattern[step]]);
}

tick(main);
```

**What happens:**
- Three drum sounds defined as functions
- Stored in a `drums` array
- Pattern array contains indices: [0, 2, 1, 2, 0, 2, 1, 2]
- Each step plays: kick, hihat, snare, hihat, kick, hihat, snare, hihat

**Audio output:** "boom tss psh tss boom tss psh tss" (repeating)

---

#### Example 4: Evolving Pattern with State Mutation
**Code:**
```
function float kick() {
    return sin(t * 60) * exp(-t * 10);
}

int[] kicks = [1, 0, 0, 0] * 2;

function void main() {
    if (kicks[step] == 1) {
        play(kick);
    }
    
    if (bar == 4 && step == 0) {
        kicks = [1, 0, 1, 0] * 2;
    }
    
    if (bar == 8 && step == 0) {
        kicks = [1, 1, 1, 1] * 2;
    }
}

tick(main);
```

**What happens:**
- Bars 0-3: Kick plays every 4 steps (step 0 and 4)
- Bar 4: Pattern changes - kick now plays every 2 steps
- Bar 8: Pattern changes - kick plays every step
- Music builds intensity over time

**Audio output:** 
- Bars 0-3: "boom ... ... ... boom ... ... ..."
- Bars 4-7: "boom ... boom ... boom ... boom ..."
- Bars 8+: "boom boom boom boom boom boom boom boom"

---

#### Example 5: Conditional Logic with Energy Build
**Code:**
```
function float bass(float freq) {
    return saw(t * freq) * exp(-t * 3);
}

float energy = 0;
float[] melody = [C2, C2, G2, G2];

function void main() {
    energy = min(energy + 0.01, 1);
    
    if (energy > 0.5) {
        play(bass, melody[step % 4]);
    }
}

tick(main);
```

**What happens:**
- `energy` starts at 0 and increases by 0.01 each step
- Bass only plays once energy exceeds 0.5 (after ~50 steps / ~6 bars)
- `step % 4` cycles through melody array indices 0, 1, 2, 3
- Creates a gradual introduction of the bassline

**Audio output:**
- First ~6 bars: silence
- After ~6 bars: bassline fades in and continues

---

### Tasks for User Study Participants

**Task 1: Understanding Existing Code**
Look at Example 3 (Multiple Drums). Without running it:
- What will play on step 5?
- How would you make the snare play twice as often?

**Task 2: Modify a Pattern**
Starting with Example 1 (Simple Kick), modify the code to:
- Make the kick play on steps 0, 2, 4, and 6 (every other step)

**Task 3: Create a New Sound**
Write a function called `clap` that:
- Uses the `noise()` waveform
- Decays with `exp(-t * 15)`
- Make it play on steps 2 and 6

**Task 4: Build a Simple Song Structure**
Using Example 4 as inspiration, create a program that:
- Starts with a hihat pattern playing every step
- At bar 4, adds a kick on steps 0 and 4
- At bar 8, changes tempo to 140

---

## Language Design Changes

### Changes Under Consideration

1. **Syntax sugar for cycling through arrays**
   
   **Current (verbose):**
   ```
   float[] melody = [C2, G2, C3, G3];
   function void main() {
       play(bass, melody[step % 4]);
   }
   ```
   
   **Option A: Auto-cycling arrays**
   ```
   float[] melody = [C2, G2, C3, G3];
   function void main() {
       play(bass, melody[step]);  // auto wraps if step > 3
   }
   ```
   
   **Option B: Pattern indexing**
   ```
   float[] melody = [C2, G2, C3, G3];
   function void main() {
       play(bass, melody.at(step));  // explicit cycle
   }
   ```

2. **Preset instrument library**
   
   Instead of requiring users to write synthesis math:
   ```
   import instruments;
   
   function float kick = instruments.kick();     // use preset
   function float snare = instruments.snare();
   ```
   
   Or let users customize presets:
   ```
   function float myKick = instruments.kick(pitch=50, decay=12);
   ```

3. **Duration parameter for `play()`**
   
   **Current:** Sound duration determined by envelope decay
   ```
   play(kick);  // plays until envelope reaches ~0
   ```
   
   **Proposed:** Optional duration parameter
   ```
   play(bass, C2, 0.5);  // play for 0.5 seconds then cut
   ```

4. **Simplified step sequencing syntax**
   
   **Current:**
   ```
   int[] pattern = [1, 0, 0, 1, 0, 0, 1, 0];
   function void main() {
       if (pattern[step] == 1) {
           play(kick);
       }
   }
   ```
   
   **Proposed sugar:**
   ```
   schedule(kick, [1, 0, 0, 1, 0, 0, 1, 0]);
   ```

---

## Project Timeline Changes

### Original Timeline
- Week 6-7: Lexer/Parser
- Week 8: Type checker
- Week 9-10: Interpreter/Audio engine
- Week 11: Testing
- Week 12: Final polish

### Revised Timeline

**Week 6-7: Lexer/Parser** ✅ (on track)
- No changes needed
- Already handling arrays, functions, operators

**Week 8: Type Checker + Semantics** (expanded)
- Added: Array bounds checking semantics
- Added: Polyphony specification
- Added: Function array type checking
- Added: `t` variable scope rules

**Week 9: Core Interpreter** (split from audio)
- Focus on: AST evaluation, state mutation, control flow
- Separate audio generation into next week
- Reason: Need solid semantics before worrying about audio

**Week 10: Audio Engine + Built-ins** (new focus)
- Sample generation from math functions
- Built-in waveforms (sin, saw, noise, etc.)
- `play()` implementation with polyphony
- **New:** Preset instrument library (if time)

**Week 11: User Study 2 + Iteration**
- Run final user study with working prototype
- Quick iteration based on feedback
- Bug fixes

**Week 12: Testing + Polish**
- Unit tests (see below)
- Integration tests
- Documentation
- Demo songs

### Why the change?
- Separating interpreter from audio generation reduces complexity
- Want working prototype ready for final user study (week 11)
- More time to resolve semantic ambiguities before implementation

---

## New Tests Based on Current Status

### Unit Tests from Snippets

#### Parser Tests (from Example 1)
```python
def test_parse_function_declaration():
    code = """
    function float kick() {
        return sin(t * 60) * exp(-t * 10);
    }
    """
    ast = parser.parse(code)
    assert ast.type == "FunctionDecl"
    assert ast.return_type == "float"
    assert ast.name == "kick"
    assert len(ast.params) == 0
```

#### Type Checker Tests (from Example 3)
```python
def test_function_array_type():
    code = """
    function[] drums = [kick, snare, hihat];
    """
    # Should pass: all elements are functions
    type_checker.check(code)
    
def test_mixed_array_error():
    code = """
    function[] drums = [kick, 5, hihat];
    """
    # Should fail: mixing functions and ints
    with pytest.raises(TypeError):
        type_checker.check(code)
```

#### Array Tests (from Example 2)
```python
def test_array_repetition():
    code = "[C2, G2] * 3"
    result = interpreter.eval_expression(code)
    assert result == [C2, G2, C2, G2, C2, G2]

def test_array_indexing():
    code = """
    int[] pattern = [1, 0, 1, 0];
    int x = pattern[2];
    """
    result = interpreter.run(code)
    assert result.variables['x'] == 1
```

#### State Mutation Tests (from Example 4)
```python
def test_pattern_mutation():
    code = """
    int[] kicks = [1, 0, 0, 0];
    kicks = [1, 1, 1, 1];
    """
    result = interpreter.run(code)
    assert result.variables['kicks'] == [1, 1, 1, 1]

def test_element_mutation():
    code = """
    int[] kicks = [1, 0, 0, 0];
    kicks[2] = 1;
    """
    result = interpreter.run(code)
    assert result.variables['kicks'] == [1, 0, 1, 0]
```

#### Step Sequencer Tests (from Example 4)
```python
def test_bar_progression():
    code = """
    int count = 0;
    function void main() {
        if (bar == 4 && step == 0) {
            count = count + 1;
        }
    }
    tick(main);
    """
    sequencer = Sequencer(code, steps=8)
    sequencer.run_bars(5)  # Run 5 bars
    assert sequencer.variables['count'] == 1  # Triggered once at bar 4

def test_step_cycling():
    code = """
    int[] pattern = [1, 0, 1, 0];
    int[] outputs = [];
    function void main() {
        outputs.push(pattern[step]);
    }
    tick(main);
    """
    sequencer = Sequencer(code, steps=4)
    sequencer.run_bars(2)  # 2 bars * 4 steps = 8 steps
    assert sequencer.variables['outputs'] == [1, 0, 1, 0, 1, 0, 1, 0]
```

### Error Handling Tests

#### Array Bounds Errors
```python
def test_array_bounds_int():
    code = """
    int[] arr = [1, 2, 3];
    int x = arr[10];
    """
    result = interpreter.run(code)
    assert result.variables['x'] == 0  # Out of bounds returns 0

def test_array_bounds_function():
    code = """
    function[] drums = [kick, snare];
    play(drums[5]);
    """
    with pytest.raises(IndexError):
        interpreter.run(code)  # Should error on function arrays
```

#### Type Errors
```python
def test_wrong_return_type():
    code = """
    function float kick() {
        return 5;  // int, not float
    }
    """
    # Should auto-convert or error?
    # Decision needed, but we need a test

def test_play_non_function():
    code = """
    int x = 5;
    play(x);
    """
    with pytest.raises(TypeError):
        interpreter.run(code)
```

#### Semantic Errors
```python
def test_undefined_variable():
    code = """
    int x = y + 1;
    """
    with pytest.raises(NameError):
        interpreter.run(code)

def test_tick_non_function():
    code = """
    int x = 5;
    tick(x);
    """
    with pytest.raises(TypeError):
        interpreter.run(code)
```

### Integration Tests

#### Full Example Tests
```python
def test_example_1_kick_pattern():
    """Test that Example 1 produces correct play calls"""
    code = load_example(1)
    sequencer = Sequencer(code, steps=8)
    sequencer.run_bars(1)
    
    # Should call play(kick) on steps 0 and 4
    assert sequencer.play_calls == [
        (0, 'kick', None),  # (step, function, frequency)
        (4, 'kick', None)
    ]

def test_example_3_drum_pattern():
    """Test that Example 3 indexes correctly"""
    code = load_example(3)
    sequencer = Sequencer(code, steps=8)
    sequencer.run_bars(1)
    
    expected = ['kick', 'hihat', 'snare', 'hihat', 
                'kick', 'hihat', 'snare', 'hihat']
    actual = [call[1] for call in sequencer.play_calls]
    assert actual == expected

def test_example_4_evolution():
    """Test that Example 4 mutates pattern correctly"""
    code = load_example(4)
    sequencer = Sequencer(code, steps=8)
    
    # Bar 0-3: pattern is [1,0,0,0,1,0,0,0]
    sequencer.run_bars(4)
    bar_0_to_3_calls = len([c for c in sequencer.play_calls if c[0] in [0, 4]])
    assert bar_0_to_3_calls == 8  # 2 per bar * 4 bars
    
    # Bar 4-7: pattern changes to [1,0,1,0,1,0,1,0]
    sequencer.play_calls = []  # Reset
    sequencer.run_bars(4)
    bar_4_to_7_calls = len(sequencer.play_calls)
    assert bar_4_to_7_calls == 16  # 4 per bar * 4 bars
```

### Test Organization by Component

**Lexer:** (already standard)
- Token recognition
- Number literals, identifiers, keywords
- String handling for note names

**Parser:**
- Function declarations (Examples 1-5)
- Array literals and repetition (Examples 1-5)
- Variable declarations (Examples 1-5)
- Control flow (Example 4, 5)
- Special variables (step, bar, t)

**Type Checker:**
- Function type checking (Example 3)
- Array type homogeneity (Example 3)
- Return type matching (Examples 1, 2, 3)
- Built-in function signatures

**Interpreter:**
- Variable scoping
- State mutation (Example 4, 5)
- Array operations (Examples 1-5)
- Function calls (Examples 1-5)
- Expression evaluation

**Audio Engine:**
- Waveform generation (sin, saw, noise)
- Function sample generation
- Polyphony (multiple play calls)
- Note name conversion (C4 → frequency)

**Sequencer:**
- Step/bar tracking
- tick() registration
- Tempo/BPM timing
- Main loop execution

---

## Summary

**Language Changes:**
- Considering: preset instruments, envelope helpers, auto-cycling arrays
- Keeping: core array/function/state features
- Need to clarify: `t` scope, polyphony, bounds checking, duration control

**Timeline:**
- Splitting interpreter/audio work into separate weeks
- Adding user study 2 in week 11 with working prototype
- More time for semantic specification

**Tests:**
- Can convert all 5 examples into integration tests
- Need error handling tests for edge cases
- Unit tests for each component using snippet features
