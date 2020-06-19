const greeting = (person: string) => {
    console.log("G'day " + person) 
}

greeting("Steph")

let isAwesome: boolean = true
let decimalNumber: number = 42
let binaryNumber: number = 0b101010 //42
let octalNumber: number = 0o52 // 42
let hexNumber: number = 0x2a //42
console.log(decimalNumber)
console.log(binaryNumber)
console.log(octalNumber)
console.log(hexNumber)
console.log(hexNumber.toString(2)) // here we are passing the basenumber which converts hex to binary
console.log(binaryNumber.toString(16)) // this will convert binary to hex

let myPets: string[] = ['Kobe', 'Julius', 'Whiskers', 123] //here we will get a type error because 123 is not a string
myPets.push(456) //we will again get a type error because 456 is not a string

let myTuple: [string, number, boolean] //we can create an array with different types, this is called a tuple
myTuple = ['chair', 20, true] //we must assign the type in order as declared

//In the case an array would have any types it would be declared this way => any[]
//We don't typically use any in Typescript as it is prone to creating errors

enum ShirtSizes {
    S, M, L, XL
}

console.log(ShirtSizes) //prints => { '0': 'S', '1': 'M', '2': 'L', '3': 'XL', S: 0, M: 1, L: 2, XL: 3 }
console.log(ShirtSizes.M) //This comes in handy when we may want to use this as an index in an array

enum Grades {
    A, B, C, D, F
}

let classGrades: Grades[] = [Grades.A, Grades.C, Grades.F]
console.log(classGrades) //prints [ 0, 2, 4 ]

// enum Grades {
//     A = 5, B, C, D, F (here we can assign a starting value which will increment by 1)
// }

//Or

// enum Grades {
//     A = 'Awesome!', B = 'Great!', C = 'Good!', D = 'Good Effort', F = 'Better luck next time' (here we can assign a string to each value)
// }
