const burger = (menuSelector, burgerSelector) => {
    const menuElem = document.querySelector(menuSelector),
          burgerElem = document.querySelector(burgerSelector);



    menuElem.style.display = 'none';
    burgerElem.style.cursor = 'pointer';
    let width = window.screen.availWidth < 993;


     burgerElem.addEventListener('click', () => {
        if(menuElem.style.display == 'none' && width) {
            menuElem.style.display = 'block';  
        } else {
            menuElem.style.display = 'none';  
        }
        
    });      

    window.addEventListener('resize', () => {
        if(window.screen.availWidth > 992) {
            menuElem.style.display ='none';
        }
    });
};

export default burger;