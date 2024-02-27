const { readDatabase } = require('../utils');

class StudentsController {
// The method accepts request and response as argument
// It should return a status 200
// It calls the function readDatabase from the utils file, and display in the page:
// First line: This is the list of our students
// And for each field (order by alphabetic order case insensitive), a line that displays the number of students in the field, and the list of first names (ordered by appearance in the database file) with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
// If the database is not available, it should return a status 500 and the error message Cannot load the database
  static async getAllStudents(req, res) {
    try {
      const fieldMap = await readDatabase('./database.csv');
      let output = 'This is the list of our students\n';

      Object.keys(fieldMap).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })).forEach((field) => {
        const students = fieldMap[field];
        output += `Number of students in ${field.toUpperCase()}: ${students.length}. List: ${students.join(', ')}\n`;
      });

      res.status(200).send(output);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
  // The method accepts request and response as argument
  // It should return a status 200
  // It uses a parameter that the user can pass to the browser major. The major can only be CS or SWE. If the user is passing another parameter, the server should return a 500 and the error Major parameter must be CS or SWE
  // It calls the function readDatabase from the utils file, and display in the page the list of first names for the students (ordered by appearance in the database file) in the specified field List: LIST_OF_FIRSTNAMES_IN_THE_FIELD
  // If the database is not available, it should return a status 500 and the error message Cannot load the database
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.query;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fieldMap = await readDatabase('./database.csv');
      const students = fieldMap[major] || [];
      const output = `List: ${students.join(', ')}`;

      res.status(200).send(output);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
