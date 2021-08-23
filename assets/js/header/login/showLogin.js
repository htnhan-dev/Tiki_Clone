function showLogin(){
    const $ = document.querySelector.bind(document);

    const getBoxElementBtn = $('.top--account-hover-btn');
    const getBoxElementBtnLogin =getBoxElementBtn.querySelector('.login');
    const getBoxElementBtnCreate =getBoxElementBtn.querySelector('.create');
    const getBoxElementLogin = $('#login');
    const getBoxElementOverlay = $('.overlayFullSceen');
    const getBoxElementLoginPrimary = $('.login__primary');
    const getBoxElementBtnTrolley = $('.trolley__icon__text');

    let loginNormal = 
     `
        <div class="login__primary-title">
            <p>Xin chào,</p>
            <span>Đăng nhập hoặc Tạo tài khoản</span>   
        </div>
        <div class="login__primary-form-box">
            <form class="login__primary-form" action="">
                <div class="login__primary-form-input-box">
                    <input class="login__primary-form-input" type="text" name="" id="" placeholder="Số Điện Thoại">
                </div>
                <button class="login__primary-form-btn">Tiếp Tục</button>
            </form>
        </div>
        <p class="login-with-email">Đăng nhập bằng email</p>
        <div class="login__with-social-netword">
            <div class="login__with-social-netword-title">
                <p>Hoặc tiếp tục bằng</p>
            </div>

            <div class="login__with-social-netword-img">
                <img src="./assets/img/login/fb.png" alt="">
                <img src="./assets/img/login/gg.png" alt="">
                <img src="./assets/img/login/zl.png" alt="">
            </div>

            <div class="login__with-social-netword-note">
                <span>Bằng việc tiếp tục, bạn đã chấp nhận</span>
                <a href="">điều khoản sử dụng</a>
            </div>
        </div>

        

    `
    let loginWithEmail = 
        `
        <div class="login__primary-btn-next">
            <button class="primary-btn-next"><img src="./assets/img/login/next.png" alt=""></button>
        </div>

        <div class="login__primary-title">
            <p>Đăng nhập bằng email</p>
            <span>Nhập email và mật khẩu tài khoản Tiki</span>   
        </div>

        <div class="login__primary-form-box">
            <form class="login__primary-form  login__primary-form-email" action="">
                <div class="login__primary-form-input-box  form-input-box-email">
                    <input class="login__primary-form-input" type="text" name=""  placeholder="abc@gmail.com">
                </div>

                <div class="login__primary-form-input-box form-input-box-email">
                    <input class="login__primary-form-input " type="password" name=""  id="password" placeholder="Mật khẩu">
                    <span class="show-password">Hiện</span>
                </div>
                <button class="login__primary-form-btn login__primary-form-btn-email ">Đăng Nhập</button>
            </form>
        </div>

        <div class="login__primary-note-login-with-email">
            <div class="foget__password">
                <p>Quên mật khẩu?</p>
            </div>

            <div class="tip">
                <span>Chưa có tài khoản?</span>
                <p id="createAccount">Tạo Tài khoản</p>
            </div>
        </div>

        `
    let forgetPassword = `
    <div class="login__primary-btn-next">
        <button class="primary-btn-next"><img src="./assets/img/login/next.png" alt=""></button>
    </div>


    <div class="login__primary-title get-password">
        <p>Quên mật khẩu ?</p>
        <span>Vui lòng nhập thông tin tài khoản để lấy lại mật khẩu</span>   
    </div>

    <div class="login__primary-form-box">
        <form class="login__primary-form" action="">
            <div class="login__primary-form-input-box">
                <input class="login__primary-form-input" type="text" name="" id="" placeholder="Số Điện Thoại/ Email">
            </div>
            <button class="login__primary-form-btn">Lấy lại mật khẩu</button>
        </form>
    </div>

    <p class="contact-with-hotline">Đổi số điện thoại? Liên hệ Hotline 1900-6035</p>
    `
    let intoPassword =`
        <div class="login__primary-btn-next home-login">
            <button class="primary-btn-next"><img src="./assets/img/login/next.png" alt=""></button>    
        </div>

        <div class="login__primary-title">
            <p>Nhập mật khẩu</p>
        </div>

        <div class="login__primary-form-box">
            <form class="login__primary-form  login__primary-form-email" action="">
                <div class="login__primary-form-input-box form-input-box-email">
                    <input class="login__primary-form-input " type="password" name=""  id="password" placeholder="Mật khẩu">
                    <span class="show-password">Hiện</span>
                </div>
                <button class="login__primary-form-btn login__primary-form-btn-email ">Đăng Nhập</button>
            </form>
        </div>
        <p class="forget-password">Quên mật khẩu?</p>
    `
    let creatAccount =`
        <div class="login__primary-btn-next home-login">
            <button class="primary-btn-next"><img src="./assets/img/login/next.png" alt=""></button>
        </div>

        <div class="login__primary-title">
            <p>Tạo tài khoản</p>
            <span>Vui lòng nhập số điện thoại</span>   
        </div>

        <div class="login__primary-form-box">
            <form class="login__primary-form" action="">
                <div class="login__primary-form-input-box">
                    <input class="login__primary-form-input" type="text" name="" id="" placeholder="Số Điện Thoại">
                </div>
                <button class="login__primary-form-btn">Tiếp Tục</button>
            </form>
        </div>

        <div class="login__with-social-netword">
            <div class="login__with-social-netword-title">
            <p>Hoặc tiếp tục bằng</p>
        </div>

            <div class="login__with-social-netword-img">
                <img src="./assets/img/login/fb.png" alt="">
                <img src="./assets/img/login/gg.png" alt="">
                <img src="./assets/img/login/zl.png" alt="">
            </div>

            <div class="login__with-social-netword-note">
                <span>Bằng việc tiếp tục, bạn đã chấp nhận</span>
                <a href="">điều khoản sử dụng</a>
            </div>
        </div>
    `
    

    function handleIntoLogin(){
        if(getBoxElementBtnLogin){
            getBoxElementBtnLogin.onclick = function(){
              render();
                
            }
        }
    }

   function handleIntoCreate(){
        if(getBoxElementBtnCreate){
            getBoxElementBtnCreate.onclick = function(){
            render();
                
            }
        }
   }

   function handleBtnTrolley(){
        if(getBoxElementBtnTrolley){
            getBoxElementBtnTrolley.onclick = function(){
                render();
                    
            }
            
        }
   }


    function render(view){
        getBoxElementLogin.style.display = 'Block';
        getBoxElementOverlay.style.display = 'Block';
            switch(view){
                case 1:
                    getBoxElementLoginPrimary.innerHTML = loginWithEmail;
                    const getBtnForgetPassword =$('.foget__password')
                    const getBtnCreateAccount = $('#createAccount');
                    if(getBtnCreateAccount){
                        getBtnCreateAccount.onclick = function(){
                            render(4)
                        }
                    }

                    if(getBtnForgetPassword){
                        getBtnForgetPassword.onclick = function(){
                            render(2);
                        }
                    }
                    const getBtnShowPassword = $('.show-password');
                    const getBtnLoginNext = $('.primary-btn-next');
                    const getInputPassword = $('#password');
                    if(getBtnLoginNext){
                        getBtnLoginNext.onclick = function(){
                            render();
                          
                        }
                    }
                    if(getBtnShowPassword){
                        let node = true;
                        getBtnShowPassword.onclick = function(){
                            if(node){
                                node = false;
                                getInputPassword.setAttribute("type","text");
                                getBtnShowPassword.innerHTML = 'Ẩn';
                            }else{
                                node = true;
                                getInputPassword.setAttribute("type","password");
                                getBtnShowPassword.innerHTML = 'Hiện';
                            }
                        }
                    }
                break;
                case 2:
                getBoxElementLoginPrimary.innerHTML = forgetPassword;
                const getBtnNext = $('.login__primary-btn-next');
                getBtnNext.onclick = function(){
                        render(3);

                }
                break;
                case 3:
                getBoxElementLoginPrimary.innerHTML = intoPassword;
                const getBtnNextHome = $('.home-login');
                const getBtnForgetPasswordCB = $('.forget-password');
                getBtnNextHome.onclick = function(){
                   render()
                }
                if(getBtnForgetPasswordCB){
                    getBtnForgetPasswordCB.onclick = function(){
                        render(2)
                    }
                }
                break;
                case 4:
                getBoxElementLoginPrimary.innerHTML = creatAccount;
                const getBtnNextHomeFromCreate = $('.home-login');
                getBtnNextHomeFromCreate.onclick = function(){
                   render()
                }
                
                break;
                default:
                    getBoxElementLoginPrimary.innerHTML =loginNormal;
                    const getBtnCloseLogin = $('.login__poster-btn');
                    getBtnCloseLogin.onclick = function(){
                        getBoxElementLogin.style.display = 'none';
                        getBoxElementOverlay.style.display = 'none';   
                    }
                    getBoxElementOverlay.onclick = function(){
                        getBoxElementLogin.style.display = 'none';
                        getBoxElementOverlay.style.display = 'none';   
                    }
                const getBtnLoginWithEmail = $('.login-with-email');   
                getBtnLoginWithEmail.onclick = function(){
                    render(1)
                }
                break;
            }

    }    

        
    function start(){
        handleIntoLogin();
        handleIntoCreate();
        handleBtnTrolley();
    }
    start();




}

showLogin();