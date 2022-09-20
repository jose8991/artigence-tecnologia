<template>
    <HeaderFinal/>
    <ComponentePublicacion/>
    <FooterPrincipal/>
</template>

<script>
// @ is an alias to /src
// import HeaderFinal from '@/components/ComponenteHeader.vue'
// import FooterPrincipal from '@/components/ComponenteFooter.vue'
import ComponentePublicacion from '@/components/componentePublicaciones.vue'
export default {
  components: {
    // FooterPrincipal,
    ComponentePublicacion,
    // HeaderFinal,
  },
}
</script>
