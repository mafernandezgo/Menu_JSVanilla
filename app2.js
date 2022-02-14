const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    {
        id: 2,
        title: "diner double",
        category: "salads",
        price: 13.99,
        img: "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260g",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    {
        id: 5,
        title: "egg attack",
        category: "salads",
        price: 22.99,
        img: "https://images.pexels.com/photos/764925/pexels-photo-764925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    {
        id: 8,
        title: "american classic",
        category: "salads",
        price: 12.99,
        img: "https://images.pexels.com/photos/248509/pexels-photo-248509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "https://images.pexels.com/photos/1438077/pexels-photo-1438077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    {
        id: 10,
        title: "bison steak",
        category: "burger",
        price: 22.99,
        img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    }
]

const menuGrid = document.querySelector('.menuGrid')
const btns = document.querySelectorAll('.btn')

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
});


btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const btnCategory =  btn.dataset.val
        const menuCategory = menu.filter(function(menuItem){
            if(menuItem.category === btnCategory){
                return menuItem
            }
        })

        if(btnCategory === "all"){
            displayMenuItems(menu)
        } else {
            displayMenuItems(menuCategory)
        }
    })
})

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {

    return `
    <div class="cardMenu"> 
        <img class="plateImg" src=${item.img}/>
        <header class="headerMenu"> 
            <h4 class="plateTitle">${item.title}</h4>
            <h4 class="platePrice"> $ ${item.price}</h4>
        </header> 
        <p class="plateDescription">${item.desc}</p>
    </div>`
});
displayMenu = displayMenu.join("");
menuGrid.innerHTML = displayMenu;
}


// function displayMenuItems(menuItems){
// const cardMenu = document.createElement('div')
// cardMenu.className = "cardMenu"

// const plateImg = document.createElement('img')
// plateImg.className = "plateImg"
// plateImg.src = menuItems.img

// const header = document.createElement('header')
// header.className = "headerMenu"
// const plateTitle = document.createElement('h4')
// plateTitle.className = "plateTitle"
// plateTitle.textContent = menuItems.title
// const platePrice = document.createElement('h4')
// platePrice.className = "platePrice"
// platePrice.textContent =  menuItems.price

// const plateDescription = document.createElement('p')
// plateDescription.className = "plateDescription"
// plateDescription.textContent = menuItems.desc

// header.append(plateTitle, platePrice)
// cardMenu.append(plateImg , header, plateDescription )
// menuGrid.appendChild(cardMenu)
// }






