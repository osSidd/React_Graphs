import TextBox from "../../components/textbox/textbox";
import PRD from "../second/planning/prd";
import Specs from "../second/planning/specs";

export default function Planning(){
    return (
      <g>
        <TextBox
          x={250}
          y={150}
          boxFill='pink'
          text='Planning'
          noOfCurves={2}
        />
        <PRD/>
        <Specs/>
      </g>
    )
}