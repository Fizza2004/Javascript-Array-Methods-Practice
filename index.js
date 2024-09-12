//****----TASK 7----*****
//-----Split array into chunks of the given size----
//------SOLUTION------
// function chunkArray(array,chunkSize){
//   let results=[];
//   let i=0;
//   while(i<array.length){
//     results.push(array.slice(i,i+chunkSize));
//     i+=chunkSize;
//   }
//   return results;
// }

// const myArray = [1, 2, 3, 4, 5, 6, 7];
// console.log(chunkArray(myArray,3))


//****----TASK 4----*****
//----Array Transformation with Filter, Map, and Reduce----
// ----You have an array of transactions. Each transaction has an `amount` and a `type` ('income' or 'expense').----
//------SOLUTION------
// const transactions = [
//   { type: 'income', amount: 100 },
//   { type: 'expense', amount: 50 },
//   { type: 'income', amount: 200 },
//   { type: 'expense', amount: 150 }
// ];

// 1. Use filter() to separate income and expenses.
// let Incomes = transactions.filter(item=>item.type=='income');
// console.log('Incomes: \n',Incomes);
// let Expenses = transactions.filter(item=>item.type=='expense');
// console.log('Expenses: \n',Expenses);

// 2. Use map() to create arrays of just the amounts.
// let amounts = transactions.map(item=>item.amount);
// console.log(amounts);

// 3. Use reduce() to calculate the total income and total expenses.
//-----Total income----
// let totalIncome=transactions.reduce(function(total_income,transaction){
//   if(transaction.type==="income"){
//     total_income+=transaction.amount;
//   }
//   return total_income;
// },0);
// console.log(totalIncome);

//-----Total expenses----
// let totalExpenses=transactions.reduce(function(total_expenses,transaction){
//   if(transaction.type==="expense"){
//     total_expenses+=transaction.amount;
//   }
//   return total_expenses;
// },0);
// console.log(totalExpenses);

//add elements to new object and show it in the console
// var total = {};
// total.totalIncome = totalIncome;
// total.totalExpenses = totalExpenses;
// console.log(total);


//****----TASK 2----*****
//----Deep Flatten an Array----
// function flatArray(arr,n){
//   let newArray = [];
//   function helper(arr,depth){
//     for(item of arr){
//       if(typeof item === "object" && depth<n){
//         helper(arr,depth+1);
//       } else{
//         newArray.push(item);
//       }
//     }
//     return newArray;
//   }
//   return helper(arr,0);
// }

// const nestedArray = [1, [2, [3, 4], 5], [6], 7];
// console.log(flatArray(nestedArray,2))


//****----TASK 6----*****
//----Remove Duplicates in the array---
//------SOLUTION------
//-----First Option(Set method)-----
//Set method does not allow duplicates by using 'new' keyword we create new array for that
// const nums = [1, 2, 2, 3, 4, 4, 5];
// const numsWithoutDuplicates = [...new Set(nums)];
// console.log(numsWithoutDuplicates);

//-----Second Option(Filter method)-----
//indexOf checks the first index of the items inside the array and checks it with the cur index
// const numsWithoutDuplicates = nums.filter((item,cur_index)=>nums.indexOf(item)===cur_index);
// console.log(numsWithoutDuplicates);

