const toggleNav = document.querySelector('.toggle-menu');
const menu = document.querySelector('.nav');
const search = document.querySelector('.fa-search');
toggleNav.addEventListener('click',()=>{
    toggleNav.style.transform = 'rotate('+180+'deg)'
    search.classList.remove('fa-xmark')
    search.classList.add('fa-search')
    document.querySelector('.search').style.display='none';
    menu.classList.contains('toggle')?menu.classList.remove('toggle'): menu.classList.add('toggle')


})

search.addEventListener('click',()=>{
menu.classList.remove('toggle')
    if(search.classList.contains('fa-search')){
        search.classList.remove('fa-search')
        search.classList.add('fa-xmark')
        document.querySelector('.search').style.display='block';
    }else{
        search.classList.add('fa-search')
        search.classList.remove('fa-xmark')
        document.querySelector('.search').style.display='none';
    }
    
})

window.addEventListener('scroll',()=>{
    if(window.pageYOffset>100){
      document.querySelector('.navbar').classList.add('sticky')
    }else{
        document.querySelector('.navbar').classList.remove('sticky')
    }
})

const buttons = document.querySelectorAll('.btn');
const imageList = document.querySelectorAll('.box');
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{

      e.preventDefault();
      buttons.forEach((button)=>{
           button.classList.remove('active')
      })
      button.classList.add('active')
      const filter = e.target.dataset.filter;
      imageList.forEach((item)=>{
        if(filter==='all'){
            item.style.display ='block'
        }else{
            if(item.classList.contains(filter)){
               item.style.display ='block'
            }else{
                item.style.display ='none'
            }
        }
      })
    })
})

// const boxes = document.querySelectorAll('.container');
// window.addEventListener('scroll',checkBoxes)
// checkBoxes();
// function checkBoxes (){
//     const triggerBottom = window.innerHeight / 5  * 4;
//     boxes.forEach((box,idx)=>{
//         const boxTop = box.getBoundingClientRect().top;
//         if(boxTop < triggerBottom) {
//              box.classList.add('show');
//         }else{
//             box.classList.remove('show');
//         }
//     })
// }


window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 100){
     document.querySelector('.to-top').classList.add('active');
    }else{
        document.querySelector('.to-top').classList.remove('active');
    }
})