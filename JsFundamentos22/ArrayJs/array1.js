var arr = ['josé','bob', 'robson', 43, true, [1, 2, 3]];

console.log(arr[0]);



var arr = [
    'josé',
    'bob',
    'robson',
     43,
     true,
     [1, 2, 3],
     function (name) {
        return ' hello ' +  name;
        
     }
];
console.log(arr[6](arr[0]));



var arr = new Array(1,'ze','aid',false);

console.log(arr);