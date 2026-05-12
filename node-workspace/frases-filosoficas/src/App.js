import './App.css';
import { useState } from 'react';
const frases = [
  "Si alguien te tira una piedra demuestrale que no eres igual y tirale un balazo.",
  "Quisiera ser pobre por un día porque esto serlo todos los días me tiene harto.",
  "No es un artista tampoco un turista eres tu que eres racista.",
  "No es baco, tampoco florero Eres tu que me debes dinero.",
  "No es mar, tampoco marea somos tu y yo que no hemos hecho la tarea.",
  "Buenos días son los que tardas en responderme.",
  "No soy griego no romano pero te  la ando metiendo con todo y mano.",
  "No soy médico ni enfermero, pero llevas toda la vida siendo el mismo pendejo.",
  "Me dijeron que sonriera más, y yo sonreí cuando se fueron.",
  "Dicen que nadie es indispensable, y tienen razón, por eso ya te borré.",
  "Quisiera ser buena persona un día entero, pero siempre aparece alguien que lo arruina antes del mediodía.",
  "Me enseñaron a tender la mano, no me dijeron que tanta gente la iba a morder.",
  "Me pidieron que fuera más humilde, lo intenté pero me quedé sin ganas a mitad de camino.",
  "Dicen que la honestidad abre puertas, las mías las cerró de golpe y con seguro.",
  "Quisiera ser mala persona por un día, pero me gana la conciencia justo cuando más la necesito callada.",
]

function App() {
  const [indice, setIndice] = useState(0);

  const siguiente  = () => setIndice((i) => i + 1);
  const anterior = () => setIndice((i) => i - 1);



  return (
   <div className='app'>
    <div className='card'>
    <p className='frase'>{frases[indice]}</p>
    <p className='contador'>{indice + 1} de {frases.length}</p>
    <div className='botones'>
    <button className='btn' onClick={anterior} disabled={indice ===0}>Anterior</button>
    <button className='btn btn-sig' onClick={siguiente} disabled={indice === frases.length -1}>Siguiente</button>
    </div>
    </div>
   </div>
  );
}

export default App;
