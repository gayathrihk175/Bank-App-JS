// These are the deposit and withdraw buttons
const depositBtn = document.querySelector("#deposit-button");
const withdrawBtn = document.querySelector("#withdraw-button");

// The two input fields where the value is entered
const depositAmt = document.querySelector("#deposit-secondary")
const withdrawAmt = document.querySelector("#withdraw-secondary");

// These are display areas where final amounts are displayed
const depositText = document.querySelector("#deposit-primary");
const withdrawText = document.querySelector("#withdraw-primary");
const balanceText = document.querySelector("#balance-primary");

// Implementing deposit functionality and logic
depositBtn.addEventListener("click",() => {
    let depositAmtValue = Number(depositAmt.value);
    // console.log(typeof(depositAmtValue))
    // console.log(typeof(depositAmt.value))
    // console.log(depositAmtValue);

    let currentDepositValue = Number(depositText.innerText) 
    let updatedDepositTotal = currentDepositValue + depositAmtValue;
    depositText.innerText = updatedDepositTotal
    depositAmt.value = "";

    let currentBalanceValue = Number(balanceText.innerText);
    let updatedBalanceTotal = currentBalanceValue + depositAmtValue;
    balanceText.innerText = updatedBalanceTotal;

})

// Implementing withdraw functionality and logic
withdrawBtn.addEventListener("click", () => {
    let withdrawAmtValue = Number(withdrawAmt.value);
    console.log(withdrawAmtValue);
    
    let currentWithdrawValue = Number(withdrawText.innerText);
    let updatedWithdrawValue = currentWithdrawValue + withdrawAmtValue;
    withdrawText.innerText = updatedWithdrawValue;
    withdrawAmt.value = "";

    let manipulatedBalance = Number(balanceText.innerText);
    let finalBalance = manipulatedBalance - withdrawAmtValue;
    balanceText.innerText = finalBalance; 
})


