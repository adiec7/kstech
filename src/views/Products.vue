<template>
  <div id="about" class="pt-5 d-flex align-items-end position-relative">
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
    <b-container class="pb-5">
      <b-row>
        <b-col cols="12" md="5" class="text-center text-sm-left">
          <h1>Manage your Business with our Products</h1>
        </b-col>
        <b-col cols="12" md="7" class="text-left p-4 white-border-left">
          <carousel
            :navigationEnabled="true"
            :paginationEnabled="true"
            :loop="true"
            :autoplay="true"
            :autoplayTimeout="5000"
            :perPage="1"
            :perPageCustom="[
              [600, 1],
              [768, 2],
            ]"
          >
            <slide class="px-2" v-for="(item,id) in items"  :key="id">
              <b-card
                :title="item.title"
                :img-src="item.image"
                img-alt="Image"
                img-top
                style="max-width: 20rem"
                class="mb-2 shadow"
              >
                <div class="d-flex flex-column" v-if="item.text1 ">
                  <b-card-text class="flex-1">
                    {{ item.text1 }}
                  </b-card-text>


                 <div>
                    <a
                    target="_blank"
                    :href="item.url"
                    class="text-danger"
                  >
                    Get started <b-icon icon="arrow-right"></b-icon
                  ></a>
                 </div>
                </div>
              </b-card>
            </slide>

          </carousel>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items:[
        {
          image:'/img/Autom.png',
          title:'Automate',
          text1:'Visualize platform that manages workflow. Manages hiring and workflow in company.',

          url:'https://kari-soft.herokuapp.com/'
        },
         {
          image:'/img/skum.png',
          title:'Konsul',
          text1:'School Management System',
           text2:'',
          url:'/coming-soon'
        },
         {
          image:'/img/isometric-exo-home.gif',
          title:'KariFinance',
          text1:' Visualize platform that manages workflow',
           text2:'Manages hiring and workflow in company.',
          url:'https://kari-soft.herokuapp.com'
        },
         {
          image:'/img/rintez.webp',
          title:'Rintez',
          text1:'Rintez Healthcare is looking after your well-being, will give you small insights regarding your health, is..',

          url:'https://play.google.com/store/apps/details?id=com.uk.rintez'
        },
         {
          image:'/img/simihealth.webp',
          title:'SimbiHealth',
          text1:'SIMBIHealth is a artificial intelligence-driven mobile and web application and chatbot that provides comprehe...',

          url:'https://play.google.com/store/apps/details?id=com.healthsimbi.simbihealth'
        },
         {
          image:'/img/burst.webp',
          title:'Burst: E-Reader & Planner',
          text1:'Burst gives students, teachers and academia a solution to collaborate on learning, access the most compendious an..',

          url:'https://play.google.com/store/apps/details?id=com.burst.burst'
        },
         {
          image:'/img/cuffing.png',
          title:'Cuffing™ - Online Dating App',
          text1:'Cuffing is the best free modern online dating & chat app for everyone. Cuffing will simplify your life and will let yo...',

          url:'https://apps.apple.com/us/app/cuffing-online-dating-app/id1006329481'
        },
        {
          image:'/img/dont-fail.png',
          title:"Don't Fail - Exams & Tutoring",
          text1:'Instant answers & Free IEB/DBE past papers & memos, Free sign up. Free resources. Free questions. No advertisements.',

          url:'https://apps.apple.com/us/app/dont-fail-exams-tutoring/id1281264024'
        },
      ],
    }
  }
}
</script>
<style scoped>
#about {
  height: 100vh;
  overflow-y: hidden;
  background: linear-gradient(194.01deg, #345dc1 9.6%, #a2cad8 89.64%);
}
h1 {
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: 0em;
  text-transform: capitalize;
  color: white;
}
* {
  overflow: hidden;
}
h3 {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;

  color: #222222;
}
p {
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;

  color: #222222;
}
.about-img {
  height: 450px;
}
.container {
  width: 70%;
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
.card-text {
  font-size: 14px;
  line-height: 1.4;
}
.card-title {
  color: var(--primary);
  font-weight: bold;
  font-size:1rem;
}
.white-border-left {
  border-left: 4px solid white;
}
.card-img-top {
  height: 12rem;
  object-fit: contain;
}
.card-body {
  height: 13rem;
}
@media (max-width: 600px) {
  #about {
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
  .container {
    width: 100%;
    padding-top: 120px;
  }
  .card {
    max-width: 100% !important;
  }
}
</style>
