<template>
    <div class="container__all" id="container_all">
      <div class="cover">
        <div class="container__cover">
          <div class="container__info">
            <h1>BUILD YOUR</h1>
            <h2>BUSINESS</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              molestias cumque at, impedit eum corrupti libero ipsam placeat,
              nulla, maiores totam qui ea distinctio. Velit, distinctio. Iste
              iusto deserunt esse?
            </p>
            <input type="button" value="Get Started" />
          </div>
          <div class="container__vector">
            <lottie-player class="img" src="https://lottie.host/c724746c-60b6-4611-95ac-37f509c8ea34/6bBWke5qy8.json" background="transparent" speed="1" loop autoplay></lottie-player>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>

.container__all{
    position: relative;
    right: 0;
    transition: all 300ms;
}



.cover{
    width: 100%;
    padding-bottom: 60px;
    font-family: 'Poppins', sans-serif;
    margin-top: 100px;
}

.container__cover{
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    position: relative;

    /* background-image: url(../images/background-cover.svg); */
    background-size: cover;
    background-position: bottom;
}

.cover .container__info{
    max-width: 400px;
    margin-top: 40px;
    z-index: 2;
}

.cover h1{
    max-width: 400px;
    font-size: 60px;
    font-weight: 900;
    color: #373737;
}

.cover h2{
    font-size: 60px;
    font-weight: 900;
    color: #FEBA0B;
    margin-top: -30px;
}

.cover p{
    margin-top: 10px;
    color: #373737;
}

.cover input[type="button"]{
    padding: 10px 40px;
    margin-top: 40px;
    font-size: 18px;
    font-weight: 600;
    border: none;
    color: white;
    background: #FEBA0B;
    border-radius: 20px;
    box-shadow: 1px 1px 30px -5px #20202049;
    cursor: pointer;
    transition: box-shadow 500ms;
}

.cover input[type="button"]:hover{
    box-shadow: 1px 1px 30px -5px #20202085;
}


.container__vector{
    position: relative;
}

.container__vector .img{
    position: absolute;
    bottom: 10px;
    right: 0px;
    width: 600px;
    animation: move_vector 6s ease-in-out infinite;
    transition: all 300ms;
}

@keyframes move_vector {
    0%{
        transform: translateY(10px);
    }
    25%{
        transform: translateY(-10px);
    }
    100%{
        transform: translateY(10px);
    }
}

@media screen and (max-width: 920px){
    .container__vector .img{
        width: 500px;
    }
}


@media screen and (max-width: 760px){

    .container__vector .img{
        transform: scale(0);
        animation: none;
    }
}
</style>