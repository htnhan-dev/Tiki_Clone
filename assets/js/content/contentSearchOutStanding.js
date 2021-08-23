function contentShowSearchOutStanding(){
    const getElementBox = document.querySelector('.content__search-Outstanding-img-box');
    const getElementBoxImage = document.querySelector('.content__search-Outstanding-img');

    
    let picture
    let searchOutStanding = [
        {   id:1,
            name:'Sách tiếng anh',
            quantityProduct:'337',
            images:[
                './assets/img/content-search-outstanding/1.png',
                './assets/img/content-search-outstanding/2.jpg',
                './assets/img/content-search-outstanding/3.jpg',
            ],
            link:'',
        },
        {   id:2,
            name:'Sam Sung note 10 plus',
            quantityProduct:'215',
            images:[
                './assets/img/content-search-outstanding/4.jpg',
                './assets/img/content-search-outstanding/5.jpg',
                './assets/img/content-search-outstanding/6.jpg',
            ],
            link:'',
        },
        {   id:3,
            name:'Omachi thùng 30 gói',
            quantityProduct:'404',
            images:[
                './assets/img/content-search-outstanding/7.jpg',
                './assets/img/content-search-outstanding/8.jpg',
                './assets/img/content-search-outstanding/9.jpg',
            ],
            link:'',
        },
        {   
            id:4,
            name:'Piano',
            quantityProduct:'412',
            images:[
                './assets/img/content-search-outstanding/10.jpg',
                './assets/img/content-search-outstanding/11.jpg',
                './assets/img/content-search-outstanding/12.jpg',
            ],
            link:'',
        },
    ]
    if(getElementBox){
        let picture ; 
        let htmlSearchOutStanding = searchOutStanding.map( product =>{
            picture = product.images.map( image => `<img src="${image}" alt="">`);
            return `
            <a href="${product.link}" class="content__search-Outstanding-link">
                <div class="content__search-Outstanding-img">
                    ${picture}
                </div>

                <div class="content__search-Outstanding-img-text-des">
                    <p>${product.name}</p>
                    <span>${product.quantityProduct} Sản Phẩm</span>
                </div>
            </a>
            
            `
        })
        getElementBox.innerHTML = htmlSearchOutStanding.join('');
    }

}

contentShowSearchOutStanding();