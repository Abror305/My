    const toggleBtn = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    toggleBtn.addEventListener('click', () => {
      htmlEl.classList.toggle('dark');
      localStorage.setItem('theme', htmlEl.classList.contains('dark') ? 'dark' : 'light');
    });

    // Set default to dark mode
    if (localStorage.getItem('theme') === 'light') {
      htmlEl.classList.remove('dark');
    } else {
      htmlEl.classList.add('dark');
    }