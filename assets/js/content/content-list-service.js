function contentShowItemService(){
    const  getElementBox = document.querySelector('.list-service-box');
    let itemService = [
        {   id:1,
            name:'Bí kíp săn sale',
            image:'./assets/img/content list service/1.png',
            link:'',

        },
        {   id:2,
            name:'Mã giảm giá',
            image:'./assets/img/content list service/2.png',
            link:'',

        },
        {   id:3,
            name:'Ưu đãi thanh toán',
            image:'./assets/img/content list service/3.png',
            link:'',

        },
        {   id:4,
            name:'Không giới hạng',
            image:'./assets/img/content list service/4.png',
            link:'',

        },
        {   id:5,
            name:'Giảm đến 50%',
            image:'./assets/img/content list service/5.png',
            link:'',

        },
        {   id:6,
            name:'Dịch vụ & Tiện ích',
            image:'./assets/img/content list service/6.png',
            link:'',

        },
        {   id:7,
            name:'Đi chợ oline',
            image:'./assets/img/content list service/7.png',
            link:'',

        },
        {   id:8,
            name:'Hoàn tiền 15%',
            image:'./assets/img/content list service/8.png',
            link:'',

        },
        {   id:9,
            name:'Gói hội viên',
            image:'./assets/img/content list service/9.png',
            link:'',

        },
        {   id:10,
            name:'Coupon 50%',
            image:'./assets/img/content list service/10.png',
            link:'',

        },
    ]  
    if(getElementBox){
        let html = itemService.map( (item,id) => {
            return `
            <a href="${item.link}" class="content__category-Outstanding-link">      
            <img src="${item.image}" alt="">
            <span>${item.name}</span>
            </a>
            `
        })
        getElementBox.innerHTML = html.join('');
    }
        


    
}



contentShowItemService();