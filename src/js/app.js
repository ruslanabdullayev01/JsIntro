// 1.) Confirm

confirmDarkMode = () => {
    let darkMode = confirm("Do you want dark mode?");
    darkMode ? document.body.style.backgroundColor = "#000": null
}
//confirmDarkMode()

// 2.) Prompt

ageVerification = () => {
    let age = parseInt(prompt("How old are you?"));
    age<18 ? alert("Not allowed under 18 years old") : alert("Welcome")
}
//ageVerification()

// 3.) Class and Object

class Person{
    constructor(ad,soyad,password){
        this.ad = ad,
        this.soyad = soyad,
        this.password = password
    }
    fullName = () =>`${this.ad.toUpperCase()} ${this.soyad.toUpperCase()}`
    
}

let user = new Person("Ruslan", "Abdullayev", "qwerty123")
document.body.innerHTML = "<h1 style=color:green;>" + user.fullName() + "</h1>"