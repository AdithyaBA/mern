class A{
    constructor(firstName){
        this.age = 30;
        this.firstName = firstName;
    }
    a1(){
        console.log("I am function");;
    }
}

class B extends A{
    constructor(age){
        super(age);
        //this.firstName = firstName;
        console.log(this);
    }
}

let r = new B("adithya");
//console.log(r);