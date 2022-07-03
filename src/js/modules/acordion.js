const acordion = (acordion, content) => {
    const acordionBtn = document.querySelectorAll(acordion),
          acordionText = document.querySelectorAll(content);


    acordionText.forEach(item => item.style.display = 'none');


    acordionBtn.forEach((btn, i) => {
        btn.addEventListener('click', function() {
            if(acordionText[i].style.display == 'none'){
                acordionText[i].style.display = 'block';
            } else if(acordionText[i].style.display == 'block'){
                acordionText[i].style.display = 'none';
            }
        });
    });
    
};

export default acordion;