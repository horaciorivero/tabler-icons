import * as React from "react";

const IconZoomIn = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-zoom-in" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx={10} cy={10} r={7} /><line x1={7} y1={10} x2={13} y2={10} /><line x1={10} y1={7} x2={10} y2={13} /><line x1={21} y1={21} x2={15} y2={15} /></svg>;

export default IconZoomIn;