import * as React from "react";

const IconTable = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-table" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x={4} y={4} width={16} height={16} rx={2} /><line x1={4} y1={10} x2={20} y2={10} /><line x1={10} y1={4} x2={10} y2={20} /></svg>;

export default IconTable;