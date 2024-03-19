import TextBox from "../../components/textbox/textbox";
import Dealership from "../second/sales/dealership";
import Online from "../second/sales/online";

export default function Sales(){
    return (
      <g>
        <TextBox
          x={195}
          y={525}
          boxFill='purple'
          text='Sales/Marketing'
          noOfCurves={2}
          width={200}
        />
        <Online/>
        <Dealership/>
      </g>
    )
}