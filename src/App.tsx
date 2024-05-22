// import {Profiler} from 'react'
import {Box} from '@mui/material'
// import Pollution from './pollution'

import Barchart from './components/barchart'

export default function App(){

  function onRender(id, phase, actD, baseD, st, ct){
    console.log(id, phase, actD, baseD, st, ct)
  }

  return (
      <Box>
        {/* <Profiler id='pollution' onRender={onRender}> */}
          {/* <Pollution/> */}
        {/* </Profiler> */}
        <Barchart height={400} width={500}/>
      </Box>
  )
}

// import './App.css'
// import TextBox from './components/textbox/textbox'
// import Designing from './stages/first/design'
// import Manufacturing from './stages/first/manufacture'
// import Planning from './stages/first/planning'
// import Research from './stages/first/research'
// import Sales from './stages/first/sales'
// import Tooltip from './components/tooltip/tooltip'

// export default function App(){
//   return (
//     <>
//       <header>
//         <h1>Dashboard</h1>
//       </header>
//       <main>
//         <h3>A simple timeline mind-map depicting various phases involved in a car manufacturing process</h3>
//         <p>Details of a particular phase appear upon hovering over the phase</p>
//         <svg>
//           <TextBox
//             x={0}
//             y={275}
//             boxFill='#ed1776'
//             text='Project'
//             noOfCurves={5}
//             width={120}
//           />
//           <Research/>
//           <Planning/>
//           <Designing/>
//           <Manufacturing/>
//           <Sales/>
//         </svg>
//         <Tooltip/>
//       </main>
//       <footer>
//         <a href="https://www.lizmotors.com/" target='_blank' rel='noreferrer'>Lizmotors</a> internship assignment 2024 - created by Osama Siddiquee
//       </footer>
//     </>

//   )
// }

