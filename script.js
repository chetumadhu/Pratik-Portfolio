// Interactive JavaScript for Pratik Bachhav Portfolio

function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = '<span style="color:#10b981;">✓</span> ' + message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

window.copyEmailAddress = function(e) {
  if (e) e.preventDefault();
  const email = 'bachhavpratik8@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    showToast('Copied bachhavpratik8@gmail.com to clipboard!');
  }).catch(() => {
    showToast('Email: bachhavpratik8@gmail.com');
  });
};

window.toggleNavMenu = function() {
  const projectsSec = document.getElementById('projects');
  if (projectsSec) {
    projectsSec.scrollIntoView({ behavior: 'smooth' });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Smooth link scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
