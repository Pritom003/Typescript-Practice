
{
// type assertion
const Message:unknown='helo world'
const result =(Message as string).length
console.log(result);

// interface 
type PersonType={
    name: string;
    age: number;
    company: string;
    Ismarried: boolean;
    salary?:number
} 

interface Iperson{
    name: string;
    age: number;
    company: string;
    Ismarried: boolean;
    salary?:number
} 
const Person:Iperson={
    name:"John",
    age:33,
    company:'x',
    Ismarried:true
}


    // 
}