<script>
export default {
  name: "show-footer.component"
}
</script>

<template>
  <footer class="footer-container">
    <div class="footer-section">
      <p>{{ $t('footer.copyright') }}</p>    </div>
    <div class="footer-section">
      <p>
        <p>{{ $t('footer.developedBy') }}</p>
      </p>
    </div>
  </footer>
</template>
<style scoped>
.footer-container {
  /*
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  */
  background-color: #3f51b5;
  color: white;
  padding: 1.5rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.95rem;
}

.footer-section {
  margin-bottom: 0.5rem;
  width: 100%;
}

@media (min-width: 768px) {
  .footer-container {
    justify-content: space-between;
    align-items: center;
  }

  .footer-section {
    width: auto;
    margin-bottom: 0;
  }
}
</style>