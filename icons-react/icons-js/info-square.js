import * as React from "react";

const IconInfoSquare = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-info-square" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1={12} y1={8} x2={12.01} y2={8} /><rect x={4} y={4} width={16} height={16} rx={2} /><polyline points="11 12 12 12 12 16 13 16" /></svg>;

export default IconInfoSquare;