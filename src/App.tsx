import './App.css'
import { useRandomColor } from './hooks/useRandomColor'
import { useQuery } from './hooks/useQuery'
import  Axios  from 'axios'

export default function App() {
  const  { color, changeColor }  = useRandomColor()
  const { response } = useQuery(Axios.get("https://foodish-api.herokuapp.com/api/"))
  return (
    <main style={{ width: "100vw", height: "100vh", backgroundColor: "#" + color }}>
      <button
        onClick={() => alert(response)}
        > 
        Color
      </button>

    </main>
  )
} 