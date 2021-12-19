const number = prompt("Enter a positive integer");
const numofdig = number.length;
let sum = 0;
let temp = number;
while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder ** numofdig;
    temp = parseInt(temp / 10); 
}
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}