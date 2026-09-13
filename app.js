(() => {
  const el = document.getElementById('right-now-text');
  const detail = document.getElementById('right-now-detail');
  if (!el) return;
  const now = new Date();
  const laParts = new Intl.DateTimeFormat('en-US',{timeZone:'America/Los_Angeles',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(now);
  const p = Object.fromEntries(laParts.map(x=>[x.type,x.value]));
  const date = `${p.year}-${p.month}-${p.day}`;
  const tripStart = new Date('2026-09-18T00:00:00-07:00');
  const todayLA = new Date(`${date}T00:00:00-07:00`);
  const diff = Math.ceil((tripStart - todayLA)/(1000*60*60*24));
  const days = {
    '2026-09-18':['California day! ☀️','Arrive SNA 12:31 PM • Avis pickup 1:00 PM • Hyatt check-in 4:00 PM'],
    '2026-09-19':['LA + SMU day 🏈','Will at LAX 9:35 AM • SMU at Louisville 12:30 PM PT • Harmons in Northridge'],
    '2026-09-20':['Move-In Day! 📦','Mesa Court check-in 11:30 AM–12:00 PM • QR code ready • then Oso Tower'],
    '2026-09-21':['Happy Birthday, Will! 🎂','Kathleen joins us • birthday dinner'],
    '2026-09-22':['Will heads home ✈️','Drive to LAX • AA 382 departs 3:00 PM'],
    '2026-09-23':['Homeward bound ✈️','Avis return 11:30 AM • SNA flight 12:34 PM']
  };
  if(days[date]){el.textContent=days[date][0]; if(detail) detail.textContent=days[date][1]; return;}
  if(diff>1){el.textContent=`${diff} days until California`; if(detail) detail.textContent='Newport Beach, UC Irvine and move-in are getting close.';}
  else if(diff===1){el.textContent='California tomorrow!'; if(detail) detail.textContent='Final check: flights, QR code, weather and packing.';}
  else if(date>'2026-09-23'){el.textContent='What a trip 💙💛'; if(detail) detail.textContent='Allison is officially at UC Irvine.';}
})();
