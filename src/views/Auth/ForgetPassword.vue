<template>
  <div id="login_container">
    <b-img
      @click="$router.push('/')"
      src="/img/logo-blue.png"
      class="position-absolute logo"
      style="left: 30px; top: 30px"
    ></b-img>

    <b-row class="h-100">
      <b-col
        cols="12"
        sm="6"
        class="d-flex justify-content-center align-items-center"
      >
        <b-form>
          <h3 class="text-sm-left mb-4 bold">Change password</h3>
          <b-form-group class="mb-4">
            <div class="inputs">
              <b-form-input
                :class="{ focused: email.length }"
                v-model="email"
              ></b-form-input>
              <span class="label">Password</span>
            </div>
          </b-form-group>

          <b-form-group>
            <div class="inputs">
              <b-form-input
                placeholder=""
                type="password"
                :class="{ focused: password.length }"
                v-model="password"
              ></b-form-input>
              <span class="label">Confirm Password</span>
            </div>
          </b-form-group>
          <b-form-group class="mb-4">
            <b-button block variant="secondary" size="lg"
              >Change password</b-button
            >
          </b-form-group>
        </b-form>
      </b-col>
      <b-col
        cols="12"
        sm="6"
        class="bg-primary d-none d-sm-flex justify-content-center align-items-center position-relative"
      >
        <span class="pattern position-absolute"></span>
        <div>
          <b-img src="/img/auth/password-illo.svg"></b-img>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>
<style scoped>
#login_container {
  height: 100vh;
}
form {
  width: 60%;
}
a {
  text-decoration: none;
  font-weight: 900;
}
.pattern {
  width: 100%;
  top: -13%;
  bottom: 0;
  background-image: url("/img/auth/pattern.png");
}
@media (max-width: 600px) {
  form {
    width: 80%;
  }
}
@media (max-width: 600px) {
  #login_container {
    height: 90vh;
  }
  .logo {
    position: relative !important;
    margin-bottom: 30px;
    left: 0 !important;
  }
}
</style>
