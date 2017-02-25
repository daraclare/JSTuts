const hero = document.querySelector('.hero');
const heroText = document.querySelector('h1');
const walk = 100; // 100px

function shadow(event) {
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;

  // same as above, but done with destructuring
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = event;

  if(this !== event.target) {
    x = x + event.target.offsetLeft;
    y = y + event.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));
  console.log(xWalk, yWalk);

  heroText.style.textShadow = `${xWalk}px ${xWalk}px 0 red`;
}

hero.addEventListener('mousemove', shadow);
