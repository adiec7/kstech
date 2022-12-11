<template>
  <div class="h-100">
    <b-container class="h-100">
      <b-row class="h-100 justify-content-center">
        <b-col cols="12" sm="11" class=" ">
          <div class="text-left w-100">
            <div style="width: 60%" class="">
              <div class="bar bg-light rounded mb-3">
                <div class="bar_length bg-primary"></div>
              </div>

              <h2 class="mb-3 text-left">Invite Applicant(s)</h2>
            </div>
            <b-row class="pt-4">
              <b-col cols="12" sm="7" class="">
                <p class="mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Officia ratione officiis, expedita perferendis repudiandae
                  debitis est illo vel molestias temporibus.
                </p>

                <div>
                  <span class="p-2 px-5 bg-light btn">
                    <i class="fa fa-upload" aria-hidden="true"></i> Upload
                    Applicants Data
                  </span>
                </div>
              </b-col>
              <b-col cols="12" sm="5">
                <div class="mb-5">
                  <b-form-group>
                    <b-input-group class="mb-3">
                      <b-form-input type="email"></b-form-input>
                      <b-input-group-append>
                        <b-button variant="secondary">Add</b-button>
                      </b-input-group-append>
                    </b-input-group>
                  </b-form-group>
                  <div class="emails p-3 shadow-sm">
                    <small class="mb-3"
                      ><strong class="text-muted">Email address</strong></small
                    >
                    <div class="body">
                      <div class="d-flex justify-content-between">
                        <small>john@gmail.com</small>
                        <small
                          ><i class="fa fa-times-circle" aria-hidden="true"></i
                        ></small>
                      </div>
                      <div class="d-flex justify-content-between">
                        <small>jfranohn@gmail.com</small>
                        <small
                          ><i class="fa fa-times-circle" aria-hidden="true"></i
                        ></small>
                      </div>
                      <div class="d-flex justify-content-between">
                        <small>john@gmail.com</small>
                        <small
                          ><i class="fa fa-times-circle" aria-hidden="true"></i
                        ></small>
                      </div>
                      <div class="d-flex justify-content-between">
                        <small>jfranohn@gmail.com</small>
                        <small
                          ><i class="fa fa-times-circle" aria-hidden="true"></i
                        ></small>
                      </div>
                      <div class="d-flex justify-content-between">
                        <small>john@gmail.com</small>
                        <small
                          ><i class="fa fa-times-circle" aria-hidden="true"></i
                        ></small>
                      </div>
                      <div class="d-flex justify-content-between">
                        <small>jfranohn@gmail.com</small>
                        <small
                          ><i class="fa fa-times-circle" aria-hidden="true"></i
                        ></small>
                      </div>
                      π
                    </div>
                  </div>

                  <b-form-checkbox
                    >Automatically add trainees to group
                    <i class="fa fa-info-circle" aria-hidden="true"></i
                  ></b-form-checkbox>
                </div>
                <div class="">
                  <b-button variant="outline-secondary" class="mr-3"
                    >Back</b-button
                  >
                  <b-button
                    variant="secondary"
                    @click="$bvModal.show('invitesent')"
                    >Send Invite</b-button
                  >
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-modal id="invitesent" hide-footer centered>
      <div class="text-center p-5">
        <b-avatar size="8rem" class="mb-3"></b-avatar>
        <h3>Invite Sent !</h3>
        <p class="mb-5">
          Your employees would be notified be email to join the digital
          classroom
        </p>
        <b-button variant="secondary">Continue to dashboard</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brand: {},
      colour: "#FFF2C7"
    };
  }
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
  width: 85%;
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

.emails {
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 30px;
}
.emails > .body {
  max-height: 80%;
  overflow: auto;
  padding: 12px 0;
}
.emails > .body > div {
  padding: 8px 15px;
}
.emails > .body > div:hover {
  background: #f7f8fa;
}
</style>