<header id="header">
  <div class="header-top">
    <div class="bs-container">
      <div class="top-content">
        <div class="header-left">
          <div class="header-social">
            <div class="social-item" data-aos="fade-up">
              <a href="#" class="link">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
            <div class="social-item" data-aos="fade-up">
              <a href="#" class="link">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            <div class="social-item" data-aos="fade-up">
              <a href="#" class="link">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="header-right">
          <div class="right-item" data-aos="fade-up" data-aos-delay="100">
            <a href="#" class="link login_link">
              <img src="../../../dist/images/scs.png" />
              Login
            </a>
            <a href="#" class="link">
              <img src="../../../dist/images/scvv.png" />
              Signup
            </a>
          </div>
          <div class="right-item header-language" data-aos="fade-up" data-aos-delay="200">
            <div class="head">
              <p class="title">
                <img src="../../../dist/images/csv.png" />
                <span class="arrow">
                  <img src="../../../dist/images/ac.png" />
                </span>
              </p>
            </div>
            <div class="content">
              <div class="language-item" data-aos="fade-up">
                <a href="#" class="link">
                  <img src="../../../dist/images/csv.png" />
                  VN
                </a>
              </div>
              <div class="language-item" data-aos="fade-up">
                <a href="#" class="link">
                  <img src="../../../dist/images/csv.png" />
                  ENG
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="header-nav">
    <div class="bs-container">
      <div class="nav-content">
        <div class="logo">
          <a href="#">
            <img src="../../../dist/images/dvsv.png" />
          </a>
        </div>

        <div class="search" data-aos="fade-up" data-aos-delay="1100">
          <div class="head" onclick="search()">
            <button class="search_btn" type="button">
              <img src="../../../dist/images/fbf (1).png" style="display: block;" />
              <span class="close_search"></span>
            </button>
          </div>
          <div class="content" id="myid">
            <input class="search_input" type="text" placeholder="Tìm kiếm..." />
            <button class="search_btn" type="button">
              <img src="../../../dist/images/fbf.png" />
            </button>
          </div>
        </div>

        <div class="menu-main" id="mymain">
          <div class="close-menu" onclick="closemenu()">
            <i class="far fa-window-close"></i>
          </div>
          <div class="menu-right">
            <ul class="menu-list" id="mymenu-list">
              <li class="menu-list-item" data-aos="fade-up" data-aos-delay="500">
                <a href="#" class="menu-list-link active">TRANG CHỦ</a>
              </li>
              <li class="menu-list-item" data-aos="fade-up" data-aos-delay="500">
                <a href="#" class="menu-list-link">GIỚI THIỆU</a>
              </li>
              <li class="menu-list-item" data-aos="fade-up" data-aos-delay="500">
                <a href="#" class="menu-list-link">SỰ KIỆN</a>
              </li>
              <li class="menu-list-item" data-aos="fade-up" data-aos-delay="500">
                <a href="#" class="menu-list-link">LIÊN HỆ</a>
              </li>
              <li class="menu-list-item" data-aos="fade-up" data-aos-delay="500">
                <a href="#" class="menu-list-link">ROADMAP</a>
              </li>
              <li class="menu-list-item" data-aos="fade-up" data-aos-delay="500">
                <a href="#" class="menu-list-link">DỰ ÁN</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="open-menu" onclick="openmenu()">
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </div>
  </div>
</header>

<script>
  function openmenu() {
    var x = document.getElementById("mymain");
    var y = x.className;
    if (y.includes("active")) {
      closemenu();
    } else {
      x.className += " active";
    }
  }

  function closemenu() {
    var t = document.getElementById("mymain");
    t.classList.remove("active");
  }

  function search() {
    var x = document.getElementById("myid");
    var icon = document.getElementsByClassName('search_btn');
    var imgg = icon[0].childNodes[1];
    var closess = document.getElementsByClassName('close_search');
    if (imgg.style.display == 'block') {
      imgg.style.display = 'none';
      closess[0].style.display = 'block';
    } else {
      imgg.style.display = 'block';
      closess[0].style.display = 'none';
    }
  
  
    if (x.className.includes("active")) {
      x.classList.remove("active");
    } else {
      x.classList.add("active");
    }
  }
</script>