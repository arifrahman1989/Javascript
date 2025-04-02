const slider = document.querySelector('.slider');
const container = document.querySelector('.container');
const inner = document.querySelector('.inner');


const tl = new TimelineMax();


tl.fromTo(inner,1, { height: "0%" }, { height: '80%' });

tl.fromTo(inner,1, { width: "90%" }, { width: '70%' });

tl.fromTo(slider,1, { x : "-100%" }, { x : '0%' }, "-=1");







