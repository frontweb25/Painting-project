const acordion = (acordion, content) => {
    const acordionBtn = document.querySelectorAll(acordion),
          acordionText = document.querySelectorAll(content);



    function hideContent(el) {
        el.forEach(block => {
            block.classList.add('animated', 'fadeInDown');
            block.classList.add('hide');
        });      
    }      

    hideContent(acordionText);

    acordionBtn.forEach((btn, i) => {
        btn.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('hide');
        });
    });
    
};

export default acordion;