const readlineSync = require("readline-Sync");

function menu() {

    console.log("Hello! Welcome to the Pizza Flavors Manager\n\n please choose your action: \n\n 1 - List all the pizza flavors \n 2 - Add a new pizza flavor\n 3 - Remove a pizza flavor\n4 - Exit this program\n");

    let choice = Number(readlineSync.question("chose your action please"));
    let pizza = [];
    while (choice != 4) {
        switch (choice) {
            case 1:
                if (pizza != " ") {
                    console.log(pizza + " \n");
                    console.log("Hello! Welcome to the Pizza Flavors Manager\n\n please choose your action: \n\n 1 - List all the pizza flavors \n 2 - Add a new pizza flavor\n 3 - Remove a pizza flavor\n4 - Exit this program\n");
                    choice = Number(readlineSync.question("chose your action please"));
                }
                break;
            case 2:
                let otherpizza = readlineSync.question(" new pizza flavor to add on list ");
                pizza.push(otherpizza);
                console.log("Hello! Welcome to the Pizza Flavors Manager\n\n please choose your action: \n\n 1 - List all the pizza flavors \n 2 - Add a new pizza flavor\n 3 - Remove a pizza flavor\n4 - Exit this program\n");
                choice = Number(readlineSync.question("chose your action please"));

                break;
            case 3:
                let rempizza = readlineSync.question(" pizza you want to delete ");
                for (let index = 0; index < pizza.length; index++) {
                    if (rempizza == pizza[index]) {
                        delete pizza[index];
                        console.log(" la pizza " + rempizza + " a bien ete suprime ");

                    }

                }

                console.log("Hello! Welcome to the Pizza Flavors Manager\n\n please choose your action: \n\n 1 - List all the pizza flavors \n 2 - Add a new pizza flavor\n 3 - Remove a pizza flavor\n4 - Exit this program\n");
                choice = Number(readlineSync.question("chose your action please"));
                break;
            case 4:
                break;
        }
    }

}
menu()