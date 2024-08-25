function printRandomNumber() {
    setInterval(() => {
      console.log(Math.floor(Math.random() * 100));
    }, 2000);
  }
  
  printRandomNumber()