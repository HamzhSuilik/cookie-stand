'use strict'
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let time=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


let Seattle ={
    min:23,
    max:65,
    avg:6.3,
    sale:[]
}

let Tokyo ={
    min:3,
    max:24,
    avg:1.2,
    sale:[]
}

let Dubai ={
    min:11,
    max:38,
    avg:3.7,
    sale:[]
}

let Paris ={
    min:20,
    max:38,
    avg:2.3,
    sale:[]
}

let Lima ={
    min:2,
    max:16,
    avg:4.6,
    sale:[]
}


let random;
for (let i=1;i<=14;i++){
    random = getRandomArbitrary(Seattle.min,Seattle.max);
    Seattle.sale.push(random);
}

for (let i=1;i<=14;i++){
    random = getRandomArbitrary(Tokyo.min,Tokyo.max);
    Tokyo.sale.push(random);
}

for (let i=1;i<=14;i++){
    random = getRandomArbitrary(Dubai.min,Dubai.max);
    Dubai.sale.push(random);
}

for (let i=1;i<=14;i++){
    random = getRandomArbitrary(Paris.min,Paris.max);
    Paris.sale.push(random);
}

for (let i=1;i<=14;i++){
    random = getRandomArbitrary(Lima.min,Lima.max);
    Lima.sale.push(random);
}

function Fill_List (id , object) {
  let ul = document.getElementById(id);
  let li = [document.createElement("li"),document.createElement("li"),document.createElement("li"),document.createElement("li"),document.createElement("li"),document.createElement("li"),document.createElement("li"),document.createElement("li"),document.createElement("li"),document.createElement("li"),document.createElement("li"),document.createElement("li"),document.createElement("li"),document.createElement("li"),document.createElement("li")];

  
  let all_cookies=0;
  let cookies=0;
    for(let i=0;i<14;i++){
        cookies=object.sale[i]*(object.avg);
        cookies=Math.round(cookies);
        all_cookies=all_cookies+cookies;
        cookies=time[i]+' : '+cookies+' cookies';

        li[i].appendChild(document.createTextNode(cookies));
        ul.appendChild(li[i]);
    }
    

   li[14].appendChild(document.createTextNode('Total : '+all_cookies+' cookies'));
   ul.appendChild(li[14]);
}


Fill_List('Seattle_ul',Seattle);


Fill_List('Tokyo_ul',Tokyo);

Fill_List('Dubai_ul',Dubai);
Fill_List('Paris_ul',Paris);
Fill_List('Lima_ul',Lima);






