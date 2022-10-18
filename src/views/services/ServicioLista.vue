<template>
  <HeaderFinal />
  <componenteListas />
  <FooterPrincipal />
</template>

<script>
import componenteListas from "@/components/services/ServicioListas.vue";
export default {
  components: {
    componenteListas,
  },
};
</script>
