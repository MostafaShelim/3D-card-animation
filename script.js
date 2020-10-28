(function(){const card = document.querySelector('.card');
const container = document.querySelector('.container');
const sneaker = document.querySelector('.sneaker img');
const title = document.querySelector('.info h2');
const description = document.querySelector('.info p');
const sizes = document.querySelectorAll('.sizes button');
const info = document.querySelector('.info');
const btn = document.createElement('div');
container.addEventListener('mousemove', (event) => {
    let xAxis = (window.innerWidth/2 - event.pageX)/10;
    let yAxis = (window.innerHeight/2 - event.pageY)/10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseenter', ()=>{
    card.style.transition = 'none';
    sneaker.style.transform = 'translateZ(250px) rotateZ(-390deg)';
    title.style.transform = 'translateZ(100px)';
    let sec = 0.5;
    sizes.forEach(btn => {
        btn.style.transition = `all ${sec}s ease-out`;
        btn.style.transform = 'rotateZ(-720deg)';
        sec = sec + 0.5;
    });
    description.style.transform = 'translateZ(75px)';

    btn.innerHTML = `<div class = "purchase"> <button> purchase </button> </div>` 
    info.appendChild(btn);
    btn.style.display = 'flex';
    btn.style.justifyContent = 'center';
    
})
container.addEventListener('mouseleave', ()=>{
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    title.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';

    sizes.forEach(btn => {
        btn.style.transition = `none`;
        btn.style.transform = 'rotateZ(0deg)';
    });
    info.removeChild(btn);
})})();