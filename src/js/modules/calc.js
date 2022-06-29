const calc = (size, material, options, promocode, result) => {
    const sixeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);


    let sum = 0;     
    
    const calcFunc = () => {
        sum = Math.round((+sixeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if(sixeBlock.value == '' || materialBlock.value == '') {
            resultBlock.innerHTML = 'Пожалуйста выберите размер и материал картины';
        } else if(promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.innerHTML = Math.round(sum * 0.7);
        } else {
            resultBlock.innerHTML = sum;
        }
    };

    sixeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
};

export default calc;