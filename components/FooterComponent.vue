<template>
  <ul>
    <li>
      <a class="phone" href="tel:+38598491369">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <i class="fa fa-phone" aria-hidden="true"></i>
      </a>
    </li>
    <li>
      <a class="phone" href="tel:+38598491369">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <i class="fa fa-envelope" aria-hidden="true"></i>
      </a>
    </li>
    <li>
      <a class="phone" href="tel:+38598491369">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <i class="fa fa-map-marker" aria-hidden="true"></i>
      </a>
    </li>
    <li>
      <a class="facebook" target="_blank" href="https://www.facebook.com/poduke.parallel">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </a>
    </li>
    <li>
      <a class="instagram" target="_blank" href="https://www.instagram.com/poduke.parallel/">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <i class="fa fa-instagram" aria-hidden="true"></i>
      </a>
    </li>
  </ul>
</template>

<style scoped>
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");

ul {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  display: flex;
}

ul li {
  list-style: none;
}

ul li a {
  display: block;
  position: relative;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 24px;
  text-align: center;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.851);
  margin: 0 10px;
  transition: 0.5s;
}

ul li a span {
  position: absolute;
  transition: transform 0.5s;
}

ul li a span:nth-child(1),
ul li a span:nth-child(3) {
  width: 100%;
  height: 3px;
  background: rgba(0, 217, 255, 0.426)
}

ul li a span:nth-child(1) {
  top: 0;
  left: 0;
  transform-origin: right;
}

ul li a:hover span:nth-child(1) {
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s;
}

ul li a span:nth-child(3) {
  bottom: 0;
  left: 0;
  transform-origin: left;
}

ul li a:hover span:nth-child(3) {
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s;
}

ul li a span:nth-child(2),
ul li a span:nth-child(4) {
  width: 3px;
  height: 100%;
  background: #404040;
}

ul li a span:nth-child(2) {
  top: 0;
  left: 0;
  transform: scale(0);
  transform-origin: bottom;
}

ul li a:hover span:nth-child(2) {
  transform: scale(1);
  transform-origin: top;
  transition: transform 0.5s;
}

ul li a span:nth-child(4) {
  top: 0;
  right: 0;
  transform: scale(0);
  transform-origin: top;
}

ul li a:hover span:nth-child(4) {
  transform: scale(1);
  transform-origin: bottom;
  transition: transform 0.5s;
}

.facebook:hover {
  color: #3b5998;
}

.facebook:hover span {
  background: #3b5998;
}

.phone:hover {
  color: #3d983b;
}

.phone:hover span {
  background: #3d983b;
}

.twitter:hover {
  color: #1da1f2;
}

.twitter:hover span {
  background: #1da1f2;
}

.instagram:hover {
  color: #c32aa3;
}

.instagram:hover span {
  background: #c32aa3;
}

.google:hover {
  color: #dd4b39;
}

.google:hover span {
  background: #dd4b39;
}

ul li a .twitter {
  color: #1da1f2;
}

ul li a:hover:nth-child(3) {
  color: #c32aa3;
}

ul li a:hover:nth-child(4) {
  color: #dd4b39;
}
</style>
