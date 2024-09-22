
function goToBlog(){
    document.getElementById('home').style.display = 'none';
    document.getElementById('credits').style.display = 'none';
    document.getElementById('blog').style.display = 'block';
    document.getElementById('images').style.display = 'none'
    document.getElementById('abtme').style.display = 'none'
}

function goToHome(){
    document.getElementById('home').style.display = 'block';
    document.getElementById('credits').style.display = 'none';
    document.getElementById('blog').style.display = 'none';
    document.getElementById('images').style.display = 'none';
    document.getElementById('abtme').style.display = 'none'
}

function goToCredits(){
    document.getElementById('home').style.display = 'none';
    document.getElementById('credits').style.display = 'block';
    document.getElementById('blog').style.display = 'none';
    document.getElementById('images').style.display = 'none';
    document.getElementById('abtme').style.display = 'none'
}

function goToImages(){
    document.getElementById('home').style.display = 'none';
    document.getElementById('credits').style.display = 'none';
    document.getElementById('blog').style.display = 'none';
    document.getElementById('images').style.display = 'block';
    document.getElementById('abtme').style.display = 'none'
}

function goToAbtme() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('credits').style.display = 'none';
    document.getElementById('blog').style.display = 'none';
    document.getElementById('images').style.display = 'none';
    document.getElementById('abtme').style.display = 'block'
}

function alertUser() {
    window.alert('This is a placeholder, this section of the website is coming soon!')
}

console.log('my javascript is so bad');