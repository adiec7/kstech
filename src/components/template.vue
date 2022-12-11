<template>
  <div class="main-content">
    <b-container class="h-100 d-flex justify-content-center align-items-center">
      <b-row class="justify-content-center shadow rounded">
        <b-col cols="12" class="border-bottom p-3 mb-4"></b-col>
        <b-col cols="12" sm="7" class="text-left p-3" style="overflow:auto;max-height:100%">
          <div class="content">
            <h5 class="mb-4">Add Content</h5>

            <div class="mb-4">
              <h6 class="border-bottom mb-4">Header Section</h6>
              <div class="form-groups mb-3">
                <div class="inputs">
                          <b-form-input placeholder="" :class="{focused:title.length}" v-model="title"></b-form-input>
                          <span class="label">Title</span>
                        </div>
              </div>
              <div class="form-groups mb-3">
                <div class="inputs">
                          <b-form-input placeholder="" :class="{focused:congrats.length}" v-model="congrats"></b-form-input>
                          <span class="label">Congratulations</span>
                        </div>
              </div>
            </div>

            <div class="mb-5">
              <h6 class="border-bottom mb-4">Body Section</h6>
              <div class="form-groups mb-4">
                <div class="inputs">
                  <b-form-textarea :class="{focused:body.length}" v-model="body" rows="4"></b-form-textarea>
                     <span class="label">Body content</span>
                </div>
              </div>

              <div class="form-group">
                <label for="">Upload image</label>

                <b-form-file></b-form-file>
              </div>
            </div>

            <div class="text-right">
             <router-link to="/onboarding/invite"> <b-button variant="secondary">Add recipients</b-button></router-link>
            </div>
          </div>
        </b-col>
        <b-col cols="12" sm="5" class="p-3" >
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium quisquam ipsum suscipit, esse itaque cumque
                    incidunt nam obcaecati quidem, provident sequi recusandae
                    voluptatem nihil laborum ullam accusamus vero impedit aut
                    laudantium quis earum! Fugit atque suscipit, vero ipsum ad
                    veritatis?
                  </p>
                </div>

                <div class="social text-center mb-4">
                  <i class="fa fa-facebook-square mr-4" aria-hidden="true"></i>
                  <i class="fa fa-twitter mr-4" aria-hidden="true"></i>
                  <i class="fa fa-linkedin-square mr-4" aria-hidden="true"></i>
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
      title:'',
      congrats:'',
      body:''
    };
  },
  components: {
    "colour-picker": ColourPicker,
  },
};
</script>
<style scoped>
.main-content{
  height:100vh;
}
.border.rounded:hover {
  background: var(--secondary);
  color: white;
}

.preview {
  border-radius: 10px;
  overflow: hidden;
  background: rgba(248, 248, 248, 0.3);
  padding-bottom: 40px;
  border: 1px solid #f8f8f8;
}
.preview > .bars {
  background: #763605;
  padding: 10px;
}
.text-body {
  background: #fff;
  width: 80%;
  margin: 0 auto;
  overflow: auto;
  height: 55vh;
}
.row {
  height: 90vh;
}
</style>