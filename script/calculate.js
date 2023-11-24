


document.addEventListener('DOMContentLoaded', function () {

    let balance = 1240;
    let withdrawAmount = 0;
    let depositAmount = 0;

    const depositForm= document.getElementById("deposit-amount");
    depositForm.innerHTML= depositAmount;

    const withdrawForm= document.getElementById("withdraw-amount");
    withdrawForm.innerHTML= withdrawAmount;

    const balanceForm= document.getElementById("balance-amount");
    balanceForm.innerHTML= balance;

    document.getElementById("btn-deposit").addEventListener('click', function () {

        depositAmount=document.getElementById("deposit-form").value;
        depositForm.innerHTML= depositAmount;
        balance=balance+parseFloat(depositAmount);
        balanceForm.innerHTML= balance;

        document.getElementById("deposit-form").value="";
    });

    document.getElementById("btn-withdraw").addEventListener('click', function () {
        
        withdrawAmount=document.getElementById("withdraw-form").value;
        
        if (parseFloat(withdrawAmount)>balance) {
            alert("You don't have enough money");
        }
        else{
            withdrawForm.innerHTML= withdrawAmount;
            balance=balance-parseFloat(withdrawAmount);
            balanceForm.innerHTML= balance;
        }
        

        document.getElementById("withdraw-form").value="";
    });

    
});


