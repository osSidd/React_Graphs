import TextBox from "../../components/textbox/textbox";
import Material from "../second/manufacturing/material";
import Production from "../second/manufacturing/production";

export default function Manufacturing(){
    return (
      <g>
        <TextBox
          x={250}
          y={400}
          boxFill='burlywood'
          text='Manufacturing'
          noOfCurves={2}
        />
        <Material/>
        <Production/>
      </g>
    )
}