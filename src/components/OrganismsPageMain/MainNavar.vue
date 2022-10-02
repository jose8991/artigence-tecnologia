<template>
   <nav id="container-desplegable-vertical">
      <input type="checkbox" id="check" />
      <label for="check" id="menu-contraido" style="cursor: pointer">
        <i class="fas fa-bars"></i> Menú
      </label>
      <a href="/site/home" id="logo-menu-head">
        <img height="47" src="@/assets/images_new_project/logo-no-background.png" alt="logo" />
      </a>
      <ul class="ul-desplegable-vertical">
        <li class="li-desplegable-vertical">
          <label class="label-desplegable-vertical" for="check-luis">
            <span class="opn-traducir"> servicios </span>
            <div class="underline"></div>
          </label>
          <input type="checkbox" id="check-luis" />
          <ul class="desplegable-vertical-submenu1">
            <li>
              <a href="#" class="a-submenu-desplegable-vertical">
                <label>
                  <span class="opn-traducir">publicaciones</span>
                  <div class="underline-sub-menu"></div>
                </label>
              </a>
            </li>
          </ul>
        </li>
        <li class="li-desplegable-vertical">
          <label class="label-desplegable-vertical" for="check-luis">
            <span class="opn-traducir"> acerca de nosotros </span>
            <div class="underline"></div>
          </label>
          <input type="checkbox" id="check-luis" />
          <ul class="desplegable-vertical-submenu1">
            <li>
              <a href="#" class="a-submenu-desplegable-vertical">
                <label>
                  <span class="opn-traducir"> menu item </span>
                  <div class="underline-sub-menu"></div>
                </label>
              </a>
            </li>
          </ul>
        </li>

        
      </ul>

      <BotonPrincipal title="registrarse" link="/registrarse"/>
    </nav>
</template>

<script setup>
  import BotonPrincipal from "@/components/atoms/MainButton.vue";

  
</script>

<style  scoped>
.ul-desplegable-vertical label {
    font-weight: normal;
    position: relative;
    margin: 0;
  }

  #container-desplegable-vertical {
    user-select: none;
    z-index: 99999;
  }

  .ul-desplegable-vertical input[type="checkbox"] {
    display: none;
  }

  #container-desplegable-vertical .ul-desplegable-vertical {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
  }

  #container-desplegable-vertical ul {
    display: inline-block;
    list-style: none;
    padding: 0;
  }



  .ul-desplegable-vertical li a {
    cursor: pointer;
  }

  .ul-desplegable-vertical li label {
    cursor: pointer;
  }

  .ul-desplegable-vertical li a[href="/site/contactus"] {
    background: white;
    color: #3843D0 !important;
    font-weight: bolder;
    border-radius: 30px;
    padding: 5px 15px;
  }


  .ul-desplegable-vertical li a {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .ul-desplegable-vertical li label {
    display: block;
  }

  /* color el cual abre el ul */
  .ul-desplegable-vertical ul {
    /* este es el submenu */
    background-color: var(--blue-intro);
    border-radius: 0px 0px 10px 10px;
    overflow: hidden;
  }

  .desplegable-vertical-submenu1{
    min-width: 166px;
  }

  .desplegable-vertical-submenu2{
    min-width: 80px;
  }

  .ul-desplegable-vertical li a:hover {
    /* background-color: rgba(0, 0, 0, 0.1); */
    /* text-decoration: underline !important; */
    color: inherit;
  }

  #container-desplegable-vertical .ul-desplegable-vertical li ul {
    display: none;
    position: absolute;
  }

  .ul-desplegable-vertical li ul li {
    position: relative;
  }

  .ul-desplegable-vertical li ul li ul {
    top: 0;
    right: 0;
    transform: translateX(100%);
  }

  nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: var(--blue-intro);
    color: white;
    box-shadow: 0px 4px 20px rgba(35, 42, 149, 0.25);
    height: 70px;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 3;
  }

  #menu-contraido {
    display: none;
  }

  #check {
    display: none;
  }

  #check:checked~ul {
    left: 0;
  }

  #check:checked~label {
    color: lightgray
  }

  @media (min-width: 1000px) {
    #container-desplegable-vertical li:hover>ul {
      display: block;
    }

  }

  @media (max-width: 1000px) {

    #menu-contraido {
      display: block;
    }

    /* Selecciona el submenú y lo hace visible justo debajo del encabezado */
    .ul-desplegable-vertical input[type="checkbox"]:checked~ul {
      display: block !important;
      position: relative !important;
    }

    #container-desplegable-vertical .ul-desplegable-vertical {
      overflow-y: auto;
      position: fixed !important;
      display: block !important;
      width: 40%;
      height: calc(100vh - var(--height));
      background: var(--blue-intro);
      top: 70px;
      left: -100%;
      text-align: center;
    }

    .ul-desplegable-vertical ul>li {
      border: none;
    }

    .ul-desplegable-vertical ul>li {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .underline,
  .underline-sub-menu {
    display: inline-block;
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .underline {
    border-bottom: 3px solid white;
  }

  .underline-sub-menu {
    border-bottom: 4px solid var(--blue-gradient);
  }

  li:hover label>.underline {
    width: 100%;
    transition: all 1s;
  }

  .label-desplegable-vertical {
    padding: 5px;
    width: 100%;
    height: 40px;
    position: relative;
  }

  .li-desplegable-vertical {
    margin-right: 55px;
  }

  .li-desplegable-vertical:last-child {
    margin-right: 0;
  }

  ul li:first-child>.a-submenu-desplegable-vertical {
    padding: 20px 20px 10px 20px;
  }

  ul li:last-child>.a-submenu-desplegable-vertical {
    padding: 10px 20px 20px 20px;
  }

  ul li>.a-submenu-desplegable-vertical {
    padding: 10px 20px;
  }

  .a-submenu-desplegable-vertical:hover .underline-sub-menu {
    width: 100%;
    transition: all 1s;
  }
  .btn-user-no-sesion{
      margin-right: 22px;
      height: 38px;
      cursor: pointer;
      display: inline-block;
      padding: 4px 28px;
      border-radius: 25px;
      border: 1px solid white;
      background: #3843D0;
    }

    .btn-user-no-sesion:hover{
      filter: brightness(1.1);
      transform: scale(1.05);
    }

    .sign-up{
      color: #3843D0;
      background: white;
    }


</style>