// const a = {
//     name: "awat",
//     surname: "awat"
// }

// const b = [
//     {
//     name: "awat",
//     surname: "awat"
//     }
// ]
// console.log(b[0]);







// for (let i = 0; i < colors.length; i++) {
 
    // console.log(`я люблю кушать `);
 // } 
    
    


// // console.log(`у меня ${colors.length}  элентов`);

// if(colors.length == 1) {
//     console.log("у меня один элемент");
    
// }
 
// else if (colors.length == 2) {
//     console.log("у меня два элемента");
// }

// else if (colors.length == 3) {
//     console.log("у меня три элемента");
// }

// else if (colors.length == 4) {
//     console.log("у меня четыри элемента");
// }

// else if (colors.length == 5) {
//     console.log("у меня пять элементов");
// }
// else{
//     console.log("я хз скок тут элементов я ток до 5 считать умею");
    
// }


// const colors = ["red", "green", "blue", "pink", ]

// colors.forEach(element => {
//     console.log(element);
    
// })

// console.log(colors.length);
const fruits = ["apple", "banana", "orange", "mango",]
const fruitsText = ["ты нажал на яблоко", "ты нажал на банан", " ты нажал на апельсин ", "ты нажал на манго"]

const list = document.querySelector(".list")



// list.append(fruits[0])

fruits.forEach((el, index) => {
    const text = document.createElement("p")
    text.innerText = el
    text.classList.add(`color${index}`)
    list.append(text)
    text.onclick = () => {
        text.innerText =` вы кликнули на ${el}`
    }
})


