function saturdayFun(activity = "roller-skate"){
return (`This Saturday, I want to ${activity}!`);

}

saturdayFun()
saturdayFun("bathe my dog");


function mondayWork(duties = "go to the office"){
return (`This Monday, I will ${duties}.`)
}
mondayWork()
mondayWork("work from home")


function wrapAdjective(){
    let result = wrapAdjective('*')
    let emphatic = result("a hard worker")
    expect(emphatic).to.equal("You are *a hard worker*!")
  }

        function wrapAdjective(highlight) {
            return function(adjective) {
              return `You are ${highlight}${adjective}${highlight}!`;
            }
          }
          
          const emphatic = wrapAdjective("||");
          console.log(emphatic("a dedicated programmer"));