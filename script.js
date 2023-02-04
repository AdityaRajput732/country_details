let container = document.querySelector('.container');
// try and catch under function
let wrong = document.querySelector('.wrong')
function getRegion(details){
    try{
fetch(`https://restcountries.com/v3.1/${details}`)
    
.then(response=> response.json())
.then(data =>  getDetails(data))
}
 catch{
 wrong.innerHTML = 'Something Went wrong!';
}
}
// getRegion(sia);
// getRegion(africa);
function getDetails(data){
    for(let i=0; i<data.length; i++){
        let country = document.createElement('div');
        container.appendChild(country);
        country.className = 'country';
        var x = document.createElement("IMG");
        country.appendChild(x);
        x.setAttribute("src", `${data[i].flags.png}`);
        x.className='country__img';
        let country__data = document.createElement("div");
        country.appendChild(country__data);
        country__data.className = "country__data";
        let country__name = document.createElement("h3");
        country__data.appendChild(country__name);
        country__name.className='country__name';
        let population = document.createElement("p");
        let region = document.createElement("p");
        let capital = document.createElement("p");
        country__data.appendChild(population);
        country__data.appendChild(region);
        country__data.appendChild(capital);
        population.className="country__row";
        region.className="country__row";
        capital.className="country__row";
        country__name.innerHTML = `${data[i].name.common}`;
        population.innerHTML = `Population: ${data[i].population}`;
        region.innerHTML = `Region: ${data[i].region}`;
        capital.innerHTML = `Capital: ${data[i].capital}`;
   
        country.addEventListener('click', function(){
            container.innerHTML = '';
            getCountryDetails(data[i]);
            let search_bar = document.querySelector(".search-bar");
            search_bar.style.display = 'none';
            console.log(data[i]);
            btn.style.display = "block";
        //    console.log(btnooo); // btn.className = "nonee";
        })
    }
//     let html = `
//     <div class="country">
//     <img class="country__img" src= ${data[0].flags.png} />
// <div class="country__data">
//     <h3 class="country__name">${data[0].name.common}</h3>
//     <p class="country__row">Population: ${data[0].population}</p>
//     <p class="country__row">Region: ${data[0].region}</p>
//     <p class="country__row">Capital: ${data[0].capital}</p>
//   </div>
//   </div>`;
//   container.insertAdjacentHTML('beforeend', html);
}
// getRegion("region/asia");
// getRegion("name/india");
getRegion("all");

function countryChange(){
    let country_search = document.getElementById('country_search');
    console.log(country_search.value);
    container.innerHTML = '';
    if(!country_search.value){
        getRegion("all");
    }else{
    getRegion(`name/${country_search.value}`)
    }
    
}
function regionChange(){
    let region_select = document.getElementById("region_select");
    console.log(region_select.value);
    container.innerHTML='';
    if(region_select.value=='all'){
        getRegion("all");
    }else{
    getRegion(`region/${region_select.value}`);
    }

}
// let element = document.body;
let navbar = document.querySelector(".nav_container");
let btn = document.createElement("button");
navbar.insertAdjacentElement("beforeend", btn);
btn.innerHTML= `<i class="fa-solid fa-arrow-left-long"></i> Back`;
btn.className = 'back';
btn.addEventListener('click', function(){
    location.reload();
});
function getCountryDetails(country){
   
    let country_details = document.createElement("div");
    container.appendChild(country_details);
    country_details.className = 'country_details';
    var x = document.createElement("IMG");
    country_details.appendChild(x);
    x.setAttribute("src", `${country.flags.png}`);
    x.className='country_img';
    let country_data = document.createElement("div");
    country_details.appendChild(country_data);
    country_data.className = "country_data";
    let country_name = document.createElement("h3");
    country_data.appendChild(country_name);
    country_name.className = "country_name";
    let content = document.createElement("div");
    country_data.appendChild(content);
    content.className = "content";
    let left_content = document.createElement("div");
    content.appendChild(left_content);
    left_content.className = "left_content";
    let native = document.createElement("p");
    left_content.appendChild(native);
    let population = document.createElement("p");
    left_content.appendChild(population);
    let region = document.createElement("p");
    left_content.appendChild(region);
    let sub_region = document.createElement("p");
    left_content.appendChild(sub_region);
    let capital = document.createElement("p");
    left_content.appendChild(capital);
    native.className = "country_row";
    population.className = "country_row";
    region.className = "country_row";
    sub_region.className = "country_row";
    capital.className = "country_row";
    let right_content = document.createElement("div");
    content.appendChild(right_content);
    right_content.className = "right_content";
    let domain = document.createElement("p");
    right_content.appendChild(domain);
    let currency = document.createElement("p");
    right_content.appendChild(currency);
    let language  = document.createElement("p");
    right_content.appendChild(language);
    domain.className = "country_row";
    currency.className = "country_row";
    language.className = "country_row";
    let border = document.createElement("div");
    country_data.appendChild(border);
    border.className = 'border';
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    let btn3 = document.createElement("button");
    border.appendChild(btn1);
    border.appendChild(btn2);
    border.appendChild(btn3);
    native.innerHTML = `Native Name: ${Object.values(country.name.nativeName)[0].common}`
    country_name.innerHTML = `${country.name.common}`;
    population.innerHTML = `Population: ${country.population}`;
    region.innerHTML = `Region: ${country.region}`;
    sub_region.innerHTML = `Sub Region: ${country.subregion}`;
    capital.innerHTML = `Capital: ${country.capital}`;
    domain.innerHTML = `Top Level Domain: ${country.tld}`
    currency.innerHTML = `Curriencies: ${Object.values(country.currencies)[0].name}`;
    language.innerHTML = `Languages: ${Object.values(country.languages)}`;
    // let btn0 = document.querySelector(".back");
    // btn0.className= 'back0';
}
function darkMode(){
    var element = document.body;
    // // body.classlist.toggle("dark-mode");
    element.classList.toggle("dark-mode");
    var dark_mode = document.querySelector(".dark_mode");
    var country_search = document.getElementById("country_search");
    var region_select = document.getElementById("region_select");
    dark_mode.classList.toggle("regionSelect");
    country_search.classList.toggle("regionSelect");
    region_select.classList.toggle("regionSelect");
    btn.classList.toggle("regionSelect");
}