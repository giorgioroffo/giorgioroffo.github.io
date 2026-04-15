/* ============================================================
   Giorgio Roffo Portfolio — main.js
   ============================================================ */

(function () {
  'use strict';

  /* ── Mobile nav toggle ── */
  var toggle = document.getElementById('nav-toggle');
  var menu   = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', menu.classList.contains('open'));
    });

    /* Close when any menu link is clicked */
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Active nav-link highlighting on scroll ── */
  var sections  = document.querySelectorAll('section[id]');
  var navLinks  = document.querySelectorAll('.nav-menu a[href^="#"]');

  function updateActive() {
    var scrollY  = window.scrollY || window.pageYOffset;
    var current  = '';

    sections.forEach(function (sec) {
      if (scrollY >= sec.offsetTop - 80) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === '#' + current
      );
    });
  }

  if (sections.length && navLinks.length) {
    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
  }

  /* ── Avatar fallback (also handled by onerror in HTML) ── */
  var avatar = document.querySelector('.avatar');
  var fb     = document.getElementById('avatar-fb');

  if (avatar && fb) {
    avatar.addEventListener('error', function () {
      avatar.style.display = 'none';
      fb.style.display = 'flex';
    });
  }

}());
