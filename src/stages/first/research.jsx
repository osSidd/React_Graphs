import TextBox from "../../components/textbox/textbox";
import External from "../second/research/external";
import Internal from "../second/research/internal";

export default function Research(){
    return (
      <g>
        <TextBox
          x={250}
          y={25}
          boxFill='steelblue'
          text='Research'
          noOfCurves={2}
        />
        <g>
          <External/>
          <Internal/>
        </g>
      </g>
        
    )
}