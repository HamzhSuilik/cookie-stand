'use strict';
// ########################### -- first Row -- ###########################

const table =document.createElement('table');
const body = document.body;
body.appendChild(table);

let middle_row=[document.createElement('tr')];

function insert_new_table(){
// ------- the first head---------
const first_row =document.createElement('tr');
table.appendChild(first_row);

const first_head =document.createElement('th');
first_row.appendChild(first_head);
first_head.textContent="Locations";

// ******** time details ***************
let head;
for (let i=0;i<14;i++){
    head =document.createElement('th');
    first_row.appendChild(head);
    head.textContent=time[i];
}

//-------------- the last head -------------

const last_head =document.createElement('th');
first_row.appendChild(last_head);
last_head.textContent="Daily Location Total";


// ########################### -- Middle Row -- ###########################

function insert_row (row_index,location){
    
    middle_row = middle_row.concat([document.createElement('tr')]);

    table.appendChild(middle_row[row_index]);
    // ------- the first head---------

const first_head =document.createElement('th');
middle_row[row_index].appendChild(first_head);
first_head.textContent=location.name;

// ******** time details ***************
let head;
for (let i=0;i<14;i++){
    head =document.createElement('th');
    middle_row[row_index].appendChild(head);
    head.textContent=Math.round(location.sale[i]);
}

//-------------- the last head -------------

const last_head =document.createElement('th');
middle_row[row_index].appendChild(last_head);
last_head.textContent=location.sum;

}

insert_row(1,Seattle);
insert_row(2,Tokyo);
insert_row(3,Dubai);
insert_row(4,Paris);
insert_row(5,Lima);


// ########################### -- Last Row -- ###########################
last_row();

// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
}

function last_row(){
    // ########################### -- Last Row -- ###########################
// ------- the first head---------

// ^^^^^^^^^^^^^^^^^^^^^^^^^^
const last_row =document.createElement('tr');
table.appendChild(last_row);
// ^^^^^^^^^^^^^^^^^^^^^^^^^

const last_head2 =document.createElement('th');
last_row.appendChild(last_head2);
last_head2.textContent="Total sales from all locations";


//-------------- the middle head -------------

let head2;

let total=0;

for (let i=0;i<14;i++){
    head2 =document.createElement('th');
    last_row.appendChild(head2);
   

    
    for(let ii=0;ii<all_locations.length;ii++){
        total=total+Math.round(all_locations[ii].sale[i]);
    }

    head2.textContent=total;
}
//-------------- the last head -------------

const last_head3 =document.createElement('th');
last_row.appendChild(last_head3);

total=0;
for(let ii=0;ii<all_locations.length;ii++){
    total=total+all_locations[ii].sum;
}

last_head3.textContent=total;
}

function add_new_row(object){
    
    table.deleteRow(table.rows.length-1);
    function insert_row (row_index,location){
    
    middle_row = middle_row.concat([document.createElement('tr')]);

    table.appendChild(middle_row[row_index]);
    // ------- the first head---------

const first_head =document.createElement('th');
middle_row[row_index].appendChild(first_head);
first_head.textContent=location.name;

// ******** time details ***************
let head;
for (let i=0;i<14;i++){
    head =document.createElement('th');
    middle_row[row_index].appendChild(head);
    head.textContent=Math.round(location.sale[i]);
}

//-------------- the last head -------------

const last_head =document.createElement('th');
middle_row[row_index].appendChild(last_head);
last_head.textContent=location.sum;
    }

    insert_row(table.rows.length,object);
    last_row();

}