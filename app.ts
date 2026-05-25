// const a = ():string => {
//     return "Hello"
// }

// const a = ():void => {
    
// }

const abcd = (name:string, age: number, cb: (arg: string) => void) => {
    cb("Hey beta")
}

abcd("Umayer", 21, (arg: string) => {
    console.log("Hola Hola")
})