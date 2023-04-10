let string = ``;

let buttons = document.querySelectorAll('.same-digit');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
       
        if(e.target.innerText == '='){
            string = eval(string);
            document.querySelector('#input').value = string;
        }
        
        else if(e.target.innerText == 'AC'){
            string = "";
            document.querySelector('#input').value = string;
        }
                 
        
        else{

            string = string + e.target.innerText;
            document.querySelector('input').value = string;
           
        }
});
})
