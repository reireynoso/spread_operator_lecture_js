// What is the spread operator and why would I want to use it?

// 1. Copying information of an object and storing it into another object
// 2. Avoid mutating directly. 
// 3. In react, we do not mutate state. State in memory triggers rerender. spread operator changes object in memory
// 4. setState uses spread under hood.

// const rei2018 = {
//     name: "Rei",
//     employer: "Board of Education",
//     city: "Jersey City",
//     tired: true,
//     info: {
//         hair: "black",
//         wearsGlasses: false
//     },
//     programmingLanguages: []
// }

// Pass By Value
let testingThisOut = "test"

let test = testingThisOut

// console.log(test)

testingThisOut = "Eric"
// test = testingThisOut

// console.log(testingThisOut)
// console.log(test)

// Pass By Reference



// Both 2019 and 2018 are pointing to the same space in memory

// const rei2019 = rei2018 
// const rei2019 = Object.assign({}, rei2018)
// const rei2019 = {
//     ...rei2018
// }

const learnedLanguages = []

const rei2018 = {
    name: "Rei",
    employer: "Board of Education",
    city: "Jersey City",
    tired: true,
    info: {
        hair: "black",
        wearsGlasses: false
    },
    programmingLanguages: learnedLanguages
}


const changes = {
    employer: "Access Labs",
    city: "Brooklyn",
    programmingLanguages: learnedLanguages,
    stillTired: true
}

const rei2019 = {
    ...rei2018,
    ...changes,
    // employer: "Access Labs",
    // city: "Brooklyn",
    // programmingLanguages: [],
    // stillTired: true,
    // tired: true,
    // info: {
    //     hair: "black",
    //     wearsGlasses: false
    // },
}

// rei2019.programmingLanguages.push("Ruby")
// rei2019.programmingLanguages.push("Javascript")



// console.log("rei2018", rei2018)
// console.log("rei2019", rei2019)


// const rei2019 = {
//     ...rei2018,
//     ...changes
// }

// const rei2020 = {
//     ...rei2019,
//     programmingLanguages: []
// }


// Could I do it to an array?
  

  


// const winterMonths = firstThreeMonths

// winterMonths.push("December")

// console.log(winterMonths)
// console.log(firstThreeMonths)

const firstThreeMonths = ["January", "February", "March"]; 
const lastSixMonths = ["July", "August", "September", "October", "November", "December"];


const firstSixMonths = [...firstThreeMonths, "April", "May", "June"]

const firstHalfOfTheYear = [...firstSixMonths]

// firstHalfOfTheYear.push("Mazen")

// console.log(firstSixMonths === firstHalfOfTheYear)
// console.log(firstSixMonths)
// console.log(firstHalfOfTheYear)


//   const firstSixMonths = [...firstThreeMonths, "April", "May", "June"]


//   const firstHalfOfTheYear = [firstSixMonths[0], firstSixMonths[1], firstSixMonths[2], firstSixMonths[3], firstSixMonths[4], firstSixMonths[5]]

  // console.log(firstHalfOfTheYear)
//   console.log(firstSixMonths[0] === firstHalfOfTheYear[0])
  // console.log(firstSixMonths.join(" and "))
  // console.log(firstSixMonths === firstHalfOfTheYear)

  


// Could I do it to the parameters of a function?


function giveMeSomeParams(arg1, arg2, arg3){
    // let arg1;
    console.log(arg1)
    // console.log(arg2)
    // console.log(arg3)
}

const mazen = ["Chocolate", "Dogs", "Eric", "Alex"]

giveMeSomeParams(...mazen)
// giveMeSomeParams("Chocolate", "Dogs", "Eric", "Alex")
// ...mazen => "Chocolate", "Dogs", "Eric"
























 
  // function canTakeSixArguments(arg1, arg2, arg3) {
  //   console.log(arg1,arg2,arg3)
    
  // }
 
  // const lastSixMonths = ["July", "August", "September", "October", "November", "December"];
  
  // spread
  // canTakeSixArguments(lastSixMonths[0],lastSixMonths[1],lastSixMonths[2],lastSixMonths[3])


  
  // canTakeSixArguments(...lastSixMonths)


  