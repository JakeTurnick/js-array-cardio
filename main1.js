// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with


    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
  
      const people = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
      ];
      
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
      function born15(invArr) {
        console.log('\nInventors born in the 1500\'s')
        let filtered = [];
        invArr.forEach(inventor => {
            if (inventor.year >= 1500 && inventor.year < 1600) {
                filtered.push(inventor)
            }
        });
        console.log(filtered);
        return filtered;
      }
      born15(inventors)
  
      // Array.prototype.map()
      // 2. Give us an array of the inventors first and last names
      function firstLast(invArr) {
        console.log('\nFirst Last names')
        let names = [];
        names = invArr.map(names => [names.first, names.last])
        console.log(names);
        return names;
      }
      firstLast(inventors);
  
      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
      function oldToYoung(invArr) {
        console.log('\nOldest to Youngest');
        invArr.sort((a, b) => { 
            return a.year - b.year 
        });
        console.log(invArr)
      }
      oldToYoung(inventors);
  
      // Array.prototype.reduce()
      // 4. How many years did all the inventors live all together?
      function totalYears(invArr) {
        console.log('\nTotal years lived');
        let years = [];
        invArr.forEach(inv => {
            years.push(inv.passed - inv.year);
        })
        const totalYears = years.reduce((total, invYears) => invYears + total);
        console.log(totalYears);
      }
      totalYears(inventors)

  
      // 5. Sort the inventors by years lived
      function longLived(invArr) {
        console.log('\nSort by years lived');
        let yLived = [];
        invArr.forEach(inv => {
            let years = inv.passed - inv.year;
            yLived.push(years)
        })
        yLived.sort((a, b) => a - b)
        console.log(yLived);
      }
      longLived(inventors);
  
      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    //   const wiki = document.querySelector('.mw-category');
    //   const links = Array.from(wiki.querySelectorAll('a'))
    //   const de = links.map(link => link.innerHTML).filter(name => name.includes('de'))
    //   console.log(de);
  
  
      // 7. sort Exercise
      // Sort the people alphabetically by last name
      function byLast(ppl) {
        console.log('\nBy last name')
        let splitNames = [];
    
        let names = ppl.slice();
        names.forEach(name => {
            splitNames.push(name.split(', '));
        })
        splitNames.sort();

        console.log(splitNames)
      }
      byLast(people);
  
      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
      function instances(arr) {
        console.log('\nSum instances of items')

        const amount = arr.reduce((allItems, item) => {
            const currCount = allItems[item] ?? 0;
            return { ...allItems, [item]: currCount + 1}
        },{});
        console.log(amount)
      }
      instances(data);