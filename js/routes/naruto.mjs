const routerName = ["naruto"];

const HTML = `<section class="products" id="products">
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
                </div>
            </div>
            <!-- 2 -->
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
                </div>
            </div>
            <!-- 3 -->
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
                </div>
            </div>
            <!-- 4 -->
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
                </div>
            </div>
        </div>
    </div>
</section>
`;
function render(page = 1, limit = 6) {
    const narutoItems = JSON.parse(localStorage.getItem("narutoItems"));
    narutoItems = narutoItems.slice((page - 1) * limit, page * limit);
    const htmlBox = narutoItems.map((item) => {
        return `<div class="box">
                <img src="${item.img}" alt="${item.name}+ image preview" />
                <h3>${item.name}</h3>
                <div class="price">${item.price}</div>
                <div class="stars">
                    <i class="fasfa-stars"></i>
                    <i class="fasfa-stars"></i>
                    <i class="fasfa-stars"></i>
                    <i class="fasfa-stars"></i>
                    <i class="fasfa-stars"></i>
                </div>
            </div>`;
    });
    return `<section class="products" id="products">
                <h1 class="heading"><span>Naruto</span></h1>
                <div class="product-slider">
                    <div class="wrapper"> 
                        ${htmlBox.join("")}
                </div>
                </div>
            </section>`;
}
const narutoRouter = {
    routerName: routerName,
    HTML,
    renderData: render,
};
export default narutoRouter;
