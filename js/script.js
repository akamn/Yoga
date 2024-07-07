// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Example of an interactive feature: a simple modal
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <p>Welcome to our Academy! Start your journey today.</p>
    </div>
  `;
  document.body.appendChild(modal);
  
  const openModal = document.querySelector('button');
  const closeModal = document.querySelector('.close-button');
  
  openModal.addEventListener('click', () => {
    modal.style.display = 'block';
  });
  
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  });

