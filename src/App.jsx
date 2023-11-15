import { estudiantes } from "./components/config/dataBase"
import ListadoEstudiantes from "./components/layouts/ListadoEstudiantes"
// function nuevafuncion(valorUno, valorDos){
//   console.log(valorUno+valorDos)
// }

function App() {
  // nuevafuncion(1,2)
  return (
    <section>
      <ListadoEstudiantes estudiantes={estudiantes} />
    </section>
  )
}

export default App