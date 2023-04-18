class SuperHero{
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
}

let r = new SuperHero("Ram");
SuperHero.setName("Bhim")
console.log(SuperHero.getName);;