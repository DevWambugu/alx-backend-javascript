export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // initialize the count if its not in the map method
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  // increment the count
  const count = weakMap.get(endpoint);
  weakMap.set(endpoint, count + 1);
  // Exception. Throw an error
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
