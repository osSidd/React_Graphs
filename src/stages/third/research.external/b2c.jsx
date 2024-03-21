import TextBox from '../../../components/textbox/textbox'
import Health from '../../fourth/res.ext.b2c/health'
import Interview from '../../fourth/res.ext.b2c/interview'
import Online from '../../fourth/res.ext.b2c/online'
import Public from '../../fourth/res.ext.b2c/public'

export default function B2C(){
    return(
      <g>
        <TextBox
          x={695}
          y={-35}
          boxFill='#2a4494'
          text='Research.External.B2C'
          noOfCurves={4}
          curveYEnd={100}
          width={100}
        />
        <Online/>
        <Interview/>
        <Public/>
        <Health/>
      </g>
    )
}