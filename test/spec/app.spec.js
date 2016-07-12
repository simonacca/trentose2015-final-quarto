/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the MonsterModel object */

describe("Monster", function() {

  it("should initialize correctly", function() {
    expect(MonsterModel.currentMonsterIndex).toBe(null);
    MonsterModel.init();
    expect(MonsterModel.currentMonsterIndex).toBe(0);
  });

  it("should retrive the correct pokemon", function() {
    expect(MonsterModel.getCurrentMonster()).toBe(MonsterModel.collection[0]);
  });

  it("should correctly catch a pokemon", function() {
    MonsterModel.catchMonster(MonsterModel.collection[0].name);
    expect(MonsterModel.getCurrentMonster()).toBe(MonsterModel.collection[1]);
  });

  it("should incorrectly catch a pokemon", function() {
    MonsterModel.catchMonster(MonsterModel.collection[0].name);
    expect(MonsterModel.getCurrentMonster()).not.toBe(MonsterModel.collection[2]);
  });

  it("should correctly end the game", function() {
    var lastElementIndex = MonsterModel.collection.length - 1;
    MonsterModel.currentMonsterIndex = lastElementIndex;
    MonsterModel.catchMonster(MonsterModel.collection[lastElementIndex]);
    expect(MonsterModel.getCurrentMonster()).toBe(MonsterModel.collection[lastElementIndex]);
  });

});
