const db = require("../database/db-config");
const Actors = require("./actors-model");

beforeEach(async () => {
  await db.seed.run();
});

describe("actors find", () => {
  test("find", async () => {
    const res = await Actors.find();
    expect(res).toHaveLength(4);
  });

  test("findById", async () => {
      const res = await Actors.findById(1)
      expect(res.name).toBe("Brad Pitt")
  })

  test("insert", () => {
      await Actors.insert(1, { name: "Ryan Gosling", movie: "Drive"})
      const actor = await db("actors").select()
      expect(actors).toHaveLength(5)
  })

  test("update", async () => {
    await Actors.update(1, {name: "Ryan Gosling", movie: "BladeRunner 2049"})
    const actor = await Actors.findById(1)
    expect(actor.name).toBe("Ryan Gosling")
    expect(actor.movie).toBe("BladeRunner 2049")
  })

  test("remove", async () => {
      await Actors.remove(1)
      const actors = await Actors.find()
      expect(actors).toHaveLength(3)
    })
}); 


