(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  document.querySelectorAll('details.lang-dd').forEach(function (details) {
    var summary = details.querySelector('summary');
    var menu = details.querySelector('.lang-menu');
    if (!summary || !menu) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'lang-btn';
    btn.setAttribute('aria-label', summary.getAttribute('aria-label') || 'Idioma');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = summary.innerHTML;
    var wrap = document.createElement('div');
    wrap.className = 'lang-dd';
    wrap.appendChild(btn);
    wrap.appendChild(menu);
    details.replaceWith(wrap);
    btn.addEventListener('click', function (event) {
      event.stopPropagation();
      var open = wrap.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open && nav) nav.classList.remove('open');
      if (open && toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  });
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.querySelectorAll('.lang-dd.open').forEach(function (box) {
        box.classList.remove('open');
        var btn = box.querySelector('.lang-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    });
  }
  document.addEventListener('click', function () {
    document.querySelectorAll('.lang-dd.open').forEach(function (box) {
      box.classList.remove('open');
      var btn = box.querySelector('.lang-btn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Visitas y clics en Llamar / WhatsApp. El script solo mide si Analytics está activado en Vercel.
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
  var insights = document.createElement('script');
  insights.defer = true;
  insights.src = '/_vercel/insights/script.js';
  document.head.appendChild(insights);

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a');
    if (!link) return;
    var href = link.getAttribute('href') || '';
    var name = href.indexOf('tel:') === 0 ? 'call_click' : (href.indexOf('wa.me') !== -1 ? 'whatsapp_click' : '');
    if (!name) return;
    window.va('event', {
      name: name,
      data: { path: location.pathname }
    });
  });
})();
