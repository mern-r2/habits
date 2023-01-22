import './styles/global.css'

import { Habit } from './components/Habit'

function App() {
  return (
    <div>
      <Habit completed={10} />
      <Habit completed={32} />
      <Habit completed={13} />
      <Habit completed={27} />
    </div>
  )
}

export default App
