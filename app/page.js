const IndexPage = () => {
  return (
    <>
      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a href="index.html" className="logo">
                  <img src="assets/images/logo.png" alt="Chain App Dev" />
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" className="active">
                      Главная страница
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#services">Услуги</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#pricing">Абонементы</a>
                  </li>
                  <li>
                    <div className="gradient-button">
                      <a id="modal_trigger" href="#modal">
                        <i className="fa fa-sign-in-alt" /> Войти сейчас
                      </a>
                    </div>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* ***** Header Area End ***** */}
      <div id="modal" className="popupContainer" style={{ display: "none" }}>
        <div className="popupHeader">
          <span className="header_title">Войти</span>
          <span className="modal_close">
            <i className="fa fa-times" />
          </span>
        </div>
        <section className="popupBody">
          {/* Social Login */}
          <div className="social_login">
            <div className="">
              <a href="#" className="social_box fb">
                <span className="icon">
                  <i className="fab fa-vk" />
                </span>
                <span className="icon_title">Войти через ВКонтакте</span>
              </a>
              <a href="#" className="social_box google">
                <span className="icon">
                  <i className="fab fa-google-plus" />
                </span>
                <span className="icon_title">Войти через Google</span>
              </a>
            </div>
            <div className="centeredText">
              <span>Или используйте ваш Email</span>
            </div>
            <div className="action_btns">
              <div className="one_half">
                <a href="#" id="login_form" className="btn">
                  Войти
                </a>
              </div>
              <div className="one_half last">
                <a href="#" id="register_form" className="btn">
                  Регистрация
                </a>
              </div>
            </div>
          </div>
          {/* Username & Password Login form */}
          <div className="user_login">
            <form>
              <label>Email / Имя пользователя</label>
              <input type="text" />
              <br />
              <label>Пароль</label>
              <input type="password" />
              <br />
              <div className="checkbox">
                <input id="remember" type="checkbox" />
                <label htmlFor="remember">Запомнить на этом компьютере</label>
              </div>
              <div className="action_btns">
                <div className="one_half">
                  <a href="#" className="btn back_btn">
                    <i className="fa fa-angle-double-left" /> Назад
                  </a>
                </div>
                <div className="one_half last">
                  <a href="#" className="btn btn_red">
                    Войти
                  </a>
                </div>
              </div>
            </form>
            <a href="#" className="forgot_password">
              Забыли пароль?
            </a>
          </div>
          {/* Register Form */}
          <div className="user_register">
            <form>
              <label>Полное имя</label>
              <input type="text" />
              <br />
              <label>Email</label>
              <input type="email" />
              <br />
              <label>Пароль</label>
              <input type="password" />
              <br />
              <div className="checkbox">
                <input id="send_updates" type="checkbox" />
                <label htmlFor="send_updates">Отправлять информацию на Email</label>
              </div>
              <div className="action_btns">
                <div className="one_half">
                  <a href="#" className="btn back_btn">
                    <i className="fa fa-angle-double-left" /> Назад
                  </a>
                </div>
                <div className="one_half last">
                  <a href="#" className="btn btn_red">
                    Регистрация
                  </a>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
      <div
        className="main-banner wow fadeIn"
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content show-up header-text wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <h2>Начните заниматься прямо сейчас</h2>
                        <p>
                          Я помогу вам достичь ваших целей в области фитнеса и
                          здорового образа жизни. Я имею большой опыт работы в этой
                          области и готов поделиться своими знаниями и навыками с
                          вами. Я уверен, что с моей помощью вы сможете достичь
                          своих целей и улучшить свое здоровье и самочувствие. На
                          моем сайте вы также найдете отзывы и рекомендации от моих
                          клиентов, которые уже добились успеха благодаря моей
                          помощи.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="right-image wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img src="assets/images/slider-dec.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="services" className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div
                className="section-heading  wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <h4>
                  Удивительные <em>Услуги &amp; Функции</em> для вас
                </h4>
                <img src="assets/images/heading-line-dec.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="service-item first-service">
                <div className="icon" />
                <h4>Под контролем личного тренера</h4>
                <p>
                  У вас будет личный тренер, котрый будет следить за вашими
                  успехами.
                </p>
                <div className="text-button">
                  <a href="#">
                    Прочитать больше <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-item second-service">
                <div className="icon" />
                <h4>По видеосвязи</h4>
                <p>
                  Смартфон, планшет, ноутбук (Zoom, Skype, WhatsApp, пр.). Выбирайте
                  то, что удобно вам.
                </p>
                <div className="text-button">
                  <a href="#">
                    Прочитать больше <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-item third-service">
                <div className="icon" />
                <h4>В любое время, в любом месте</h4>
                <p>
                  Тренировки в любых часовых поясах, спортзале, дома или в офисе.
                </p>
                <div className="text-button">
                  <a href="#">
                    Прочитать больше <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-item fourth-service">
                <div className="icon" />
                <h4>С заботой о себе</h4>
                <p>
                  Мы за здоровье и хорошее самочувствие, а не за спорт высоких
                  достижений и сильные нагрузки.
                </p>
                <div className="text-button">
                  <a href="#">
                    Прочитать больше <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="about" class="about-us section">
    <div class="container">
<div class="row">
  <div class="col-lg-6 align-self-center">
    <div class="section-heading">
      <h4>About <em>What We Do</em> &amp; Who We Are</h4>
      <img src="assets/images/heading-line-dec.png" alt="">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="box-item">
          <h4><a href="#">Maintance Problems</a></h4>
          <p>Lorem Ipsum Text</p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="box-item">
          <h4><a href="#">24/7 Support &amp; Help</a></h4>
          <p>Lorem Ipsum Text</p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="box-item">
          <h4><a href="#">Fixing Issues About</a></h4>
          <p>Lorem Ipsum Text</p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="box-item">
          <h4><a href="#">Co. Development</a></h4>
          <p>Lorem Ipsum Text</p>
        </div>
      </div>
      <div class="col-lg-12">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor idunte ut labore et dolore adipiscing  magna.</p>
        <div class="gradient-button">
          <a href="#">Start 14-Day Free Trial</a>
        </div>
        <span>*No Credit Card Required</span>
      </div>
    </div>
  </div>
  <div class="col-lg-6">
    <div class="right-image">
      <img src="assets/images/about-right-dec.png" alt="">
    </div>
  </div>
</div>
    </div>
  </div> */}
      <div id="clients" className="the-clients">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>
                  Посмотрите что <em>Наши клиенты говорят</em> О нас
                </h4>
                <img src="assets/images/heading-line-dec.png" alt="" />
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p> */}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="naccs">
                <div className="grid">
                  <div className="row">
                    <div className="col-lg-7 align-self-center">
                      <div className="menu">
                        <div className="first-thumb active">
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Евгения</h4>
                                <span className="date">30 ноября 2022</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <span className="rating">4.8</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Александра</h4>
                                <span className="date">15 ноября 2022</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <span className="rating">4.5</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Кристина</h4>
                                <span className="date">24 октября 2022</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <span className="rating">4.7</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Екатерина</h4>
                                <span className="date">7 октября 2022</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <span className="rating">3.9</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="last-thumb">
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Елизавета</h4>
                                <span className="date">17 сентября 2022</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <span className="rating">4.3</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <ul className="nacc">
                        <li className="active">
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src="assets/images/quote.png" alt="" />
                                    <p>
                                      “Я очень благодарна своему фитнес тренеру,
                                      который помог мне достичь своих целей и
                                      улучшить мое здоровье. С самого начала я была
                                      новичком в фитнесе, но благодаря его
                                      профессиональным знаниям и опыту, я постепенно
                                      стала все более уверенной в своих
                                      способностях.”
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img
                                      src="assets/images/client-image.jpg"
                                      alt=""
                                    />
                                    <div className="right-content">
                                      <h4>Евгения</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src="assets/images/quote.png" alt="" />
                                    <p>
                                      “Тренер разработал для меня индивидуальную
                                      программу тренировок и питания, которая
                                      помогла мне сбросить вес и укрепить мои мышцы.
                                      Кроме того, он всегда был готов ответить на
                                      мои вопросы и дать советы по здоровому образу
                                      жизни.”
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img
                                      src="assets/images/client-image.jpg"
                                      alt=""
                                    />
                                    <div className="right-content">
                                      <h4>Александра</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src="assets/images/quote.png" alt="" />
                                    <p>
                                      “Я очень довольна результатами и рекомендую
                                      этот сервис всем, кто хочет достичь своих
                                      целей в области фитнеса и здоровья. Тренера
                                      здесь настоящие профессионалы своего дела и
                                      заботятся о своих клиентах. Спасибо, за вашу
                                      помощь и поддержку!”
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img
                                      src="assets/images/client-image.jpg"
                                      alt=""
                                    />
                                    <div className="right-content">
                                      <h4>Кристина</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src="assets/images/quote.png" alt="" />
                                    <p>
                                      “Я хочу выразить огромную благодарность моему
                                      фитнес тренеру за его профессионализм и
                                      энтузиазм. Он помог мне изменить свою жизнь к
                                      лучшему и достичь невероятных результатов.”
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img
                                      src="assets/images/client-image.jpg"
                                      alt=""
                                    />
                                    <div className="right-content">
                                      <h4>Екатерина</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src="assets/images/quote.png" alt="" />
                                    <p>
                                      “Тренер разработал для меня индивидуальную
                                      программу тренировок, которая была идеально
                                      подходит для моих целей и физических
                                      возможностей. Он также дал мне ценные советы
                                      по питанию и здоровому образу жизни, которые
                                      помогли мне улучшить мое здоровье и
                                      самочувствие.”
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img
                                      src="assets/images/client-image.jpg"
                                      alt=""
                                    />
                                    <div className="right-content">
                                      <h4>Елизавета</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="pricing" className="pricing-tables">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>
                  У нас лучшая <em>Цена</em> Среди конкурентов
                </h4>
                <img src="assets/images/heading-line-dec.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item-regular">
                <span className="price">₽2700</span>
                <h4>3 Тренировки</h4>
                <div className="icon">
                  <img src="assets/images/pricing-table-01.png" alt="" />
                </div>
                <ul>
                  <li>Занятия онлайн</li>
                  <li>Правильное питание</li>
                  <li>Поддержка</li>
                  <li>Анализ результатов</li>
                  <li>Полный фидбек</li>
                  <li>Гарантия</li>
                </ul>
                <div className="border-button">
                  <a href="#">Купить этот абонемент сейчас</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item-pro">
                <span className="price">₽4000</span>
                <h4>5 Тренировок</h4>
                <div className="icon">
                  <img src="assets/images/pricing-table-01.png" alt="" />
                </div>
                <ul>
                  <li>Занятия онлайн</li>
                  <li>Правильное питание</li>
                  <li>Поддержка</li>
                  <li>Анализ результатов</li>
                  <li>Полный фидбек</li>
                  <li>Гарантия</li>
                </ul>
                <div className="border-button">
                  <a href="#">Купить этот абонемент сейчас</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item-regular">
                <span className="price">₽5600</span>
                <h4>8 Тренировок</h4>
                <div className="icon">
                  <img src="assets/images/pricing-table-01.png" alt="" />
                </div>
                <ul>
                  <li>Занятия онлайн</li>
                  <li>Правильное питание</li>
                  <li>Поддержка</li>
                  <li>Анализ результатов</li>
                  <li>Полный фидбек</li>
                  <li>Гарантия</li>
                </ul>
                <div className="border-button">
                  <a href="#">Купить этот абонемент сейчас</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer id="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>
                  Присоединяйтесь к нашей email рассылке, чтобы получать новости
                  &amp; последние тренды
                </h4>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-3">
              <form id="search" action="#" method="GET">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <fieldset>
                      <input
                        type="address"
                        name="address"
                        className="email"
                        placeholder="Email..."
                        autoComplete="on"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <fieldset>
                      <button type="submit" className="main-button">
                        Подписаться сейчас <i className="fa fa-angle-right" />
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>Связаться с нами</h4>
                <p>Moscow, Arbat, Russian Federation</p>
                <p>
                  <a href="#">+7(916)-555-49-92</a>
                </p>
                <p>
                  <a href="#">fatuev_vladimir@mail.ru</a>
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>О нас</h4>
                <ul>
                  <li>
                    <a href="#">Главная страница</a>
                  </li>
                  <li>
                    <a href="#">Услуги</a>
                  </li>
                  <li>
                    <a href="#">Абонементы</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>Полезные ссылки</h4>
                <ul>
                  <li>
                    <a href="#">Фитнес</a>
                  </li>
                  <li>
                    <a href="#">Полезное питание</a>
                  </li>
                  <li>
                    <a href="#">Спортивная одежда</a>
                  </li>
                  <li>
                    <a href="#">Тренировки</a>
                  </li>
                </ul>
                {/* <ul>
        <li><a href="#">App Dev Team</a></li>
        <li><a href="#">Digital Web</a></li>
        <li><a href="#">Normal Apps</a></li>
      </ul> */}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>О нашей компании</h4>
                <div className="logo">
                  <img src="assets/images/white-logo.png" alt="" />
                </div>
                <p>Сайт для записи к фитнес-тренерам.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="copyright-text">
                <p>
                  Copyright © 2022 Chain App Dev Company. All Rights Reserved.
                  <br />
                  Design:{" "}
                  <a
                    href="https://templatemo.com/"
                    target="_blank"
                    title="css templates"
                  >
                    TemplateMo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Scripts */}
    </>

  )
}
export default IndexPage