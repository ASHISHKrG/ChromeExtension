// chrome://extensions/

// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

const inputBtn = document.getElementById("input-btn")
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")
//let str="Button Clicked!"
let myLeads = []


// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}


tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // 2. Add the item to the listItems variable instead of the ulEl.innerHTML

       // listItems += "<li><a href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"  //OR

        listItems += `
        <li>
            <a target="_blank" href='${leads[i]}'>
                 ${leads[i]}
            </a>
        </li>`
        
        //console.log(listItems)
    }
    // 3. Render the listItems inside the unordered list using ulEl.innerHTML
   // 
    ulEl.innerHTML = listItems
inputEl.value = ""
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

// Push the value from the inputEl into the myLeads array 
// instead of the hard-coded "www.awesomeleads.com" value
// Google -> "get value from input field javascript"
inputBtn.addEventListener("click", function () {
    //inputEl.textContent=(myLeads.push("www.awesomelead.com"))
    myLeads.push(inputEl.value)
// Save the myLeads array to localStorage 
localStorage.setItem("myLeads", JSON.stringify(myLeads)) // Saving to local storage
    // PS: remember JSON.stringify()

    render(myLeads)
    
    console.log(localStorage.getItem("myLeads"))
})


function renderLeads() {

    for (let i = myLeads.length - 1; i < myLeads.length; i++) {
       // console.log(myLeads[i])
        ulEl.innerHTML += "<li>" + myLeads[i] + "<?li> "
    }
}




//-------------

// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked

let boxContent = document.getElementById("box")
//let str1="I want to open the box!"
boxContent.addEventListener("click", function () {
    console.log("I want to open the box!")
})

//------------
const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"



//---------------
const welcomeE3 = document.getElementById("welcome-el")

// Add the ability to choose the emoji as well!

function greetUser(greeting, name, emoji) {
   welcomeE3.textContent = `${greeting}, ${name} ${emoji}`
}

greetUser("Hello", "Ashish", "🔥")

//-------------

function add(num1, num2) {
    console.log("Sum of no")
    return num1 + num2
    
}

add(3, 4)
//-----------
// Create a function, getFirst(arr), that returns the first item in the array

function getFirst(arr) {
    return arr[0]
}

let firstCard = getFirst([10, 2, 5])

console.log(firstCard)