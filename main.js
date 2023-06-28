let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #78a890;"> Diseñadora en busca de nuevos conocimientos y aprendizajes')
  .pauseFor(200)
  .deleteChars(10)
  .start();
