(function(){
  const paths={
    'layers-3':'<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
    'arrow-right':'<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    'arrow-left':'<path d="M19 12H5"/><path d="m11 18-6-6 6-6"/>',
    'sparkles':'<path d="m12 3-1.5 4.5L6 9l4.5 1.5L12 15l1.5-4.5L18 9l-4.5-1.5L12 3Z"/><path d="m19 14-.8 2.2L16 17l2.2.8L19 20l.8-2.2L22 17l-2.2-.8L19 14Z"/>',
    'presentation':'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
    'file-check-2':'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 15l2 2 5-5"/>',
    'list-checks':'<path d="M3 6h2M3 12h2M3 18h2M8 6h13M8 12h13M8 18h13"/>',
    'brain':'<path d="M9 4.5A3.5 3.5 0 0 0 5.5 8 3 3 0 0 0 6 13.8 3.5 3.5 0 0 0 9 19.5c1.2 0 2.3-.6 3-1.5 0 0 .8 1.5 3 1.5a3.5 3.5 0 0 0 3-5.7 3 3 0 0 0 .5-5.8A3.5 3.5 0 0 0 15 4.5c-1.3 0-2.4.7-3 1.7-.6-1-1.7-1.7-3-1.7Z"/><path d="M12 6v13M8.5 9.5h3M12 13h3.5"/>',
    'gamepad-2':'<rect x="3" y="7" width="18" height="12" rx="4"/><path d="M8 12v4M6 14h4M16 12h.01M18 15h.01"/>',
    'notebook-pen':'<path d="M4 5a2 2 0 0 1 2-2h10v18H6a2 2 0 0 1-2-2Z"/><path d="M16 3v18M8 8h5M8 12h5"/><path d="m15 14 4-4 2 2-4 4-3 1Z"/>',
    'accessibility':'<circle cx="12" cy="4" r="2"/><path d="M5 8h14M12 8v13M8 21l4-6 4 6M8 12l4 2 4-2"/>',
    'message-circle':'<path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.7 9.7 0 0 1-4-.9L3 21l1.8-4.3A8.5 8.5 0 1 1 21 11.5Z"/>',
    'lightbulb':'<path d="M9 18h6M10 22h4M8.5 14.5A6 6 0 1 1 15.5 14c-.9.8-1.5 1.8-1.5 3H10c0-1.2-.6-2.2-1.5-2.5Z"/>',
    'file-text':'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/>',
    'bot':'<rect x="5" y="7" width="14" height="13" rx="3"/><path d="M12 3v4M9 12h.01M15 12h.01M9 16h6"/>',
    'chrome':'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v6M4.5 8.5l7.5 3.5M19.5 8.5 15 16"/>',
    'layout-dashboard':'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    'users':'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    'user-round':'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    'clipboard-check':'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8 13l2 2 5-5"/>',
    'calendar-days':'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
    'panels-top-left':'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
    'folder-open':'<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="m3 12 2-2h16"/>',
    'settings':'<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="m19.4 15 .1.1a2 2 0 0 1-2.8 2.8l-.1-.1a2 2 0 0 0-3.4 1.4V19a2 2 0 0 1-4 0v-.2A2 2 0 0 0 5.8 17l-.1.1a2 2 0 0 1-2.8-2.8L3 14.2A2 2 0 0 0 1.6 11H1.5a2 2 0 0 1 0-4h.2A2 2 0 0 0 3 3.6l-.1-.1A2 2 0 0 1 5.7.7l.1.1A2 2 0 0 0 9.2.0V0a2 2 0 0 1 4 0v.2A2 2 0 0 0 16.6 1l.1-.1a2 2 0 0 1 2.8 2.8l-.1.1A2 2 0 0 0 20.8 7h.2a2 2 0 0 1 0 4h-.2a2 2 0 0 0-1.4 4Z"/>',
    'log-out':'<path d="M10 17l5-5-5-5M15 12H3M21 19V5a2 2 0 0 0-2-2h-6"/>',
    'menu':'<path d="M4 6h16M4 12h16M4 18h16"/>',
    'x':'<path d="m6 6 12 12M18 6 6 18"/>',
    'heart-handshake':'<path d="M20 12c0-4-3-7-7-7-1.8 0-3.4.7-4.6 1.8A6.9 6.9 0 0 0 4 5C1.8 5 0 6.8 0 9c0 3 3 5 5 6.5L12 21l7-5.5c1.1-.8 2-1.9 2-3.5Z" transform="translate(2 -1) scale(.83)"/><path d="m7 13 2-2 3 2 4-4"/>',
    'copy':'<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    'chevron-left':'<path d="m15 18-6-6 6-6"/>',
    'chevron-right':'<path d="m9 18 6-6-6-6"/>',
    'download':'<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>',
    'printer':'<path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6z"/>',
    'eye':'<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>',
    'play':'<path d="m8 5 11 7-11 7V5Z"/>',
    'send':'<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    'volume-2':'<path d="M11 5 6 9H2v6h4l5 4V5ZM15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>',
    'hand':'<path d="M7 11V5a1.5 1.5 0 0 1 3 0v5M10 10V3.5a1.5 1.5 0 0 1 3 0V10M13 10V5a1.5 1.5 0 0 1 3 0v7M16 12V8.5a1.5 1.5 0 0 1 3 0V14c0 5-3 7-7 7h-1c-4 0-6-3-7-6l-1-4a1.5 1.5 0 0 1 2.8-1L7 13"/>'
  };
  function paint(){
    document.querySelectorAll('i.icon').forEach(el=>{
      if(el.dataset.painted==='1') return;
      const cls=[...el.classList].find(c=>c.startsWith('icon-'));
      const key=cls?.slice(5); const content=paths[key]||paths['sparkles'];
      el.outerHTML=`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${content}</svg>`;
    });
  }
  window.paintPlanejaIcons=paint;
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',paint); else paint();
  new MutationObserver(()=>requestAnimationFrame(paint)).observe(document.body,{subtree:true,childList:true});
})();
