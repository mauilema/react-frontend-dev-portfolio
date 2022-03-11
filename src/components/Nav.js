import React, { Component } from "react";
import Switch from "react-switch";
import "bulma/css/bulma.min.css";

class Nav extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

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

              <div>
                  <Switch
                    checked={this.state.checked}
                    onChange={this.onThemeSwitchChange}
                    offColor="#baaa80"
                    onColor="#353535"
                    className="react-switch mx-auto dark-mode-toggle"
                    width={90}
                    height={40}
                    uncheckedIcon={
                      <span
                        className="iconify"
                        data-icon="mi:moon"
                        data-inline="false"
                        style={{
                          display: "block",
                          height: "100%",
                          fontSize: 25,
                          textAlign: "end",
                          marginLeft: "20px",
                          color: "#353239",
                        }}
                      ></span>
                    }
                    checkedIcon={
                      <span
                        className="iconify"
                        data-icon="emojione-v1:sun-with-face"
                        data-inline="false"
                        style={{
                          display: "block",
                          height: "100%",
                          fontSize: 25,
                          textAlign: "end",
                          marginLeft: "10px",
                          color: "#353239",
                        }}
                      ></span>
                    }
                    id="icon-switch"
                  />
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