import TextBox from '../../../components/textbox/textbox'
import B2B from '../../third/research.external/b2b'
import B2C from '../../third/research.external/b2c'

export default function External(){
    return(
      <g>
        <TextBox
          x={470}
          y={-5}
          boxFill='#2a4494'
          text='Research.External'
          noOfCurves={2}
          width={150}
        />
        <B2B/>
        <B2C/>
      </g>
    )
}