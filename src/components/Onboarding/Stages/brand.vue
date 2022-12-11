<template>
  <div class="h-100">
    <b-container class="h-100">
      <b-row class="h-100 justify-content-center">
        <b-col cols="10" sm="8" class=" ">
          <div class="text-left w-100">
            <div class="bar bg-light rounded mb-3">
              <div class="bar_length bg-primary"></div>
            </div>

            <h2 class="mb-3">Customise your brand</h2>
            <b-row>
              <b-col cols="12" sm="6" class="">
                <!-- <h3 class="mb-3">Customize your brand</h3> -->
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  aut velit accusantium animi exercitationem ipsa assumenda ea
                  unde tempore illo temporibus ex possimus provident, deserunt
                  veritatis rem ad explicabo. Minima?
                </p>
              </b-col>
              <b-col cols="12" sm="5" offset-sm="1">
                <div class="mb-5">
                  <h6 class="mb-3">Upload Company logo</h6>
                  <div class="d-flex mb-5">
                    <div
                      style="width: 80px; height: 80px"
                      class="bg-light mr-3"
                    ></div>
                    <div>
                      <div class="mb-2">image name</div>
                      <div class="bg-light rounded p-2">
                        <i class="fa fa-upload" aria-hidden="true"></i> Upload
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 class="mb-3">Choose brand primary color</h6>
                    <colour-picker
                      v-model="colour"
                      :value="colour"
                    
                      picker="sketch"
                      no-input
                    />
                  </div>
                </div>

                <div class="text-left">
                  <router-link to="/onboarding/role">
                    <b-button variant="outline-secondary" class="mr-3"
                      >Go back</b-button
                    ></router-link
                  >

                  <router-link to="/onboarding/email">
                    <b-button variant="secondary"
                      >Continue</b-button
                    ></router-link
                  >
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ColourPicker from "vue-colour-picker";

export default {
  data() {
    return {
      brand: {},
      colour: "#000000",
    };
  },
  components: {
    "colour-picker": ColourPicker,
  },
};
</script>
<style scoped>
.bar {
  width: 80%;
  height: 20px;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.bar_length {
  width: 65%;
  height: 100%;
  z-index: 2;
}
.row {
  padding-top: 5rem;
    padding-bottom: 3rem;
}
.border.rounded:hover {
  background: var(--secondary);
  color: white;
}

</style>