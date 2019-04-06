const rawInput = require('readline-sync').question
question_list = [
"How many continents are there?",  
"What is the capital of India?",			
"NG mei kaun se course padhaya jaata hai?"
]


options_list = [
// pehle question ke liye options
["Four", "Nine", "Seven", "Eight"],
// second question ke liye options
["Chandigarh", "Bhopal", "Chennai", "Delhi"],
// third question ke liye options
["Software Engineering", "Counseling", "Tourism", "Agriculture"]
]

solution_list = [3, 4, 1]

money =[1000,2000,3000]
for (let i = 0; i < question_list .length; i++) {
        console.log("Aapka Sawaal hai:")
        console.log(i + 1, question_list[i])
        for (let j = 0; j <= options_list.length; j++) {
            console.log(j + 1,options_list[i][j])
        }
        let userInput = rawInput("guess user input")
        userInput = parseInt(userInput)
        console.log(typeof(userInput))
        
            if (userInput===solution_list[i]){
                console.log("Congrats! Aapka answer sahi hai aap jeete hai : Rs" )
                 console.log(money[i])
            }
            else {
                 console.log("your ans is wrong you can try next question.")
             }   
        
    }