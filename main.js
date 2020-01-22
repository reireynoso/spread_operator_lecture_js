// What is the spread operator and why would I want to use it?

// Situation: copying information of an object and storing it into another object
// avoid mutating directly. In react, we do not mutate state. State in memory triggers rerender. spread changes object in memory
// setState uses spread under hood.

const rei2018 = {
    name: "Rei",
    employer: "Board of Education",
    city: "Jersey City",
    tired: true,
    info: {
        hair: "black",
        wearsGlasses: false
    },
    programmingLanguages: []
}

const rei2019 = {
    name: rei2018.name,
    employer: "Access Labs",
    city: "Brooklyn",
    tired: rei2018.tired,
    info: {
        hair: rei2018.hair,
        wearsGlasses: rei2018.wearsGlasses
    },
    programmingLanguages: rei2018.programmingLanguages
}


// console.log(rei2018)

// const changes = {
//     employer: "Access Labs",
//     city: "Brooklyn",
//     programmingLanguages: ["JS", "Ruby"]
// }

// const rei2019 = {
//     ...rei2018,
//     ...changes
// }

// const rei2020 = {
//     ...rei2019,
//     programmingLanguages: []
// }


// Could I do it to an array?
  
  
const firstThreeMonths = ["January", "February", "March"]; 

const winterMonths = firstThreeMonths

winterMonths.push("December")

// console.log(winterMonths)










const lastSixMonths = ["July", "August", "September", "October", "November", "December"];


const firstSixMonths = [firstThreeMonths[0], firstThreeMonths[1], firstThreeMonths[2], "April", "May", "June"]

const firstHalfOfTheYear = []













//   const firstSixMonths = [...firstThreeMonths, "April", "May", "June"]


//   const firstHalfOfTheYear = [firstSixMonths[0], firstSixMonths[1], firstSixMonths[2], firstSixMonths[3], firstSixMonths[4], firstSixMonths[5]]

  // console.log(firstHalfOfTheYear)
//   console.log(firstSixMonths[0] === firstHalfOfTheYear[0])
  // console.log(firstSixMonths.join(" and "))
  // console.log(firstSixMonths === firstHalfOfTheYear)

  

// Could I do it to the parameters of a function?

 
  // function canTakeSixArguments(arg1, arg2, arg3) {
  //   console.log(arg1,arg2,arg3)
    
  // }
 
  // const lastSixMonths = ["July", "August", "September", "October", "November", "December"];
  
  // spread
  // canTakeSixArguments(lastSixMonths[0],lastSixMonths[1],lastSixMonths[2],lastSixMonths[3])


  
  // canTakeSixArguments(...lastSixMonths)


  