let todos = ["buy new turtle"];


window.setTimeout(function() {
    // put all of your JS code from the lecture here



    let input = prompt("What would you like to do?");

    
    while(input !== "quit") {
        // handle input
        if(input === "list") {
            listTodos()
;            console.log("**********")
        } else if (input === "new") {
            addTodo();
;        } else if (input === "delete") {
            deleteTodo();
        }

        input = prompt("What would you like to do?"); 
    }
    // ask again for new input
    console.log(`OK, YOU QUIT THE APP.  `)

    function listTodos() {
        console.log("**********")
            todos.forEach(function(todo, i) {
                console.log(i + ": " + todo);
            });
    }
    function addTodo() {
        // ask for new todo
        var newTodo = prompt("Enter new todo");
        // add to todos array
        todos.push(newTodo);
        console.log("Added Todo");
    }
    function deleteTodo() {
        // ask for indexx of todo to be deleted
        var index = prompt("Enter index of todo to delete");
        // delete that todo
        // splice()
        todos.splice(index, 1)
        console.log("Deleted Todo");
    }
}, 500);