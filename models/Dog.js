const db = require("../db");

class Dog {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }

  static async all() {
    const result = await db.query(`SELECT id, name, age FROM dogs;`);
    return result.rows.map(row => new Dog(row));
  }

  static async create({ name, age }) {
    const result = await db.query(
      `INSERT INTO dogs (name, age) VALUES ($1, $2) RETURNING id, name, age`,
      [name, age]
    );
    return new Dog(result.rows[0]);
  }
}

module.exports = Dog;
