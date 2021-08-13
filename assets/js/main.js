function showMenu(toggle,menu){
    const toggleMenu = document.getElementById(toggle);
    const sideMenu = document.getElementById(menu);

    if(toggleMenu && sideMenu){
        toggleMenu.addEventListener('click',function(){
            sideMenu.classList.toggle('active-menu');
        })
    }
}
showMenu("header-toggle", "header-menu");




const swiper = new Swiper(".mainscreen_container", {
     loop: true,  
     effect:"coverflow",
     grabCursor:"true",
        mousewheel:true,
     keyboard: {
        enable :true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction:false,
      },
      speed: 1000,
     cubEffect: {
         shadow:true,
         slideShadows:true,
         },

     navigation:{
      prevEl:".arrow-left",
      nextEl:".arrow-right"
     },
})
