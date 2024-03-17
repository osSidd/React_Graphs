import Rect from './components/textbox/rect'
import Curve from './components/curve'
export default function App(){
  return (
    <div>
      <svg width='100vw' height='100vh' style={{background:'pink'}}>
        {/* <Curve/> */}
        <Rect fill='blue' x={50} y={50}/>
      </svg>
    </div>
  )
}