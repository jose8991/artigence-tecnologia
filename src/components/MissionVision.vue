<template>  
   <body>
    <div class="about-section">
        <div class="inner-container">
            <h1>Acerca de nosotros</h1>
            <h2>vision</h2>
            <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
            </p>
            <h2>Mision</h2>
            <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
            </p>
           
        </div>
    </div>
</body>
</template>

<script></script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    font-family: "Open Sans",sans-serif;
    box-sizing: border-box;
}

body{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--blue-main);
}

.about-section{    
  /*background:no-repeat left;*/
    background-size: 70%;
    background-color: var(--blue-intro);
    overflow: hidden;
    padding: 100px 100px;
    
}

.inner-container{
    width: 80%;
    float:center;
    background-color: var(--blue-footer);
    padding: 140px;
    word-wrap: break-word;
    box-shadow: 0px 4px 20px rgba(35, 42, 149, 0.25);
    border-radius: 0.5em;
    color: var(--colorTextos);
  
  transform: translateX(-50%);
  position: absolute;
  top: 60px;
  transition: 0.5s ease all;
  pointer-events: none;
 
 
  


  
 
}

.inner-container h1{
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 900;
    color:var(--blue-gradient);
    text-align: center;
    
}
.inner-container h2{
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 900;
    color:var(--blue-gradient)
}


.text{
    font-size: 20px;
    color: white;
    line-height: 30px;
    text-align: justify;
    margin-bottom: 40px;
}

@media screen and (max-width:1200px){
    .inner-container{
        padding: 80px;
    }
}

@media screen and (max-width:1000px){
    .about-section{
        background-size: 100%;
        padding: 100px 40px;
    }
    .inner-container{
        width: 100%;
    }
}

@media screen and (max-width:600px){
    .about-section{
        padding: 0;
    }
    .inner-container{
        padding: 60px;
    }
}

</style>
