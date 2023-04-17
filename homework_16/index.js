var detectivesGenre = "detective";
var horrorsGenre = "horror";
var fantasticsGenre = "fantastic";
var answerAboutBooks = confirm("Do you like books?");
var genre, userAge, reason, nameBook;

if (answerAboutBooks) {
    genre = prompt("What genre of books do you like?");
        
        if (genre === detectivesGenre || genre === horrorsGenre || genre === fantasticsGenre) {
        userAge = +prompt("Your age?");
            (userAge && userAge <= 10) ? nameBook = "Murder on the Orient Express" :
            (userAge && userAge <= 20) ? nameBook = "Alphabetical murders" :
            (userAge && userAge <= 30) ? nameBook = "Picnic at Plague Fort" :
                                        nameBook = "1984";
            alert(nameBook);              
        }   else {
            alert("Sorry, we can't help you :(");
        }   
}   else {
        reason = prompt("What is the reason you don't like books?");
        userAge = +prompt("Your age?");
            (userAge && userAge <= 10) ? nameBook = 'Murder on the Orient Express' :
            (userAge && userAge <= 20) ? nameBook = 'Alphabetical murders' :
            (userAge && userAge <= 30) ? nameBook = 'Picnic at Plague Fort' :
                                        nameBook = '1984';

        alert("I understand why you don't like it, " +
        reason + ' but I suggest you reading ' + nameBook);
}