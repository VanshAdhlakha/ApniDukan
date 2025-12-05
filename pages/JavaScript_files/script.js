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