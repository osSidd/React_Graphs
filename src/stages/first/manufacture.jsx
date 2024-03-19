import TextBox from "../../components/textbox/textbox";
import Material from "../second/manufacturing/material";
import Production from "../second/manufacturing/production";

export default function Manufacturing(){
    return (
      <g>
        <TextBox
          x={195}
          y={400}
          boxFill='#4f7c51'
          text='Manufacturing'
          noOfCurves={2}
          width={200}
        />
        <Material/>
        <Production/>
      </g>
    )
}