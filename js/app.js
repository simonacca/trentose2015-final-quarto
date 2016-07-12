/*
 * MonsterModel provides basic methods to iterate
 * over a collection of "monsters"
 */
var MonsterModel = {

   /* Collection of available monsters */
   collection : monsters,
   currentMonsterIndex: null,

   /* Start the iteration over the collection of monsters.
   it sets the first element as the current monster */
   init : function() {
     this.currentMonsterIndex = 0;
   },

   /*   Returns the current monster and sets as current monster
    * the next element in the array.
    * If no more monsters are available, it returns null
    */
   getCurrentMonster : function () {
     return this.collection[this.currentMonsterIndex];
   },

   /* Checks if the name of the current monster
    * is monsterName. It returns true if the user
    * correctly named the monster, false otherwise
    */
   catchMonster : function (monsterName){
    if (monsterName == this.getCurrentMonster().name){
       alert('Caught!');

       if (this.currentMonsterIndex >= this.collection.length - 1){
         alert('No more monsters');
       }
       else {
         this.currentMonsterIndex += 1;
       }
     }
     else {
       alert('Sorry, master');
     }
   },
};

function updateInterface(){
  $("#monsterPicture").attr("src", MonsterModel.getCurrentMonster().pic);
  $("#monsterCatched").html(MonsterModel.currentMonsterIndex);
}

function catchButtonAction(){
  var guess = $("[name='monsterName']").val();
  MonsterModel.catchMonster(guess);
  updateInterface();
}
