import TextBox from '../../../components/textbox/textbox'

export default function Health(){
    return(
        <TextBox
          x={870}
          y={65}
          boxFill='#2a4494'
          text='Research.External.B2C.Health'
          noOfCurves={0}
          curveYEnd={100}
          width={150}
        />
    )
}