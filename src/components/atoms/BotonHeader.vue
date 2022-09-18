<template>
    <li><a class="selected" href="#">Inicio</a></li>
</template>

<script>
export default {

}
</script>

<style scoped>
.selected{
    background: #FEBA0B;
    padding: 10px 30px;
    color: #59A642;
    font-size: 18px;
    font-weight: 600;
    border: none;
    border-radius: 20px;
    box-shadow: 1px 1px -5px #20202049;
    cursor: pointer;
    transition: box-shadow 500ms;
}
.selected:hover{
    box-shadow: 1px 1px -5px #20202089;
}
</style>