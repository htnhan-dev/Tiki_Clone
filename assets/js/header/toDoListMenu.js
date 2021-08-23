function showToDoList(){
    const getInputBox = document.querySelector('.nav__top--search-input');
    const getToDoList = document.querySelector('.nav__top--search-toDoList');
    const getInput = document.querySelector('.search-input');
    const getOverlay = document.querySelector('.nav_overlay');
    var tabIndex ;


  


    if(getInputBox){
        
        getInputBox.onclick = function(){
            getToDoList.style.display = 'block'
            getOverlay.style.display = 'block'
           
        } 

        getInputBox.onmouseleave = function(){
            getToDoList.style.display = 'none'
            getOverlay.style.display = 'none'
           
        } 
        
       
       
    }

    function RenderListSearched(){
    const getElementBoxList = document.querySelector('.search__list-item-box');

        let list = [
            {
                id:1,
                name:'nước giặt',
                link:''
            },
            {
                id:2,
                name:'kem đánh răng',
                link:''
            },
            {
                id:3,
                name:'khăn giấy',
                link:''
            },
            {
                id:4,
                name:'Sữa Vinamilk',
                link:''
            },
            {
                id:5,
                name:'sách',
                link:''
            },
            {
                id:6,
                name:'lò chiên không dầu',
                link:''
            },
            {
                id:7,
                name:'iphone 11',
                link:''
            },
            {
                id:8,
                name:'coca-cola',
                link:''
            },
            {
                id:9,
                name:'tả em bé',
                link:''
            },
            {
                id:10,
                name:'bia hà nội',
                link:''
            },
            
            
        ];
        function firstShow(){
            if(getElementBoxList){
                let firstList = list.filter( (item,id) =>{
                    return id <=2;
                } )
        
                render(firstList,getElementBoxList);  
            } 
        }
        
    
        function render(list,BoxElement){
                let htmlList = list.map((item,id)=>{
                    return `
                    <a class="search__list-item" href="${item.link} data-index-${id}">
                        <img class="search__list-btn__reload" src="https://salt.tikicdn.com/ts/upload/90/fa/09/9deed3e3186254637b5ca648f3032665.png" alt="">
                        <span class="keyWord">${item.name}</span>
                    <img src="https://salt.tikicdn.com/ts/upload/5c/a1/7e/cd8cde79e81844f2c394efdc415f5441.png"  class="search__list-btn__delete" alt="">
                  </a>
                    
                    `
                })
                BoxElement.innerHTML = htmlList.join('');
    
    
    
        }

        // function handleDelete(id){
        //     list.splice(id,1);
        //     firstShow();

        // }
    
        function handleList(){
            const getBtnSeeMore = document.querySelector('.search__list__seeMore');
            const getBtnText = getBtnSeeMore.querySelector('span');
            const getBtnIcon = getBtnSeeMore.querySelector('.show-more__icon')
            let btnSeeMore = true;
            if(getBtnSeeMore){
                getBtnSeeMore.onclick = function(){
    
                    if(btnSeeMore){
                        let ListFull = list.filter( (item,id) =>{
                            return id ;
                        } )
                        render(ListFull,getElementBoxList);
                        btnSeeMore = false;
                        getBtnIcon.style.transform ='rotate(-90deg)';
                        getBtnText.innerHTML = 'Thu Gọn';
    
                        
                    }else{
                        firstShow();
                        getBtnIcon.style.transform ='rotate(90deg)';
                        getBtnText.innerHTML = 'Xem Thêm';
                        btnSeeMore = true;
                    }
                   
                }
            }
    
        }
    
    
        function start(){
            handleList();
            firstShow();
            
        }
       
        start();
        
    }

    function RenderShowSearchOutStanding(){
        const getBoxElement = document.querySelector('.search__list-outStanding-item-box');
        let SearchOutStanding =[
            {
                id:1,
                name:'Hack não 1500 từ tiếng anh ',
                image:'./assets/img/header/todolistmenu/searchOutStanding/1.jpg',
                link:'',
            },
            {
                id:2,
                name:'Hack não 1500 từ tiếng anh ',
                image:'./assets/img/header/todolistmenu/searchOutStanding/2.jpg',
                link:'',
            },
            {
                id:3,
                name:'Hack não 1500 từ tiếng anh ',
                image:'./assets/img/header/todolistmenu/searchOutStanding/3.jpg',
                link:'',
            },
            {
                id:4,
                name:'Hack não 1500 từ tiếng anh ',
                image:'./assets/img/header/todolistmenu/searchOutStanding/4.jpg',
                link:'',
            },
            {
                id:5,
                name:'Hack não 1500 từ tiếng anh ',
                image:'./assets/img/header/todolistmenu/searchOutStanding/5.jpg',
                link:'',
            },
            {
                id:6,
                name:'Hack não 1500 từ tiếng anh ',
                image:'./assets/img/header/todolistmenu/searchOutStanding/6.jpg',
                link:'',
            },
            {
                id:7,
                name:'Hack não 1500 từ tiếng anh ',
                image:'./assets/img/header/todolistmenu/searchOutStanding/7.jpg',
                link:'',
            },
            {
                id:8,
                name:'Hack não 1500 từ tiếng anh ',
                image:'./assets/img/header/todolistmenu/searchOutStanding/8.jpg',
                link:'',
            },
            {
                id:9,
                name:'Hack não 1500 từ tiếng anh ',
                image:'./assets/img/header/todolistmenu/searchOutStanding/9.jpg',
                link:'',
            },
            {
                id:10,
                name:'Hack não 1500 từ tiếng anh ',
                image:'./assets/img/header/todolistmenu/searchOutStanding/10.jpg',
                link:'',
            },
            {
                id:11,
                name:'Hack não 1500 từ tiếng anh ',
                image:'./assets/img/header/todolistmenu/searchOutStanding/11.jpg',
                link:'',
            },
            {
                id:12,
                name:'Hack não 1500 từ tiếng anh ',
                image:'./assets/img/header/todolistmenu/searchOutStanding/12.jpg',
                link:'',
            },
        ]


        function firstRender(){
            if(getBoxElement){
                let showWhenLoad = 0 
                    let firstList = SearchOutStanding.filter( (item,id) =>{
                        showWhenLoad =5;
                        return id <=5;
                    });
                    render(firstList,getBoxElement);
                   
              

            }
        }

        function render(list,BoxElement){
            let html = list.map( (item,id) => {
                return `
                
                <a href="${item.link}" class="search__list-outStanding-item-link">
                        <img src="${item.image}" alt="">
                        <span>${item.name} </span>
                </a>
                
                `
            })
            BoxElement.innerHTML = html.join('');

            
        }

        function start(){
            firstRender();
        }
        start();
    }


    function RenderShowCategoryOutStanding(){
        const getBoxElment  = document.querySelector('.search__list-category-outStanding-item-box');

        let categoryOutstandingList = [
            {
                id:1,
                name:'mát xa mặt',
                image:'./assets/img/header/todolistmenu/categoryOutstanding/1.jpg',
                link:'',
            },
            {
                id:2,
                name:'Iphone 11 ',
                image:'./assets/img/header/todolistmenu/categoryOutstanding/2.jpg',
                link:'',
            },
            {
                id:3,
                name:'Sách học tiếng anh ',
                image:'./assets/img/header/todolistmenu/categoryOutstanding/3.jpg',
                link:'',
            },
            {
                id:4,
                name:'Màng hình phổ thông ',
                image:'./assets/img/header/todolistmenu/categoryOutstanding/4.jpg',
                link:'',
            },
            {
                id:5,
                name:'Giầy chạy  bộ',
                image:'./assets/img/header/todolistmenu/categoryOutstanding/5.jpg',
                link:'',
            },
            {
                id:6,
                name:'kem đánh răng',
                image:'./assets/img/header/todolistmenu/categoryOutstanding/6.jpg',
                link:'',
            },
            {
                id:7,
                name:'nhạc cụ ',
                image:'./assets/img/header/todolistmenu/categoryOutstanding/7.jpg',
                link:'',
            },
            {
                id:8,
                name:'Bàn học sinh',
                image:'./assets/img/header/todolistmenu/categoryOutstanding/8.jpg',
                link:'',
            },
         
        ];


        function firstRender (){
            if(getBoxElment){
                let = firstList = categoryOutstandingList.filter( (item,id) => {
                    return id <=7;
                })
                render(firstList,getBoxElment);
            }

        }

        function render(list,BoxElement){
            let html = list.map( (item,id) => {
                return `
                <a href="${item.link}" class="search__list-category-outStanding-item-link">
                    <img src="${item.image}" alt="">
                    <span>${item.name}</span>
                </a>
                
                `
            })
            BoxElement.innerHTML = html.join('');

        }

        function start(){
            firstRender();
        }


        start();



    }


    



    

    RenderListSearched();
    RenderShowSearchOutStanding();
    RenderShowCategoryOutStanding();

}


showToDoList();
