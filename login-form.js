document.getElementById('submit-button').addEventListener('click', function(){
    console.log('add a submit button')
    const accountNumber=document.getElementById('account-number');
    const accountfield=accountNumber.value;
    console.log(accountfield);

    const passWord=document.getElementById('pass-word');
    const passWordText=passWord.value;
    console.log(passWordText);

    if(accountfield=='03865' &&  passWordText=='8888'){
        window.location.href='account-page.html'
    }
})