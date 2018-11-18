const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizer) {
    this._courses.appetizers.push(appetizer);
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(main) {
    this._courses.mains.push(main);
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessert) {
    this._courses.desserts.push(dessert);
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this.courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this.courses[courseName];
    const index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your order is: ${appetizer.name}, ${main.name}, ${dessert.name} and total price is: $${totalPrice}`;
  }
};


menu.addDishToCourse('appetizers', 'wings', 10);
menu.addDishToCourse('appetizers', 'nachos', 9);
menu.addDishToCourse('appetizers', 'mozz sticks', 8);

menu.addDishToCourse('mains', 'steak', 20);
menu.addDishToCourse('mains', 'spaghetti', 17);
menu.addDishToCourse('mains', 'seafood', 18);

menu.addDishToCourse('desserts', 'icecream', 5);
menu.addDishToCourse('desserts', 'brownies', 5);
menu.addDishToCourse('desserts', 'coffee and tea', 5);


const meal = menu.generateRandomMeal();
console.log(meal)
