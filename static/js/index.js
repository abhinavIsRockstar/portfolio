console.log('inside index.js');

const burgerBtn = document.querySelector('.burger-container');
const navContent = document.querySelector('.nav-content');
const portfolioLists = document.querySelector('.portfolio-lists');
const featured_widget = document.querySelectorAll('.featured-widget-item');
const array_featured_widget = Array.from(featured_widget);
//const list_array = Array.from(portfolioLists[0].children)
console.log(portfolioLists,'portfoliolists');
console.log(array_featured_widget,'array_featured_widget');

portfolioLists.addEventListener('click', e =>{
    console.log(e.target.innerText,'event')
    let text = e.target.innerText
    
    // e.target.classList.add('active');
    let elem = e;
    changeActiveState(elem,text);
    activeFeaturedContent(text);
})

function changeActiveState(elem,text) {

    console.log(elem.target,'elem');
    console.log('inside changeActive state');

    let listItems = document.querySelectorAll('.portfolio-item');
    let listArray = Array.from(listItems);
    console.log(listArray,'listArray');
   

    for(let i = 0;i<listArray.length;i++){

        console.log('inside changeActive state loop');

        if(listArray[i].innerText != text){
            console.log('inside if loop')
            listArray[i].classList.remove('active');
        }
        elem.target.classList.add('active');
        
    }


    // elem.classList.add('active');
}

function activeFeaturedContent(text){
    console.log(text.toLowerCase(),'inside activeFeaturedContent');
    console.log(array_featured_widget[0].dataset.type,'inside active loop')

    for(let i=0;i<array_featured_widget.length;i++){
        console.log(array_featured_widget[i].dataset.type,'inside active loop')
        if(text ==='ALL'){
            array_featured_widget[i].classList.remove('disable_type')
            // array_featured_widget[i].classList.add('disable_type')
        }
        else if(array_featured_widget[i].dataset.type !=text.toLowerCase()){
            array_featured_widget[i].classList.add('disable_type')
        } 
        // else if(array_featured_widget[i].dataset.type =='ALL'){
        //     array_featured_widget[i].classList.remove('disable_type')
        // }
         else if(array_featured_widget[i].dataset.type ==text.toLowerCase()){
            array_featured_widget[i].classList.remove('disable_type')
        }
    }

    // for(let i =0; i<array_featured_widget.length; i++){
        
    //     if(text ==='ALL'){
    //        array_featured_widget[i].classList.add('disable_type');
          
    //     }

    //     else{
    //         array_featured_widget[i].classList.add('active_type');
    //     }
        
        // else if(array_featured_widget[i].dataset.type == text.toLowerCase()){
        //         array_featured_widget[i].classList.add('active_type');
        //         array_featured_widget[i].classList.remove('disable_type');
        // }
        

    }




// portfolioLists.addEventListener('click', (e)=>{
//     console.log(e.target,'event');
// })

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
