
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
// genetic 
interface student<T>{
    name: string;
    age: number;
    // id:number|string|null
    id:T
} 
const student1 :student<string>={
    name:'x',
    age:3,
    id:'123'
}
// function generics 
const getresult=<pera1Type ,pera2Type>(a:pera1Type , b:pera2Type)=>{
    if(typeof a === 'number' && typeof b ==='number'){
        return a+b
    }else {
        return (`${a}and ${b}is not number`)
    }
}  
const results =getresult<number,number>(1,3)
console.log(results);
// constraints
const getany =<t extends {length:number}>(str:t)=>{
    return str.length
}
    // 
}