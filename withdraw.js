// step 1 : Declar the event listener
document
.getElementById("btn-withdraw")
.addEventListener("click", function () {
  // step 2 : Withdraw Fild where add amount
  const withdrawFild = document.getElementById("withdrawFild");
  const withdrawAmount = parseFloat(withdrawFild.value);

  // step 3 : previou withdraw template
  const preWithdrawStrign = document.getElementById("preWithdraw");
  const preWithdraw = parseFloat(preWithdrawStrign.innerText);

  // step 4 : total Blance Amount
  const totalFild = document.getElementById("totalFild");
  const totalAmountFild = parseFloat(totalFild.innerText);

  if (!isNaN(withdrawAmount) && withdrawAmount >= 0 && withdrawAmount  < totalAmountFild) {
    preWithdrawStrign.innerText = withdrawAmount + preWithdraw;
    totalFild.innerText = totalAmountFild - withdrawAmount;
  }
  else {
    alert('Gvie right amount of taka')
  }
  withdrawFild.value = '';
});