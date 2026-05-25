// const a = ():string => {
//     return "Hello"
// }

// const a = ():void => {
    
// }


// const abcd = (name:string, age: number, cb: (arg: string) => void) => {
//     cb("Hey beta")
// }

// abcd("Umayer", 21, (arg: string) => {
//     console.log(arg)
// })


// const abcd = (name:string, age: number, cb: () => void) => {
//     cb()
// }

// abcd("Umayer", 21, () => {
//     console.log("Umayer")
// })

// const a = (name: string, age:number, gender?: string) => {
//     console.log(name,age,gender)
// }
// a("Umayer",21,"male")
// a("lala",210)

// const a = (name: string, age:number, gender:string = "Others") => {
//     console.log(name,age,gender)
// }
// a("Umayer",21,"male")
// a("lala",210)


// const sum = (...v: string[]) => {
//     console.log(v)
// }
// // sum(1,2,3,4,5,6,7,8,9,10)
// sum("um","hg","naj")


// function abcd(a: string): void;
// function abcd(a: string, b:number): number;

// function abcd(a: any, b?: any){
//     if(typeof a === "string" && b === undefined){
//         console.log("first")
//     }
//     if(typeof a === "string" && typeof b === "number"){
//         return 123
//     }
//     else throw new Error("Something is Wrong")
// }

// abcd("Umayer",21)