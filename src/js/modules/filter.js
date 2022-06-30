const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          markGirl = wrapper.querySelectorAll('.girl'),
          markLovers = wrapper.querySelectorAll('.lovers'),
          markChef = wrapper.querySelectorAll('.chef'),
          markGuy = wrapper.querySelectorAll('.guy'),
          no = document.querySelector('.portfolio-no');


    const typeFilter = (marktype) => {
        markAll.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if(marktype) {
            marktype.forEach(item => {
                item.style.display = 'block';
                item.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };
    


    menu.addEventListener('click', (event) => {
        let target = event.target;

        if(target && target.classList.contains('btn-filter')) {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }

        
        if(target.classList.contains('all')) {
            typeFilter(markAll);
        }else if(target.classList.contains('girl')) {
            typeFilter(markGirl);
        }else if(target.classList.contains('lovers')) {
            typeFilter(markLovers);
        }else if(target.classList.contains('chef')) {
            typeFilter(markChef);
        }else if(target.classList.contains('guy')) {
            typeFilter(markGuy);
        }else {
            typeFilter();
        }
        
    });
};

export default filter;

