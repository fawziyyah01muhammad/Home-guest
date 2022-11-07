let home = document.querySelector('#homeCount')
let guest = document.querySelector('#guestCount')

let addBtn = 0
function addOne(){
    addBtn += 1
    home.textContent = addBtn;
}

function addTwo(){
    addBtn += 2
    home.textContent = addBtn;
}

function addThree(){
    addBtn += 3
    home.textContent = addBtn;
}


let guestAddBtn = 0
function guestAddOne(){
    guestAddBtn += 1
    guest.textContent = guestAddBtn;
}
function guestAddTwo(){
    guestAddBtn += 2
    guest.textContent = guestAddBtn;
}
function guestAddThree(){
    guestAddBtn += 3
    guest.textContent = guestAddBtn;
}

// let addBtn = 0
