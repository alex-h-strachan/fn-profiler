# Overview and motivation
A super simple wrapper to let you understand how many times a function is being called during an event loop tick and how much time it took to run.

# Usage
```javascript
// your code before
const myFn = () => {};

// your code to run the profiler
const profile = require('fn-profiler');
const myFn = profile(() => {});

// optionally
const myFn = profile(() => {}, 'Human Friendly Name', {maxConsolesPerTick: 1});
```

# Planned improvements
* Configurability & Output.
* Logged output likely to change, don't count on it's format
