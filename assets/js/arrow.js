const link=document.querySelector('.productive-li');
const arrow=document.getElementById('arrow-icon');

let stateArrow=false;
let count=0;

link.addEventListener('mouseover',()=>{
    if(count%2==0){
        arrow.setAttribute('src','assets/images/icon-arrow-white.svg');
        count++;
    }
});

link.addEventListener('mouseout',()=>{
    if(!count%2==0){
        arrow.setAttribute('src','assets/images/icon-arrow.svg');
        count++;
    }
});