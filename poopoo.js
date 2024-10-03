
var petKitty = 0;

function petHim() {
    petKitty += 1;
    
    if (petKitty < 2) {
    document.getElementById('pet-kitty-times').innerHTML = `You've pet kitty ${petKitty} time.`;
    }
    
    else {
    document.getElementById('pet-kitty-times').innerHTML = `You've pet kitty ${petKitty} times.`;
    }
}
