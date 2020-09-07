import * as React from "react";

const IconSitemap = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-sitemap" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x={3} y={15} width={6} height={6} rx={2} /><rect x={15} y={15} width={6} height={6} rx={2} /><rect x={9} y={3} width={6} height={6} rx={2} /><path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" /><line x1={12} y1={9} x2={12} y2={12} /></svg>;

export default IconSitemap;