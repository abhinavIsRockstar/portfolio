console.log('inside index.js');

const burgerBtn = document.querySelector('.burger-container');
const navContent = document.querySelector('.nav-content');
const screenWidth = window.innerWidth;
let navBtnClicked = false;
burgerBtn.addEventListener('click', (e)=>{
    console.log(e,'e');
    let nav = document.querySelector('.navigation');
    if(!navBtnClicked){
        nav.style.height = '275px';
        // navContent.style.display = 'block';
        // nav.style.transition = 'height .3s linear'
        navBtnClicked = true;
    } else {
        nav.style.height = '55px';
        navBtnClicked = false;
        // navContent.style.display = 'none';
    }
    
})

console.log(screenWidth,' width');


// if(screenWidth > 991){
//     burgerBtn.style.display = 'none';
// } else {
//     burgerBtn.style.display = 'block';
// }
