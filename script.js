const garden = document.querySelector('.garden');
const bloomLink = document.querySelector('.bloom-link');
const fireflies = document.querySelector('.fireflies');
const heavenLayers = document.querySelectorAll('.heaven');
const grassRows = document.querySelectorAll('.grass-row');

const layerCounts = [17, 24, 13];

heavenLayers.forEach((layer, layerIndex) => {
  for (let i = 0; i < layerCounts[layerIndex]; i += 1) {
    const flower = document.createElement('div');
    const sizeRange = layerIndex === 0 ? [18, 30] : layerIndex === 1 ? [25, 43] : [38, 58];
    const heightRange = layerIndex === 0 ? [50, 120] : layerIndex === 1 ? [70, 170] : [65, 145];
    const size = sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);
    const height = heightRange[0] + Math.random() * (heightRange[1] - heightRange[0]);

    flower.className = 'heaven-flower';
    flower.style.setProperty('--left', `${2 + Math.random() * 96}%`);
    flower.style.setProperty('--bottom', `${12 + layerIndex * 3 + Math.random() * 24}px`);
    flower.style.setProperty('--size', `${size}px`);
    flower.style.setProperty('--height', `${height}px`);
    flower.style.setProperty('--tilt', `${-18 + Math.random() * 36}deg`);
    flower.style.setProperty('--wait', `${0.1 + Math.random() * 0.8}s`);
    flower.innerHTML = '<span class="h-stem"></span><span class="h-leaf"></span><span class="h-leaf right"></span><span class="h-head"><i></i><i></i><i></i><i></i><i></i><b></b></span>';
    layer.appendChild(flower);
  }
});

grassRows.forEach((row, rowIndex) => {
  const bladeCount = rowIndex === 0 ? 90 : 120;

  for (let i = 0; i < bladeCount; i += 1) {
    const blade = document.createElement('i');
    blade.className = 'blade';
    blade.style.setProperty('--left', `${Math.random() * 100}%`);
    blade.style.setProperty('--height', `${35 + Math.random() * (rowIndex === 0 ? 70 : 95)}px`);
    blade.style.setProperty('--width', `${2 + Math.random() * 4}px`);
    blade.style.setProperty('--lean', `${-28 + Math.random() * 56}deg`);
    blade.style.setProperty('--wait', `${0.15 + Math.random() * 0.75}s`);
    row.appendChild(blade);
  }
});

for (let i = 0; i < 24; i += 1) {
  const light = document.createElement('i');
  light.style.setProperty('--x1', `${-245 + Math.random() * 490}px`);
  light.style.setProperty('--y1', `${-125 + Math.random() * 210}px`);
  light.style.setProperty('--x2', `${-245 + Math.random() * 490}px`);
  light.style.setProperty('--y2', `${-145 + Math.random() * 220}px`);
  light.style.setProperty('--delay', `${0.7 + Math.random() * 2.2}s`);
  light.style.setProperty('--duration', `${2.4 + Math.random() * 2.8}s`);
  fireflies.appendChild(light);
}

bloomLink.addEventListener('click', (event) => {
  event.preventDefault();

  if (garden.classList.contains('bloomed')) {
    garden.classList.remove('bloomed');
    window.setTimeout(() => garden.classList.add('bloomed'), 100);
  } else {
    garden.classList.add('bloomed');
  }

  bloomLink.querySelector('.link-text').textContent = 'one more bloom for you';
  history.replaceState(null, '', '#bloom');
});
