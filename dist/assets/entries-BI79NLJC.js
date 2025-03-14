import{f as c}from"./fetch-CZzGIe3w.js";const l=async()=>{console.log("Moikka, maailma"),console.log("Haetaan paikallisesta tiedostosta");const o=document.getElementById("diary");console.log(o);const n=await c("http://localhost:3000/api/entries");if(n.error){console.log("Tapahtui virhe fetch haussa!!");return}console.log(n),o.innerHTML="",n.forEach(e=>{const t=document.createElement("div");t.classList.add("card");const s=document.createElement("div");s.classList.add("card-img");const a=document.createElement("img");a.src="/img/diary.jpg",a.alt="Diary Image",s.appendChild(a);const r=document.createElement("div");r.classList.add("card-diary"),r.innerHTML=`
      <p><strong>Date:</strong> ${e.entry_date}</p>
      <p><strong>Mood:</strong> ${e.mood}</p>
      <p><strong>Weight:</strong> ${e.weight} kg</p>
      <p><strong>Sleep:</strong> ${e.sleep_hours} hours</p>
      <p><strong>Notes:</strong> ${e.notes}</p>
      <p><strong>Meal:</strong> ${e.meal}</p>

    `,t.appendChild(s),t.appendChild(r),o.appendChild(t)})},g=async o=>{o.preventDefault();const d=document.getElementById("entry_date").value,n=document.getElementById("mood").value,e=document.getElementById("weight").value,t=document.getElementById("sleep_hours").value,s=document.getElementById("meal").value,a=document.getElementById("notes").value,r={entry_date:d,mood:n,weight:e,sleep_hours:t,meal:s,notes:a},i="http://localhost:3000/api/entries",m={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};if((await c(i,m)).error){console.log("Virhe lisättäessä merkintää!");return}document.getElementById("diary-form").reset(),l()};document.querySelector(".get_entries").addEventListener("click",l);document.getElementById("diary-form").addEventListener("submit",g);export{l as g};
