<template>
  <div>
    <section id="banner" class="position-relative">
      <div class="banner-overlay">
        <div class="banner-text">
          <div class="logo animate__animated animate__rotateIn animate__slow">
            <b-img src="/img/karilogo.png" fluid></b-img>
          </div>

          <h1 class="animate__animated animate__fadeIn animate__slow">
            Digital Automation
          </h1>
          <p class="mb-5 animate__animated animate__fadeIn animate__slow">
            transforming your Ideas to solution
          </p>
          <router-link to="/about">
            <b-button variant="danger" size="lg"
              >Click to learn more about us</b-button
            ></router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
#banner {
  position: relative;
  height: 100vh;
  background-image: url("/img/isometric-exo-home.gif");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0 57 158 / 81%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner-text {
  text-align: center;
  color: #fff;
  text-transform: capitalize;
}
.logo {
  margin: 0 auto 50px;
}
h1 {
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: 0em;
  text-align: center;
}
p {
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 64px;
  letter-spacing: 0em;
  text-align: center;
}
@media (max-width: 600px) {
  #banner {
    padding: 20px;
  }
  .logo {
    min-width: 250px;
  }
  h1 {
    font-size: 32px;
    line-height: 1.4;
  }
  h3 {
    font-size: 20px;
    line-height: 1.4;
  }
  p {
    font-size: 15px;
    line-height: 1.4;
  }
}
</style>

<script>
export default {
  methods: {
    scrollDown() {
      window.scrollTo(0, window.innerHeight);
    },
  },
};
</script>
