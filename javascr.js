

function goToBlog(){
    document.getElementById('home').style.display = 'none';
    document.getElementById('credits').style.display = 'none';
    document.getElementById('blog').style.display = 'block';
    document.getElementById('changelog').style.display = 'none';
    document.body.style.backgroundImage = "url('background-imgz/stacked-waves-haikei.svg')";
    document.getElementById('moon').style.display = 'none';
    document.getElementById('saturn').style.display = 'none';
}

function goToHome(){
    document.getElementById('home').style.display = 'block';
    document.getElementById('credits').style.display = 'none';
    document.getElementById('blog').style.display = 'none';
    document.getElementById('changelog').style.display = 'none';
    document.body.style.backgroundImage = "url('background-imgz/homebg.svg')";
    document.getElementById('moon').style.display = 'block';
    document.getElementById('saturn').style.display = 'none';
}

function goToCredits(){
    document.getElementById('home').style.display = 'none';
    document.getElementById('credits').style.display = 'block';
    document.getElementById('blog').style.display = 'none';
    document.getElementById('changelog').style.display = 'none';
    document.body.style.backgroundImage = "url('background-imgz/low-poly-grid-haikei.svg')";
    document.getElementById('moon').style.display = 'none';
    document.getElementById('saturn').style.display = 'none';
}

function goToChangeLog() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('credits').style.display = 'none';
    document.getElementById('blog').style.display = 'none';
    document.getElementById('changelog').style.display = 'block';
    document.body.style.backgroundImage = "url('background-imgz/layered-peaks-haikei.svg')";
    document.getElementById('moon').style.display = 'none';
    document.getElementById('saturn').style.display = 'block';
}

function petHim(){
    petKitty += 1;
    document.getElementById('pet-kitty-times').innerHTML = `You've pet kitty ${petKitty} times`;
}

var petKitty = 0;

function alertUser(){window.alert('This is a placeholder, this section of the website is coming soon!');}

let ver = 'V1.02';

console.log('my javascript is so bad dont look i beg');
console.log(`The version is ${ver}`);