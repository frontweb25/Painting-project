// import { has } from "browser-sync";

const scrolling = (upSelector) => {
    const upElem =  document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > 1650) {
            upElem.style.opacity = 1;
            upElem.style.width = '50px';
            upElem.style.height = '50px';
        } else {
            upElem.style.opacity = 0;
            upElem.style.width = '0px';
            upElem.style.height = '0px';
        }
    });

    const element = document.documentElement,
          body = document.body;

    const calcScroll = () => {
        upElem.addEventListener('click', function (e) {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);

            if (this.hash !== '') {
                e.preventDefault();
                let hashElement = document.querySelector(this.hash),
                    hashElementTop = 0;

                while (hashElement.offsetParent) {
                    hashElementTop += hashElement.offsetTop;
                    hashElement = hashElement.offsetParent;
                }    

                hashElementTop = Math.round(hashElementTop);
                smoothScroll(scrollTop, hashElementTop, this.hash);
            }
        });

        const smoothScroll = (from, to, hash) => {
            let timeInterval = 1,
                prevScrollTop,
                speed;

            if(to > from) {
                speed = 30;
            }else {
                speed = -30;
            }   
            
            let move = setInterval(function() {
                let scrollTop = Math.round(body.scrollTop || element.scrollTop);

                if(
                    prevScrollTop === scrollTop || 
                    (to > from && scrollTop >= to) ||
                    (to < from && scrollTop <= to)
                ) {
                    clearInterval(move);
                    history.replaceState(history.state, document.title, 
                    location.href.replace(/#.*$/g, '') + hash);
                }else {
                    body.scrollTop += speed;
                    element.scrollTop += speed;
                    prevScrollTop = scrollTop;
                }
            }, timeInterval);
        };
    };

    calcScroll();

};

export default scrolling;