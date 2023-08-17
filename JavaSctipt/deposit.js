 // step 1
 document
 .getElementById("btn-deposit")
 .addEventListener("click", function () {
   // step 2 : Input fild to add new deposit Amount
   const depositFild = document.getElementById("depositFild");
   const depositStringAmount = depositFild.value;
   const depositAmount = parseFloat(depositStringAmount);

   // step 3 : Previous deposit Amount
   const blanceFild = document.getElementById("blanceFild");
   const blanceSrignAmount = blanceFild.innerText;
   const blanceAmount = parseFloat(blanceSrignAmount);

   // step 4 : total Blance Amount
   const totalFild = document.getElementById("totalFild");
   const totalAmountFild = parseFloat(totalFild.innerText);
   console.log(typeof totalStringFild);

   //step 5
   if (!isNaN(depositAmount) && depositAmount >= 0) {
     //step 6
     blanceFild.innerText = depositAmount + blanceAmount;
     totalFild.innerText = totalAmountFild + depositAmount;
   } else {
     alert("!! Please provide a  number");
   }
   // step 7 : make the input Fild empty
   depositFild.value = "";
 });