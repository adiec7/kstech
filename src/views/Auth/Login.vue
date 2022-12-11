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
          <h3 class="text-sm-left mb-4 bold">Welcome back</h3>
          <b-form-group class="mb-4">
            <div class="inputs">
              <b-form-input
                :class="{ focused: email.length }"
                v-model="email"
              ></b-form-input>
              <span class="label">Email address</span>
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
              <span class="label">Password</span>
            </div>
          </b-form-group>
          <b-form-group class="text-center mt-5">
            <b-button class="mb-4" block variant="secondary" size="lg"
              >Log in</b-button
            >
            <p>
              Don't have an account?
              <router-link to="/register" class="text-secondary"
                >Register</router-link
              >
            </p>

            <router-link to="/passwordreset">
              <small class="text-secondary bold"
                >Forgot password?</small
              ></router-link
            >
          </b-form-group>
        </b-form>
      </b-col>
      <b-col
        cols="12"
        sm="6"
        class="bg-primary justify-content-center align-items-center position-relative d-none d-sm-flex"
      >
        <span class="pattern position-absolute"></span>
        <div class="bg-light" style="width: 400px; height: 400px"></div>
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
  #login_container {
    height: 90vh;
  }
}
@media (max-width: 600px) {
  .logo {
    position: relative !important;
    margin-bottom: 30px;
    left: 0 !important;
  }
}
</style>
