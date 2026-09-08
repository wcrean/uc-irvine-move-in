(function(){
 const el=document.getElementById('right-now-text'); if(!el) return;
 const now=new Date();
 const start=new Date('2026-09-18T00:00:00-04:00');
 const end=new Date('2026-09-24T00:00:00-04:00');
 const moveInStart=new Date('2026-09-20T00:00:00-07:00');
 const moveInTime=new Date('2026-09-20T11:30:00-07:00');
 const birthdayStart=new Date('2026-09-21T00:00:00-07:00');
 const birthdayEnd=new Date('2026-09-22T00:00:00-07:00');
 if(now < start){const days=Math.ceil((start-now)/86400000);el.textContent=`${days} day${days===1?'':'s'} until California ☀️`;return;}
 if(now>=moveInStart && now<birthdayStart){if(now<moveInTime){el.textContent="Today's the day — Allison moves into Oso Tower at 11:30 AM!"}else{el.textContent="Move-in day at UC Irvine — welcome home, Allison!"}return;}
 if(now>=birthdayStart && now<birthdayEnd){el.textContent="🎂 Happy Birthday, Will! Celebrating in California.";return;}
 if(now>=start && now<end){const names=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];el.textContent=`${names[now.getDay()]} in California — see today's Daily Plans.`;return;}
 el.textContent='What a week — Allison is officially at UC Irvine. 💙💛';
})();
