function showHeaderBody(){
    const getElementBox = document.querySelector('.content__header-show-prodcut-item-box');
    let itemHeader = [
        {
            id:1,
            name:'Dành cho bạn',
            image:'./assets/img/Content-header-item/1.png',
            link:'',
        },
        {
            id:2,
            name:'Philips',
            image:'./assets/img/Content-header-item/2.png',
            link:'',
        },
        {
            id:3,
            name:'Deal siêu hot ',
            image:'./assets/img/Content-header-item/3.png',
            link:'',
        },
        {
            id:4,
            name:'coupon 100k',
            image:'./assets/img/Content-header-item/4.png',
            link:'',
        },
        {
            id:5,
            name:'Đi chợ siêu sale',
            image:'./assets/img/Content-header-item/5.png',
            link:'',
        },
        {
            id:6,
            name:'Hàn mới',
            image:'./assets/img/Content-header-item/6.png',
            link:'',
        },
        {
            id:7,
            name:'Không giới hạn',
            image:'./assets/img/Content-header-item/7.png',
            link:'',
        },
        {
            id:8,
            name:'Thời trang nữ',
            image:'./assets/img/Content-header-item/8.png',
            link:'',
        },
      

    ]

    if(getElementBox){
        let htmlHeaderContent = itemHeader.map( item => {
        
        return `
            <a href="${item.link}" class="content__header-show-prodcut-item-img-link">
                <img src="${item.image}" alt="">
                <span>${item.name}</span>
            </a>
            `
        })
        getElementBox.innerHTML = htmlHeaderContent.join('');
    }

    
}
showHeaderBody();