(function(){
const el=document.querySelector('#right-now-text'); if(!el)return;
const now=new Date(); const tripStart=new Date('2026-09-18T00:00:00-07:00'); const move=new Date('2026-09-20T11:30:00-07:00'); const tripEnd=new Date('2026-09-23T23:59:00-07:00');
const d=Math.ceil((tripStart-now)/86400000);
if(now<tripStart){el.textContent=d+' day'+(d===1?'':'s')+' until California';}
else if(now.toDateString()===move.toDateString() && now<move){el.textContent="Today's the day — Allison moves into OSO Tower at 11:30 AM";}
else if(now>=move && now<new Date('2026-09-20T20:00:00-07:00')){el.textContent='Move-in day at UC Irvine — welcome home, Allison!';}
else if(now>=new Date('2026-09-21T00:00:00-07:00') && now<new Date('2026-09-22T00:00:00-07:00')){el.textContent="🎂 Happy Birthday, Will! Celebrating in California.";}
else if(now<=tripEnd){const names=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];el.textContent=names[now.getDay()]+' in California';}
else{el.textContent='A new chapter at UC Irvine';}
})();
