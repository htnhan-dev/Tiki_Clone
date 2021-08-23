function slideItemBanner(){
    const getElementBoxImage = document.querySelector('.advertisement__category-slide-banner-img');
    const getElementBoxBtn = document.querySelector('.advertisement__category-slide-banner-btn-move-slide');
    const getBtnMoveSlideRight = document.querySelector('.btn-move-slide-right');
    const getBtnMoveSlideLeft = document.querySelector('.btn-move-slide-left');
    const app = {
        indexBtn:0,
         Images:[
             {
                I1:{
                    id:1,
                    name:'',
                    image:'./assets/img/conent-slide-advertisement/slide1.png',
                    link:''
                },
                I2:{
                    id:2,
                    name:'',
                    image:'./assets/img/conent-slide-advertisement/slide2.png',
                    link:''
                }
             },
             {
                I1:{
                    id:3,
                    name:'',
                    image:'./assets/img/conent-slide-advertisement/slide3.png',
                    link:''
                },
                I2:{
                    id:4,
                    name:'',
                    image:'./assets/img/conent-slide-advertisement/slide4.png',
                    link:''
                }
             },
             {
                I1:{
                    id:5,
                    name:'',
                    image:'./assets/img/conent-slide-advertisement/slide5.png',
                    link:''
                },
                I2:{
                    id:6,
                    name:'',
                    image:'./assets/img/conent-slide-advertisement/slide6.png',
                    link:''
                }
             },
            
        ],
        render:function(){
            if(getElementBoxImage){
                let htmlImages = app.Images.map( (img,id) =>{
                    return ` 
                    <div class="advertisement__category-slide-bannerimg-box data-index-${id}">
                        <a href="${img.I1.link}"> <img src="${img.I1.image}" alt=""></a>
                        <a href="${img.I2.link}"> <img src="${img.I2.image}" alt=""></a>
                    </div>`


                });
                getElementBoxImage.innerHTML =  htmlImages.join('');
            }
            if(getElementBoxBtn){
               let getBtnLis = app.Images.map((img,id)=>{
                  return `<li><button onclick="handleMoveSlide(${id});" class="${id == app.indexBtn ?'banner-btn-move-slide-active':''}">${id}</button></li>`
               })
               getElementBoxBtn.innerHTML = getBtnLis.join('');
            }
        },
        moveSlide:function(){
            const _this= this;
            let widthElementBoxImage = getElementBoxImage.offsetWidth;
            let quantityItem = getElementBoxImage.querySelectorAll('.advertisement__category-slide-bannerimg-box');
            let maxSize = widthElementBoxImage * (quantityItem.length -1);
            let moveSlide = 0;
            getBtnMoveSlideLeft.onclick = function(){
                if(moveSlide < maxSize ){
                    moveSlide += widthElementBoxImage;
                    getElementBoxImage.style.transform =`translateX(-${moveSlide}px)`
                    app.indexBtn++;
                    app.render();
                }else{
                    moveSlide = 0
                    getElementBoxImage.style.transform =`translateX(-${moveSlide}px)`
                    app.indexBtn = 0;
                    app.render();
                    
                }
            }
            
            getBtnMoveSlideRight.onclick = function(){
                if(moveSlide > 0 ){
                    moveSlide -= widthElementBoxImage;
                    getElementBoxImage.style.transform =`translateX(-${moveSlide}px)`
                    app.indexBtn--;
                    app.render();
                }else{
                    moveSlide = maxSize
                    getElementBoxImage.style.transform =`translateX(-${moveSlide}px)`;
                    app.indexBtn = (quantityItem.length - 1);
                    app.render();


                }
            } 
            
            
            handleMoveSlide = id =>{
                let i = app.indexBtn;
                let btnMoveSize = widthElementBoxImage;

                if(id > i){
                    btnMoveSize *= ( id - i ) 
                    moveSlide +=btnMoveSize
                    getElementBoxImage.style.transform =`translateX(-${moveSlide}px)`;
                    app.indexBtn = id;
                    app.render();    
                }else{
                    btnMoveSize *= ( i - id ) 
                    moveSlide -=btnMoveSize
                    getElementBoxImage.style.transform =`translateX(-${moveSlide}px)`;
                    app.indexBtn = id;
                    app.render();    
                }
            }


        },
        start:function(){
            this.render();
            this.moveSlide();

           

        }   
    }   

    app.start();

}


slideItemBanner();







