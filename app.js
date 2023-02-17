let select=document.getElementById('mySelect')
let body = document.querySelector('body')

function nice(params){
    if(select.value=='blue'){
        body.style.background='red';
    }
    else if(select.value=='green'){
        body.style.background='green';
    }
    if(select.value=='yellow'){
        body.style.background='yellow';
    }

    if(select.value=='blue'){
        body.style.background='blue';
    }
    if(select.value=='purple'){
        body.style.background='purple';
    }
    if(select.value=='violet'){
        body.style.background='violet';
    }
    if(select.value=='grey'){
        body.style.background='grey';
    }
    if(select.value=='black'){
        body.style.background='black';
    }
}