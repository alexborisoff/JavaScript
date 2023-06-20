class User {
    name = 'Antosha';
    age = 20;
    listPermission = ['admin', 'user', 'manager'];
    signIn() {
        console.log('DJ Eban Sign In');
    }
    logOut() {
        console.log('DJ Eban Log Out');
    }
}

class Admin extends User {
    permission = this.listPermission[0];
    banList = [];
    addBan() {
        this.permission === 'admin'
            ? console.log("It's admin")
            : this.banList.push(this.permission);
    }
    addPermission() {
        console.log('Permission added');
    }
}

class Manager extends Admin {
    permission = this.listPermission[1];
    showBanList() {
        console.log(this.banList);
    }
}

class GeneralUser extends User {
    showName() {
        console.log(this.name + ' ' + this.age);
    }
}

let gUser = new GeneralUser();
gUser.showName();

let user = new User('Nikita', 20, 'isAdmin');
user.signIn();
user.logOut();

let admin = new Admin();
admin.addBan();

let manager = new Manager();
manager.showBanList();
