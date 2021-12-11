let task6 = document.getElementById('task6');

task6.onclick = function () {
    let text ="I was born on 06/11/2002";        
        let replace = text.replace(/(\d+)\D(\d+)\D(\d+)/g, '$3.$2.$1');       
        console.log(replace); 
}