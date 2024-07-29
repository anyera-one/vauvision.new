const animateimage = document.querySelector('.animate_image');
const animateimages = document.querySelectorAll('.animate_image');
if(animateimage){
  function onEntry(entry) {entry.forEach(change => {
    if(change.isIntersecting){
      change.target.classList.add('animated');
    }
  });};

  let animateimagesopt = {threshold: [0.35]};
  let animateimagesserv = new IntersectionObserver(onEntry, animateimagesopt);
  for (let elm of animateimages) {animateimagesserv.observe(elm);}
}

const animatetop = document.querySelector('.animate_top');
const animatetops = document.querySelectorAll('.animate_top');
if(animatetop){
  function onEntry(entry) {entry.forEach(change => {
    if(change.isIntersecting){
      change.target.classList.add('animated');
    }
  });};

  let animatetopsopt = {threshold: [0.35]};
  let animatetopsserv = new IntersectionObserver(onEntry, animatetopsopt);
  for (let elm of animatetops) {animatetopsserv.observe(elm);}
}

const animateleft = document.querySelector('.animate_left');
const animatelefts = document.querySelectorAll('.animate_left');
if(animateleft){
  function onEntry(entry) {entry.forEach(change => {
    if(change.isIntersecting){
      change.target.classList.add('animated');
    }
  });};

  let animateleftsopt = {threshold: [0.35]};
  let animateleftsserv = new IntersectionObserver(onEntry, animateleftsopt);
  for (let elm of animatelefts) {animateleftsserv.observe(elm);}
}

const animateright = document.querySelector('.animate_right');
const animaterights = document.querySelectorAll('.animate_right');
if(animateright){
  function onEntry(entry) {entry.forEach(change => {
    if(change.isIntersecting){
      change.target.classList.add('animated');
    }
  });};

  let animaterightsopt = {threshold: [0.35]};
  let animaterightsserv = new IntersectionObserver(onEntry, animaterightsopt);
  for (let elm of animaterights) {animaterightsserv.observe(elm);}
}

// const subnav = document.querySelectorAll('.header__subnav_list');
// [...subnav].forEach(function (li) {
//   for (let [index, elem] of [...li.children].entries()){
//     elem.style.setProperty('--inc-step', index+1);
//   }
// });

const animateItem = document.querySelector('.animate_item');
const animateItems = document.querySelectorAll('.animate_item');
const animateList = document.querySelectorAll('.advantages__list');
if(animateItem){
  function onEntry(entry) {
    entry.forEach(change => {
    if(change.isIntersecting){
      change.target.classList.add('animated');
    }
  });};

  let animaterightsopt = {threshold: [0]};
  let animaterightsserv = new IntersectionObserver(onEntry, animaterightsopt);
  [...animateList].forEach(function (li) {
    for (let [index, elem] of [...li.children].entries()){
      elem.style.setProperty('--inc-step', index+1);
    }
  });
  for (let elm of animateItems) {animaterightsserv.observe(elm);}
}
