let todo = [];


while (true) {
    let req = prompt("Enter your request");

    if (req == "quit") {
        console.log("You quit the app");
        break;
    }
    if (req == "list") {
        console.log('-------');
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log('-------');
    }
    else if (req == "add") {
        let task = prompt('Enter the task want you want to add');
        todo.push(task);
        console.log("task added");
    }
    else if (req == "delete") {
        let idx = prompt('Enter the index want you want to delete')
        todo.splice(idx, 1);
        console.log("deleted");
    }
    

}


// let todo = [];

// while (true) {
//     let req = prompt("Enter your request");

//     if (req === "quit") {
//         console.log("You quit the app");
//         break;
//     } else if (req === "list") {
//         console.log('-------');
//         for (let i = 0; i < todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log('-------');
//     } else if (req === "add") {
//         let task = prompt('Enter the task you want to add');
//         todo.push(task);
//         console.log("Task added");
//     } else {
//         console.log("Invalid request. Please use 'add', 'list', or 'quit'.");
//     }
// }
