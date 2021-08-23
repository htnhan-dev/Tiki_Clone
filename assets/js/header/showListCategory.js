function ShowListCategory(){
  const getBoxParentElement = document.getElementsByClassName('nav__top--category nav__hover--category');
  
  const getClass = getBoxParentElement[0];
  const getOverlay = document.querySelector('.nav_overlay');
  getClass.onmouseover   = function(){
    getOverlay.style.display = 'block'
  }

  getClass.onmouseleave   = function(){
    getOverlay.style.display = 'none'
  }

  
}

ShowListCategory();