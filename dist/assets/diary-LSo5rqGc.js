import"./modulepreload-polyfill-B5Qt9EMX.js";import{f as r}from"./fetch-DBomrZ5j.js";const d=async()=>{console.log("Moikka, maailma"),console.log("Haetaan paikallisesta tiedostosta");const t=document.getElementById("diary");console.log(t);const o=await r("http://localhost:3000/api/auth/entries");if(o.error){console.log("Tapahtui virhe fetch haussa!!");return}console.log(o),t.innerHTML="",o.forEach(e=>{const n=document.createElement("div");n.classList.add("card");const s=document.createElement("div");s.classList.add("card-diary"),s.innerHTML=`
      <p><strong>Date:</strong> ${e.entry_date}</p>
      <p><strong>Mood:</strong> ${e.mood}</p>
      <p><strong>Weight:</strong> ${e.weight} kg</p>
      <p><strong>Sleep:</strong> ${e.sleep_hours} hours</p>
      <p><strong>Notes:</strong> ${e.notes}</p>
      <p><strong>Meal:</strong> ${e.meal}</p>

    `,n.appendChild(s),t.appendChild(n)})},p=async t=>{t.preventDefault();const a=document.getElementById("entry_date").value,o=document.getElementById("mood").value,e=document.getElementById("weight").value,n=document.getElementById("sleep_hours").value,s=document.getElementById("meal").value,l=document.getElementById("notes").value,c={entry_date:a,mood:o,weight:e,sleep_hours:n,meal:s,notes:l},i="http://localhost:3000/api/auth/entries",m={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)};if((await r(i,m)).error){console.log("Virhe lisättäessä merkintää!");return}document.getElementById("diary-form").reset(),d()};document.querySelector(".get_entries").addEventListener("click",d);document.getElementById("diary-form").addEventListener("submit",p);
