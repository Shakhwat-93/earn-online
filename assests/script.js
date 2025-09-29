function secretsites() {
      const lastClick = localStorage.getItem("lastClickTime");
      const now = Date.now();

      // 5 মিনিট = 300000 milliseconds
      const fiveMinutes = 9000;

      if (!lastClick || now - lastClick > fiveMinutes) {
        // যদি প্রথমবার হয় বা 5 মিনিটের বেশি হয়ে যায় → ad দেখাও
        localStorage.setItem("lastClickTime", now);
        window.location.href = "https://silkyspite.com/3rPZpv";  
      } else {
        // নাহলে main site এ পাঠাও
        window.location.href = "assests/secret-sites.html";  
      }
    }

    

function notredirectUser() {
      const lastClick = localStorage.getItem("lastClickTime");
      const now = Date.now();

      // 5 মিনিট = 300000 milliseconds
      const fiveMinutes = 9000;

      if (!lastClick || now - lastClick > fiveMinutes) {
        // যদি প্রথমবার হয় বা 5 মিনিটের বেশি হয়ে যায় → ad দেখাও
        localStorage.setItem("lastClickTime", now);
        window.location.href = "https://silkyspite.com/3rPZpv";  
      } else {
        // নাহলে main site এ পাঠাও
        window.location.href = "sites.html";  
      }
    }

// 
    function redirectUser() {
      const lastClick = localStorage.getItem("lastClickTime");
      const now = Date.now();

      // 5 মিনিট = 300000 milliseconds
      const fiveMinutes = 9000;

      if (lastClick || now - lastClick > fiveMinutes) {
        // যদি প্রথমবার হয় বা 5 মিনিটের বেশি হয়ে যায় → ad দেখাও
        localStorage.setItem("lastClickTime", now);
        window.location.href = "https://silkyspite.com/3rPZpv";  
      } else {
        // নাহলে main site এ পাঠাও
        window.location.href = "sites.html";  
      }
    }

//      // helper fallback: if favicon fails, use a small inline SVG placeholder
  function imgFallback(img){
    try{
      img.onerror = null;
      img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><rect rx="14" width="100%" height="100%" fill="#ffffff"/><text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="36" fill="#888">?</text></svg>'
      );
    }catch(e){ /* ignore */ }
  }

  // Popup device selection -> then sort cards by rating desc
  function selectDevice(device){
    // optionally save device in session if needed
    document.getElementById('overlay').style.display = 'none';
    sortByRating();
    // optional: you can use 'device' to filter or show device-specific pros/cons later
    console.log('Device selected:', device);
    // scroll to top of cards smoothly
    setTimeout(()=> document.getElementById('cards').scrollIntoView({behavior:'smooth'}), 80);
  }

  function sortByRating(){
    const container = document.getElementById('cards');
    const cards = Array.from(container.querySelectorAll('.card'));
    cards.sort((a,b) => parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating));
    // re-append in order
    cards.forEach(c => container.appendChild(c));
  }

  // Ensure overlay is shown on load (mandatory until device select)
  window.addEventListener('load', ()=> {
    // show overlay (already visible by default). You could auto-sort by rating hiddenly if you want.
    // if you prefer popup to show only once per session, uncomment session logic below:
    /*
    if(!sessionStorage.getItem('deviceSelected')){
      document.getElementById('overlay').style.display = 'flex';
    } else {
      document.getElementById('overlay').style.display = 'none';
      sortByRating();
    }
    */
  });

    // Ads links
  const adsLinks = [
    "https://otieu.com/4/9943479",
    "https://otieu.com/4/9943477"
  ];

  function redirectWithAds(){
    // প্রথম ads
    window.open(adsLinks[0], "_blank");
    // দ্বিতীয় ads
    setTimeout(()=>{ window.open(adsLinks[1], "_blank"); },1000);
    // popup hide + main content দেখাও
    setTimeout(()=>{
      document.getElementById("devicePopup").style.display="none";
      document.getElementById("mainContent").style.display="grid";
    },2000);
  }