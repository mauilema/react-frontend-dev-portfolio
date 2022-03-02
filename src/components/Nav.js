import React, { Component } from "react";
import "bulma/css/bulma.min.css";

class Nav extends Component {

  handleBurgerMenuClick = () => {
    let burger = document.querySelector('.burger')
    let nav = document.querySelector('#'+burger.dataset.target)

    burger.addEventListener('click', function () {
      burger.classList.toggle('is-active')
      nav.classList.toggle('is-active')
    })
  }

  render() {
    return (
      <div>
        <nav class="navbar is-black is-spaced" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            {/* <a class="navbar-item" href="https://bulma.io">
              <img src="../../public/images/Jose-Lema.png" width="75" alt="Jose Lema initials logo" />
            </a> */}
        
            <a onClick={() => this.handleBurgerMenuClick()} role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
  
          <div id="navbarBasicExample" class="navbar-menu is-size-3 is-family-sans-serif">
            <div id="nav-home" class="navbar-start">
              <a href="#nav-home" class="navbar-item">
                Home
              </a>
        
              <a href="#about" class="navbar-item">
                About Me
              </a>

              <a href="#resume" class="navbar-item">
                Projects
              </a>

              <a href="#skills" class="navbar-item">
                Skills
              </a>
        
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  Let's Connect
                </a>
        
                <div class="navbar-dropdown is-size-4">
                  <a class="navbar-item" href="mailto:srjorgemaciel2002@gmail.com" target="_blank">
                    Email
                  </a>
                  <a class="navbar-item" href="https://www.linkedin.com/in/josemlema/" target="_blank">
                    LinkedIn
                  </a>
                  <a class="navbar-item" href="https://github.com/mauilema" target="_blank">
                    Github
                  </a>
                </div>
              </div>

            </div>
        
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-light" href="https://www.linkedin.com/in/josemlema/" target="_blank">
                    <i class="fab fa-linkedin"></i>
                  </a>

                  <a class="button is-light" href="https://github.com/mauilema" target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>  

      </div>
    );
  }
}

export default Nav;