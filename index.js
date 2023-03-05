//SELECTORS
const Inp=document.querySelector('.inpu');
const Btn=document.querySelector('.ipbtn');
const Lst=document.querySelector('.items');


//EVENT LISTERS
Btn.addEventListener('click',additm);
Lst.addEventListener('click',CheckDel);

//FUNCTIONS
function additm(event)
{
    event.preventDefault(); 
    //Todo DIV
    const todoDIV=document.createElement('div');
    todoDIV.classList.add("todo");
    //create LI
    const newtodo=document.createElement('li');
    newtodo.innerText=Inp.value;
    newtodo.classList.add('lst');
    todoDIV.appendChild(newtodo);
    //Verify Btn
    const verifiedBtn=document.createElement('Button');
    verifiedBtn.innerHTML='<i class="fas fa-check"></i>';
    verifiedBtn.classList.add("completebtn");
    todoDIV.appendChild(verifiedBtn);
    //Cancel Btn
    const cnclBtn=document.createElement('Button');
    cnclBtn.innerHTML='<i class="fas fa-trash"></i>';
    cnclBtn.classList.add("cancelbtn");
    todoDIV.appendChild(cnclBtn);

    //Append to List
    Lst.appendChild(todoDIV);
    //Clear input
    Inp.value="";
}

function CheckDel(e)
{
    const obj=e.target;
    //Del
    if(obj.classList[0]==='cancelbtn')
    {
        obj.parentElement.classList.add("fall");
        obj.parentElement.addEventListener('transitionend',function(){
            obj.parentElement.remove();
        });
    }
    //Check
    if(obj.classList[0]==='completebtn')
    {
        obj.parentElement.classList.toggle("Completed");
    }
}