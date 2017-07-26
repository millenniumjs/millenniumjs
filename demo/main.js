import millennium from '../dist/millennium';


const tick = () => {

  const clock = millennium.component(
    'div',
    null,
    new Date().toLocaleTimeString()
  )

  const x = millennium.component(
    'input',
    {type: 'checkbox', checked: true}
  )

  const p = millennium.component(
    'p',
    {className: 'paragraph'},
    clock, x
);



millennium.render(p, document.getElementById('app'));
}

setInterval(tick, 1000);
