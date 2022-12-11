<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary" class="">
      <b-container fluid>
        <b-navbar-brand href="/"
          ><b-img src="/img/logo.png"></b-img
        ></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <div v-if="authenticated">
              <router-link to="/login"
                ><b-button type="button" variant="outline-light" class="mr-3"
                  >Login</b-button
                ></router-link
              >
              <router-link to="/register"
                ><b-button type="button" variant="light"
                  >Get Started</b-button
                ></router-link
              >
            </div>
            <div v-else class="d-flex align-items-center">
              <b-nav-item class="mr-5">
                <b-icon icon="bell"></b-icon
              ></b-nav-item>
              <b-nav-item class="mr-3 d-flex align-items-center"
                ><b-avatar size="2.5rem" class="mr-2"></b-avatar>
                <span>Me</span> <b-icon icon="angle-down"></b-icon
              ></b-nav-item>
            </div>
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
      authenticated: false
    };
  }
};
</script>
