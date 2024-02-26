// 2-read_file.js
// Import the module for handling the file system
const fs = require('fs');

// Define a function that takes the path argument
// specifying the path to the database file
function countStudents(path) {
  try {
    // Read and process te database file
    const data = fs.readFileSync(path, 'utf8');
    // parse the data. This code works by spliting the
    // the lines using '\n' and then splits the result
    // using the delimiter ',.' The resulting array of
    // arrays is stored in the results variable.
    const result = [];
    data.split('\n').forEach((data) => {
      result.push(data.split(','));
    });
    // Filter and extract the relevant data.
    // add the first and fourth fielsds to the array
    // newFields
    result.shift();
    const newFields = [];
    result.forEach((data) => newFields.push([data[0], data[3]]));
    // Count and aggregate the data
    // Create a new set
    const fields = new Set();
    newFields.forEach((item) => fields.add(item[1]));
    const final = {};
    fields.forEach((data) => { (final[data] = 0); });
    newFields.forEach((data) => { (final[data[1]] += 1); });
    // Display the results on the standard output
    console.log(`Number of students: ${result.filter((check) => check.length > 3).length}`);
    Object.keys(final).forEach((data) => console.log(`Number of students in ${data}: ${final[data]}. List: ${newFields.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}`));
    // Handle the error if the database is not present.
  } catch (E) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
