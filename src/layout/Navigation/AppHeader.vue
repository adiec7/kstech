<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="transparent" sticky>
      <b-container>
        <b-navbar-brand href="/"
          ><b-img class="logo" src="/img/karilogo.png"></b-img>
        </b-navbar-brand>

        <div
          id="nav-icon2"
          @click="open = !open"
          :class="{ open: open }"
          class="d-md-none"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <b-collapse id="mobileNav" is-nav v-model="open">
          <b-navbar-nav class="ml-auto align-items-center">
            <b-nav-item class="mr-md-4" to="/about">About</b-nav-item>
            <b-nav-item class="mr-md-4" to="/services">Services</b-nav-item>

            <b-nav-item class="mr-md-4" to="/products">Our Products</b-nav-item>
            <b-nav-item class="mr-md-4" to="/contact">Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  mounted() {},
  watch: {
    $route: "defaultMenu",
  },
  methods: {
    defaultMenu() {
      this.open = false;
    },
    createaccount() {
      this.$bvModal.hide("login");
      this.$bvModal.show("getstarted");
    },
    loginaccount() {
      this.$bvModal.show("login");
      this.$bvModal.hide("getstarted");
    },
  },
};
</script>
<style scoped>
.logo {
  width: 180px;
  height: auto;
}
.navbar {
  position: absolute;
  width: 100%;
  z-index: 999;
}
.navbar-dark .navbar-nav .nav-link,
.navbar-dark .navbar-nav .nav-link {
  font-size: 14px;

  font-weight: 600;
  color: #eaeaea;
}

.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link:focus {
  color: #ffffff;
}
.navbar-dark .navbar-nav .show > .nav-link,
.navbar-dark .navbar-nav .active > .nav-link,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark .navbar-nav .nav-link.active {
  color: #ffffff;
}

.not_home.navbar-dark .navbar-nav .nav-link {
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: var(--primary);
}
.not_home ul li a span {
  color: var(--primary);
}
.not_home.navbar-dark .navbar-nav .nav-link:hover,
.not_home.navbar-dark .navbar-nav .nav-link:focus {
  color: var(--primary);
}
.not_home.navbar-dark .navbar-nav .show > .nav-link,
.not_home.navbar-dark .navbar-nav .active > .nav-link,
.not_home.navbar-dark .navbar-nav .nav-link.show,
.not_home.navbar-dark .navbar-nav .nav-link.active {
  color: var(--primary);
}
#nav-icon2 {
  width: 32px;
  height: 30px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  outline: none !important;
}

/* Icon 2 */

#nav-icon2 span {
  display: block;
  position: absolute;
  height: 2px;
  width: 50%;
  background: #9b9dd9;
  opacity: 1;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#nav-icon2 span:nth-child(even) {
  left: 50%;
  border-radius: 0 9px 9px 0;
}

#nav-icon2 span:nth-child(odd) {
  left: 0px;
  border-radius: 9px 0 0 9px;
}

#nav-icon2 span:nth-child(1),
#nav-icon2 span:nth-child(2) {
  top: 0px;
}

#nav-icon2 span:nth-child(3),
#nav-icon2 span:nth-child(4) {
  top: 12px;
}

#nav-icon2 span:nth-child(5),
#nav-icon2 span:nth-child(6) {
  top: 25px;
}

#nav-icon2.open span:nth-child(1),
#nav-icon2.open span:nth-child(6) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon2.open span:nth-child(2),
#nav-icon2.open span:nth-child(5) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon2.open span:nth-child(1) {
  left: 5px;
  top: 8px;
}

#nav-icon2.open span:nth-child(2) {
  left: calc(50% - 5px);
  top: 8px;
}

#nav-icon2.open span:nth-child(3) {
  left: -50%;
  opacity: 0;
}

#nav-icon2.open span:nth-child(4) {
  left: 100%;
  opacity: 0;
}

#nav-icon2.open span:nth-child(5) {
  left: 5px;
  top: 14px;
}

#nav-icon2.open span:nth-child(6) {
  left: calc(50% - 5px);
  top: 14px;
}
.login {
  font-weight: 16px;
}

.small-text {
  font-size: 60%;
}
.mnu {
  color: #2b1c1c;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-align: center;
}
p {
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-align: center;
}
@media (max-width: 600px) {
  .navbar {
    padding: 20px 20px;
  }
  .navbar-dark .navbar-nav .nav-link {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    color: var(--primary);
  }
  .navbar-dark .navbar-nav .nav-link:hover,
  .navbar-dark .navbar-nav .nav-link:focus {
    color: #ffffff;
  }
  .navbar-dark .navbar-nav .show > .nav-link,
  .navbar-dark .navbar-nav .active > .nav-link,
  .navbar-dark .navbar-nav .nav-link.show,
  .navbar-dark .navbar-nav .nav-link.active {
    color: #ffffff;
  }
  .navbar-collapse {
    background: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 10px 20px rgba(46, 51, 71, 0.083042);
  }
  .not_home.navbar-dark .navbar-nav .nav-link {
    font-size: 14px;
  }
  .not_home .navbar-collapse {
    background: var(--primary);
    padding: 10px;
    border-radius: 5px;
    color: white;
  }

  .not_home ul li a {
    color: white !important;
  }
}
</style>
