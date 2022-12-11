<template>
  <footer class="footer">
    <span class="mr-sm-5 cpointer">Terms and Conditions</span>
    <span class="mr-sm-5 cpointer">Privacy Polcicy</span>
    <span class="cpointer"> Main Site</span>
  </footer>
</template>

<style scoped>
footer {
  padding: 40px 40px;
  background-color: #2b1d1c;
  color: #cdc4c4;
}
.footer {
  display: flex;
  justify-content: center;
}
footer span {
  font-size: 15px;
}
@media (max-width: 600px) {
  footer {
    padding: 10px 20px;
    flex-direction: column;
    justify-content: center;
  }
  footer span {
    font-size: 13px;
    margin-bottom: 10px;
  }
}
</style>
