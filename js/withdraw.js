/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener('click', function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  if(isNaN(newWithdrawTotal) || newWithdrawAmount < 0){
    alert('Something Went Wrong, Please Double Check!');
    return;
  }
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  if(newWithdrawAmount > previousBalanceTotal){
    alert(`You Can Not Withdraw Over ${previousBalanceTotal}. Because You Don't Have More than it.`);
    return;
  }
  setTextElementValueById("withdraw-total", newWithdrawTotal);
  setTextElementValueById("balance-total", newBalanceTotal);
});
