// alert("connected")

// What is the spread operator and why would I want to use it?


const reiLastWeek = {
    name: "Rei",
    employer: "Access Labs",
    borough: "Brooklyn",
    tired: true
  }

  const changes = {
    tired: false,
    lecturing: true
  }

  const reiThisWeek = {
    ...reiLastWeek,
    ...changes,
    daysWorkingOut: [
      "Wednesday"
    ],
  }

  const reiNextWeek = {
    ...reiThisWeek,
    daysWorkingOut: []
  }

  // reiNextWeek.name = "Reinald"
  // reiNextWeek.employer = "Not access labs"

  reiNextWeek.daysWorkingOut.push("Thursday")
  reiNextWeek.daysWorkingOut.push("Friday")
  
  // console.log(reiNextWeek.daysWorkingOut)
  // console.log(reiWeek)
  // console.log(reiThisWeek)
  // console.log(reiNextWeek)
  // console.log(reiNextWeek)
  // console.log(reiThisWeek  === reiNextWeek)
  // console.log(reiNextWeek === reiNextWeek)
  // console.log(reiNextWeek === reiThisWeek)
  


// Could I do it to an array?
  
  
  
  const firstThreeMonths = ["January", "February", "March"]; 
  
  const lastSixMonths = ["July", "August", "September", "October", "November", "December"];

  const firstSixMonths = [...firstThreeMonths, "April", "May", "June"]

  console.log(firstSixMonths)

  const firstHalfOfTheYear = [firstSixMonths[0], firstSixMonths[1], firstSixMonths[2], firstSixMonths[3], firstSixMonths[4], firstSixMonths[5]]

  // console.log(firstHalfOfTheYear)
  console.log(firstSixMonths[0] === firstHalfOfTheYear[0])
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


  