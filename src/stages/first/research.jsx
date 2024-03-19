import TextBox from "../../components/textbox/textbox";
import External from "../second/research/external";
import Internal from "../second/research/internal";

export default function Research(){
    return (
      <g>
        <TextBox
          x={195}
          y={25}
          boxFill='#2a4494'
          text='Research'
          noOfCurves={2}
          width={200}
        />
        <g>
          <External/>
          <Internal/>
        </g>
      </g>
        
    )
}