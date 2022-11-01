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
  translateX: {
    value: 80,
    duration: 80
  },
  loop:true,
  rotate: {
    value: 200,
    duration: 1800,
    easing: 'easeInOutSine'
  },
  loop:true,
  delay: 250 // All properties except 'scale' inherit 250ms delay
});

anime({
targets: '.bat1',
translateX: {
  value: -80,
  duration: -80
},
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
  targets: '.land',
  height: '20px', // -> from '28px' to '100%',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
});
