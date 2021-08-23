const Slide ={
    indexBtn:0,
    render:function(){
        const getElementBoxSlide = document.querySelector('.banner__slide-img');
        const getElementBoxSlideBtn = document.querySelector('.slide-btn-move-box');
        const getElementBoxImg = document.querySelector('.banner__poster');
        const _this = this;
        let imageSlide = [
            './assets/img/banner content/1.jpg',
            './assets/img/banner content/2.jpg',
            './assets/img/banner content/3.jpg',
            './assets/img/banner content/4.jpg',
            './assets/img/banner content/5.jpg',
            './assets/img/banner content/6.jpg',
            './assets/img/banner content/7.jpg',
            './assets/img/banner content/8.jpg',
            './assets/img/banner content/9.jpg',

        ];

        let imgPoster = ['./assets/img/banner content/newtiki.png'];

        if(getElementBoxImg){
            let htmlimg = imgPoster.map(img =>{
                return`<a href=""> <img src="${img}" alt=""><a>`

            })
            getElementBoxImg.innerHTML = htmlimg.join('');
        }
        
        if(getElementBoxSlide){
            let img = imageSlide.map( (img,id)=>{
                 return `<a href=""><img src="${img}" class="index-img-${id}" alt=""></a>`
                
            } )
    
            getElementBoxSlide.innerHTML = img.join('');
        }
    
        if(getElementBoxSlideBtn){
            let btnChange = imageSlide.map( (img,id) =>{
                 return ` <li><button class="slide-btn-move-banner-${id}  ${id === _this.indexBtn ? 'active' : "" }" onclick="handleBtnId(${id})">${id}</button></li>`
            } )
            
            getElementBoxSlideBtn.innerHTML = btnChange.join('');

           
        }
    },

    handleSlide:function(){
        const getBoxImg = document.querySelector('.banner__slide-img');
        const getBtnLeft = document.getElementById('btn-left');
        const getBtnRight = document.getElementById('btn-right');
        let getWidthBanner = document.querySelector('.banner__slide').offsetWidth;
        let getImgElement = getBoxImg.querySelectorAll('img');
        let maxSize = getWidthBanner * (getImgElement.length - 1);
        let moveSlide = 0;
       
        const _this = this;


        getBtnRight.onclick = function(){
            if(moveSlide < maxSize){
                moveSlide += getWidthBanner;
                getBoxImg.style.marginLeft = '-' + moveSlide + 'px';  
                        
                if(_this.indexBtn <= (getImgElement.length)){
                    _this.indexBtn++;
                    _this.render();
                }else{
                    _this.indexBtn = 0;
                    _this.render();
                    
                }             
            }else{
                moveSlide =0
                _this.indexBtn = 0
                getBoxImg.style.marginLeft = '-' + moveSlide + 'px';
                _this.render();

            }
        }

        getBtnLeft.onclick = function(){
            if(moveSlide == 0){            
                moveSlide = maxSize;
                getBoxImg.style.marginLeft = '-' + moveSlide + 'px';
                _this.indexBtn=(getImgElement.length-1);
                _this.render(); 
            }else{
                moveSlide -=getWidthBanner
                getBoxImg.style.marginLeft = '-' + moveSlide + 'px';
                if(_this.indexBtn > 0){
                    _this.indexBtn--
                    _this.render();
                }else{
                    _this.indexBtn=(getImgElement.length-1);
                    _this.render(); 
                }

            }
        }

        handleBtnId = id => {
            let btnId =  document.querySelector('.banner__slide').offsetWidth;
            const getBoxImg = document.querySelector('.banner__slide-img');
            let i = this.indexBtn
            if(id > i){
                btnId*= (id - i);
                moveSlide +=btnId
                getBoxImg.style.marginLeft = '-' + moveSlide + 'px'; 
                _this.indexBtn = id 
                _this.render(); 
                console.log(_this.indexBtn)
                  
            }else{
                btnId*= (i -  id);
                moveSlide -=btnId
                getBoxImg.style.marginLeft = '-' + moveSlide + 'px'; 
                _this.indexBtn = id 
                _this.render(); 
                console.log(_this.indexBtn)
            }
          
        }
       
    },

    autoMove:function(){
        const getBtnRight = document.getElementById('btn-right');
        setInterval( ()=>{
            getBtnRight.click();
        },6000)
    },


    start:function(){
        this.render();
        this.handleSlide();
        this.autoMove();
     
      
        
    }

    
}
Slide.start();





