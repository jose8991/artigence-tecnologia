<template>
    <HeaderFinal/>
    <PortadaPrincipal/>
    <CardPrincipal/>
    <FooterPrincipal/>
</template>

<script>
// @ is an alias to /src
import HeaderFinal from '@/components/ComponenteHeader.vue'
import PortadaPrincipal from '@/components/ComponentePortada.vue'
import FooterPrincipal from '@/components/ComponenteFooter.vue'
import CardPrincipal from '@/components/CardsService.vue'

export default {
  components: {
    FooterPrincipal,
    PortadaPrincipal,
    HeaderFinal,
    CardPrincipal
  }
}
</script>
