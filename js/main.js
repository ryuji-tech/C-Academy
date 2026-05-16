document.querySelector('#submit-btn').addEventListener('click', function(e) {
  e.preventDefault();

  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    cursor: pointer;
  `;

  const img = document.createElement('img');
  img.src = 'img/justify-content-center.png';
  img.style.cssText = `
    max-width: 80%;
    max-height: 80%;
  `;

  overlay.appendChild(img);
  document.body.appendChild(overlay);

  overlay.addEventListener('click', function() {
    document.body.removeChild(overlay);
  });
});