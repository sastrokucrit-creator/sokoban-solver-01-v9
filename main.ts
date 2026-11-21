import fs from'node:fs';
const{MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env;
for(const d of fs.readdirSync(I)){
let t=fs.readFileSync(I+'/'+d+'/level.txt'),w=t.indexOf(10)+1,D=[-w,w,-1,1],g=[],b=[],p=0;
t.forEach((c,i)=>{if(c==42|c==43|c==46)g.push(i);if(c%6==0)b.push(i);if(c%21==1)p=i});
let s='',J=x=>x%w/7|0|(x/w/8|0)*2;
for(const e of new Set(b.map(J))){
let E=x=>J(x)==e,w2=t.map(c=>c%25==10),B=b.filter(x=>E(x)||(w2[x]=1,0)),G=g.filter(E),o=p,r=[],m;
const F=(f,c)=>{r=[],r[f]=' ',m=f;const R=v=>{if(v<m)m=v;for(let j=4;j--;){let z=v+D[j];if(!w2[z]&&!c.includes(z)&&!r[z]){r[z]=r[v]+'udlr'[j];R(z)}}};R(f)};
let Q=[[B,p,'']],M={};
H:for(let h=0;Q[h]&&h<25e4;h++){
let[c,P,V]=Q[h];
for(const x of c)for(let k=4;k--;){
let u=x-D[k],y=2*x-u;
if(w2[y]|c.includes(y))continue;
F(P,c);if(!r[u])continue;
let W=r[u],N=c.map(z=>z-x?z:y).sort((a,b)=>a-b);
F(x,N);let K=N+';'+m;
if(M[K])continue;
if(N==''+G){s+=V+W+'udlr'[k];p=x;break H}
M[K]=Q.push([N,x,V+W+'udlr'[k]]);
}}
if(p==o)break;
b=b.filter(x=>!E(x)).concat(G);
}
let q=O+'/'+d;fs.mkdirSync(q,{recursive:!0});fs.writeFileSync(q+'/solution.txt',s);
}