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

console.log(classGrades)

let whoKnows: any = 4

whoKnows = 'foo'
whoKnows = false

const darkestPlaceOnEarth = (): void => { //we can use void if we don't want to specify a type. Without void we will get "undefined"
    console.log('Marianas Trench')
}

let x = darkestPlaceOnEarth()

const tweetLength = (message: string): number => {
    return message.length //returns the length of the string object => number
}

interface Animal { // interface allows us to impose structure on our objects, below we can re-use the structure of Animal in our dog object
    breed: string
    weight: number 
}

//using interface the compiler can catch errors before the program is run.
//if we modify the interface in a new object it will show an error.
let dog: Animal = {
    breed: "Border Collie",
    weight: 25
}

const sayHappyBirthday = (name: string | null) => { //here we are using the union type => name can be a string or it can be null
    if (name) {
        console.log(`Happy Birthday, ${name}!!`) //if param is a string
    } else {
        console.log('Happy Birthday!') //if param is null
    }
   
}

sayHappyBirthday("Kobe")
sayHappyBirthday(null) //we need to specify null or will return an error

//we can make a parameter optional by adding a ? to the param when declaring it:
const sayHappyBirthdayTwo = (name?: string) => { 
    if (name) {
        console.log(`Happy Birthday, ${name}!!`) //if param is a string
    } else {
        console.log('Happy Birthday!') //if param is null
    }
   
}