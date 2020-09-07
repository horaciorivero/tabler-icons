import * as React from "react";

const IconArrowsHorizontal = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-arrows-horizontal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="7 8 3 12 7 16" /><polyline points="17 8 21 12 17 16" /><line x1={3} y1={12} x2={21} y2={12} /></svg>;

export default IconArrowsHorizontal;