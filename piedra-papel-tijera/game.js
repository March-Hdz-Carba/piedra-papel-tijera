let btnrock = document.getElementById('btn-piedra');
let btnpaper = document.getElementById('btn-paper');
let btnsissors = document.getElementById('btn-sissors');

btnrock.onclick = function (){
    let user = 0;
    let pc = Math.floor(Math.random() * 3);
    gameplay(user, pc)
    console.log('Soy piedra');
    console.log('pc', pc);
}
btnpaper.onclick = function (){
    let user = 1;
    let pc = Math.floor(Math.random() * 3);;
    gameplay(user, pc)
    console.log('Soy papel');
    console.log('pc', pc);
}
btnsissors.onclick = function (){
    let user = 2;
    let pc = Math.floor(Math.random() * 3);;
    gameplay(user, pc)
    console.log('Soy tijeras');
    console.log('pc', pc);
}

function gameplay(user, pc) {
    if(user === pc){
        let messaje = document.getElementById('messaje').innerHTML = '<img src="images/tie.gif">';
        return messaje;
    }else if((user === 1 && pc === 0) || (user === 2 && pc === 1) || (user === 0 && pc === 2)){
        let messaje = document.getElementById('messaje').innerHTML = '<img src="images/giphy.gif">';
        return messaje;
    }else{
        let messaje = document.getElementById('messaje').innerHTML = '<img src="images/youlose.gif">';
        return messaje;
    } 
}

