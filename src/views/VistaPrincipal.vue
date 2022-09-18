<template>
    <HeaderFinal/>
    <PortadaPrincipal/>
    <FooterPrincipal/>
</template>

<script>
// @ is an alias to /src
import HeaderFinal from '@/components/ComponentePruebas.vue'
import PortadaPrincipal from '@/components/ComponentePortada.vue'
import FooterPrincipal from '@/components/ComponenteFooter.vue'

export default {
  components: {
    FooterPrincipal,
    PortadaPrincipal,
    HeaderFinal,
  }
}
</script>
