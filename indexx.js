const pets = [
    { name: `Max`, type: `dog`, bornOn: 2018 },
    { name: `Angel`, type: `cat`, bornOn: 2015 },
    { name: `Jasper`, type: `dog`, bornOn: 2016 }
  ];
  
  const getAge = pet => new Date().getFullYear() - pet.bornOn;
  
  let petsWithAge = [];
  pets.forEach(el=> {
    el.age = getAge(el)
    petsWithAge.push(el)
  }); 

  console.log(petsWithAge);

 let dogs = [];
 pets.forEach(el=>el.type === "dog" && dogs.push(el))
  console.log(dogs);
  


  let jasper;
  pets.forEach(el=> el.name === "Jasper" && (jasper = el))

console.log(`Jasper is ${jasper.age} years old`);