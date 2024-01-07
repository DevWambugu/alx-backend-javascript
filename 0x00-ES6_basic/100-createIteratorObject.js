export default function createIteratorObject(report) {
  const iterator = [];
  for (const employee of Object.values(report.allEmployees)) {
    iterator.push(...employee);
  }
  return iterator;
}
