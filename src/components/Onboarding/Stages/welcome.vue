<template>
    <div class="h-100">
       <b-container class="h-100">
           <b-row class=" justify-content-center ">
               <b-col cols="10" sm="5" class="">
                  <div>
                        <div class="w-100 bg-light mb-4" style="height:200px">

                   </div>

                   <h1 class="mb-2">Welcome to KariSoft</h1>
                   <p class="mb-4">Lets get you starter shall we. It will only take a few minutes</p>
                <router-link to="/onboarding/language">   <b-button variant="secondary" block>Get Started</b-button></router-link>

                  </div>
               </b-col>

           </b-row>
       </b-container>
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
a{
    text-decoration: none;
}
.row{
    padding-top: 10rem;
}
</style>