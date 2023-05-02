let user = {
    name: 'name',
    surname: 'surname',
    age: 20,
    listFavoritePhrases: [],
    getName() {
        return this.name = prompt('Input name: ');
    },

    getSurname() {
        return this.surname = prompt('Input surname: ');
    },

    getAge() {
        return this.age = +prompt('Input age: ');
    },

    getFavoritePhrase() {
        let isValid = true;
        let phrase;
        while (isValid) {
            phrase = prompt('Input phrase: ');
            this.listFavoritePhrases.push(phrase);
            if (
                phrase === 'stop' ||
                phrase === '' ||
                typeof(phrase) === 'object' ||
                Number(phrase) ||
                Boolean(phrase.match(/\d/))
                ) {
                this.listFavoritePhrases.pop();
                isValid = false;
            } 
        } 
    },

    getText() {
        let updArray = [];
        for (let i = 0; i < this.listFavoritePhrases.length; i++){
            updArray += this.listFavoritePhrases[i] + ' ';
        }
        return updArray;
    },
}

alert(user.getName());
alert(user.getSurname());
alert(user.getAge());
alert(user.getFavoritePhrase());
console.log(user.getText());

