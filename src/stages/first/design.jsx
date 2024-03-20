import TextBox from "../../components/textbox/textbox";
import Hardware from "../second/Designing/hardware";
import Software from "../second/Designing/software";

export default function Designing(){


    return (
      <g>
        <TextBox
          x={195}
          y={275}
          boxFill='#e96343'
          text='Designing'
          noOfCurves={2}
          width={200}
        />
        <Hardware/>
        <Software/>
      </g>
    )
}