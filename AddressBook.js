class AddressBook {
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else throw "Invalid First Name!!"
    }
    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else throw "Invalid last Name!!"
    }
    get address() { return this._address; }
    set address(address) {
        let addressRegex = RegExp("^[A-Za-z]{4,}$");
        if (addressRegex.test(address))
            this._address = address;
        else throw "Invalid Address!!";
    }
    get city() { return this._city; }
    set city(city) {
        let cityStateRegex = RegExp("^[A-Za-z]{4,}$");
        if (cityStateRegex.test(city))
            this._city = city;
        else throw "Invalid City "
    }
    get state() { return this._state; }
    set state(state) {
        let cityStateRegex = RegExp("^[A-Za-z]{4,}$");
        if (cityStateRegex.test(state))
            this._state = state;
        else throw "Invalid State!!";
    }
    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp("^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$");
        if (zipRegex.test(zip))
            this._zip = zip;
        else throw "Invalid Zip"
    }
    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp("^[1-9]{1}[0-9]{9}$");
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw "Imvalid Phone Number"
    }
    get email() { return this._email; }
    set email(email) {
        let emailRegex = RegExp("^([a-z]+)([0-9])*([_+-.]{1}[a-z0-9]+)*(@)([a-z0-9]+)[.]([a-z]{2,})([.][a-z]{2}){0,1}$");
        if (emailRegex.test(email))
            this._email = email;
        else throw "Invalid Emial "
    }

    // ToString Method
    toString() {
        return "First Name : " + this.firstName + "\nLast Name : " + this.lastName + "\nAddress : " + this.address + "\nCity : " + this.city + "\nState : " + this.state + "\nZip : " + this.zip + "\nPhone Number : " + this.phoneNumber + "\nEmail : " + this.email;
    }
}
try {
    let addressBook = new AddressBook("Sunil", "Gollapalli", "Jangaon", "Warangal", "Telangana", "506167", "9381938427", "sunilg@gmail.com");
    console.log(addressBook.toString());
} catch (e) {
    console.error(e);
}
