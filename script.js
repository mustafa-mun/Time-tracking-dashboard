let dailyCurrent; // Data variables 
let dailyPrevious;
let weeklyCurrent;
let weeklyPrevious;
let monthlyCurrent;
let monthlyPrevious;
let title;

const innerGrid = document.getElementsByClassName("inner-grid-section"); // Grabbing elements from the DOM
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");


fetch("data.json") // Get data from json file
.then(function(response){
  return response.json();
})

.then(function(products){ // After getting data from json
  for(let i = 0; i < products.length;i++){ // Looping through json file and assigning its data to variables.(Default)
    title = products[i].title

    dailyCurrent = products[i].timeframes.daily.current
    dailyPrevious = products[i].timeframes.daily.previous

    weeklyCurrent = products[i].timeframes.weekly.current
    weeklyPrevious = products[i].timeframes.weekly.previous

    monthlyCurrent = products[i].timeframes.monthly.current
    monthlyPrevious = products[i].timeframes.monthly.previous

    innerGrid[i].innerHTML = `
    <div class="inner-elements-container">

    <div class="title-container">
    <p class="title">${title}</p>
    <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="currentcolor" fillc-rule="evenodd"/></svg>
    </div>
    <div class="status-container">
        <div>
        <p class="hrs">${dailyCurrent}hrs</p>
        </div>
        <div>
        <p class="prv">Last Month  -  ${dailyPrevious}hrs</p>
        </div>
         </div

    </div>
    `

  }

  daily.addEventListener("click",function(){ // Show daily status
    daily.style.color = "white" // Set timeframe picker active colors
    weekly.style.color = "rgb(177, 175, 175)"
    monthly.style.color = "rgb(177, 175, 175)"

    for(let i = 0; i < products.length;i++){ // Looping through json file and assigning its data to variables.
      title = products[i].title
  
      dailyCurrent = products[i].timeframes.daily.current
      dailyPrevious = products[i].timeframes.daily.previous
  
      weeklyCurrent = products[i].timeframes.weekly.current
      weeklyPrevious = products[i].timeframes.weekly.previous
  
      monthlyCurrent = products[i].timeframes.monthly.current
      monthlyPrevious = products[i].timeframes.monthly.previous
  
      innerGrid[i].innerHTML = `
      <div class="inner-elements-container">
  
      <div class="title-container">
      <p class="title">${title}</p>
      <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="currentcolor" fillc-rule="evenodd"/></svg>
      </div>
      <div class="status-container">
        <div>
        <p class="hrs">${dailyCurrent}hrs</p>
        </div>
        <div>
        <p class="prv">Last Month  -  ${dailyPrevious}hrs</p>
        </div>
         </div
  
      </div>
      `
    }
  })

  weekly.addEventListener("click", function(){ // Show weekly status
    daily.style.color = "rgb(177, 175, 175)"
    weekly.style.color = "white"
    monthly.style.color = "rgb(177, 175, 175)"

    for(let i = 0; i < products.length;i++){ // Looping through json file and assigning its data to variables.
      title = products[i].title
  
      dailyCurrent = products[i].timeframes.daily.current
      dailyPrevious = products[i].timeframes.daily.previous
  
      weeklyCurrent = products[i].timeframes.weekly.current
      weeklyPrevious = products[i].timeframes.weekly.previous
  
      monthlyCurrent = products[i].timeframes.monthly.current
      monthlyPrevious = products[i].timeframes.monthly.previous
  
      innerGrid[i].innerHTML = `
      <div class="inner-elements-container">
  
      <div class="title-container">
      <p class="title">${title}</p>
      <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="currentcolor" fillc-rule="evenodd"/></svg>
      </div>
      <div class="status-container">
        <div>
        <p class="hrs">${weeklyCurrent}hrs</p>
        </div>
        <div>
        <p class="prv">Last Month  -  ${weeklyPrevious}hrs</p>
        </div>
         </div
  
      </div>
      `
    }
  })

    monthly.addEventListener("click",function(){ // Show monthly status
      daily.style.color = "rgb(177, 175, 175)"
      weekly.style.color = "rgb(177, 175, 175)"
      monthly.style.color = "white"

      for(let i = 0; i < products.length;i++){ // Looping through json file and assigning its data to variables.
        title = products[i].title
    
        dailyCurrent = products[i].timeframes.daily.current
        dailyPrevious = products[i].timeframes.daily.previous
    
        weeklyCurrent = products[i].timeframes.weekly.current
        weeklyPrevious = products[i].timeframes.weekly.previous
    
        monthlyCurrent = products[i].timeframes.monthly.current
        monthlyPrevious = products[i].timeframes.monthly.previous
    
        innerGrid[i].innerHTML = `
        <div class="inner-elements-container">
    
        <div class="title-container">
        <p class="title">${title}</p>
        <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="currentcolor" fillc-rule="evenodd"/></svg>
        </div>
         <div class="status-container">
        <div>
        <p class="hrs">${monthlyCurrent}hrs</p>
        </div>
        <div>
        <p class="prv">Last Month  -  ${monthlyPrevious}hrs</p>
        </div>
         </div
    
        </div>
        `
      }
    })
  

})






