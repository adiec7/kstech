<template>
  <div id="register_container" class="position-relative">
    <router-link class="login" to="/login">
      <b-button variant="outline-secondary text-white"
        >Login</b-button
      ></router-link
    >
    <b-img
      @click="$router.push('/')"
      src="/img/logo.png"
      class="position-absolute logo"
      style="left: 30px; top: 30px"
    ></b-img>
    <b-container class="h-100 py-5 position-relative">
      <b-row v-if="register" class="position-relative z-index-2">
        <b-col>
          <b-form class="text-white text-sm-left">
            <h3 class="mb-3">Create your Company account</h3>
            <p class="mb-4">
              Is your company already using our service ?
              <router-link to="/login" class="font-weight-bolder"
                >Log in</router-link
              >
            </p>
            <b-form-group>
              <div class="inputs">
                <b-form-input placeholder=""></b-form-input>
                <div class="label">Company name</div>
              </div>
            </b-form-group>
            <b-form-row>
              <b-col>
                <b-form-group>
                  <div class="inputs">
                    <b-form-input placeholder=""></b-form-input>
                    <div class="label">First name</div>
                  </div>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group>
                  <div class="inputs">
                    <b-form-input placeholder=""></b-form-input>
                    <div class="label">Last name</div>
                  </div>
                </b-form-group>
              </b-col>
            </b-form-row>
            <b-form-group>
              <div class="inputs">
                <b-form-input placeholder=""></b-form-input>
                <div class="label">Email</div>
              </div>
            </b-form-group>
            <b-form-group>
              <b-input-group>
                <template #append>
                  <b-input-group-text
                    class="bg-white border-left-0 border-top-left-radius-0 border-bottom-left-radius-0"
                    style="border-color: #ff7e1dad"
                  >
                    <b-icon icon="eye-slash" scale=".8"></b-icon>
                  </b-input-group-text>
                </template>
                <div class="inputs flex-grow-1">
                  <b-form-input
                    class="border-right-0 border-top-right-radius-0 border-bottom-right-radius-0"
                    placeholder=""
                    type="password"
                  ></b-form-input>
                  <div class="label">Password</div>
                </div>
              </b-input-group>
            </b-form-group>
            <b-form-group>
              <b-input-group>
                <template #prepend>
                  <b-input-group-text
                    class="bg-white border-right-0 border-top-right-radius-0 border-bottom-right-radius-0"
                    style="border-color: #ff7e1dad"
                  >
                    <b-img src="/img/auth/flag.png" width="30"></b-img>
                  </b-input-group-text>
                </template>
                <div class="inputs flex-grow-1">
                  <b-form-input
                    class="border-left-0 border-top-left-radius-0 border-bottom-left-radius-0"
                    placeholder=""
                  ></b-form-input>
                  <div class="label">Phone number for safety purpose</div>
                </div>
              </b-input-group>
            </b-form-group>

            <b-form-group>
              <div class="inputs">
                <b-form-input placeholder=""></b-form-input>
                <div class="label">Enter designation</div>
              </div>
            </b-form-group>
            <b-form-group>
              <small class="text-white text-left"
                >By creating an account you agree to our
                <span class="text-secondary">Master Service Statement</span> and
                <span class="text-secondary">Policy</span>.</small
              >
            </b-form-group>
            <b-form-group>
              <b-button
                block
                variant="secondary"
                size="lg"
                @click="register = !register"
                >Create Account</b-button
              >
            </b-form-group>
            <div class="my-4 d-flex justify-content-between">
              <div><small>Protected by reCaptcha</small></div>
              <div>
                <small> English <b-icon icon="chevron-down"></b-icon></small>
              </div>
            </div>
          </b-form>
        </b-col>
      </b-row>

      <b-row
        v-else
        class="justify-content-center align-items-center h-100 position-relative z-index-2"
      >
        <div class="verify text-left">
          <div class="p-5 bg-light rounded mb-4">
            <h3 class="mb-3">Verify your account</h3>
            <p>
              Check your inbox (example@gmail.com) to confirm your registration
              and complete sign-up
            </p>
            <hr />
            <p>
              Incase you don't see the emaill after a few minutes, <br />
              please <span class="text-secondary">click here</span> to resend
              confirmation mail.
            </p>
          </div>

          <div class="d-flex justify-content-between text-white py-3">
            <div>
              <small>
                Having any trouble here?
                <span class="text-secondary">Contact us</span></small
              >
            </div>
            <div>
              <small> English <b-icon icon="chevron-down"></b-icon> </small>
            </div>
          </div>
        </div>
      </b-row>
      <span class="pattern position-absolute"></span>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      register: true,
    };
  },
};
</script>
<style scoped>
#register_container {
  height: 100vh;
  background-color: var(--primary);
}
form {
  width: 35%;
  margin: 0 auto;
}
a {
  text-decoration: none;
  color: white;
}
.pattern {
  width: 100%;
  top: -14%;
  bottom: 0;
  left: 0;
  right: 0;
  background: url("/img/auth/pattern.png") no-repeat;
  background-position: center;
  z-index: 1;
}
.login {
  position: absolute;
  top: 30px;
  right: 50px;
}
.verify {
  width: 50%;
  margin: 0 auto;
  color: #2e3e4d;
}
.z-index-2 {
  z-index: 2;
}
.form-group {
  margin-bottom: 1.3rem;
}

@media (max-width: 600px) {
  form {
    width: 95%;
  }
  .verify {
    width: 90%;
  }
  .login {
    display: none;
  }
  #register_container {
    height: 100%;
  }
  h3 {
    font-size: 20px;
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
