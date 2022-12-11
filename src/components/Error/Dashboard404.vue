<template>
  <div id="error">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="text">
        <b-avatar class="mb-5" size="8rem"></b-avatar>
        <h1>Page Not Found</h1>
        <p class="mb-4">
          This indicates that the server was found, but that the server was not
          able to retrieve the requested page. Kindly check your connection or
          refresh your page.
        </p>

        <div>
          <b-button variant="outline-secondary" size="md" class="mr-3"
            >Go Back
          </b-button>
          <b-button variant="secondary" size="md">Refresh </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#error {
  height: 100vh;
}
.text {
  width: 30%;
  margin: 0 auto;
}
</style>
