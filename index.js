/**
 * create an array of superhero objects.
 * then print name and costume color of every superhero in the list.
 * topics used- array, for loop, objects, function call.
 */

var superman = {
  name: "superman",
  power: "flight",
  costumeColor: "blue",
  strength: 10000,
  stealth: 0,
  intelligence: 100
}

var batman = {
  name: "batman",
  power: "martial arts",
  costumeColor:"black",
  strength: 100,
  stealth: 100,
  intelligence: 1000
}


var superheroes = [superman , batman];

for (var i=0; i< superheroes.length; i++) { //for loop
 var currentHero = superheroes[i];//array based index access
 console.log(currentHero.name);//function call
 console.log(currentHero.costumeColor);
//  currentHero.costumeColor :: object access on key
 console.log("--------------------")


}

