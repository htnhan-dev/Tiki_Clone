function showSlideCategoryCoupon(){
    const getElementBox = document.querySelector('.advertisement__category-slide-coupon-box');
    const getElementBoxBtnRight = document.querySelector('.category-slide-item-product-btn-move-slide-right');
    const getElementBoxBtnLeft = document.querySelector('.category-slide-item-product-btn-move-slide-left');
    let coupons = [
        {
            id:1,
            nameCoupon:'Nhập PE07 Giảm 15k',
            link:'',
            image:'./assets/img/conent-slide-advertisement/product-Slide-item/1.png'
        },
        {
            id:2,
            nameCoupon:'Nhập PE07 Giảm 15k',
            link:'',
            image:'./assets/img/conent-slide-advertisement/product-Slide-item/2.png'
        },
        {
            id:3,
            nameCoupon:'Nhập PE07 Giảm 15k',
            link:'',
            image:'./assets/img/conent-slide-advertisement/product-Slide-item/3.png'
        },
        {
            id:4,
            nameCoupon:'Nhập PE07 Giảm 15k',
            link:'',
            image:'./assets/img/conent-slide-advertisement/product-Slide-item/4.png'
        },
        {
            id:5,
            nameCoupon:'Nhập PE07 Giảm 15k',
            link:'',
            image:'./assets/img/conent-slide-advertisement/product-Slide-item/5.png'
        },
        {
            id:6,
            nameCoupon:'Nhập PE07 Giảm 15k',
            link:'',
            image:'./assets/img/conent-slide-advertisement/product-Slide-item/6.png'
        },
        {
            id:7,
            nameCoupon:'Nhập PE07 Giảm 15k',
            link:'',
            image:'./assets/img/conent-slide-advertisement/product-Slide-item/7.png'
        },
        {
            id:8,
            nameCoupon:'Nhập PE07 Giảm 15k',
            link:'',
            image:'./assets/img/conent-slide-advertisement/product-Slide-item/8.png'
        },
        {
            id:9,
            nameCoupon:'Nhập PE07 Giảm 15k',
            link:'',
            image:'./assets/img/conent-slide-advertisement/product-Slide-item/9.png'
        },
        {
            id:10,
            nameCoupon:'Nhập PE07 Giảm 15k',
            link:'',
            image:'./assets/img/conent-slide-advertisement/product-Slide-item/10.png'
        },
        {
            id:11,
            nameCoupon:'Nhập PE07 Giảm 15k',
            link:'',
            image:'./assets/img/conent-slide-advertisement/product-Slide-item/11.png'
        },
        {
            id:12,
            nameCoupon:'Nhập PE07 Giảm 15k',
            link:'',
            image:'./assets/img/conent-slide-advertisement/product-Slide-item/12.png'
        },
        {
            id:13,
            nameCoupon:'Nhập PE07 Giảm 15k',
            link:'',
            image:'./assets/img/conent-slide-advertisement/product-Slide-item/13.png'
        },

    ]

    if(getElementBox){
        let htmlItemSlide = coupons.map( item => {
            return `
            <a href="${item.link}" class="category-slide-item-product">
                <img class="category-slide-item-product-img" src="${item.image}" alt="">
                <p class="category-slide-item-product-text">${item.nameCoupon}</p>
            </a>
            `
        } )

        getElementBox.innerHTML = htmlItemSlide.join('');
    }
    getElementBoxBtnRight.onclick = function(){
        getElementBox.style.transform = 'translateX(-100%)';
        getElementBoxBtnRight.style.display= 'none';
        getElementBoxBtnLeft.style.display= 'block';
    }

    getElementBoxBtnLeft.onclick = function(){
        getElementBox.style.transform = 'translateX(0)';
        getElementBoxBtnRight.style.display= 'block';
        getElementBoxBtnLeft.style.display= 'none';


    }
}
showSlideCategoryCoupon();