<script setup>
import '../assets/dist/js/bootstrap.bundle.min.js'
import '../assets/sidebars.js'
</script>

<template>
  <div
    class="d-flex flex-column flex-shrink-0 p-3"
    style="width: 280px; background-color: white; height: 100vh"
  >
    <div class="d-flex text-dark text-decoration-none mx-auto">
      <div
        class="flex-column align-items-center justify-content-center text-center font-weight-bold"
      >
        <font-awesome-icon icon="sun" class="sun-icon" />
        <div><h1>Fabi Bronze</h1></div>
      </div>
    </div>
    <hr style="color: rgb(253, 107, 131)" />
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link :focus" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home" /></svg>
          Macas
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2" /></svg>
          Bronzes
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table" /></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid" /></svg>
          Clientes
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle" /></svg>
          Ajustes
        </a>
      </li>
    </ul>
    <hr style="color: rgb(253, 107, 131)" />
  </div>
</template>

<style scoped>
main {
  position: absolute;
  left: 0;
  top: 0;
  font-family: 'DancingScript';
  color: pink;
}
@font-face {
  font-family: 'DancingScript';
  src: url('./assets/fonts/DancingScript-VariableFont_wght.ttf');
}
a {
  color: rgb(253, 107, 131);
  font-weight: bold;
  font-size: 18pt;
}
a:hover {
  color: white;
  background-color: rgb(253, 107, 131);
}
a:focus {
  color: black;
}
.sun-icon {
  color: rgb(253, 107, 131);
  width: 50px;
  height: 50px;
}
.fabi-logo {
  font-family: 'DancingScript';
  font-weight: bold;
  font-size: 22pt;
}
</style>
