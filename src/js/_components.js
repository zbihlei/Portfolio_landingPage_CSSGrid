
const menu = document.querySelector('.menu');
const open = document.getElementsByClassName('hamburger');
const close =document.getElementsByClassName('menu__close');
        for (let i=0; i<open.length; i++){
            open[i].addEventListener('click', function(){
                menu.classList.add('active');
            })
            close[i].addEventListener('click', function(){
              menu.classList.remove('active'); 
            })
        }
    
   const counters = document.querySelectorAll('.scale__top-perc'),
          lines = document.querySelectorAll('.scale__in');

    counters.forEach((item , i) =>{
      lines[i].style.width = item.innerHTML;
    });
