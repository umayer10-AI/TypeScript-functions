"use strict";
// const a = ():string => {
//     return "Hello"
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const a = ():void => {
// }
// const abcd = (name:string, age: number, cb: (arg: string) => void) => {
//     cb("Hey beta")
// }
// abcd("Umayer", 21, (arg: string) => {
//     console.log(arg)
// })
// const a = (name: string, age:number, gender?: string) => {
//     console.log(name,age,gender)
// }
// a("Umayer",21,"male")
// a("lala",210)
const a = (name, age, gender = "Others") => {
    console.log(name, age, gender);
};
a("Umayer", 21, "male");
a("lala", 210);
//# sourceMappingURL=app.js.map