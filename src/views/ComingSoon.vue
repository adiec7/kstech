<template>
  <div id="coming" class="d-flex align-items-center">
    <span class="shadow-1">
      <b-img src="/img/shadow-1.png"></b-img>
    </span>

    <span class="close">
      <router-link to="/">
        <b-button size="lg" variant="outline-danger"
          >Close</b-button
        ></router-link
      >
    </span>
    <div class="coming-content">
      <b-container class="p-2 p-sm-4">
        <b-row>
          <b-col
            cols="12"
            sm="6"
            class="text-sm-left d-flex flex-column justify-content-center"
          >
            <h1 class="text-primary">
              Be the first to know <br />
              when we are live!
            </h1>
            <p class="mb-4">
              Gain access to manage your team, learning resources, <br />
              course management tools and job opportunities.
            </p>
            <div class="search_bar">
              <div class="drop_form_container w-100 d-none d-sm-block">
                <b-form-input
                  class="drop_form"
                  placeholder="Enter your email address"
                ></b-form-input>
                <b-button class="drop_button" size="lg" variant="danger"
                  >Get Early Access</b-button
                >
              </div>
              <div class="drop_form_container w-100 d-sm-none">
                <b-form-input
                  class="drop_form"
                  placeholder="Enter your email address"
                  sizesm
                ></b-form-input>
                <b-button class="drop_button" size="sm" variant="primary"
                  >Get Early Access</b-button
                >
              </div>
            </div>
          </b-col>
          <b-col cols="12" sm="6">
            <div class="waiting">
              <b-avatar src="/img/waiting.png" size="20rem"></b-avatar>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style scoped>
.close {
  position: absolute;
  top: 5%;
  right: 5%;
  z-index: 999;
}
#coming {
  position: relative;
  height: 100vh;
}
.shadow-1 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.coming-content {
  z-index: 2;
  position: relative;
  width: 100%;
}
h1 {
  font-size: 46px;
  font-style: normal;
  font-weight: 600;
  line-height: 55px;
  letter-spacing: -0.03em;
  text-align: left;
}
p {
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
}
.search_bar {
  width: 500px;
  z-index: 4;
}
.drop_form_container {
  position: relative;
}
.drop_form {
  height: calc(2.5em + 0.75rem + 2px);
}
.drop_button {
  position: absolute;
  right: 7px;
  top: 50%;
  margin-top: -21.5px;
}
.sub-1 {
  position: absolute;
  top: 20%;
  right: 0;
}
.sub-2 {
  position: absolute;
  top: 20%;
  left: 0;
}
.looking_to {
  width: 80%;
  margin: 0 auto 100px;
}
.box {
  min-height: 200px;
  background: white;
  width: 100%;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  text-align: left;
  padding: 25px;
  min-height: 270px;
}
.box-img {
  margin-bottom: 18px;
}
.box-header {
  margin-bottom: 12px;
}
.box-text {
}
.request {
  border: 0.5px solid #c4c4c4;
  box-sizing: border-box;
  filter: drop-shadow(8px 24px 42px #efefef);
  border-radius: 12px;
  background: white;
}
@media (max-width: 600px) {
  .coming-content {
    padding-top: 150px;
    text-align: center;
  }
  h1 {
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: -0.03em;
    text-align: center;
  }
  p {
    font-size: 14px;
    line-height: 1.4;
    text-align: center;
  }
  .looking_to {
    width: 100%;
    margin: 0 auto 30px;
    padding: 15px;
  }
  .box {
    text-align: center;
  }
  .search_bar {
    width: 320px;
  }
  .search_bar {
    margin: 0 auto 30px;
  }
  .drop_form {
    height: calc(2em + 0.75rem + 2px);
  }
  ::placeholder {
    font-size: 13px;
  }
  .form-control {
    font-size: 13px;
  }
  .drop_button {
    top: 50%;
    margin-top: -14.5px;
    right: 5px;
    font-size: 11px;
  }
  .waiting > .b-avatar {
    width: 12rem !important;
    height: 12rem !important;
  }
  .shadow-1 img {
    width: 100%;
  }
  .request {
    margin-bottom: 50px;
  }
}
</style>
