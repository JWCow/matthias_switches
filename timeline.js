document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.querySelector('.timeline');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineLine = document.querySelector('.timeline-line');
    const timelineProgress = document.querySelector('.timeline-progress');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                updateProgress();
            }
        });
    }, options);

    timelineItems.forEach(item => {
        observer.observe(item);
    });

    function updateProgress() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        const timelineHeight = timeline.offsetHeight;
        const timelineTop = timeline.offsetTop;
        const timelineBottom = timelineTop + timelineHeight;
        
        const progress = Math.max(0, Math.min(1, 
            (scrollTop + windowHeight - timelineTop) / (timelineHeight + windowHeight)
        ));

        timelineProgress.style.height = `${progress * 100}%`;
        timelineProgress.style.opacity = progress;
    }

    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);
}); 