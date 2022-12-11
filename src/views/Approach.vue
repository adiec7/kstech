<template>
  <div
    id="approach"
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
    <div class="approach-overlay"></div>
    <div class="approach-text text-center p-0 p-sm-5">
      <div class="about-main text-center text-sm-left">
        <h1 class="mb-5">
          Our approach to reach your <br class="d-none d-sm-block" />
          business goals
        </h1>

        <div>
          <b-row class="mb-5">
            <b-col cols="12" md="3" class="mb-4 mb-sm-0">
              <b-img class="mb-3" src="/img/ic1.png"></b-img>
              <div>
                <h3 class="text-center text-sm-left">Ideate</h3>
                <p>Turn your idea from concept to MVP</p>
              </div>
            </b-col>
            <b-col cols="12" md="3" class="mb-4 mb-sm-0">
              <b-img class="mb-3" src="/img/ic2.png"></b-img>
              <div class="text-center text-sm-left">
                <h3>Design</h3>
                <p>Sketch out the product to align the user needs</p>
              </div>
            </b-col>
            <b-col cols="12" md="3" class="mb-4 mb-sm-0">
              <b-img class="mb-3" src="/img/ic3.png"></b-img>
              <div class="text-center text-sm-left">
                <h3>Develop</h3>
                <p>Convert the designs into a live application</p>
              </div>
            </b-col>
            <b-col cols="12" md="3">
              <b-img class="mb-3" src="/img/ic4.png"></b-img>
              <div class="text-center text-sm-left">
                <h3>Deploy</h3>
                <p>Launching the application to the market</p>
              </div>
            </b-col>
          </b-row>
        </div>

        <div class="text-center">
          <router-link to="/contact">
            <b-button variant="danger" size="lg"
              >Kickstart your products with us
              <b-icon icon="arrow-right"></b-icon></b-button
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#approach {
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(194.01deg, #345dc1 9.6%, #a2cad8 89.64%);
}
.approach-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/img/approach.png");
  z-index: 1;
}
.approach-text {
  position: relative;
  z-index: 2;
}
.about-main {
  width: 90%;
  margin: 0 auto;
}
h1 {
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 58px;
  letter-spacing: 0em;
  color: whitesmoke;
  text-transform: capitalize;
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
  color: #333;
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
  #approach {
    height: 100%;
    padding-top: 120px !important;
    padding-bottom: 70px !important;
  }
  h1 {
    font-size: 30px;
    line-height: 1.4;
  }
  h3 {
    font-size: 20px;
    line-height: 1.4;
    text-align: center;
  }
  p {
    font-size: 15px;
    line-height: 1.4;
  }
}
</style>
