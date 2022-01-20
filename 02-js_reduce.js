// Class code examples

const numbers = [];

const callback = (oldAccumulator, currentElement)=>{
    newAccumulator = oldAccumulator + currentElement
    return newAccumulator // must ALWAYS return accumulator
    }

const sum = numbers.reduce(
    callback,
    ['h'] // Starting value of the accumulator is the second parameter
)

console.log(sum)


const students = [
	{firstName: 'John', lastName: 'Carr', age: 34},
  {firstName: 'Leonardo', lastName: 'Di Vittorio', age: 21},
  {firstName: 'Jessy', lastName: "C Scrudge", age: 99},
  {firstName: 'Lisa', lastName: "Parkers", age: 22},
  {firstName: 'Marco', lastName: "Santo", age: 48}
]



const countOlderThan30 = students.reduce( 
    (count, student)=>{
        if(student.age > 30) return count += 1
        else return count
    },
    0
)

console.log(countOlderThan30)

//building an array of strings
const classRoster = students.reduce(
    (roster, student)=>{
        roster.push(`${student.firstName} ${student.lastName}`)
        return roster
    }
    ,
    []
)

console.log("roster: ", classRoster)

// I would like to create an object with reduce that has properties that summarise the content of the students array

const summarize = students.reduce(
    ()=>{

    },
    0
)