class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    return this.newName;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    return this.newCode;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}

export default Airport;
