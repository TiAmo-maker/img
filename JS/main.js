const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

//声明一个数组列出每张图片
const images=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];

//声明一个对象列出每张图片的alt属性
const alts={
  '1.jpg':'A lazy fox',
  '2.jpg':'A snow-white mongoose',
  '3.jpg':'A flower',
  '4.jpg':'Several houses on the island',
  '5.jpg':'A white unicorn'
}

//使用for循环遍历数组，为每张图片创建一个img元素，并将其添加到thumbBar中
for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

//使用addEventListener为按钮添加一个点击事件，当点击按钮时，切换按钮的class属性和文本内容，并改变overlay的背景颜色

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
