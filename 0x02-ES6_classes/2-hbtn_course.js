class HolbertonCourse {
  constructor (name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new Error('students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter
  get name () {
    return this._name;
  }
  set name(newName) {
  }

  get length () {
    return this._length;
  }
  set length(newLength) {
  }

  get students () {
    return this._students;
  }
  set students(newStudents) {
  }
}

export default HolbertonCourse;
