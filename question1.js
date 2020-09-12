//    Question 1  =>


var hundredarray = [...Array(101).keys()];

        //   OR      there is one other way of doing  this   mentioned below

//     var x=0;
//     var array=[];
// function insert_values()
// {
//        if(x<101)
//     {
//        array.push(x);
//         x++;
//         insert_values();
       
//     } 
//     return array;
      
//   }
 
//  insert_values();






//    Question 2  =>


var items =  hundredarray.filter(single => single%2 ===0);  //console.log(newevenarray);

var fn = function asyncDivideBy2(v){ // sample async action
    return new Promise(resolve => setTimeout(() => resolve(v), 100));
};
// map over forEach since it returns

var actions = items.map(fn); // run the function over all items

// we now have a promises array and we want to wait for it

var results = Promise.all(actions); // pass array of promises

results.then(data => // or just .then(console.log)
    // console.log(data) // [2, 4, 6, 8, 10]
    data
);






//    Question 3  =>

var square =  items.map(single => single*single);
//console.log(square);







//    Question 4  =>

var sumsquarearry = square.reduce((total , single) => total + single, 0);

// console.log(sumsquarearry);







//    Question 5  =>

var fnmain = function asyncDivideBy23(v){ 

    return new Promise((resolve,reject) =>  v%2 ===0 ? resolve(v) : reject('this is odd number'));
};
// map over forEach since it returns

var actions = hundredarray.map(fnmain); // run the function over all items

// we now have a promises array and we want to wait for it

var results = Promise.all(actions); // pass array of promises

results.then(data => // or just .then(console.log)
    // console.log(data) // [2, 4, 6, 8, 10]
    data
).catch(e =>{
  // console.log(e);
});
