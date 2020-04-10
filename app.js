document.getElementById('cta').addEventListener('click', function(){

    TweenMax.to('.panel', 2,{scaleY: 1, height: '100vh', delay: 1, ease: Circ.easeOut});
    TweenMax.to('.intro', 1,{width:'30vw', ease: Power2.easeOut})
    TweenMax.to('#piercing', 1, {opacity: 1, y: 0, delay: 2, ease: Back.easeOut.config(1.7)});
    TweenMax.to('p', 1.5,{opacity: 1, y: -20, delay: 2.4});
    TweenMax.to('.box', 4,{opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 0.3)});

})