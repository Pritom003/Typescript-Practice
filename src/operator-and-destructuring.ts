{
    





type PersonType={
    name: string;
    age: number;
    company: string;
    Ismarried: boolean;
    salary?:number
} 
const Person:PersonType={
    name:"John",
    age:33,
    company:'x',
    Ismarried:true
}
const Person2:PersonType={
    ...Person,
    salary:23232
}
// console.log(Person2);
// res operator 
const [first , therestelement]=[1,2,3,4,5,6]

console.log("first",first);
console.log("bakishob",therestelement);


    // 
}