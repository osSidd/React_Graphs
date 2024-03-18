import TextBox from "../../components/textbox/textbox";
import Hardware from "../second/Designing/hardware";
import Software from "../second/Designing/software";

export default function Designing(){
    return (
      <g>
        <TextBox
          x={250}
          y={275}
          boxFill='teal'
          text='Designing'
          noOfCurves={2}
        />
        <Hardware/>
        <Software/>
      </g>
    )
}