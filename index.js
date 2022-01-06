// console.log('Hello world');

let backpack = []

backpack.push('sword', 'potion');
backpack.push('food');
backpack.push('sheild');

// let onBelt = backpack.splice(0,1);
let onBelt = backpack.shift()

let furCoat = 'fur coat'

backpack.push(furCoat);


backpack.pop(furCoat);


let itemCount = backpack.length

backpack.push('flit','blanket','knife','toothbrush');

let backpack2 = backpack.splice(3,3);

// console.log(backpack2[0]);
// console.log(backpack[1]);


// console.log('Backpack:', backpack, 'Belt:', onBelt, 'Item Count: ', itemCount, 'Backpack 2:', backpack2);


for(let i = 0; i < 3; i++) {
    console.log(backpack[i])
}
console.log('-------------------')
for(let i = 0; i < backpack2.length; i++) {
    console.log(backpack2[i])
}

