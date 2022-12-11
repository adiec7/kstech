<template>
  <div
    id="services"
    class="pt-5 d-flex align-items-center justify-content-center position-relative"
  >
    <span class="half_circle_1">
      <b-img src="/img/half1.png"></b-img>
    </span>
    <span class="half_circle_2">
      <b-img src="/img/half3.png"></b-img>
    </span>
    <span class="half_circle_3">
      <b-img src="/img/half2.png"></b-img>
    </span>
    <div class="services-overlay"></div>
    <div class="services-text text-center p-1 p-sm-5">
      <div class="about-main text-center text-sm-left">
        <div class="text-center mb-5">
          <h1>Service We Provide</h1>
          <!-- <p class="px-0 px-sm-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p> -->
        </div>
        <b-row class="mb-4">
          <b-col cols="12" md="6">
            <div class="d-flex mb-3">
              <b-col cols="3" sm="2"><b-img src="/img/app.png"></b-img></b-col>
              <div class="text-left">
                <h3>Mobile App Development</h3>
                <p>
                  Make the appearance of a mobile application that has quality
                  and increases user convenience
                </p>
              </div>
            </div>
          </b-col>
          <b-col cols="12" md="6">
            <div class="d-flex mb-3">
              <b-col cols="3" sm="2"><b-img src="/img/clip.png"></b-img></b-col>
              <div class="text-left">
                <h3>Product Design</h3>
                <p>
                  Change the appearance of a design into code that will be made
                  into an amazing website
                </p>
              </div>
            </div>
          </b-col>
          <b-col cols="12" md="6">
            <div class="d-flex mb-3">
              <b-col cols="3" sm="2"><b-img src="/img/code.png"></b-img></b-col>
              <div class="text-left">
                <h3>Web App Development</h3>
                <p>
                  Help create a website and redesign it so that it becomes a
                  website that is more trendy and looks fresh.
                </p>
              </div>
            </div>
          </b-col>
          <b-col cols="12" md="6">
            <div class="d-flex mb-3">
              <b-col cols="3" sm="2"
                ><b-img src="/img/browse.png"></b-img
              ></b-col>
              <div class="text-left">
                <h3>SEO</h3>
                <p>Help your business grow with our SEO Experts</p>
              </div>
            </div>
          </b-col>
          <b-col cols="12" md="6">
            <div class="d-flex mb-3">
              <b-col cols="3" sm="2"><b-img src="/img/comp.png"></b-img></b-col>
              <div class="text-left">
                <h3>Web Design</h3>
                <p>
                  Create customizable illustrations with attractive designs that
                  are made visually through high creativity
                </p>
              </div>
            </div>
          </b-col>
        </b-row>
        <div class="text-left">
          <b-row>
            <b-col cols="1"></b-col>
            <b-col cols="10" class="px-1">
              <router-link to="/approach">
                <b-button variant="danger" size="lg"
                  >Our Approach <b-icon icon="arrow-right"></b-icon> </b-button
              ></router-link>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#services {
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(194.01deg, #345dc1 9.6%, #a2cad8 89.64%);
}
.services-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/img/services.png");
  opacity: 0.05;
  z-index: 1;
}
.services-text {
  position: relative;
  z-index: 2;
}
.about-main {
  width: 80%;
  margin: 0 auto;
}
h1 {
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0em;
  color: whitesmoke;
}

h3 {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #333;
}
p {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  color: whitesmoke;
}
.about-img {
  height: 450px;
}
.half_circle_1 {
  position: absolute;
  top: 10%;
  left: -3px;
}
.half_circle_2 {
  position: absolute;
  bottom: -10px;
  left: 25%;
}
.half_circle_3 {
  position: absolute;
  top: 50%;
  right: -3px;
}
@media (max-width: 600px) {
  #services {
    padding-top: 120px !important;
    height: 100%;
    overflow: hidden;
    padding-bottom: 70px !important;
  }
  .about-main {
    width: 100%;
    margin: 0 auto;
    padding: 15px;
  }
  h1 {
    font-size: 30px;
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
