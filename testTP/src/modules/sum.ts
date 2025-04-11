export function sumSmallNumbers(a:number,b:number): number {
  if( a < 0 || b < 0){
      throw new Error("Les nombres doivent être positifs")
  }
  else if (a > 9 || b > 9) {
      throw new Error("Les nombres doivent être inférieurs à 10")
  }

  return a + b;  
};

export function sum(numA: number, numB: number){
  return sumSmallNumbers(numA, numB);
};

export function addition(numA: number, numB: number){
  return (numA + numB);
  const tabA = numA.toString().split('');
  const tabB = numB.toString().split('');
  let firstTab= []
  let secondTab = [];

  if (tabA.length > tabB.length){
    firstTab = tabA
    secondTab= tabB
  }
  else {
    firstTab = tabB;
    secondTab = tabA
  }
  
  firstTab = firstTab.reverse()
  secondTab = secondTab.reverse()
  
  console.log('firstTab : '+ firstTab)
  console.log('secondTab : ' + secondTab)
  let total = [];
  let retenue = "0";
  
  for (let i = 0; i < firstTab.length; i++){
      let firstNb = firstTab[i];
      let secondNb = secondTab[i];
      let somme:any = 0
      let newRetenue = '0'
      if (secondNb){
        somme = sum(parseInt(firstNb),parseInt(secondNb))
        
        if (somme > 9){
            newRetenue = somme.toString().slice(0, -1)
            somme = somme.toString().slice(-1)
        }
      }
      else {
          somme = firstNb
      }
    
    if (parseInt(retenue) >0){
        somme = sum(parseInt(somme),parseInt(retenue))
         if (somme > 9){
            newRetenue = somme.toString().slice(0, -1)
            somme = somme.toString().slice(-1)
        }
    }
    total.push(somme)
    retenue = newRetenue
      console.log(somme)
  }
   
if (parseInt(retenue) >0){
      total.push(retenue)
    }
  
  total = total.reverse();
  const result = total.join('')
 
  return parseInt(result)
  

};
