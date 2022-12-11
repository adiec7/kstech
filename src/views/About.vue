<template>
  <div id="about" class="pt-5 d-flex align-items-center position-relative">
    <span class="half_circle_1">
      <b-img src="/img/half1.png"></b-img>
    </span>
    <span class="half_circle_2">
      <b-img src="/img/half3.png"></b-img>
    </span>
    <span class="half_circle_3">
      <b-img src="/img/half2.png"></b-img>
    </span>
    <b-row class="align-items-center">
      <b-col
        cols="12"
        md="6"
        class="position-relative p-5 about-img d-none d-sm-block"
      >
        <span class="user_1 animate__animated animate__zoomIn">
          <b-img src="/img/user1.png"></b-img>
        </span>
        <span class="user_2 animate__animated animate__zoomIn animate__slow">
          <b-img src="/img/user2.png"></b-img>
        </span>
        <span class="user_3 animate__animated animate__zoomIn animate__slow">
          <b-img src="/img/user3.png"></b-img>
        </span>
        <span class="user_4 animate__animated animate__zoomIn animate__slower">
          <b-img src="/img/user4.png"></b-img>
        </span>
      </b-col>
      <b-col cols="12" md="6" class="text-left p-4">
        <div class="p-3 pt-5">
          <h1 class="mb-4">A Workspace that inspires</h1>
          <div>
            <h3>Who We Are</h3>
            <p>
              A technology innovation company building custom software's with
              expertise in UI/UX, Web development, native application, AI and
              deep learning, cloud, and blockchain with a focus on recent and
              trending technologies.
            </p>
          </div>
          <div>
            <h3>Our Mission</h3>
            <p>
              We believe technology can change your company and automation
              increase efficiency, so we pay attention to product innovation and
              software development by understanding business needs, using a
              user-centric approach we won’t finish working on your project till
              you are 100% satisfied Let's be your software partner for
              technology innovations.
            </p>
          </div>

          <div>
            <div
              class="d-flex flex-column align-items-md-center flex-md-row text-danger"
            >
              <div class="mb-4 mb-sm-0">
                <router-link to="/services"
                  ><span class="mr-2 font-weight-bolder" >Our Services</span>
                  <b-icon icon="arrow-right" class="mr-4"></b-icon
                ></router-link>
              </div>
              <router-link to="/products">
                <b-button variant="danger" size="lg"
                  >Explore other products
                  <b-icon icon="arrow-right"></b-icon> </b-button
              ></router-link>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
*{
  overflow-x: hidden;
}
#about {
  height: 100vh;
  overflow-y: hidden;
  background: linear-gradient(199.01deg, #345dc1 9.6%, #a2cad8 89.64%);
}
h1 {
  font-family: "Inter";
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  line-height: 68px;
  letter-spacing: 0em;
  text-transform: capitalize;

  text-align: left;
  color: whitesmoke;
}

h3 {
  font-family: "Raleway";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #222222;
}
p {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
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
  top: 35%;
  right: -3px;
}
.user_1 {
  position: absolute;
  top: 5%;
  right: 20%;
}
.user_2 {
  position: absolute;
  top: 0;
  left: 20%;
}
.user_3 {
  position: absolute;
  bottom: 20%;
  left: 35%;
}
.user_4 {
  position: absolute;
  bottom: 0;
  right: 15%;
}

@media (max-width: 600px) {
  #about {
    padding: 20px;
    height: 100%;
    padding-bottom: 70px !important;
  }
  .logo {
    width: 250px;
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
