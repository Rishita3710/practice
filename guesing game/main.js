let maximum = parseInt(prompt("Enter a number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess"));
let attempt = 1;

while (guess !== targetNum) {
    if (guess == 'q')
        break;
    attempt++;
    if (guess > targetNum) {
        guess = parseInt(prompt("TOO HIGH! Enter a new guess"));
    }
    else {
        guess = parseInt(prompt("TOO LOW! Enter an new guess"));
    }
}
if (guess == 'q') {
    console.log("OK YOU QUIT")
}
else {
    console.log("Congrats YOU WIN");
    console.log(`You got it. You took a ${attempt} guess`);
}