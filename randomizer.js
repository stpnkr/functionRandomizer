function randomizer (arr) {
    let randomNumbers_arr = [];
      while ((randomNumbers_arr.length) < arr.length) { 
      let randomNum = Math.floor(Math.random() * (arr.length));
  
      if (!randomNumbers_arr.includes(randomNum)) {
        randomNumbers_arr.push(randomNum);
      }
  
    }
        
    let new_arr = [];
    for (i = 0; i < arr.length; i++) {
      new_arr.push(arr[randomNumbers_arr[i]]);
      
    }
      
  return new_arr;
  
  };
