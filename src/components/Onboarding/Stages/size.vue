<template>
    <div class="h-100">
        <b-container class="h-100">
            <b-row class="h-100 justify-content-center ">
                <b-col cols="10" sm="5" class=" ">

                    <div class="text-left w-100">

                        <div class="bar bg-light rounded mb-3">
                            <div class="bar_length bg-primary "></div>
                        </div>

                        <h2 class="mb-4" >Company's size?</h2>
                    
                     
                       <div class="mb-5">
                           <div class="border rounded d-flex justify-content-between p-3  mb-3">
                               <div class="">1-10</div>
                                 <div class=""> <i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>
                           </div>
                             <div class="border rounded d-flex justify-content-between p-3  mb-3">
                               <div class="">11-50</div>
                                 <div class=""> <i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>
                           </div>
                             <div class="border rounded d-flex justify-content-between p-3  mb-3">
                               <div class="">51-200</div>
                                 <div class=""> <i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>
                           </div>
                             <div class="border rounded d-flex justify-content-between p-3 ">
                               <div class="">200 and more</div>
                                 <div class=""> <i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>
                           </div>
                          
                       </div>
                     
                      <div class="text-center">
                           <router-link to="/onboarding/role">  <b-button variant="outline-secondary" class="mr-3">Go back</b-button></router-link>
                  
                            <router-link to="/onboarding/brand">   <b-button variant="secondary">Continue</b-button></router-link>
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
            size:''
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
    width: 35%;
    height: 100%;
    z-index: 2;
}
.row{
    padding-top: 10rem;
}
.border.rounded:hover{
    background: var(--secondary);
    color:white;
}
</style>