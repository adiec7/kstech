<template>
  <footer class="text-center text-sm-left d-none d-sm-block">
    <b-container>
      <b-row>
        <b-col
          cols="12"
          md="6"
          class="d-flex justify-content-center justify-content-md-between mb-2 mb-md-0"
        >
          <b-row class="w-100">
            <b-col cols="4" class="mb-2 mb-md-0">
              <i
                :class="{ 'text-primary': $route.path !== '/' }"
                class="fa fa-facebook mr-3"
                aria-hidden="true"
              ></i>
              <i
                :class="{ 'text-primary': $route.path !== '/' }"
                class="fa fa-twitter mr-3"
                aria-hidden="true"
              ></i>
              <i
                :class="{ 'text-primary': $route.path !== '/' }"
                class="fa fa-instagram mr-3"
                aria-hidden="true"
              ></i>

              <i
                :class="{ 'text-primary': $route.path !== '/' }"
                class="fa fa-linkedin"
                aria-hidden="true"
              ></i>
            </b-col>

            <b-col cols="8" md="6">
              <p :class="{ 'text-primary': $route.path !== '/' }">
                Copyright Karisoft Solution LTD.
                {{ new Date().getFullYear() }}
              </p>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12" md="6" class="text-center text-sm-right">
          <p>
            <span :class="{ 'text-primary': $route.path !== '/' }"
              >Terms and Condition
            </span>
            <span
              ><b-icon
                :class="{ 'text-primary': $route.path !== '/' }"
                icon="dot"
                class="mx-2"
              ></b-icon
            ></span>
            <span :class="{ 'text-primary': $route.path !== '/' }"
              >Privacy Policy</span
            ><b-icon icon="dot" class="mx-2"></b-icon>
            <span :class="{ 'text-primary': $route.path !== '/' }"
              >Cookie Policy</span
            >
          </p>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<style scoped>
.fa {
  font-size: 1.5em;
}
footer {
  position: fixed;
  color: white;
  z-index: 999;
  bottom: 0;
  width: 100%;
  font-size: 14px;
  padding: 20px 0;
}

p {
  margin-bottom: 0;
  font-size: 13.5px;
}
@media (max-width: 600px) {
  footer {
    position: relative;
    background: #333;
    color: white !important;
    font-size: 12px;
  }
  .text-primary {
    color: white !important;
  }
  p {
    font-size: 11px;
  }
}
</style>
