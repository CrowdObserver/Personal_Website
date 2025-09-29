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