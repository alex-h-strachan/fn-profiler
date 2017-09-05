let tickRuns = {};
let willClear = false;

const clear = () => {
  if(!willClear) {
    process.nextTick(() => {
      tickRuns = {};
      willClear = false;
    })
  }
  willClear = true;
}

module.exports = (fn, name, opts) => (...args) => {
  clear(); // always make sure the tickRuns will be cleared
  tickRuns[name] = (tickRuns[name] || 0) + 1
  const st = new Date().getTime();
  const out = fn(...args);

  if (tickRuns[name] < (opts.maxConsolesPerTick || 5)) {
    console.log(name, 'took', new Date().getTime() - st);
  }
  
  console.log(tickRuns[name])
  if (2 == tickRuns[name]) {
    const runs = tickRuns[name];
    process.nextTick(() => {
      console.log(name, 'ran', runs, 'times');
    })
  }

  return out;
}
