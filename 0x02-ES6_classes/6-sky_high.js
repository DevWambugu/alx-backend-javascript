// import Building class
import Building from './5-building';

// Implement a class named SkyHighBuilding that extends from Building
class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // implement a getter for the attributes
  get floors() {
    return this._floors;
  }

  set floors(newFloors) {
    return this.newFloors;
  }

  // override the warning
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}

export default SkyHighBuilding;
