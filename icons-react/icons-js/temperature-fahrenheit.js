import * as React from "react";

const IconTemperatureFahrenheit = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-temperature-fahrenheit" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx={6} cy={8} r={2} /><line x1={13} y1={12} x2={18} y2={12} /><path d="M20 6h-6a1 1 0 0 0 -1 1v11" /></svg>;

export default IconTemperatureFahrenheit;