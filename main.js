// REPLACE WITH THOBELA'S ACTUAL WHATSAPP NUMBER
const phone = "267XXXXXXXXX"; 

function inquireVehicle(vehicleName) {
    const msg = `Hello Thobela Pawnshop! I am interested in purchasing the ${vehicleName}. Is it still available?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

function requestLoan(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const item = document.getElementById('item').value;
    const amount = document.getElementById('amount').value;
    
    const msg = `Hello Thobela Pawnshop! I would like to request a loan.\n\nName: ${name}\nItem to Pawn: ${item}\nAmount Needed: P${amount}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}
