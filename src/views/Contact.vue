<template>
  <div id="contact" class="pt-5 d-flex align-items-end position-relative">
    <span class="half_circle_1">
      <b-img src="/img/half1.png"></b-img>
    </span>
    <span class="half_circle_2">
      <b-img src="/img/half3.png"></b-img>
    </span>
    <span class="half_circle_3">
      <b-img src="/img/half2.png"></b-img>
    </span>

    <span class="bg_1">
      <b-img src="/img/logos.png"></b-img>
    </span>
    <span class="bg_2">
      <b-img src="/img/mock.png"></b-img>
    </span>
    <b-container fluid class="py-5">
      <b-row class="justify-content-center">
        <b-col cols="12" md="6" class="map d-none d-md-flex">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=lekki&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe
              ><a href="https://putlocker-is.org"></a><br />

              <a href="https://www.embedgooglemap.net"
                >google maps on website</a
              >
            </div>
          </div>
        </b-col>
        <b-col cols="10" md="6" class="text-left p-3 px-sm-4 bg-primary cont">
          <b-form @submit.prevent="sendmail" class="text-white">
            <h3>Get in touch</h3>
            <small
              >Fill up the form our team will get back to you within 24
              Hours</small
            >
            <b-form-row class="mt-4">
              <b-col cols="12" sm="6">
                <b-form-group label="First name">
                  <b-form-input
                    size="sm"
                    required
                    v-model="mail.first_name"
                    placeholder="Enter your first name"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="12" sm="6">
                <b-form-group label="Last name">
                  <b-form-input
                    size="sm"
                    required
                    v-model="mail.last_name"
                    placeholder="Enter your last name"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-form-row>
            <b-form-row>
              <b-col cols="12">
                <b-form-group label="Email address">
                  <b-form-input
                    size="sm"
                    required
                    v-model="mail.email"
                    placeholder="Enter your email address"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-form-row>
            <b-form-group label="Subject">
              <b-form-row>
                <b-col cols="12" sm="6">
                  <b-form-radio
                    size="sm"
                    v-model="mail.subject"
                    required
                    value="Demo request for Automate"
                    >Demo request for Automate</b-form-radio
                  >
                </b-col>
                <b-col cols="12" sm="6">
                  <b-form-radio
                    size="sm"
                    required
                    v-model="mail.subject"
                    value="Product Design"
                    >Product Design</b-form-radio
                  >
                </b-col>
                <b-col cols="12" sm="6">
                  <b-form-radio
                    size="sm"
                    v-model="mail.subject"
                    value="Mobile App Development"
                    >Mobile App Development</b-form-radio
                  >
                </b-col>
                <b-col cols="12" sm="6">
                  <b-form-radio
                    size="sm"
                    required
                    v-model="mail.subject"
                    value="Web Design"
                    >Web Design</b-form-radio
                  >
                </b-col>
                <b-col cols="12" sm="6">
                  <b-form-radio
                    size="sm"
                    required
                    v-model="mail.subject"
                    value="Demo Request for Konsul"
                    >Demo Request for Konsul</b-form-radio
                  >
                </b-col>
                <b-col cols="12" sm="6">
                  <b-form-radio
                    size="sm"
                    required
                    v-model="mail.subject"
                    value="Web Development"
                    >Web Development</b-form-radio
                  >
                </b-col>
              </b-form-row>
            </b-form-group>

            <b-form-row>
              <b-col cols="12">
                <b-form-group label="Message">
                  <b-form-textarea
                    required
                    v-model="mail.message"
                    placeholder="Write your message"
                  ></b-form-textarea>
                </b-form-group>
              </b-col>
            </b-form-row>

            <b-form-group>
              <b-button
                type="submit"
                size="lg"
                class="d-none d-sm-block"
                variant="outline-light"
                >Send message</b-button
              >
              <b-button
                size="lg"
                type="submit"
                class="d-sm-none"
                block
                variant="outline-light"
                >Send message</b-button
              >
            </b-form-group>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mail: {
        first_name: "",
        last_name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    sendmail() {
      this.$http
        .post("https://karisoft-server.herokuapp.com/api/sendmail", this.mail)
        .then((res) => {
          if (res.status == 200) {
            this.$toast.success("Email sent");
            this.mail = {
              first_name: "",
              last_name: "",
              email: "",
              subject: "",
              message: "",
            };
          }
        });
    },
  },
};
</script>
<style scoped>
* {
  overflow-x: hidden;
}
.mapouter {
  position: relative;
  text-align: right;
  height: 500px;
  width: 600px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 600px;
}
#contact {
  height: 100vh;
  overflow-y: hidden;
  background: linear-gradient(194.01deg, #345dc1 9.6%, #a2cad8 89.64%);
}
.map {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
h1 {
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: 0em;
  text-align: left;
  color: #222222;
}

h3 {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: capitalize;
}
p {
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #222222;
}
.about-img {
  height: 450px;
}
label,
.label,
.col-form-label,
legend {
  text-transform: capitalize !important;
  font-size: 14px;
}
.custom-control-label {
  font-size: 14px;
  color: #a0bcf8;
}
.container {
  width: 100%;
  margin: 0 auto;
}
.half_circle_1 {
  position: absolute;
  top: 10%;
  left: -3px;
}
.half_circle_2 {
  position: absolute;
  bottom: -10px;
  left: 25%;
}
.half_circle_3 {
  position: absolute;
  top: 50%;
  right: -3px;
}
.bg_1 {
  position: absolute;
  top: 10%;
  left: 5%;
}
.bg_2 {
  position: absolute;
  top: 10%;
  right: 0%;
}
@media (max-width: 600px) {
  #contact {
    height: 100%;
    padding-bottom: 70px !important;
  }
  h1 {
    font-size: 30px;
    line-height: 1.4;
    font-weight: 700;
  }
  h3 {
    font-size: 20px;
    line-height: 1.4;
  }
  p {
    font-size: 15px;
    line-height: 1.4;
  }
  .container-fluid {
    width: 100%;
    padding-top: 100px !important;
    padding-bottom: 0 !important;
  }
  .card {
    max-width: 100% !important;
  }
  .cont {
    border-radius: 10px;
    margin-bottom: 50px;
  }
}
</style>
