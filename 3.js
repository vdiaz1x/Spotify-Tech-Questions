// Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

// test strings
let money = 10
let coins = [1,2,3]

// function
function changePossibilities(amount, denomination){
  // sorting the denominations to make sure they are ascending
  denomination.sort()

  // make a new array to hold the subtotals
  let subs = []

  // this fills the subs array with the possibilities (subtotals)
  // to get the combinations, you can get the combinations of the total minus the values except the first one
  // in this case, the values will be the total minus the second biggest number, and the total minus the biggest number
  for(let i=1;i<denomination.length;i++){
    // the subtotals are placed in the first index
    // i starts at one to not get errors with the denomination index
    subs[i-1] = money-denomination[i]
  }

  // store the tally of the possibilities
  let tally=0

  // loop through the subtotals
  subs.forEach(s => {
    // loop through the denominations
    // divide the subtotal by each denomination except the smallest one
    // by dividing the subtotal by the denomination, the total combinations for that denomination are shown
    for(let j=1;j<denomination.length;j++){
      // adds the product of this division to the tally
      // strip the division of decimals, and coerce the toFixed answer from string to number
      tally += +(s/denomination[j]).toFixed(0)
      }
    }
  )

  // return tally +1, because the lowest denomination will always be one possibility
  return tally+1

}

changePossibilities(money, coins)
