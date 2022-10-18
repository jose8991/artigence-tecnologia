<template>
  <HeaderFinal />
  <componenteResumenes />
  <FooterPrincipal />
</template>

<script>
import componenteResumenes from "@/components/services/ServicioHistoria.vue";
export default {
  components: {
    componenteResumenes,
  },
};
</script>
