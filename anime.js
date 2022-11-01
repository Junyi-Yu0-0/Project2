// let myAimation = anime({
//         targets: '.square',
//   translateX: 100,
//   borderRadius: 50,
//   duration: 2000,
//   easing: 'linear',
//   loop: true,
//   direction: 'alternate',
//       });

  anime({
  targets: '.bat',
  loop:true,
  rotate: {
    value: 80,
    duration: 1800,
    easing: 'easeInOutSine'
  },
  loop:true,
  delay: 250 // All properties except 'scale' inherit 250ms delay
});

anime({
targets: '.bat1',
loop:true,
rotate: {
  value: -200,
  duration: 1800,
  easing: 'easeInOutSine'
},
loop:true,
delay: 250 // All properties except 'scale' inherit 250ms delay
});

anime({
targets: '.bat2',
loop:true,
rotate: {
  value: -725,
  duration: 5000,
  easing: 'easeInOutSine'
},
loop:true,
delay: 250 // All properties except 'scale' inherit 250ms delay
});

anime({
  targets: '.land',
  height: '20px', // -> from '10px' to '20px',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
});

anime({
  targets: '.house1',
  translateY: 500,
  delay:100,
  scale:{
    value:2,
    dutation: 160,
    delay: 1000,
    easing: 'easeOutBack'
  },
  loop: true
});
