const emailInput=document.getElementById('input-email');
const button=document.getElementById('btn-submit');


button.addEventListener('click',(e)=>{
    e.preventDefault();
    
    let regEx=/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/g;
    let myEmail=emailInput.value;
    if(myEmail.match(regEx)){
        document.getElementById('msg-error').classList.add('error');
        document.getElementById('msg-error').classList.remove('ok');
    }else{
        document.getElementById('msg-error').classList.add('ok');
        document.getElementById('msg-error').classList.remove('error');
    }

});