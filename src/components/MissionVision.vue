<template>
  <div class="container">
    <div class="card">
      <div class="left-column background1-left-column">
        <h6>Acerca de Nosotros</h6>
        <h2>Misión</h2>
        <!--<i class="fa fa-github"></i>-->
      </div>

      <div class="right-column">
        <div>
          <h4>Artigence</h4>
          <h6>Tecnologia</h6>
        </div>
        <h2>Nosotros</h2>
        <p>
          Ayudar a las personas para que <br>
          puedan realizar actividades de una <br>
           manera mas eficiente y facil por <br>
           medio de la Inteligencia Artificial.
        </p>
        <button class="button background1-left-column">Empezar</button>
      </div>
    </div>

    <div class="card">
      <div class="left-column background2-left-column">
        <h6>Acerca de Nosotros</h6>
        <h2>Visión</h2>
        <!--<i class="fa fa-android" aria-hidden="true"></i>--> 
      </div>

      <div class="right-column">
        <div>
          <h4>Artigence</h4>
          <h6>TECNOLOGIA</h6>
        </div>
        <h2>Nosotros</h2>
        <p>
          Ser reconocidos por ayudar con actividaddes <br>
           a personas en sus labores cotifianas de marketign <br>
           a los padres a poder realizar actividades con sus hijos <br>
           de manera mas facil.
        </p>
        <button class="button background2-left-column">Empezar</button>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>



.background1-left-column{
	background: linear-gradient(180deg,#21c8f6,#637bff);
}


.background2-left-column{
	background: linear-gradient(180deg,#21c8f6,#637bff);
}


* {
	padding: 0;
	margin: 0;
	text-decoration: none;
	box-sizing: border-box;
	border: none;
  }


body {
	font-family: var(--body-text);	
}

.container{
	display: flex;
	justify-content: center;
	height: 100vh;
    align-items: center;
    background-color: var(--blue-main);
}

.card {
	background-color:var(--white-text);
	border-radius: 1rem;
	box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
	display: flex;	
	margin: 1.5rem;
	overflow: hidden;
	width: 40rem;
	height: 30rem;
 }

.card h6 {
	opacity: 0.6;	
	letter-spacing: .1rem;
	text-transform: uppercase;
  color:var(--blue-main);
}

.card  h2 {
	letter-spacing: .1rem;
	margin: 1rem 0;
	color:var(--blue-main);
 
}

.left-column {	
	color: var(--blue-main);
	padding: 2rem;
	max-width: 10rem;
	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width:100rem;
    height: 100%;
    font-size:x-large;

}

.left-column h2{
	color: var(--blue-main);
}

.left-column i {
	font-size: 5rem
}

.right-column {
	padding: 30px;
	width: 100%;
	display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width:65;
  height: 50%;
	
}

.right-column p{	
	font-size: .9rem;
	color: var(--blue-main);
  
}

.button {
	border-radius: 3rem;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	color: var(--blue-main);
	font-size: 1.2rem;
	padding: .8rem 1.5rem;
	letter-spacing: .1rem;
	align-self:right;
  align-content:flex-end;
  float: inline-end;
  margin:220px;

  

}

/*media queries*/

@media (max-width: 1030px) {
	.container{
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height:auto;
	}
  }
</style>
