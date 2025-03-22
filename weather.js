const input = document.querySelector("#input");
const results = document.querySelector("#results");
const btn = document.querySelector("#btn");
const url = "https://api.openweathermap.org/data/2.5/weather?APPID=a3ff0ea5e54fa5a846957f72620b0699&units=metric"; 

let date = new Date();
let datetime=date.toDateString()

let elements = document.getElementById("now").innerHTML=datetime



btn.addEventListener("click", async (e) => {
    e.preventDefault();
    
    const forminput = input.value.trim();    
    fetchdata(forminput);
});



async function fetchdata(place) {
    try {
        const response = await fetch(url + "&q=" + place);
       
        const data = await response.json();

        results.innerHTML = `

            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp} C</p>
            <p>Weather: ${data.weather[0].description}</p>

        `;
    } catch (error) {
        results.innerHTML = `<p>city not found</p>`;
    }
}
