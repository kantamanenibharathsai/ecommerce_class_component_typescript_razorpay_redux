const memorizeCalc = (add) => {
  const cache = new Map();
  return (...args) => {
    const argId = args.toString();
    if (cache.has(argId)) {
      return cache.get(argId);
    } else {
      console.time();
      for (let i = 0; i < 10000000000; i++) {}
      console.timeEnd();
      const result = add(...args);
      cache.set(argId, result);
      return result;
    }
  };
};
let add = (a, b) => a + b;
let memorzieAdd = memorizeCalc(add);

console.log(memorzieAdd(1, 2));
console.log(memorzieAdd(5, 5));
console.log(memorzieAdd(1, 2));
console.log(memorzieAdd(5, 5));
