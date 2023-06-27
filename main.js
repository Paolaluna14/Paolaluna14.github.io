let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #78a890;"> Diseñadora gráfica especializada en Desarrollo Digital.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
