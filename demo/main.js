import millennium from '../dist/millennium';

// let clock1 = millennium.component('div', null, new Date().toLocaleTimeString());
// millennium.render(document.getElementById('app'), clock1);

const tick = () => {



  const clock = millennium.component(
    'div',
    null,
    new Date().toLocaleTimeString()
  )

  const p = millennium.component(
    'p',
    {className: 'paragraph'},
    clock

);



millennium.render(p, document.getElementById('app'));
}

setInterval(tick, 1000);
