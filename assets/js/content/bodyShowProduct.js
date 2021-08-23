function bodyShowProduct(){
    const getBoxShowBodyElement = document.querySelector('.content__body--show-product-box');
    const getElementBtn = document.querySelector('.content__btn-show-more-product');
    let products = [
        {
            id:1,
            name:'Dây Nhảy Tập Thể Dục Cao Cấp Tại Nhà ',
            price:'150.000',
            image:'./assets/img/content__product-show-body/1.jpg',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:18,
            star:3,
            productReviews:0,
            discount:'37%',

        },
        {
            id:2,
            name:'Điện Thoại iPhone 12 128GB - Hàng Chính Hãng',
            price:'19.990.000',
            image:'./assets/img/content__product-show-body/2.jpg',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:1000,
            star:5,
            productReviews:0,
            discount:'23%',

        },
        {
            id:3,
            name:'Điện Thoại iPhone 11 64GB - Hàng Chính Hãng',
            price:'15.990.000',
            image:'./assets/img/content__product-show-body/3.jpg',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:800,
            star:5,
            productReviews:0,
            discount:'11%',

        },
        {
            id:4,
            name:'Điện Thoại iPhone 11 64GB - Hàng Chính Hãng',
            price:'15.990.000',
            image:'./assets/img/content__product-show-body/4.jpg',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:667,
            star:4,
            productReviews:0,
            discount:'11%',

        },
        {
            id:5,
            name:'Tivi Sam Sung Ultra HD - Hàng Chính Hãng',
            price:'11.990.000',
            image:'./assets/img/content__product-show-body/5.jpg',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:200,
            star:2,
            productReviews:0,
            discount:'32%',

        },
        {
            id:6,
            name:'Rau Xanh Combo 5k - Hàng chính hãng ',
            price:'50.000',
            image:'./assets/img/content__product-show-body/5.png',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:10000,
            star:5,
            productReviews:0,
            discount:'60%',

        },
        {
            id:7,
            name:'Cân sức khỏe XaoMi - Hàng Chính Hãng',
            price:'290.000',
            image:'./assets/img/content__product-show-body/6.jpg',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:104,
            star:4,
            productReviews:0,
            discount:'11%',

        },
        {
            id:8,
            name:'Sách Hack não 1500 từ tiếng anh - Hàng chính hãng',
            price:'390.000',
            image:'./assets/img/content__product-show-body/7.png',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:360,
            star:1,
            productReviews:0,
            discount:'20%',

        },
        {
            id:9,
            name:'Nồi chiên không dầu SUNHOUSE - Hàng chính hãng',
            price:'5.990.000',
            image:'./assets/img/content__product-show-body/8.jpg',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:360,
            star:3,
            productReviews:0,
            discount:'31%',

        },
        {
            id:10,
            name:'Thịt heo siêu sạch - Hàng Chính Hãng',
            price:'90.000',
            image:'./assets/img/content__product-show-body/10.png',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:200,
            star:5,
            productReviews:0,
            discount:'51%',

        },
        {
            id:11,
            name:'Dây Nhảy Tập Thể Dục Cao Cấp Tại Nhà ',
            price:'150.000',
            image:'./assets/img/content__product-show-body/1.jpg',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:18,
            star:3,
            productReviews:0,
            discount:'37%',

        },
        {
            id:12,
            name:'Điện Thoại iPhone 12 128GB - Hàng Chính Hãng',
            price:'19.990.000',
            image:'./assets/img/content__product-show-body/2.jpg',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:1000,
            star:5,
            productReviews:0,
            discount:'23%',

        },
        {
            id:13,
            name:'Điện Thoại iPhone 11 64GB - Hàng Chính Hãng',
            price:'15.990.000',
            image:'./assets/img/content__product-show-body/3.jpg',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:800,
            star:5,
            productReviews:0,
            discount:'11%',

        },
        {
            id:14,
            name:'Điện Thoại iPhone 11 64GB - Hàng Chính Hãng',
            price:'15.990.000',
            image:'./assets/img/content__product-show-body/4.jpg',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:667,
            star:4,
            productReviews:0,
            discount:'11%',

        },
        {
            id:15,
            name:'Tivi Sam Sung Ultra HD - Hàng Chính Hãng',
            price:'11.990.000',
            image:'./assets/img/content__product-show-body/5.jpg',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:200,
            star:2,
            productReviews:0,
            discount:'32%',

        },
        {
            id:16,
            name:'Rau Xanh Combo 5k - Hàng chính hãng ',
            price:'50.000',
            image:'./assets/img/content__product-show-body/5.png',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:10000,
            star:5,
            productReviews:0,
            discount:'60%',

        },
        {
            id:17,
            name:'Cân sức khỏe XaoMi - Hàng Chính Hãng',
            price:'290.000',
            image:'./assets/img/content__product-show-body/6.jpg',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:104,
            star:4,
            productReviews:0,
            discount:'11%',

        },
        {
            id:18,
            name:'Sách Hack não 1500 từ tiếng anh - Hàng chính hãng',
            price:'390.000',
            image:'./assets/img/content__product-show-body/7.png',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:360,
            star:1,
            productReviews:0,
            discount:'20%',

        },
        {
            id:19,
            name:'Nồi chiên không dầu SUNHOUSE - Hàng chính hãng',
            price:'5.990.000',
            image:'./assets/img/content__product-show-body/8.jpg',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:360,
            star:3,
            productReviews:0,
            discount:'31%',

        },
        {
            id:20,
            name:'Thịt heo siêu sạch - Hàng Chính Hãng',
            price:'90.000',
            image:'./assets/img/content__product-show-body/10.png',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:200,
            star:5,
            productReviews:0,
            discount:'51%',

        },
        {
            id:10,
            name:'Thịt heo siêu sạch - Hàng Chính Hãng',
            price:'90.000',
            image:'./assets/img/content__product-show-body/10.png',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:200,
            star:5,
            productReviews:0,
            discount:'51%',

        },
        {
            id:11,
            name:'Dây Nhảy Tập Thể Dục Cao Cấp Tại Nhà ',
            price:'150.000',
            image:'./assets/img/content__product-show-body/1.jpg',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:18,
            star:3,
            productReviews:0,
            discount:'37%',

        },
        {
            id:12,
            name:'Điện Thoại iPhone 12 128GB - Hàng Chính Hãng',
            price:'19.990.000',
            image:'./assets/img/content__product-show-body/2.jpg',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:1000,
            star:5,
            productReviews:0,
            discount:'23%',

        },
        {
            id:13,
            name:'Điện Thoại iPhone 11 64GB - Hàng Chính Hãng',
            price:'15.990.000',
            image:'./assets/img/content__product-show-body/3.jpg',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:800,
            star:5,
            productReviews:0,
            discount:'11%',

        },
        {
            id:14,
            name:'Điện Thoại iPhone 11 64GB - Hàng Chính Hãng',
            price:'15.990.000',
            image:'./assets/img/content__product-show-body/4.jpg',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:667,
            star:4,
            productReviews:0,
            discount:'11%',

        },
        {
            id:15,
            name:'Tivi Sam Sung Ultra HD - Hàng Chính Hãng',
            price:'11.990.000',
            image:'./assets/img/content__product-show-body/5.jpg',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:200,
            star:2,
            productReviews:0,
            discount:'32%',

        },
        {
            id:16,
            name:'Rau Xanh Combo 5k - Hàng chính hãng ',
            price:'50.000',
            image:'./assets/img/content__product-show-body/5.png',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:10000,
            star:5,
            productReviews:0,
            discount:'60%',

        },
        {
            id:17,
            name:'Cân sức khỏe XaoMi - Hàng Chính Hãng',
            price:'290.000',
            image:'./assets/img/content__product-show-body/6.jpg',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:104,
            star:4,
            productReviews:0,
            discount:'11%',

        },
        {
            id:18,
            name:'Sách Hack não 1500 từ tiếng anh - Hàng chính hãng',
            price:'390.000',
            image:'./assets/img/content__product-show-body/7.png',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:360,
            star:1,
            productReviews:0,
            discount:'20%',

        },
        {
            id:19,
            name:'Nồi chiên không dầu SUNHOUSE - Hàng chính hãng',
            price:'5.990.000',
            image:'./assets/img/content__product-show-body/8.jpg',
            imageExtra:'./assets/img/content__product-show-body/tikiflast.png',
            sold:360,
            star:3,
            productReviews:0,
            discount:'31%',

        },
      
       
        
       

        
    ]
    
    function render(productsArr,BoxElement){
        let html =productsArr.map((product,id) => { 
            let evaluate = [];
            for(var i = 0 ; i < product.star; i++){
                evaluate.push(`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="14" color="#fdd836" height="14" width="14" xmlns="http://www.w3.org/2000/svg" style="color: rgb(253, 216, 54);">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>`);
            }
            return `
            <a href="" class="content__body--show-product-link">
                <div class="content__body-product-item">
                    <div class="content__body-product-img">
                        
                        <img class="content__body-product-img-primary" src="${product.image}" alt="">
                        <img class="content__body-product-img-extra" src="${product.imageExtra}"  alt="">
                    </div>
                    <div class="content__body-product-text">
                        <div class="content__body-product-text-name">
                            <span>${product.name}</span>
                        </div>
    
                        <div class="content__body-product-text-evaluate">
                            <div class="content__body-product-text-evaluate-img">
                                ${evaluate.join('')}
                            </div>
                            
                            <span></span>
                            <div class="content__body-product-text-evaluate-quantity-slod">
                                <span>${product.sold} Đã bán</span>
                            </div>
                        </div>    
                    
                        <div class="content__body-product-text-price">
                            <span class="product-price">${product.price}đ</span>
                            <span class="product-price-quantity">-${product.discount}</span>
                        </div>
                    </div>
                </div>
            </a>
    
            `
        })
        BoxElement.innerHTML = html.join('');

        
    }
    function renderMore(seeMore,BoxElement){
        let html = products.filter( (product,id) =>{
            return id  < seeMore
        })
        render(html,BoxElement);
    }

    function firstRender(){
        let firstListProduct = products.filter( (product,id) =>{
            return id < 10
        })
        let html = render(firstListProduct,getBoxShowBodyElement);
        return firstListProduct.length
    }

    function ShowMoreProduct(){ 
            if(getElementBtn){
               let initialQuantityProduct = firstRender()
               let sumQuantityProduct = products.length;
               let showMore=initialQuantityProduct
               getElementBtn.onclick = function(){
                   if(showMore < sumQuantityProduct ){
                    showMore += initialQuantityProduct
                    renderMore(showMore,getBoxShowBodyElement);
                    if(showMore >= sumQuantityProduct ){
                        getElementBtn.innerHTML = 'Thu Gọn'
                    }
                   }else{
                    firstRender();
                    showMore=initialQuantityProduct
                    getElementBtn.innerHTML = 'Xêm Thêm'

                   }
               }
                    
            } 
    }
 

    function start(){
        firstRender();
        ShowMoreProduct();
    }

   start();


}

bodyShowProduct();
