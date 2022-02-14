const BASE_URL = 'https://data.cityofnewyork.us/resource/erm2-nwe9.json'
const brooklyn = '?agency=NYPD&borough=BROOKLYN'
const manhattan = '?agency=NYPD&borough=MANHATTAN'
const queens = '?agency=NYPD&borough=QUEENS'
const staten = '?angency=NYPD&borough=STATEN ISLAND'
const bronx = '?agency=NYPD&borough=BRONX'
const div = document.querySelector('div')

let userInput = document.querySelector('input') 
const brooklynButton = document.querySelector('#brooklyn')
const manhattanButton = document.querySelector('#manhattan')
const queensButton = document.querySelector('#queens')
const statenButton = document.querySelector('#staten')
const bronxButton = document.querySelector('#bronx')



function results(arr){

    for(let i = 0; i < arr.length; i++){
        div.innerHTML += `<ul><li>${arr[i].complaint_type}</li></ul>`;
        div.innerHTML += `<button onlick= 'addedInfo()'id = 'moreInfo'>What did the Police Do?</button>`;
        
    }
}

brooklynButton.addEventListener('click', async () =>{
    let valueInput = userInput.value;
    if(valueInput == ''){
        valueInput= 10
    }
    try{
        let response = await axios.get(`${BASE_URL}${brooklyn}&$limit=${valueInput}`);
        let result = response.data;
        console.log(result)
    results(result)
    }
    catch (error) {
        console.log(error)
    }
});
manhattanButton.addEventListener('click', async () =>{
    let valueInput = userInput.value;
    if(valueInput == ''){
        valueInput= 10
    }
    try{
        let response = await axios.get(`${BASE_URL}${manhattan}&$limit=${valueInput}`);
        let result = response.data;
        console.log(result)

        results(result)
    }
    catch (error) {
        console.log(error)
    }
});
queensButton.addEventListener('click', async () =>{
    let valueInput = userInput.value;
    if(valueInput == ''){
        valueInput= 10
    }
    try{
        let response = await axios.get(`${BASE_URL}${queens}&$limit=${valueInput}`);
        let result = response.data;
        console.log(result)

        results(result)
    }
    catch (error) {
        console.log(error)
    }
});