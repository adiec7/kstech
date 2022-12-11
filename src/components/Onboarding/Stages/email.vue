<template>
  <div class="h-100">
    <b-container class="h-100">
      <b-row class=" justify-content-center">
        <b-col cols="12" sm="11" class=" ">
          <div class="text-left w-100">
            <div style="width: 60%" class="mx-auto">
              <div class="bar bg-light rounded mb-3">
                <div class="bar_length bg-primary"></div>
              </div>

              <h2 class="mb-3 text-left">Customise your Email Template</h2>
            </div>
            <b-row class="pt-4">
              <b-col cols="12" sm="7" class="">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Officia ratione officiis, expedita perferendis repudiandae
                  debitis est illo vel molestias temporibus.
                </p>
                <div class="header">
                  <h6>Header</h6>
                  <b-row class="py-1">
                    <b-col>
                      <colour-picker
                        v-model="colour"
                        :value="colour"
                        label="Choose a background color"
                        picker="sketch"
                        no-input
                      />
                    </b-col>

                    <b-col>
                      <b-form-group label="Background image (optional)">
                        <b-form-file placeholder="Choose a file"></b-form-file>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </div>
                <div class="footer">
                  <h6>Footer</h6>
                  <b-row class="py-2 mb-4">
                    <b-col cols="12" sm="4">
                      <label for="">Social Media links</label>
                    </b-col>
                    <b-col cols="12" sm="8">
                      <div class="form-groups mb-3">
                        <div class="inputs">
                          <b-form-input placeholder="" :class="{focused:link1.length}" v-model="link1"></b-form-input>
                          <span class="label">Facbook</span>
                        </div>
                      </div>
                      <div class="form-groups mb-3">
                        <div class="inputs">
                          <b-form-input   :class="{focused:link2.length}" v-model="link2"></b-form-input>
                            <span class="label">Instagram</span>
                        </div>
                      </div>
                      <div class="form-groups mb-3">
                        <div class="inputs">
                          <b-form-input   :class="{focused:link3.length}" v-model="link3"></b-form-input>
                            <span class="label">Linkedin</span>
                        </div>
                      </div>
                      <div class="form-groups">
                        <div class="inputs">
                          <b-form-input   :class="{focused:link4.length}" v-model="link4"></b-form-input>
                            <span class="label">Twitter</span>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                  <b-row class="py-2">
                    <b-col cols="12" sm="4">
                      <label for="">Address & Website</label>
                    </b-col>
                    <b-col cols="12" sm="8">
                      <div class="form-groups mb-3">
                        <div class="inputs">
                          <b-form-textarea
                          :class="{focused:address.length}" v-model="address"
                          ></b-form-textarea>
                              <span class="label">Address</span>
                        </div>
                      </div>
                      <div class="form-groups">
                        <div class="inputs">
                          <b-form-input     :class="{focused:website.length}" v-model="website"></b-form-input>
                              <span class="label">Website</span>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                </div>

             
              </b-col>
              <b-col cols="12" sm="5">
                <div class="mb-5">
                  <div class="preview">
                    <div class="bars text-right text-white">
                      <small class="mr-4"
                        ><i class="fa fa-refresh" aria-hidden="true"></i>
                        Refresh</small
                      >

                      <small>
                        <i class="fa fa-play" aria-hidden="true"></i> Full
                        preview</small
                      >
                    </div>
                      <div
                        style="width: 100px; height: 30px"
                        class="bg-dark my-4 mx-auto"
                      ></div>
                    <div class="text-body text-center p-4">
                    

                      <div class="text-left mb-5">
                        <h6>Hello First name</h6>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Accusantium quisquam ipsum suscipit, esse itaque
                          cumque incidunt nam obcaecati quidem, provident sequi
                          recusandae voluptatem nihil laborum ullam accusamus
                          vero impedit aut laudantium quis earum! Fugit atque
                          suscipit, vero ipsum ad veritatis?
                        </p>
                      </div>

                      <div class="social text-center mb-4">
                        <i
                          class="fa fa-facebook-square mr-4"
                          aria-hidden="true"
                        ></i>
                        <i class="fa fa-twitter mr-4" aria-hidden="true"></i>
                        <i
                          class="fa fa-linkedin-square mr-4"
                          aria-hidden="true"
                        ></i>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </div>
                         <div class="address mb-3">
                      Lorem, ipsum dolor. <br />
                      Lorem, ipsum.
                    </div>
                    <div class="website">www.yourwebsite.com</div>
                    </div>

                 
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>
          <div class="">
            <router-link to="/onboarding/template"><b-button variant="secondary">Save template</b-button></router-link>
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
      colour: "#FFF2C7",
      link1:'',
      link2:'',
      link3:'',
      link4:'',
      address:'',
      website:''
    };
  },
  components: {
    "colour-picker": ColourPicker,
  },
};
</script>
<style scoped>
.bar {
  width: 100%;
  height: 20px;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.bar_length {
  width: 75%;
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

.preview {
  border-radius: 10px;
  overflow: hidden;
  background: rgba(248, 248, 248, .3);
  padding-bottom: 40px;
  border:1px solid #F8F8F8;
}
.preview > .bars {
  background: #763605;
  padding: 10px;
}
.text-body{
    background: #fff;
    width:80%;
    margin: 0 auto;
}
</style>