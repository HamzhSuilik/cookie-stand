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

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

const table =document.createElement('table');
const body = document.body;
body.appendChild(table);

const row1 =document.createElement('tr');
table.appendChild(row1);
const row2 =document.createElement('tr');
table.appendChild(row2);
const row3 =document.createElement('tr');
table.appendChild(row3);
const row4 =document.createElement('tr');
table.appendChild(row4);
const row5 =document.createElement('tr');
table.appendChild(row5);
const row6 =document.createElement('tr');
table.appendChild(row6);
const row7 =document.createElement('tr');
table.appendChild(row7);

// ------- the first head---------

const first_head =document.createElement('th');
row1.appendChild(first_head);
first_head.textContent="Locations";

// ******** time details ***************
let head;
for (let i=0;i<14;i++){
    head =document.createElement('th');
    row1.appendChild(head);
    head.textContent=time[i];
}

//-------------- the last head -------------

const last_head =document.createElement('th');
row1.appendChild(last_head);
last_head.textContent="Daily Location Total";


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function insert_row (row,location){
    // ------- the first head---------

const first_head =document.createElement('th');
row.appendChild(first_head);
first_head.textContent=location.name;

// ******** time details ***************
let head;
for (let i=0;i<14;i++){
    head =document.createElement('th');
    row.appendChild(head);
    head.textContent=Math.round(location.sale[i]);
}

//-------------- the last head -------------

const last_head =document.createElement('th');
row.appendChild(last_head);
last_head.textContent=location.sum;

}

insert_row(row2,Seattle);
insert_row(row3,Tokyo);
insert_row(row4,Dubai);
insert_row(row5,Paris);
insert_row(row6,Lima);


// ------- the first head---------

const last_head2 =document.createElement('th');
row7.appendChild(last_head2);
last_head2.textContent="Total sales from all locations";


// ******** time details ***************

let head2;
let Seattle_sales;
let Tokyo_sales;
let Dubai_sales;
let Paris_sales;
let Lima_sales;
let total;

for (let i=0;i<14;i++){
    head2 =document.createElement('th');
    row7.appendChild(head2);
    Seattle_sales=Math.round(Seattle.sale[i]);
    Tokyo_sales=Math.round(Tokyo.sale[i]);
    Dubai_sales=Math.round(Dubai.sale[i]);
    Paris_sales=Math.round(Paris.sale[i]);
    Lima_sales=Math.round(Lima.sale[i]);
    total = Seattle_sales + Tokyo_sales + Dubai_sales + Paris_sales + Lima_sales;


    head2.textContent=total;
}
//-------------- the last head -------------

const last_head3 =document.createElement('th');
row7.appendChild(last_head3);
last_head3.textContent=Seattle.sum+Tokyo.sum+Dubai.sum+Paris.sum+Lima.sum;






