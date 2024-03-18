import './App.css'
import TextBox from './components/textbox/textbox'
import Designing from './stages/first/design'
import Manufacturing from './stages/first/manufacture'
import Planning from './stages/first/planning'
import Research from './stages/first/research'
import Sales from './stages/first/sales'

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
        <Research/>
        <Planning/>
        <Designing/>
        <Manufacturing/>
        <Sales/>
      </svg>
    </div>
  )
}