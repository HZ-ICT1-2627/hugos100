// Tests for challenge 074.

const { waterPlant } = require("./solution");

describe("074: Plant Care", () => {
  test("the plant grows 5 cm", () => {
    const plant = waterPlant({ name: "Fred", height: 20 });
    expect(plant.height).toBe(25);
  });

  test("the watered property appears and is true", () => {
    const plant = waterPlant({ name: "Fred", height: 20 });
    expect(plant.watered).toBe(true);
  });

  test("the plant's name survives the watering", () => {
    const plant = waterPlant({ name: "Doortje", height: 8 });
    expect(plant).toEqual({ name: "Doortje", height: 13, watered: true });
  });
});
