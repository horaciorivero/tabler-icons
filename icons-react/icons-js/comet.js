import * as React from "react";

const IconComet = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-comet" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15.5 18.5l-3 1.5l.5-3.5-2-2 3-.5 1.5-3 1.5 3 3 .5-2 2 .5 3.5z" /><line x1={4} y1={4} x2={11} y2={11} /><line x1={9} y1={4} x2={12.5} y2={7.5} /><line x1={4} y1={9} x2={7.5} y2={12.5} /></svg>;

export default IconComet;