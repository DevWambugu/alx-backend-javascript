// 3-read_file_async.js
// import the file system module
const fs = require('fs');
// This code is similar to the sync one
// except that it defines and async function
// which returns a promise.
async function countStudents(path) {
  if (fs.existsSync(path)) {
    return new Promise((resolve) => {
      fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
          throw Error('Cannot load the database');
        }
        const result = [];
        data.split('\n').forEach((data) => {
          result.push(data.split(','));
        });
        // Filter and extract the relevant data.
        // add the first and fourth fielsds to the array
        // newFields
        result.shift();
        const newFields = [];
        result.forEach((data) => {
          newFields.push([data[0], data[3]]);
        });
        // Count and aggregate the data
        // Create a new set
        const fields = new Set();
        newFields.forEach((item) => {
          fields.add(item[1]);
        });
        const final = {};
        fields.forEach((data) => { (final[data] = 0); });
        newFields.forEach((data) => { (final[data[1]] += 1); });
        // Display the results on the standard output
        console.log(`Number of students: ${result.filter((check) => check.length > 3).length}`);
        Object.keys(final).forEach((data) => console.log(`Number of students in ${data}: ${final[data]}. List: ${newFields.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}`));
        // Handle the error if the database is not present.
        resolve(result, final, newFields);
      });
    });
  }
  throw Error('Cannot load the database');
}

module.exports = countStudents;
