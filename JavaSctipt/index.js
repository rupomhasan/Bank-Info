document
.getElementById("btn-submit")
.addEventListener("click", function () {
  const emailFild = document.getElementById("inputFild");
  const email = emailFild.value;

  const passwordFild = document.getElementById("emailPassword");
  const password = passwordFild.value;
  console.log()

  if (email === "rupom.hasan607299@gmail.com" && password === "12345") {
    window.location.href="http://127.0.0.1:5500/HTML/bank.html";
  } else {
    alert("Please provide right password && email  !!.");
  }
});