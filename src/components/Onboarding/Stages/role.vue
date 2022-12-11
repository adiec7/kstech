<template>
    <div class="h-100">
        <b-container class="h-100">
            <b-row class="h-100 justify-content-center ">
                <b-col cols="10" sm="5" class=" ">

                    <div class="text-left w-100">

                        <div class="bar bg-light rounded mb-3">
                            <div class="bar_length bg-primary "></div>
                        </div>

                        <h2 >What is your role?</h2>
                       <p class="mb-4"> At Korkins</p>
                     
                            <b-form-input class="mb-4" v-model="role" />
                     
                      <div class="text-center">
                           <router-link to="/onboarding/language">  <b-button variant="outline-secondary" class="mr-3">Go back</b-button></router-link>
                  
                         <router-link to="/onboarding/size">   <b-button variant="secondary">Continue</b-button></router-link>
                      </div>
                    </div>

                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            role:''
        }
    },
}
</script>
<style scoped>
.bar{
    width: 100%;
    height: 20px;
    position: relative;
    z-index: 1;
    overflow: hidden;
}
.bar_length{
    width: 25%;
    height: 100%;
    z-index: 2;
}
.row{
    padding-top: 10rem;
}
</style>