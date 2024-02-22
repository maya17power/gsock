console.log(gsap)
// METHODS

//to method

// gsap.to('.img1',{x:100, y: 100,
// rotation: 360,
// backgroundColor: "red",
// duration: 2});

// gsap.to('h1',{x:100, y: 100,
//     rotation: 360,
//     backgroundColor: "red",
//     duration: 2});


//from method - add visibility: hidden to element, add autoAlpha to from object property
document.querySelector('.btn2').addEventListener('click',()=>{
    gsap.from('.img2', {autoAlpha: 0, duration: 2});
});

//fromTo method
document.querySelector('.btn3').addEventListener('click',()=>{
    gsap.fromTo('.img3', {y: -300, autoAlpha: 0, duration: 2},{y: 0, autoAlpha:1, duration: 2});
});

