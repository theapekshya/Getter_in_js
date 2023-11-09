// js Accessors(Getter)

var person = {
    name : "Anu",
    age : 20,
   get getname()
    {
       return this.name.toUpperCase();
    }
};
console.log(person.getname);