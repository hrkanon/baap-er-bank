document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInputValue = document.getElementById("deposit-input").value;
    console.log(depositInputValue);

    const currentDeposit = document.getElementById("current-deposit");
    const currentDepositTotal = currentDeposit.innerText;

    const totalDeposit =
      parseFloat(currentDepositTotal) + parseFloat(depositInputValue);

    currentDeposit.innerText = totalDeposit;

    // update balance
    const currentBalance = document.getElementById("current-balance");

    const currentTotal = currentBalance.innerText;

    const totalBalance =
      parseFloat(currentTotal) + parseFloat(depositInputValue);

    currentBalance.innerText = totalBalance;

    // clear the depositInputField
    document.getElementById("deposit-input").value = "";
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const newWithdrawAmount = withdrawInput.value;
    const currentWithdraw = document.getElementById("current-withdraw");
    const currentWithdrawAmount = currentWithdraw.innerText;
    const totalWithdraw =
      parseFloat(currentWithdrawAmount) + parseFloat(newWithdrawAmount);
    currentWithdraw.innerText = totalWithdraw;

    const currentBalance = document.getElementById("current-balance");
    const currentBalanceAmount = currentBalance.innerText;
    const totalBalance =
      parseFloat(currentBalanceAmount) - parseFloat(newWithdrawAmount);
    currentBalance.innerText = totalBalance;

    // clear input field
    withdrawInput.value = "";
  });
