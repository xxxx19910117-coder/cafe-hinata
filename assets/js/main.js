(function () {
  'use strict';

  document.body.classList.add('js-ready');
  document.body.classList.remove('no-js');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const topLink = document.querySelector('.top-link');

  function closeNav() {
    if (!toggle || !nav) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'メニューを開く');
    nav.querySelectorAll('a').forEach((link) => {
      if (window.innerWidth <= 767) link.setAttribute('tabindex', '-1');
      else link.removeAttribute('tabindex');
    });
  }
  function openNav() {
    if (!toggle || !nav) return;
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'メニューを閉じる');
    nav.querySelectorAll('a').forEach((link) => link.removeAttribute('tabindex'));
  }
  if (toggle && nav) {
    closeNav();
    toggle.addEventListener('click', () => nav.classList.contains('is-open') ? closeNav() : openNav());
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) { closeNav(); toggle.focus(); }
    });
    window.addEventListener('resize', () => { if (window.innerWidth > 767) { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); nav.querySelectorAll('a').forEach((link) => link.removeAttribute('tabindex')); } else if (!nav.classList.contains('is-open')) closeNav(); });
  }

  if (topLink) {
    const updateTopLink = () => topLink.classList.toggle('is-visible', window.scrollY > 400);
    window.addEventListener('scroll', updateTopLink, { passive: true });
    updateTopLink();
    topLink.addEventListener('click', () => { const target = document.getElementById('top'); if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); } });
  }

  const demoButton = document.querySelector('[data-demo-submit]');
  const demoFields = demoButton ? Array.from(document.querySelectorAll('[data-demo-field]')) : [];
  const status = document.querySelector('[data-demo-status]');
  if (demoButton && status) {
    demoButton.disabled = false;
    const showError = (field, message) => {
      const error = document.getElementById(field.id + '-error');
      field.setAttribute('aria-invalid', 'true');
      if (error) { error.textContent = message; field.setAttribute('aria-describedby', error.id); }
    };
    const clearError = (field) => { const error = document.getElementById(field.id + '-error'); field.removeAttribute('aria-invalid'); if (error) error.textContent = ''; field.removeAttribute('aria-describedby'); };
    demoButton.addEventListener('click', () => {
      let firstError = null;
      demoFields.forEach((field) => clearError(field));
      const name = document.getElementById('demo-name');
      const email = document.getElementById('demo-email');
      const type = document.getElementById('demo-type');
      const message = document.getElementById('demo-message');
      const checks = [
        [name, !name.value.trim() || name.value.length > 50, '架空のお名前を入力してください。'],
        [email, !email.value.trim() || !email.validity.valid || email.value.length > 254, 'ダミーのメールアドレスを正しい形式で入力してください。'],
        [type, !type.value, 'お問い合わせ種別を選択してください。'],
        [message, !message.value.trim() || message.value.length > 1000, '架空のお問い合わせ内容を入力してください。']
      ];
      checks.forEach(([field, invalid, text]) => { if (invalid) { showError(field, text); if (!firstError) firstError = field; } });
      if (firstError) { firstError.focus(); status.hidden = true; return; }
      status.textContent = 'デモ動作の確認が完了しました。入力内容は送信・保存されていません。実際のお問い合わせや予約は受け付けていません。';
      status.hidden = false;
      demoFields.forEach((field) => { field.value = ''; clearError(field); });
      status.focus();
    });
  }
}());
