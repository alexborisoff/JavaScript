var detectiveGenre = "detective";
var horrorGenre = "horror";
var fantasticGenre = "detective";
var interestInBooks = confirm("Are you likes books?");
var whatGenre, userAge, reason, book;

if (interestInBooks) {
        whatGenre = prompt("What genre?");
        
        if (whatGenre === detectiveGenre || whatGenre === horrorGenre ||whatGenre === fantasticGenre) {
        userAge = +prompt("Your age?");

            if (userAge && userAge <= 10) {
                book = "Murder on the Orient Express";
                alert(book);
                } else if (userAge && userAge <= 20) {
                    book = "Alphabetical murders";
                    alert(book);
                } else if (userAge && userAge <= 30) {
                    book = "Picnic at Plague Fort";
                    alert(book);} 
                else {
                    book = "1984";
                    alert(book);
                }
        }   
        
        else {
            alert("Sorry, we can't help you :(");
        }   
} 
    
    else {
        reason = prompt("What reason?");
        userAge = +prompt("Your age?");

        if (userAge && userAge <= 10) {
            book = "Murder on the Orient Express";
        } else if (userAge && userAge <= 20) {
        book = "Alphabetical murders";
        } else if (userAge && userAge <= 30) {
        book = "Picnic at Plague Fort";
        } else {
        book = "1984";
        }
        alert("I understand why you don't like it, " +
        reason + " but I suggest reading " + book);
}
