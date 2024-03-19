import TextBox from "../../components/textbox/textbox";
import PRD from "../second/planning/prd";
import Specs from "../second/planning/specs";

export default function Planning(){
    return (
      <g>
        <TextBox
          x={195}
          y={150}
          boxFill='#8293ff'
          text='Planning'
          noOfCurves={2}
          width={200}
        />
        <PRD/>
        <Specs/>
      </g>
    )
}