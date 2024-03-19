import TextBox from '../../../components/textbox/textbox'

export default function Public(){
    return(
        <TextBox
          x={870}
          y={15}
          boxFill='#2a4494'
          text='Public Data'
          noOfCurves={0}
          curveYEnd={100}
          width={150}
        />
    )
}