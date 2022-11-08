const onLoad = () => {
    const router = window.location.hash
    switch (router) {
        case `#dragonball`:
            document.getElementById(`router`).innerHTML = 
                `<section class="products" id="products">
                    <h1 class="heading"><span>Dragon Ball</span></h1>

                    <div class="product-slider">
                        <div class="wrapper">
                        <!-- 1 -->
                        <div class="box">
                            <img src="img/gohan.jpg" alt="" />
                            <h3>Son Gohan</h3>
                            <div class="price">$4.99/- - 10.99/-</div>
                            <div class="stars">
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars-half-alt"></i>
                            </div>
                        </div>
                        <!-- 2 -->
                        <div class="box">
                            <img src="img/gohan.jpg" alt="" />
                            <h3>Son Gohan</h3>
                            <div class="price">$4.99/- - 10.99/-</div>
                            <div class="stars">
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars-half-alt"></i>
                            </div>
                        </div>
                        <!-- 3 -->
                        <div class="box">
                            <img src="img/gohan.jpg" alt="">
                            <h3>Son Gohan</h3>
                            <div class="price">$4.99/- - 10.99/-</div>
                            <div class="stars">
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars-half-alt"></i>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="product-slider">
                        <div class="wrapper">
                        <!-- 4 -->
                        <div class="box">
                            <img src="img/son_go_ku.jpg" alt="">
                            <h3>Son Goku</h3>
                            <div class="price">$4.99/- - 10.99/-</div>
                            <div class="stars">
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars-half-alt"></i>
                            </div>
                        </div>
                        <!-- 5 -->
                        <div class="box">
                            <img src="img/son_go_ku.jpg" alt="">
                            <h3>Son Goku</h3>
                            <div class="price">$4.99/- - 10.99/-</div>
                            <div class="stars">
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars-half-alt"></i>
                            </div>
                        </div>
                        <!-- 6 -->
                        <div class="box">
                            <img src="img/son_go_ku.jpg" alt="">
                            <h3>Son Goku</h3>
                            <div class="price">$4.99/- -10.99/-</div>
                            <div class="stars">
                            <i class="fasfa-stars"></i>
                            <i class="fasfa-stars"></i>
                            <i class="fasfa-stars"></i>
                            <i class="fasfa-stars"></i>
                            <i class="fasfa-stars"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>`
            break;
    }
    window.scrollTo(0, 0)
}
onLoad();