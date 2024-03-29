class Currency {
  constructor (code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter
  get code () {
    return this._code;
  }

  set code (newCode) {
    this._code = newCode;
  }

  get name () {
    return this._name;
  }

  set name (newName) {
    this._name = newName;
  }

  displayFullCurrency () {
    return `${this.name} (${this.code})`;
  }
}

export default Currency;
