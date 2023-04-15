var detectiveGenre = "detective";
var horrorGenre = "horror";
var fantasticGenre = "fantastic";
var interestInBooks = confirm("Do you like books?");
var whatGenre, userAge, reason, book;

if (interestInBooks) {
        whatGenre = prompt("What genre of books do you like?");
        
        if (whatGenre === detectiveGenre || whatGenre === horrorGenre ||whatGenre === fantasticGenre) {
        userAge = +prompt("Your age?");
            (userAge && userAge <= 10) ? book = "Murder on the Orient Express" :
            (userAge && userAge <= 20) ? book = "Alphabetical murders" :
            (userAge && userAge <= 30) ? book = "Picnic at Plague Fort" :
                                        book = "1984";
            alert(book);              
        }   
        
        else {
            alert("Sorry, we can't help you :(");
        }   
} 
    
    else {
        reason = prompt("What is the reason you don't like books?");
        userAge = +prompt("Your age?");
            (userAge && userAge <= 10) ? book = 'Murder on the Orient Express' :
            (userAge && userAge <= 20) ? book = 'Alphabetical murders' :
            (userAge && userAge <= 30) ? book = 'Picnic at Plague Fort' :
                                        book = '1984';

        alert("I understand why you don't like it, " +
        reason + ' but I suggest you reading ' + book);
}