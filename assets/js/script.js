// first class ticket
document.getElementById('first-increment').addEventListener('click', function() {
    handleTicketTaken(true, 'first');
    getTicketValue('first');
});
document.getElementById('first-decrement').addEventListener('click', function() {
    handleTicketTaken(false, 'first');
    getTicketValue('first');
});

// economy class ticket
document.getElementById('economy-increment').addEventListener('click', function() {
    handleTicketTaken(true, 'economy');
    getTicketValue('economy');
});
document.getElementById('economy-decrement').addEventListener('click', function() {
    handleTicketTaken(false, 'economy');
    getTicketValue('economy');
});

// book now button
document.getElementById('book-now').addEventListener('click', function() {
    if (totalTicketPrice(true) > 0) {
        alert('Thank You. \nYour Booking Has Been Confirmed! \n' + 'Your Total Cost:  ' + '$' + totalTicketPrice(true));
    } else {
        alert('Please Pay The Money.');
    }
});


function handleTicketTaken(isIncrease, ticketClass) {
    var shipTicketName = document.getElementById(ticketClass + '-class');
    var shipTicketCount = parseInt(shipTicketName.value);

    var shipTicketNewCount =  shipTicketCount;
    if (isIncrease == true) {
        shipTicketNewCount =  shipTicketCount + 1;
    } 
    if (isIncrease == false && shipTicketCount > 0) {
        shipTicketNewCount =  shipTicketCount - 1;
    }
    shipTicketName.value = shipTicketNewCount;

    totalTicketPrice(); 

}

function totalTicketPrice(bookNow) {
    var firstTicketValue = getTicketValue('first');
    var economyTicketValue = getTicketValue('economy');

    var totalTicketAmount = firstTicketValue * 150 + economyTicketValue * 100;
    document.getElementById('sub-amount').innerText = '$' + totalTicketAmount;

    var vat = totalTicketAmount / 10;
    document.getElementById('vat').innerText = '$' + vat;

    var totalAmount = totalTicketAmount + vat;
    document.getElementById('total-amount').innerText = '$' + totalAmount;

    if (bookNow == true) {
        return totalAmount;
    }
}

function getTicketValue(ticketName) {
    var ticketInput = document.getElementById(ticketName + '-class');
    var ticketValue = parseInt(ticketInput.value);
    return ticketValue;
}
