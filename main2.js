// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  function atLeast19(ppl) {
    console.log('\nSome people are 19 or older')
    const date = new Date().getFullYear();
    const ofAge = ppl.some(ppl => date - ppl.year)
    console.log(ofAge);
  }
  atLeast19(people);
  // Array.prototype.every() // is everyone 19 or older?
  function everyIs19(ppl) {
    console.log('\nEveryone is 19 or older');
    const date = new Date().getFullYear();
    const old = ppl.every(person => (date - person.year) >= 19);
    console.log(old);
  }
  everyIs19(people);

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  function findID(arr, id) {
    console.log('\nFind ID of 823423')
    let found = arr.find(comment => comment.id === id)
    console.log(found);
  }
  findID(comments, 823423);

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423

  function findIndex(arr, id) {
    console.log('\nFind comment with ID 823423')
    let test = arr;
    console.log('comments array before:', test);
    let found = arr.findIndex(comment => comment.id === id)
    console.log(found)
    console.log(`removing item at index: ${found}`);
    test.splice(found, 1);
    console.log('comments after:', test)
   
    
  }
  findIndex(comments, 823423)
