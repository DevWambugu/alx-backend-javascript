// import file system
const fs = require('fs');
// Define a function readDatabase:
// It should read the database asynchronously
// It should return a promise
// When the file is not accessible, it should reject the promise with the error
// When the file can be read, it should return an object of arrays of the firstname of students per fields
function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      // Reject the promise with the error if the file is not accessible
      if (err) {
        reject(err);
        return;
      }

      // return an object of arrays of the firstname of students per fields
      const lines = data.trim().split('\n');
      const fieldMap = {};

      lines.forEach((line) => {
        const [firstName, _lastName, _age, field] = line.split(',');
        if (!fieldMap[field]) {
          fieldMap[field] = [];
        }
        fieldMap[field].push(firstName);
      });
      // Resolve the promise with the object of arrays
      resolve(fieldMap);
    });
  });
}

module.exports = { readDatabase };
