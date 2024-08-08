


let input = prompt('What would you like to do?');

const todo = ['collect eggs', 'yoga'];
while (input !== 'quit' && input !== 'q') {
    if (input == 'list') {
        console.log("****************");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo}`);
        }
        console.log("****************");

    }
    else if (input == 'new') {
        const newTodo = prompt('OK what is the new todo?');
        todo.push(newTodo);
        console.log(`${newTodo} is added in list`);
    }
    else if (input == 'delete') {
        const index = parseInt(prompt('Ok enter a index to delete?'));
        if (!Number.isNaN(index)) {
            const deleted = todo.splice(index, 1);
            console.log(`${deleted} is removed from list`);
        } else {
            console.log('unknown index');
        }

    }

    input = prompt("What would you like to do?");
}

console.log('OK... Quit the App');