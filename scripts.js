function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  
  // Save preference to localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
}

function showProjectDetail(projectId) {
  // Hide projects grid
  document.getElementById('projects-grid').style.display = 'none';
  
  // Hide all project details
  document.querySelectorAll('.project-detail').forEach(detail => {
    detail.classList.remove('active');
  });
  
  // Show selected project detail
  document.getElementById(`project-${projectId}`).classList.add('active');
}

function showProjectsGrid() {
  // Show projects grid
  document.getElementById('projects-grid').style.display = 'block';
  
  // Hide all project details
  document.querySelectorAll('.project-detail').forEach(detail => {
    detail.classList.remove('active');
  });
}

function copyEmail() {
  const email = 'cordi.cristiano@gmail.com';
  const copyText = document.getElementById('copy-text');
  
  // Copy to clipboard
  navigator.clipboard.writeText(email).then(function() {
    // Change text to "Copied to clipboard"
    copyText.textContent = 'Copied to clipboard!';
    copyText.classList.add('copied');
    copyText.classList.add('show');
    
    // Reset after 2 seconds
    setTimeout(function() {
      copyText.textContent = 'Copy to clipboard';
      copyText.classList.remove('copied');
      copyText.classList.remove('show');
    }, 1000);
  }).catch(function(err) {
    // Fallback for older browsers
    console.error('Could not copy text: ', err);
    alert('Email: ' + email);
  });
}

function showCopyText() {
  const copyText = document.getElementById('copy-text');
  if (!copyText.classList.contains('copied')) {
    copyText.classList.add('show');
  }
}

function hideCopyText() {
  const copyText = document.getElementById('copy-text');
  if (!copyText.classList.contains('copied')) {
    copyText.classList.remove('show');
  }
}

// Tab switching functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
    
    // If switching to projects tab, show the grid view
    if (btn.dataset.tab === 'projects') {
      showProjectsGrid();
    }
  });
});

// Project card click handlers
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const projectId = card.dataset.project;
    showProjectDetail(projectId);
  });
});

// Add poster click handler for full-size viewing
document.addEventListener('DOMContentLoaded', function() {
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'true') {
    document.body.classList.add('dark-mode');
  }

  const posterImage = document.querySelector('.poster-image');
  if (posterImage) {
    posterImage.addEventListener('click', function() {
      window.open(this.src, '_blank');
    });
  }
});