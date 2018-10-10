//Ajout d'un évènement lorsque la souris passe au dessus de l'image
image1.addEventListener("mouseover",function(){
//Paramètre de la fonction image1.src = prendre l'id utiliser dans le html
  image1.src="assets/image1_2.jpg";
});
//Ajout d'un évènement lorsque la souris part de l'image1
image1.addEventListener("mouseout",function(){
//Paramètre de la fonction et faire pareil pour l'id
  image1.src="assets/image1.jpg";
});
