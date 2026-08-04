/* Injects the shared top nav across all standalone connection-demo pages.
   Current page is marked via <body data-page="profile"> etc. */
(function(){
  const PAGES=[
    {id:'profile',   label:'Profile',   file:'profile.html'},
    {id:'media',     label:'Media',     file:'media-feed.html'},
    {id:'events',    label:'Events',    file:'events.html'},
    {id:'social',    label:'Social',    file:'social.html'},
    {id:'store',     label:'Store',     file:'store.html'},
    {id:'ads',       label:'Ads',       file:'ads.html'},
    {id:'streaming', label:'Streaming', file:'streaming.html'},
  ];
  const current=document.body.dataset.page;
  const nav=document.createElement('div');
  nav.className='ahw-nav';
  nav.innerHTML=
    '<a class="back" href="../roadmap.html">&larr; Deck</a>'+
    '<span class="brand"><b>AHW</b>Super &middot; Connected Demos</span>'+
    '<div class="links">'+
      PAGES.map(p=>`<a href="${p.file}"${p.id===current?' class="on"':''}>${p.label}</a>`).join('')+
    '</div>';
  document.body.insertBefore(nav,document.body.firstChild);
})();
