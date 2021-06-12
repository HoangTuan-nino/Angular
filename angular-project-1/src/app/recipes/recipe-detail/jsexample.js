const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
const number = [10, 1000, 100, 1, 0, 100000, 999 ,3 , 5]
const months = ['January', 'February', 'March', 'August', 'December'];

const count = plants.push('cows');
console.log(count);
console.log(plants);
console.log("Slice: ",plants.slice());

const reversed = plants.reverse();
console.log("Reversed: ",reversed);

const firstElement = plants.shift();
console.log("After Shift: ",plants);
console.log("return First element removed: ",firstElement);

const sortNumber = number.sort((a,b) => a - b);
console.log("After Sort: ",sortNumber);

const spliceMonths = months.splice(3, 1, "April")
console.log(spliceMonths);
console.log("After splice, add at 3 and delete August: ",months);
