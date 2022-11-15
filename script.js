// Задача 1. Вывести в консоли:
// а) все ноутбуки. Лутше в html.
// б) все ноутбуки, цена которых больше 40000
// в) Посчитать сумму цен всех ноутбуков. 

// let laptops = [

//     {
//         mark : "Acer",
//         price : 25000
//     },
//     {
//         mark : "Apple",
//         price : 37000
//     },
//     {
//         mark : "Asus",
//         price : 125500,
//     },
//     {
//         mark : "HP",
//         price : 42000
//     },
//     {
//         mark : "Samsung",
//         price : 52000
//     }
// ]

// DZ-1

// for (let i = 0; i < laptops.length; i++) {
//     console.log(`
//     <h1>${laptops[i].mark}</h1>
//     `)
// }

// for (let i = 0; i < laptops.length; i++) {
//     if (laptops[i].price > 40000)
//     console.log(`
//     <h1>${laptops[i].mark}</h1>
//     `)
// }

// let sum = 0
// for (let i = 0; i < laptops.length; i++) {
//      sum += laptops[i].price
// }
//     console.log(`
//     <h1>${sum}</h1>
//     `)
    



// // Задача.2
// // а) Вывести все ноутбуки, у которых есть категория "laptop"
// // б) Вывести все ноутбуки, у которых категория "premium"
// // в) Вывести все ноутбуки, у которых категория "tech"

// let laptopsSecond = [
//     {
//         mark : "Acer",
//         category : ["laptop", "tech"],
//         price : 25000
//     },
//     {
//         mark : "Apple",
//         category : ["notebook", "tech"],
//         price : 37000
//     },
//     {
//         mark : "Asus",
//         category : ["computer", "premium"],
//         price : 125500,
//     },
//     {
//         mark : "HP",
//         category : ["computer", "tech"],
//         price : 42000
//     },
//     {
//         mark : "Samsung",
//         category : ["notebook", "premium"],
//         price : 52000
//     }
// ]

// DZ-2
// // // for (let i = 0; i < laptopsSecond.length; i++) {
// // //     if (laptopsSecond[i].category[i] == "laptop")
// // //     console.log(`
// // //     <h1>${laptopsSecond[i].mark}</h1>
// // //     `)
// // // }

// for (let i = 0; i < laptopsSecond.length; i++) {
   
//     for (let j = 0; j < laptopsSecond[i].category.length; j++) {
//         if ( laptopsSecond[i].category[j] == "tech")
    
//     console.log(`
//     <h1>${laptopsSecond[i].mark}</h1>
//     `)
// }
// }


// for (let i = 0; i < laptopsSecond.length; i++) {
//     for (let x = 0; x < laptopsSecond[i].category.length; x++) {
//         if (laptopsSecond[i].category[x] == "laptop") {
//             console.log(`
//                     <div class="laptops">
//                         <h1> laptop </h1>
//                         <p>Mark: ${laptopsSecond[i].mark}</p>
//                         <p>category:  ${laptopsSecond[i].category}</p>
//                         <p>price:  ${laptopsSecond[i].price}</p>
//                     </div>
//             `)
//         }
//     }

// }

// Задача 3.
// Запрашивать у пользователя Марку и Цену ноутбука три раза.
// Марку и цену ноутбука объединять в объект и добавлять(push) в массив laptops=[]-пустой
// Итого будет массив из трех объектов.
// DZ-3
// let laptops_third = []
// for (let i = 0; i < 3; i++) {
//     mark1 = prompt("введи марку ноута")
//     price1 = +prompt("введи цену ноута")
//     laptops_third.push({mark : mark1, price : price1})

// }
// console.log(laptops_third)



// // Задача 4. 
// // У пользователя с prompta запрашивать марку/цену. // По его ответу в консоли ввыводить ноутбуки с разметкой.
// // Какую марку вы бы хотели? -Acer. Выводим хар-ки ACer
// // На какую цену вы рассчитываете? -50000. Выводить все ноутбуки, которые удовл-т(меньше) этой цене

// DZ-4
// let laptopsSecond1 = [
//     {
//         mark : "Acer",
//         category : ["laptop", "tech"],
//         price : 25000
//     },
//     {
//         mark : "Apple",
//         category : ["notebook", "tech"],
//         price : 37000
//     },
//     {
//         mark : "Asus",
//         category : ["computer", "premium"],
//         price : 125500,
//     },
//     {
//         mark : "HP",
//         category : ["computer", "tech"],
//         price : 42000
//     },
//     {
//         mark : "Samsung",
//         category : ["notebook", "premium"],
//         price : 52000
//     }
// ]

// let name = prompt("Введите название ноутбука который вы ищите");
// let cena = +prompt("Введите приемлемую цену для вас");

// for (let i = 0; i < laptopsSecond1.length; i++) { 
//     if (laptopsSecond1[i].mark == name && laptopsSecond1[i].price <= cena ) {
//         console.log(`
//         <div>
//         <p>mark:${laptopsSecond1[i].mark} </p>
//         <p>category:${laptopsSecond1[i].category} </p>
//         <p>price:${laptopsSecond1[i].price} </p>
//         </div>
//         `);
//     }
// }