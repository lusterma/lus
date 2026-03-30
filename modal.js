(function () {
  var modal = document.getElementById('imageModal');
  var modalImg = document.getElementById('imageModalImg');
  var closeBtn = document.getElementById('imageModalClose');

  if (!modal || !modalImg) {
    return;
  }

  function isOpen() {
    return modal.classList.contains('is-open');
  }

  function openModal(src, alt) {
    modalImg.src = src;
    modalImg.alt = alt || '';
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    modalImg.src = '';
    document.body.style.overflow = '';
  }

  document.addEventListener('click', function (e) {
    var target = e.target;
    if (target.classList.contains('js-image-modal')) {
      e.preventDefault();
      var full = target.getAttribute('data-full') || target.src;
      openModal(full, target.alt || '');
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) {
      closeModal();
    }
  });
})();
