<template>
    <div id="error" class="bg-primary">
        <div class="d-flex justify-content-center align-items-center h-100">
                        <div class="text-white">
                            <b-avatar class="mb-5" size="8rem"></b-avatar>
                            <h1>Oops! Something went wrong.</h1>
                            <p class="text">We are experiencing an internam server error, please check abck later.</p>

                            <b-button variant="secondary">Back to Home</b-button>
                        </div>
        </div>
    </div>
</template>

<style scoped>
#error{
    height: 100vh;
}
.text{
    width:30%;
    margin: 0 auto;;
}
</style>