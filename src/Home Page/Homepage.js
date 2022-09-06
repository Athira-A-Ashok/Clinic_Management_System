import React from "react";

function Homepage() {
  return (
    <div className="App">
      <div className="maincontainer">
        <div id="preloder">
          <div class="loader"></div>
        </div>
        <div class="offcanvas-menu-overlay"></div>
        <div class="offcanvas-menu-wrapper">
          <div class="offcanvas__close">+</div>
          <ul class="offcanvas__widget">
            <li>
              <span class="icon_search search-switch"></span>
            </li>
            <li>
              <a href="#">
                <span class="icon_heart_alt"></span>
                <div class="tip">2</div>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon_bag_alt"></span>
                <div class="tip">2</div>
              </a>
            </li>
          </ul>
          <div class="offcanvas__logo"></div>
          <div id="mobile-menu-wrap"></div>
          <div class="offcanvas__auth">
            <a href="#">Login</a>
            <a href="#">Register</a>
          </div>
        </div>
        <header class="header">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-3 col-lg-2">
                <div class="header__logo">
                  <a href="#">
                    <img
                      style={{ height: "30px", width: "50px" }}
                      src="medical.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="col-xl-6 col-lg-7">
                <nav class="header__menu">
                  <ul>
                    <li class="active">
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#product">Products</a>
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="col-lg-3">
                <div class="header__right">
                  <div class="header__right__auth">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                  </div>
                  <ul class="header__right__widget">
                    <li>
                      <span class="icon_search search-switch"></span>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: "bold",
                            color: "blue",
                          }}
                        >
                          Book an Appointment
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="canvas__open">
              <i class="fa fa-bars"></i>
            </div>
          </div>
        </header>
        <section class="categories">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6 p-0">
                <div
                  class="categories__item categories__large__item set-bg"
                  data-setbg="images/banner4.jpg"
                >
                  <div class="categories__text">
                    <h1>Clinic</h1>
                    <p>
                      Sitamet, consectetur adipiscing elit, sed do eiusmod
                      tempor incidid-unt labore edolore magna aliquapendisse
                      ultrices gravida.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                    <div
                      style={{ backgroundColor: "lightblue" }}
                      class="categories__item set-bg"
                      data-setbg=""
                    >
                      <div class="categories__text">
                        <h4>SAFETY FIRST</h4>
                        <h6
                          style={{
                            fontSize: "12px",
                            paddingTop: "10px",
                            color: "grey",
                          }}
                        >
                          Our clinic is fully sanitized & fumigated for your
                          safety
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                    <div
                      style={{ backgroundColor: "lightpink" }}
                      class="categories__item set-bg"
                    >
                      <div class="categories__text">
                        <h4>LABORATORY SERVICES</h4>
                        <h6
                          style={{
                            fontSize: "12px",
                            paddingTop: "10px",
                            color: "grey",
                          }}
                        >
                          Health check up, Lab Services are available from 7am
                          onwards
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                    <div
                      style={{ backgroundColor: "lightpink" }}
                      class="categories__item set-bg"
                      data-setbg=""
                    >
                      <div class="categories__text">
                        <h4>QUICK APPOINTMENT</h4>
                        <h6
                          style={{
                            fontSize: "12px",
                            paddingTop: "10px",
                            color: "grey",
                          }}
                        >
                          Easy and quick appointment with highly experienced
                          doctors.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                    <div
                      style={{ backgroundColor: "lightblue" }}
                      class="categories__item set-bg"
                      data-setbg=""
                    >
                      <div class="categories__text">
                        <h4>
                          We have expert doctors who takes care of your health
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="product spad" id="product">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="section-title">
                  <h4>New product</h4>
                </div>
              </div>
              <div class="col-lg-8 col-md-8"></div>
            </div>
            <div class="row property__gallery">
              <div class="col-lg-3 col-md-4 col-sm-6 mix">
                <div class="product__item">
                  <div
                    class="product__item__pic set-bg"
                    data-setbg="images/abacavir.jpg"
                  >
                    <div class="label new">New</div>
                    <ul class="product__hover">
                      <li>
                        <a
                          href="assets/img/product/product-1.jpg"
                          class="image-popup"
                        >
                          <span class="arrow_expand"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="icon_heart_alt"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="icon_bag_alt"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="product__item__text">
                    <h6>
                      <a href="#">Abacavir</a>
                    </h6>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="product__price">$ 59.0</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6 mix">
                <div class="product__item">
                  <div
                    class="product__item__pic set-bg"
                    data-setbg="images/cisplatin-injection-50.jpg"
                  >
                    <ul class="product__hover">
                      <li>
                        <a
                          href="assets/img/product/product-2.jpg"
                          class="image-popup"
                        >
                          <span class="arrow_expand"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="icon_heart_alt"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="icon_bag_alt"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="product__item__text">
                    <h6>
                      <a href="#">Cytoplatin-50</a>
                    </h6>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="product__price">$ 49.0</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6 mix">
                <div class="product__item">
                  <div class="product__item__pic set-bg" data-setbg="omega.jpg">
                    <div class="label stockout">out of stock</div>
                    <ul class="product__hover">
                      <li>
                        <a
                          href="assets/img/product/product-3.jpg"
                          class="image-popup"
                        >
                          <span class="arrow_expand"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="icon_heart_alt"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="icon_bag_alt"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="product__item__text">
                    <h6>
                      <a href="#">Omega-3</a>
                    </h6>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="product__price">$ 59.0</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6 mix">
                <div class="product__item">
                  <div
                    class="product__item__pic set-bg"
                    data-setbg="multivitamin.jpg"
                  >
                    <ul class="product__hover">
                      <li>
                        <a
                          href="assets/img/product/product-4.jpg"
                          class="image-popup"
                        >
                          <span class="arrow_expand"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="icon_heart_alt"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="icon_bag_alt"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="product__item__text">
                    <h6>
                      <a href="#">HealthKart HK Vitals Multivitamic Women</a>
                    </h6>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="product__price">$ 59.0</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6 mix">
                <div class="product__item">
                  <div
                    class="product__item__pic set-bg"
                    data-setbg="images/calcium.jpg"
                  >
                    <ul class="product__hover">
                      <li>
                        <a
                          href="assets/img/product/product-5.jpg"
                          class="image-popup"
                        >
                          <span class="arrow_expand"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="icon_heart_alt"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="icon_bag_alt"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="product__item__text">
                    <h6>
                      <a href="#">Calcium Sandoz</a>
                    </h6>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="product__price">$ 59.0</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                <div class="product__item sale">
                  <div
                    class="product__item__pic set-bg"
                    data-setbg="psorolin.jpg"
                  >
                    <div class="label sale">Sale</div>
                    <ul class="product__hover">
                      <li>
                        <a
                          href="assets/img/product/product-6.jpg"
                          class="image-popup"
                        >
                          <span class="arrow_expand"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="icon_heart_alt"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="icon_bag_alt"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="product__item__text">
                    <h6>
                      <a href="#">Psorolin</a>
                    </h6>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="product__price">
                      $ 49.0 <span>$ 59.0</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                <div class="product__item">
                  <div
                    class="product__item__pic set-bg"
                    data-setbg="images/evion.jpg"
                  >
                    <ul class="product__hover">
                      <li>
                        <a
                          href="assets/img/product/product-7.jpg"
                          class="image-popup"
                        >
                          <span class="arrow_expand"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="icon_heart_alt"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="icon_bag_alt"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="product__item__text">
                    <h6>
                      <a href="#">Evion Cream</a>
                    </h6>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="product__price">$ 59.0</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                <div class="product__item sale">
                  <div
                    class="product__item__pic set-bg"
                    data-setbg="images/evion2.jpg"
                  >
                    <div class="label">Sale</div>
                    <ul class="product__hover">
                      <li>
                        <a
                          href="assets/img/product/product-8.jpg"
                          class="image-popup"
                        >
                          <span class="arrow_expand"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="icon_heart_alt"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="icon_bag_alt"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="product__item__text">
                    <h6>
                      <a href="#">Evion 400</a>
                    </h6>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="product__price">
                      $ 49.0 <span>$ 59.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="banner set-bg" data-setbg="images/banner.jpg">
          <div class="container">
            <div class="row">
              <div class="col-xl-7 col-lg-8 m-auto">
                <div class="banner__slider owl-carousel">
                  <div class="banner__item">
                    <div class="banner__text">
                      <span>Clinic Management System</span>
                      <h1>The Project Clinic</h1>
                    </div>
                  </div>
                  <div class="banner__item">
                    <div class="banner__text">
                      <span>Clinic Management System</span>
                      <h1>The Project Clinic</h1>
                    </div>
                  </div>
                  <div class="banner__item">
                    <div class="banner__text">
                      <span>Clinic Management System</span>
                      <h1>The Project Clinic</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="services spad" id="services">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="services__item">
                  <i class="fa fa-car"></i>
                  <h6>Free Shipping</h6>
                  <p>For all oder over $99</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="services__item">
                  <i class="fa fa-money"></i>
                  <h6>Money Back Guarantee</h6>
                  <p>If good have Problems</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="services__item">
                  <i class="fa fa-support"></i>
                  <h6>Online Support 24/7</h6>
                  <p>Dedicated support</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="services__item">
                  <i class="fa fa-headphones"></i>
                  <h6>Payment Secure</h6>
                  <p>100% secure payment</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="instagram">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                <div
                  class="instagram__item set-bg"
                  data-setbg="images/doctor2.jpg"
                >
                  <div class="instagram__text">
                    <i class="fa fa-instagram"></i>
                    <a href="#">Dr. Strange</a>
                    <h1 style={{ fontSize: "20px" }}>Cardiologists</h1>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                <div
                  class="instagram__item set-bg"
                  data-setbg="images/doctor3.jpg"
                >
                  <div class="instagram__text">
                    <i class="fa fa-instagram"></i>
                    <a href="#">Dr. Aikenhead</a>
                    <h1 style={{ fontSize: "20px" }}>Allergy</h1>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                <div
                  class="instagram__item set-bg"
                  data-setbg="images/doctor6.jpg"
                >
                  <div class="instagram__text">
                    <i class="fa fa-instagram"></i>
                    <a href="#">Dr. Soumya</a>
                    <h1 style={{ fontSize: "20px" }}>Dept. Of Gynaecology</h1>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                <div
                  class="instagram__item set-bg"
                  data-setbg="images/doctor8.jpg"
                >
                  <div class="instagram__text">
                    <i class="fa fa-instagram"></i>
                    <a href="#">Dr. Cooney</a>
                    <h1 style={{ fontSize: "20px" }}>Surgeons</h1>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                <div
                  class="instagram__item set-bg"
                  data-setbg="images/doctor7.jpg"
                >
                  <div class="instagram__text">
                    <i class="fa fa-instagram"></i>
                    <a href="#">Dr. Shallu Kakkar</a>
                    <h1 style={{ fontSize: "20px" }}>Dept. Of Paediatrics</h1>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 p-0">
                <div
                  class="instagram__item set-bg"
                  data-setbg="images/doctor5.jpg"
                >
                  <div class="instagram__text">
                    <i class="fa fa-instagram"></i>
                    <a href="#">Dr. Shelly Batra</a>
                    <h1 style={{ fontSize: "20px" }}>Dept. Of Nephrology</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer" id="contact">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-7">
                <div class="footer__about">
                  <div class="footer__logo">
                    <a href="#">
                      <img
                        style={{ height: "100px" }}
                        src="medical.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt cilisis.
                  </p>
                  <div class="footer__payment">
                    <a href="#">
                      <img src="assets/img/payment/payment-1.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/payment/payment-2.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/payment/payment-3.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/payment/payment-4.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/payment/payment-5.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-5">
                <div class="footer__widget">
                  <h6>Quick links</h6>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Product</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-4">
                <div class="footer__widget">
                  <h6>Account</h6>
                  <ul>
                    <li>
                      <a href="#">My Account</a>
                    </li>
                    <li>
                      <a href="#">Book an Appointment</a>
                    </li>
                    <li>
                      <a href="#">Patient Records</a>
                    </li>
                    <li>
                      <a href="#">Reports</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-8 col-sm-8">
                <div class="footer__newslatter">
                  <h6>NEWSLETTER</h6>
                  <form action="#">
                    <input type="text" placeholder="Email" />
                    <button type="submit" class="site-btn">
                      Subscribe
                    </button>
                  </form>
                  <div class="footer__social">
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-youtube-play"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="footer__copyright__text">
                  <p>
                    Copyright &copy;{" "}
                    <script>document.write(new Date().getFullYear());</script>{" "}
                    All rights reserved | Clinic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div class="search-model">
          <div class="h-100 d-flex align-items-center justify-content-center">
            <div class="search-close-switch">+</div>
            <form class="search-model-form">
              <input
                type="text"
                id="search-input"
                placeholder="Search here....."
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
