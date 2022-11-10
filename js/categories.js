const onLoad = () => {
  const router = window.location.hash.substring(1);
  switch (router) {
    case `dragonball`:
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
                            <a href="#" class="btn">add to cart</a>
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
                            <a href="#" class="btn">add to cart</a>
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
                            <a href="#" class="btn">add to cart</a>
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
                            <a href="#" class="btn">add to cart</a>
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
                            <a href="#" class="btn">add to cart</a>
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
                            <a href="#" class="btn">add to cart</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>`
      window.scrollTo(0, 0);
      break;
    case `onepiece`:
      document.getElementById(`router`).innerHTML =
        `<section class="products" id="products">
                        <h1 class="heading"><span>Onepiece</span></h1>

                        <div class="product-slider">
                            <div class="wrapper">
                            <!-- 1 -->
                            <div class="box">
                                <img src="img/ace.jpg" alt="" />
                                <h3>Portgas D.Ace</h3>
                                <div class="price">$4.99/- - 10.99/-</div>
                                <div class="stars">
                                <i class="fas fa-stars"></i>
                                <i class="fas fa-stars"></i>
                                <i class="fas fa-stars"></i>
                                <i class="fas fa-stars"></i>
                                <i class="fas fa-stars-half-alt"></i>
                                <a href="#" class="btn">add to cart</a>
                                </div>
                            </div>
                            <!-- 2 -->
                            <div class="box">
                                <img src="img/ace.jpg" alt="" />
                                <h3>Portgas D.Ace</h3>
                                <div class="price">$4.99/- - 10.99/-</div>
                                <div class="stars">
                                <i class="fas fa-stars"></i>
                                <i class="fas fa-stars"></i>
                                <i class="fas fa-stars"></i>
                                <i class="fas fa-stars"></i>
                                <i class="fas fa-stars-half-alt"></i>
                                <a href="#" class="btn">add to cart</a>
                                </div>
                            </div>
                            <!-- 3 -->
                            <div class="box">
                                <img src="img/ace.jpg" alt="" />
                                <h3>Portgas D.Ace</h3>
                                <div class="price">$4.99/- - 10.99/-</div>
                                <div class="stars">
                                <i class="fas fa-stars"></i>
                                <i class="fas fa-stars"></i>
                                <i class="fas fa-stars"></i>
                                <i class="fas fa-stars"></i>
                                <i class="fas fa-stars-half-alt"></i>
                                <a href="#" class="btn">add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="product-slider">
                            <div class="wrapper">
                            <!-- 4 -->
                            <div class="box">
                                <img src="img/luffy.png" alt="" />
                                <h3>Monkey D.Luffy</h3>
                                <div class="price">$4.99/- - 10.99/-</div>
                                <div class="stars">
                                <i class="fas fa-stars"></i>
                                <i class="fas fa-stars"></i>
                                <i class="fas fa-stars"></i>
                                <i class="fas fa-stars"></i>
                                <i class="fas fa-stars-half-alt"></i>
                                <a href="#" class="btn">add to cart</a>
                                </div>
                            </div>
                            <!-- 5 -->
                            <div class="box">
                                <img src="img/luffy.png" alt="" />
                                <h3>Monkey D.Luffy</h3>
                                <div class="price">$4.99/- - 10.99/-</div>
                                <div class="stars">
                                <i class="fas fa-stars"></i>
                                <i class="fas fa-stars"></i>
                                <i class="fas fa-stars"></i>
                                <i class="fas fa-stars"></i>
                                <i class="fas fa-stars-half-alt"></i>
                                <a href="#" class="btn">add to cart</a>
                                </div>
                            </div>
                            <!-- 6 -->
                            <div class="box">
                                <img src="img/luffy.png" alt="" />
                                <h3>Monkey D.Luffy</h3>
                                <div class="price">$4.99/- -10.99/-</div>
                                <div class="stars">
                                <i class="fasfa-stars"></i>
                                <i class="fasfa-stars"></i>
                                <i class="fasfa-stars"></i>
                                <i class="fasfa-stars"></i>
                                <i class="fasfa-stars"></i>
                                <a href="#" class="btn">add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>`
      window.scrollTo(0, 0);
      break;
    case `naruto`:
      document.getElementById(`router`).innerHTML =
        `<section class="products" id="products">
                <h1 class="heading"><span>Naruto</span></h1>

                <div class="product-slider">
                    <div class="wrapper">
                    <!-- 1 -->
                    <div class="box">
                        <img src="img/naruto.jpg" alt="" />
                        <h3>Naruto</h3>
                        <div class="price">$4.99/- - 10.99/-</div>
                        <div class="stars">
                        <i class="fas fa-stars"></i>
                        <i class="fas fa-stars"></i>
                        <i class="fas fa-stars"></i>
                        <i class="fas fa-stars"></i>
                        <i class="fas fa-stars-half-alt"></i>
                        <a href="#" class="btn">add to cart</a>
                        </div>
                    </div>
                    <!-- 2 -->
                    <div class="box">
                        <img src="img/minato.jpg" alt="" />
                        <h3>Minato Namikaze</h3>
                        <div class="price">$4.99/- - 10.99/-</div>
                        <div class="stars">
                        <i class="fas fa-stars"></i>
                        <i class="fas fa-stars"></i>
                        <i class="fas fa-stars"></i>
                        <i class="fas fa-stars"></i>
                        <i class="fas fa-stars-half-alt"></i>
                        <a href="#" class="btn">add to cart</a>
                        </div>
                    </div>
                    <!-- 3 -->
                    <div class="box">
                        <img src="img/itachi.jpg" alt="" />
                        <h3>Uchiha Itachi</h3>
                        <div class="price">$4.99/- - 10.99/-</div>
                        <div class="stars">
                        <i class="fas fa-stars"></i>
                        <i class="fas fa-stars"></i>
                        <i class="fas fa-stars"></i>
                        <i class="fas fa-stars"></i>
                        <i class="fas fa-stars-half-alt"></i>
                        <a href="#" class="btn">add to cart</a>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="product-slider">
                    <div class="wrapper">
                    <!-- 4 -->
                    <div class="box">
                        <img src="img/guy.jpg" alt="" />
                        <h3>Might Guy</h3>
                        <div class="price">$4.99/- - 10.99/-</div>
                        <div class="stars">
                        <i class="fas fa-stars"></i>
                        <i class="fas fa-stars"></i>
                        <i class="fas fa-stars"></i>
                        <i class="fas fa-stars"></i>
                        <i class="fas fa-stars-half-alt"></i>
                        <a href="#" class="btn">add to cart</a>
                        </div>
                    </div>
                    <!-- 5 -->
                    <div class="box">
                        <img src="img/sasukejpg.jpg" alt="" />
                        <h3>Uchiha Sasuke</h3>
                        <div class="price">$4.99/- - 10.99/-</div>
                        <div class="stars">
                        <i class="fas fa-stars"></i>
                        <i class="fas fa-stars"></i>
                        <i class="fas fa-stars"></i>
                        <i class="fas fa-stars"></i>
                        <i class="fas fa-stars-half-alt"></i>
                        <a href="#" class="btn">add to cart</a>
                        </div>
                    </div>
                    <!-- 6 -->
                    <div class="box">
                        <img src="img/sasukejpg.jpg" alt="" />
                        <h3>Uchiha Sasuke</h3>
                        <div class="price">$4.99/- -10.99/-</div>
                        <div class="stars">
                        <i class="fasfa-stars"></i>
                        <i class="fasfa-stars"></i>
                        <i class="fasfa-stars"></i>
                        <i class="fasfa-stars"></i>
                        <i class="fasfa-stars"></i>
                        <a href="#" class="btn">add to cart</a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>`
      window.scrollTo(0, 0);
      break;
    case `marvel`:
      document.getElementById(`router`).innerHTML =
        `<section class="products" id="products">
                    <h1 class="heading"><span>Thor</span></h1>

                    <div class="product-slider">
                        <div class="wrapper">
                        <!-- 1 -->
                        <div class="box">
                            <img src="img/thor.png" alt="" />
                            <h3>Thor</h3>
                            <div class="price">$4.99/- - 10.99/-</div>
                            <div class="stars">
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars-half-alt"></i>
                            <a href="#" class="btn">add to cart</a>
                            </div>
                        </div>
                        <!-- 2 -->
                        <div class="box">
                            <img src="img/thor.png" alt="" />
                            <h3>Thor</h3>
                            <div class="price">$4.99/- - 10.99/-</div>
                            <div class="stars">
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars-half-alt"></i>
                            <a href="#" class="btn">add to cart</a>
                            </div>
                        </div>
                        <!-- 3 -->
                        <div class="box">
                            <img src="img/thor.png" alt="" />
                            <h3>Thor</h3>
                            <div class="price">$4.99/- - 10.99/-</div>
                            <div class="stars">
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars-half-alt"></i>
                            <a href="#" class="btn">add to cart</a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="product-slider">
                        <div class="wrapper">
                        <!-- 4 -->
                        <div class="box">
                            <img src="img/black_panther.jpg" alt="" />
                            <h3>Black Panther</h3>
                            <div class="price">$4.99/- - 10.99/-</div>
                            <div class="stars">
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars-half-alt"></i>
                            <a href="#" class="btn">add to cart</a>
                            </div>
                        </div>
                        <!-- 5 -->
                        <div class="box">
                            <img src="img/black_panther.jpg" alt="" />
                            <h3>Black Panther</h3>
                            <div class="price">$4.99/- - 10.99/-</div>
                            <div class="stars">
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars"></i>
                            <i class="fas fa-stars-half-alt"></i>
                            <a href="#" class="btn">add to cart</a>
                            </div>
                        </div>
                        <!-- 6 -->
                        <div class="box">
                            <img src="img/black_panther.jpg" alt="" />
                            <h3>Black Panther</h3>
                            <div class="price">$4.99/- -10.99/-</div>
                            <div class="stars">
                            <i class="fasfa-stars"></i>
                            <i class="fasfa-stars"></i>
                            <i class="fasfa-stars"></i>
                            <i class="fasfa-stars"></i>
                            <i class="fasfa-stars"></i>
                            <a href="#" class="btn">add to cart</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>`
      window.scrollTo(0, 0);
      break;
    case ``:
      document.getElementById(`router`).innerHTML =
        `<!-- features section starts -->

      <section class="features" id="features">
        <h1 class="heading">our <span>features</span></h1>

        <div class="box-container">
          <div class="box">
            <img
              src="img/quality.png"
              alt=""
              style="width: 254px; height: 205px"
            />
            <h3>Đảm bảo chất lượng</h3>
            <p>Chất Lượng Được Hàng Và Trên Hình Đảm Bảo 100%</p>
          </div>

          <div class="box">
            <img
              src="img/free-delivery.jpg"
              alt=""
              style="width: 254px; height: 205px"
            />
            <h3>Miễn phí vận chuyển</h3>
            <p>Dù Bạn Ở Bất Cứ Đâu Thì Phí Vận Chuyển Đều Là 0 Đồng</p>
          </div>

          <div class="box">
            <img
              src="img/easy-pay.jpg"
              alt=""
              style="width: 254px; height: 205px"
            />
            <h3>Dễ Dàng Thanh Toán</h3>
            <p>Bạn Có Thể Dễ Dàng Thanh Toán Trên Bất Kỳ Hình Thức Nào</p>
          </div>
        </div>
      </section>

      <!-- features section ends -->

      <!-- products section starts -->
      <section class="products" id="products">
        <h1 class="heading">Best <span>Seller</span></h1>

        <div class="product-slider">
          <div class="wrapper">
            <!-- 1 -->
            <div class="slide box">
              <img src="img/naruto.jpg" alt="" />
              <h3>Naruto</h3>
              <div class="price">$4.99/- - 10.99/-</div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <a href="#" class="btn">add to cart</a>
            </div>
            <!-- 2 -->
            <div class="slide box">
              <img src="img/batman.jpg" alt="" />
              <h3>Batman</h3>
              <div class="price">$4.99/- - 10.99/-</div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <a href="#" class="btn">add to cart</a>
            </div>
            <!-- 3 -->
            <div class="slide box">
              <img src="img/ironman.png" alt="" />
              <h3>Iron Man Mark 27</h3>
              <div class="price">$4.99/- - 10.99/-</div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <a href="#" class="btn">add to cart</a>
            </div>
            <!-- 5 -->
            <div class="slide box">
              <img src="img/zoro.jpg" alt="" />
              <h3>Roronoa Zoro 37cm</h3>
              <div class="price">$4.99/- - 10.99/-</div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <a href="#" class="btn">add to cart</a>
            </div>
            <!-- 6 -->
            <div class="slide box">
              <img src="img/sliver_rayleigh.jpg" alt="" />
              <h3>Sliver Rayleigh</h3>
              <div class="price">$4.99/- - 10.99/-</div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <a href="#" class="btn">add to cart</a>
            </div>
            <!-- 7 -->
            <div class="slide box">
              <img src="img/gohan.jpg" alt="" />
              <h3>Son Gohan</h3>
              <div class="price">$4.99/- - 10.99/-</div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <a href="#" class="btn">add to cart</a>
            </div>  
          </div>
        </div>
      </section>

      <!-- products section ends -->

      <!-- categories section starts -->

      <section class="categories" id="categories">
        <h1 class="heading">product <span>categories</span></h1>

        <div class="box-container">
          <!-- 1 -->
          <div class="box" style="width: 290px; height: 375px">
            <img src="img/dragonball.jpg" alt="" />
            <h3>Dragon Ball</h3>
            <a href="#dragonball" class="btn">shop now</a>
          </div>
          <!-- 2 -->
          <div class="box" style="width: 290px; height: 375px">
            <img src="img/onepiece.jpg" alt="" />
            <h3>One Piece</h3>
            <a href="#onepiece" class="btn">shop now</a>
          </div>
          <!-- 3 -->
          <div class="box" style="width: 290px; height: 375px">
            <img src="img/narutoP.jpg" alt="" />
            <h3>Naruto</h3>
            <a href="#naruto" class="btn">shop now</a>
          </div>
          <!-- 4 -->
          <div class="box" style="width: 290px; height: 375px">
            <img src="img/avengers.jpg" alt="" />
            <h3>Avengers</h3>
            <a href="#marvel" class="btn">shop now</a>
          </div>
        </div>
      </section>

      <!-- categories section ends -->`
      window.scrollTo(0, 0);
      break;
    case `home`:
      document.getElementById(`router`).innerHTML =
        `<!-- features section starts -->

      <section class="features" id="features">
        <h1 class="heading">our <span>features</span></h1>

        <div class="box-container">
          <div class="box">
            <img
              src="img/quality.png"
              alt=""
              style="width: 254px; height: 205px"
            />
            <h3>Đảm bảo chất lượng</h3>
            <p>Chất Lượng Được Hàng Và Trên Hình Đảm Bảo 100%</p>
          </div>

          <div class="box">
            <img
              src="img/free-delivery.jpg"
              alt=""
              style="width: 254px; height: 205px"
            />
            <h3>Miễn phí vận chuyển</h3>
            <p>Dù Bạn Ở Bất Cứ Đâu Thì Phí Vận Chuyển Đều Là 0 Đồng</p>
          </div>

          <div class="box">
            <img
              src="img/easy-pay.jpg"
              alt=""
              style="width: 254px; height: 205px"
            />
            <h3>Dễ Dàng Thanh Toán</h3>
            <p>Bạn Có Thể Dễ Dàng Thanh Toán Trên Bất Kỳ Hình Thức Nào</p>
          </div>
        </div>
      </section>

      <!-- features section ends -->

      <!-- products section starts -->
      <section class="products" id="products">
        <h1 class="heading">Best <span>Seller</span></h1>

        <div class="product-slider">
          <div class="wrapper">
            <!-- 1 -->
            <div class="slide box">
              <img src="img/naruto.jpg" alt="" />
              <h3>Naruto</h3>
              <div class="price">$4.99/- - 10.99/-</div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <a href="#" class="btn">add to cart</a>
            </div>
            <!-- 2 -->
            <div class="slide box">
              <img src="img/batman.jpg" alt="" />
              <h3>Batman</h3>
              <div class="price">$4.99/- - 10.99/-</div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <a href="#" class="btn">add to cart</a>
            </div>
            <!-- 3 -->
            <div class="slide box">
              <img src="img/ironman.png" alt="" />
              <h3>Iron Man Mark 27</h3>
              <div class="price">$4.99/- - 10.99/-</div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <a href="#" class="btn">add to cart</a>
            </div>
            <!-- 5 -->
            <div class="slide box">
              <img src="img/zoro.jpg" alt="" />
              <h3>Roronoa Zoro 37cm</h3>
              <div class="price">$4.99/- - 10.99/-</div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <a href="#" class="btn">add to cart</a>
            </div>
            <!-- 6 -->
            <div class="slide box">
              <img src="img/sliver_rayleigh.jpg" alt="" />
              <h3>Sliver Rayleigh</h3>
              <div class="price">$4.99/- - 10.99/-</div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <a href="#" class="btn">add to cart</a>
            </div>
            <!-- 7 -->
            <div class="slide box">
              <img src="img/gohan.jpg" alt="" />
              <h3>Son Gohan</h3>
              <div class="price">$4.99/- - 10.99/-</div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <a href="#" class="btn">add to cart</a>
            </div>  
          </div>
        </div>
      </section>

      <!-- products section ends -->

      <!-- categories section starts -->

      <section class="categories" id="categories">
        <h1 class="heading">product <span>categories</span></h1>

        <div class="box-container">
          <!-- 1 -->
          <div class="box" style="width: 290px; height: 375px">
            <img src="img/dragonball.jpg" alt="" />
            <h3>Dragon Ball</h3>
            <a href="#dragonball" class="btn">shop now</a>
          </div>
          <!-- 2 -->
          <div class="box" style="width: 290px; height: 375px">
            <img src="img/onepiece.jpg" alt="" />
            <h3>One Piece</h3>
            <a href="#onepiece" class="btn">shop now</a>
          </div>
          <!-- 3 -->
          <div class="box" style="width: 290px; height: 375px">
            <img src="img/narutoP.jpg" alt="" />
            <h3>Naruto</h3>
            <a href="#naruto" class="btn">shop now</a>
          </div>
          <!-- 4 -->
          <div class="box" style="width: 290px; height: 375px">
            <img src="img/avengers.jpg" alt="" />
            <h3>Avengers</h3>
            <a href="#marvel" class="btn">shop now</a>
          </div>
        </div>
      </section>

      <!-- categories section ends -->`
      window.scrollTo(0, 0);
      break;
    default:
      document.getElementById(router).scrollIntoView();
      break

  }
}
onLoad();