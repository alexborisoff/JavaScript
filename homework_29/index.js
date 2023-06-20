class User {
    name = 'Antosha';
    age = 20;
    permission = 'isUser';
    signIn() {
        console.log('DJ Eban Sign In');
    }
    logOut() {
        console.log('DJ Eban Log Out');
    }
}

class Admin extends User {
    banList = [];
    addBan() {
        console.log('Added in ban');
    }
    addPermission() {
        console.log('Permission added');
    }
}

class Manager extends Admin {
    showBanList() {
        console.log(banList);
    }
}

class GeneralUser extends User {
    showName() {
        console.log(this.name + ' ' + this.age + ' ' + this.permission);
    }
}

let gUser = new GeneralUser();
gUser.showName();

let user = new User('Nikita', 20, 'isAdmin');
user.logOut();
