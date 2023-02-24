// Remember we can have only one default export per file 
// we cannot add another default export to other class or variables here.

export default class Person{
    constructor(fname,lname,age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    info(){
        console.log(this.fname,this.lname,this.age);
    }
}