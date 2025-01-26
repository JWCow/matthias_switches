class CanvasEffect {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      animationSpeed: options.animationSpeed || 0.4,
      opacities: options.opacities || [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
      colors: options.colors || [[0, 255, 255]],
      dotSize: options.dotSize || 3,
      totalSize: options.totalSize || 4
    };

    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.container.appendChild(this.canvas);
    
    this.resize();
    this.setupEventListeners();
    this.animate();
  }

  resize() {
    const rect = this.container.getBoundingClientRect();
    this.canvas.width = rect.width * window.devicePixelRatio;
    this.canvas.height = rect.height * window.devicePixelRatio;
    this.canvas.style.width = `${rect.width}px`;
    this.canvas.style.height = `${rect.height}px`;
  }

  setupEventListeners() {
    window.addEventListener('resize', () => this.resize());
  }

  drawDot(x, y, color, opacity) {
    this.ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`;
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.options.dotSize, 0, Math.PI * 2);
    this.ctx.fill();
  }

  animate() {
    const timestamp = performance.now() / 1000;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const cols = Math.ceil(this.canvas.width / (this.options.totalSize * this.options.dotSize));
    const rows = Math.ceil(this.canvas.height / (this.options.totalSize * this.options.dotSize));

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * this.options.totalSize * this.options.dotSize;
        const y = j * this.options.totalSize * this.options.dotSize;
        
        const distance = Math.sqrt(
          Math.pow(x - this.canvas.width / 2, 2) + 
          Math.pow(y - this.canvas.height / 2, 2)
        );
        
        const introOffset = (distance * 0.01) + (Math.random() * 0.15);
        const opacity = this.options.opacities[Math.floor(Math.random() * this.options.opacities.length)];
        const color = this.options.colors[Math.floor(Math.random() * this.options.colors.length)];
        
        if (timestamp * this.options.animationSpeed > introOffset) {
          this.drawDot(x, y, color, opacity);
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize the effect
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.canvas-effect-container');
  if (container) {
    new CanvasEffect(container, {
      animationSpeed: 5,
      colors: [[245, 5, 55], [245, 5, 55]],
      opacities: [1, 0.8, 1, 0.8, 0.5, 0.8, 1, 0.5, 1, 3],
      dotSize: 2
    });
  }
}); 