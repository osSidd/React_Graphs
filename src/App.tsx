import './App.css'
import TextBox from './components/textbox/textbox'
import Designing from './stages/design'
import Manufacturing from './stages/manufacture'
import Planning from './stages/planning'
// import Curve from './components/curve'
export default function App(){
  return (
    <div>
      <h1>Dashboard</h1>
      <svg>
        {/* <Curve/> */}
        <TextBox
          x={0}
          y={275}
          boxFill='brown'
          text='Product'
          noOfCurves={5}
        />
        <Planning/>
        <Manufacturing/>
        <Designing/>
      </svg>
    </div>
  )
}