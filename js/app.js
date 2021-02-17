'use strict'
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let time=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// ************************************************************************
function Cookies_data (name ,max ,min ,avg ){
    let object ={
        name:name,
        max:max
        ,min:min
        ,avg:avg
        ,sum:0
        ,sale:[]
    };

    let random=0;
    for (let i=1;i<=14;i++){
        random=getRandomArbitrary(min,max);
        object.sale.push(random);
        
        object.sum=object.sum+Math.round(random*object.avg);
    }
    return object;
}


const Seattle =new Cookies_data('Seattle',23,65,6.3);
const Tokyo =new Cookies_data('Tokyo',3,24,1.2);
const Dubai =new Cookies_data('Dubai',11,38,3.7);
const Paris =new Cookies_data('Paris',20,38,2.3);
const Lima =new Cookies_data('Lima',2,16,4.6);

let all_locations=[Seattle,Tokyo,Dubai,Paris,Lima];


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$




// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
insert_new_table();
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&



const form = document.getElementById("form_id");
form.addEventListener("submit", function(event){
  event.preventDefault();

  const location = event.target.location_input.value;
  const min = (event.target.min_input.value)*1; 
  const max = (event.target.max_input.value)*1; 
  const avg = (event.target.avg_input.value)*1; 

  const object =new Cookies_data(location,min,max,avg);
  all_locations.push(object);

  add_new_row(object);
  form.reset();
});


