<template>
    <div class="h-100">
        <b-container class="h-100">
            <b-row class="h-100 justify-content-center ">
                <b-col cols="10" sm="5" class="">

                    <div class="text-left w-100">

                        <div class="bar bg-light rounded mb-3">
                            <div class="bar_length bg-primary "></div>
                        </div>

                        <h2 >Company Language</h2>
                       <p class="mb-4"> The default language of your company's career site for jobs.</p>
                        <b-form-select class="mb-4" v-model="language">
                            <b-form-select-option selected value="english">English</b-form-select-option>
                        </b-form-select>

                      <div class="text-center">
                          <router-link to="/onboarding/role">  <b-button variant="secondary">Continue</b-button></router-link>
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
            language:'english'
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
    width: 15%;
    height: 100%;
    z-index: 2;
}
.row{
    padding-top: 10rem;
}
</style>