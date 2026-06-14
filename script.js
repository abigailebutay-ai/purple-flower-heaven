const garden = document.querySelector('.garden');
const flowers = document.querySelector('.flowers');
const bloomLink = document.querySelector('.bloom-link');

const arrangement = [
  { x: 19, size: 92, height: 285, delay: 0.12, tilt: -8 },
  { x: 28, size: 110, height: 390, delay: 0.24, tilt: 5 },
  { x: 38, size: 98, height: 320, delay: 0.36, tilt: -5 },
  { x: 47, size: 128, height: 470, delay: 0.48, tilt: 4 },
  { x: 56, size: 112, height: 365, delay: 0.6, tilt: -5 },
  { x: 65, size: 122, height: 435, delay: 0.72, tilt: 7 },
  { x: 74, size: 102, height: 335, delay: 0.84, tilt: -7 },
  { x: 82, size: 94, height: 295, delay: 0.96, tilt: 5 }
];

arrangement.forEach((item, index) => {
  const flower = document.createElement('div');
  flower.className = 'flower';
  flower.style.setProperty('--x', `${item.x}%`);
  flower.style.setProperty('--size', `${item.size}px`);
  flower.style.setProperty('--height', `${item.height}px`);
  flower.style.setProperty('--delay', `${item.delay}s`);
  flower.style.setProperty('--tilt', `${item.tilt}deg`);
  flower.style.setProperty('--leaf-y', `${25 + (index % 3) * 8}%`);
  flower.style.setProperty('--leaf-r', `${-18 - (index % 2) * 8}deg`);
  flower.innerHTML = '<span class="stem"></span><span class="leaf"></span><span class="leaf right"></span><span class="bloom"><i class="petal"></i><i class="petal"></i><i class="petal"></i><i class="petal"></i><i class="petal"></i><b class="heart"></b></span>';
  flowers.appendChild(flower);
});

bloomLink.addEventListener('click', (event) => {
  event.preventDefault();

  if (garden.classList.contains('bloomed')) {
    garden.classList.remove('bloomed');
    window.setTimeout(() => garden.classList.add('bloomed'), 80);
  } else {
    garden.classList.add('bloomed');
  }

  bloomLink.querySelector('.link-text').textContent = 'eight more blooms for you';
  history.replaceState(null, '', '#for-abigaile');
});
