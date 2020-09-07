import * as React from "react";

const IconBook = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-book" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><line x1={3} y1={6} x2={3} y2={19} /><line x1={12} y1={6} x2={12} y2={19} /><line x1={21} y1={6} x2={21} y2={19} /></svg>;

export default IconBook;