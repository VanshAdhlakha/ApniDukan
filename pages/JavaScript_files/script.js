// let m = document.getElementById('minus');
// let p = document.getElementById('plus');


// if (m && p) {
//     let q = document.getElementById('qty');
//     let t = document.getElementById('total');

//     let qnt = 1;      
//     let price = 500; 


//     p.addEventListener('click', function(){
//         qnt++;                   
//         q.textContent = qnt;     
//         t.textContent = price * qnt;
//     });


//     m.addEventListener('click', function(){
//         if(qnt > 1){             
//             qnt--;               
//             q.textContent = qnt; 
//             t.textContent = price * qnt; 
//         }
//     });
// }

// let magicBox = document.querySelector('#magic-box');

// if (magicBox) {

//     magicBox.addEventListener('mouseover', function(){
//         magicBox.style.backgroundColor = '#e63946'; 
//         magicBox.style.transition = "0.3s";        
//     });


//     magicBox.addEventListener('mouseout', function(){
//         magicBox.style.backgroundColor = '#2c3e3c'; 
//     });
// }



let m = document.getElementById('minus');
let p = document.getElementById('plus');

if (m && p) {
    let q = document.getElementById('qty');
    let t = document.getElementById('total');

    let qnt = 1;      
    let price = 500;  

    p.addEventListener('click', function(){
        qnt++;
        q.textContent = qnt; 
        t.textContent = price * qnt; 
    });

    m.addEventListener('click', function(){
        if(qnt > 1){             
            qnt--;                
            q.textContent = qnt;  
            t.textContent = price * qnt; 
        }
    });
}



let magicBox = document.querySelector('#magic-box');

if (magicBox) {
    magicBox.addEventListener('mouseover', function(){
        magicBox.style.backgroundColor = '#e63946'; 
        magicBox.style.transition = "0.3s";         
    });

    magicBox.addEventListener('mouseout', function(){
        magicBox.style.backgroundColor = '#2c3e3c'; 
    });
}



const emailInput = document.getElementById('email-box');

if (emailInput) {
    const emailError = document.getElementById('error-msg');

    emailInput.addEventListener('input', function(){
        if (emailInput.value.includes("@")){
            emailError.textContent = "Valid Email!";
            emailError.style.color = "green"; 
        }
        else{
            emailError.textContent = "INVALID EMAIL ADDRESS";
            emailError.style.color = "red";
        }
    });
}