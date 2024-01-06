class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Getter
  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
//  Object.defineProperty(Building, 'prototype', {
//    value: Object.create(null),
//    writable: false,
//  });

export default Building;
