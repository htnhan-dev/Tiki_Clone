function contentShowCategoryOutStanding(){
    const getElementBox = document.querySelector('.content__category-Outstanding-box');
    let listItem = [
        {
            id:1,
            name:'Rau củ quả',
            image:'./assets/img/content__category-item-outstanding/1.jpg',
            link:'',
        },
        {
            id:2,
            name:'Thực phẩm tươi sống',
            image:'./assets/img/content__category-item-outstanding/2.png',
            link:'',
        },
        {
            id:3,
            name:'Giầy thể thao nam',
            image:'./assets/img/content__category-item-outstanding/3.JPG',
            link:'',
        },
        {
            id:4,
            name:'Balo',
            image:'./assets/img/content__category-item-outstanding/4.jpg',
            link:'',
        },
        {
            id:5,
            name:'Nhảy dây',
            image:'./assets/img/content__category-item-outstanding/5.jpg',
            link:'',
        },
        {
            id:6,
            name:'Bàn ghế học sinh',
            image:'./assets/img/content__category-item-outstanding/6.jpg',
            link:'',
        },
        {
            id:7,
            name:'Cân sức khỏe',
            image:'./assets/img/content__category-item-outstanding/7.jpg',
            link:'',
        },
        {
            id:8,
            name:'Điện thoại phổ thông',
            image:'./assets/img/content__category-item-outstanding/8.jpg',
            link:'',
        },
        {
            id:9,
            name:'Điện thoại SmartPhone',
            image:'./assets/img/content__category-item-outstanding/9.jpg',
            link:''
        },
        {
            id:10,
            name:'Kem đánh răng',
            image:'./assets/img/content__category-item-outstanding/10.jpg',
            link:'',
        },
        {
            id:11,
            name:'Sách học tiếng anh',
            image:'./assets/img/content__category-item-outstanding/11.jpg',
            link:'',
        },
        {
            id:12,
            name:'Nồi Chiên',
            image:'./assets/img/content__category-item-outstanding/12.jpg',
            link:'',
        },
        {
            id:13,
            name:'Rau củ quả xanh',
            image:'./assets/img/content__category-item-outstanding/1.jpg',
            link:'',
        },
        {
            id:14,
            name:'Sách tư duy kỹ năng sống',
            image:'./assets/img/content__category-item-outstanding/14.jpg',
            link:'',
        },
        {
            id:15,
            name:'Trái cây nội địa ',
            image:'./assets/img/content__category-item-outstanding/15.jpg',
            link:'',
        },
        {
            id:16,
            name:'Bàn ghế làm việc',
            image:'./assets/img/content__category-item-outstanding/16.jpg',
            link:'',
        },
        {
            id:17,
            name:'Thực phẩm ăn liền',
            image:'./assets/img/content__category-item-outstanding/17.jpg',
            link:'',
        },
        {
            id:18,
            name:'Tiểu thuyết',
            image:'./assets/img/content__category-item-outstanding/18.jpg',
            link:'',
        },
        {
            id:19,
            name:'Dao - Máy cạo râu & Hớt tóc',
            image:'./assets/img/content__category-item-outstanding/19.jpg',
            link:'',
        },
        {
            id:20,
            name:'Tã quần',
            image:'./assets/img/content__category-item-outstanding/20.jpg',
            link:'',
        },

    ]
    if(getElementBox){
        let htmlLisItems = listItem.map( item => {
            return ` <a href="${item.link}" class="content__category-Outstanding-link">      
                        <img src="${item.image}" alt="">
                        <span class="">${item.name}</span>
                    </a>`
        })
        getElementBox.innerHTML = htmlLisItems.join('');

    }



}

contentShowCategoryOutStanding();





















