function contentShowProductSale(){
    const getBoxElementItemProduct = document.querySelector('.product__sale-item');
    const getBoxElementBtnRight = document.querySelector('.product__sale-item-btn-move-slide-right-box');
    const getBoxElementBtnLeft = document.querySelector('.product__sale-item-btn-move-slide-left-box');

    let product = [
        {
            id:1,
            name:'giây nhảy tập thể dục lỗi thép',
            price:'36.000',
            discount:62,
            quantity:150,
            quantitySold:90,
            image:'./assets/img/porduct-sale-content/product/1.jpg',
            hot:false
            
        },
        {
            id:2,
            name:'Dụng cụ chống đẩy',
            price:'53.000',
            discount:62,
            quantity:100,
            quantitySold:30,
            image:'./assets/img/porduct-sale-content/product/2.jpg',
            hot:false
            
        },  {
            id:3,
            name:'Sữa tắm Dove hương hoa hồng',
            price:'157.000',
            discount:62,
            quantity:100,
            quantitySold:43,
            image:'./assets/img/porduct-sale-content/product/3.jpg',
            hot:true
            
        },  {
            id:4,
            name:'Dầu xã Dove',
            price:'102.000',
            discount:62,
            quantity:100,
            quantitySold:27,
            image:'./assets/img/porduct-sale-content/product/4.png',
            hot:false
            
        },  {
            id:5,
            name:'nồi chiên không dầu',
            price:'4.000.000',
            discount:62,
            quantity:100,
            quantitySold:0,
            image:'./assets/img/porduct-sale-content/product/5.jpg',
            hot:false
            
        },  {
            id:6,
            name:'Pepsi Không Calorie vị chanh',
            price:'36.000',
            discount:62,
            quantity:100,
            quantitySold:80,
            image:'./assets/img/porduct-sale-content/product/6.JPG',
            hot:false
            
        },  {
            id:7,
            name:'Khăn giấy Fosters',
            price:'36.000',
            discount:62,
            quantity:100,
            quantitySold:95,
            image:'./assets/img/porduct-sale-content/product/7.png',
            hot:false
            
        }, {
            id:8,
            name:'Bàn học',
            price:'36.000',
            discount:62,
            quantity:100,
            quantitySold:5,
            image:'./assets/img/porduct-sale-content/product/8.png',
            hot:false
            
        }, {
            id:9,
            name:'coca-cola vi nguyên bản',
            price:'36.000',
            discount:62,
            quantity:100,
            quantitySold:32,
            image:'./assets/img/porduct-sale-content/product/9.png',
            hot:false
            
        }, {
            id:10,
            name:'Dụng cụ tập thể dục',
            price:'36.000',
            discount:62,
            quantity:100,
            quantitySold:17,
            image:'./assets/img/porduct-sale-content/product/10.jpg',
            hot:false
            
        }
    ]

    if(getBoxElementItemProduct){
        let html = product.map( (product,id) => {
            return `
            <a href="" class="product__sale-item-box">
            <div class="prodcut__sale-item-img">
                <img src="${product.image}" alt="">

                <div class="img__flats-sale">
                     <img src="./assets/img/porduct-sale-content/product/tikisale.png" alt="">
                </div>

                <div class="flats-sale-discount"><p>${product.discount}%</p></div>

            </div>

            <div class="product__sale-item-price">
                <p>${product.price}đ</p>
            </div>

            <div class="product__sale-sold">
                <div class="product__sale-progress" style="width:${(product.quantitySold / product.quantity) * 100}%;"></div>
                <span class="product__sale-sold-amount">${product.quantitySold > 0 ? 'Đã bán'+ ' ' + product.quantitySold : 'Vừa mở bán'}</span>
                <img class="product__sale-sold-hot-icon" ${(product.quantitySold / product.quantity) * 100 >=  45 ? 'id="hot"' : ''} src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg" alt="">
            </div> 
    </a>
            
            `
        } )

        getBoxElementItemProduct.innerHTML = html.join('');
    }

    if(getBoxElementBtnRight){
        getBoxElementBtnRight.onclick = function(){
            getBoxElementBtnRight.style.display ='none';
            getBoxElementBtnLeft.style.display ='block';
            getBoxElementItemProduct.style.transform = 'translateX(-100%)';
        }
    }


    if(getBoxElementBtnLeft){
        getBoxElementBtnLeft.onclick = function(){
            getBoxElementBtnRight.style.display ='block';
            getBoxElementBtnLeft.style.display ='none';
            getBoxElementItemProduct.style.transform = 'translateX(0)';
        }
        
    }

}

function productSaleTime(){
    let countDownDate = new Date("Aug 14, 2021 20:29:11").getTime();

    let updateTime = setInterval(function(){
        var now = new Date().getTime();


        var distance = countDownDate - now;
 
        

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('hour').innerHTML = (hours < 10 ? '0' : '') + hours;
        document.getElementById('minute').innerHTML = (minutes < 10 ? '0' : '') + minutes;
        document.getElementById('second').innerHTML = seconds;

        if (distance < 0) {
            clearInterval(updateTime);
            document.getElementById('hour').innerHTML = '00'
            document.getElementById('minute').innerHTML = '00'
            document.getElementById('second').innerHTML = '00'
          }

    },1000) 

    
}


contentShowProductSale();
productSaleTime();
