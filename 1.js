// Efek heartbeat pada header (berdegup seperti jantung)
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header h1');
    header.classList.add('heartbeat');
    
    // Tambahkan efek muncul-hilang pada semua gambar
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.classList.add('fade-in-out'); // Menambahkan kelas efek ke setiap gambar
    });
});

// Efek highlight saat section aktif saat di-scroll
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY + window.innerHeight / 2;
        
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // Tambahkan kelas highlight jika bagian ini terlihat di tengah layar
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                section.classList.add('highlight');
            } else {
                section.classList.remove('highlight');
            }
        });
    });
});

// Efek grid cyberpunk di background
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.createElement('canvas');
    canvas.id = 'cyberpunk-grid';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    const w = canvas.width = window.innerWidth;
    const h = canvas.height = window.innerHeight;
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);
    
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);
    
    function matrix() {
        ctx.fillStyle = '#0001';
        ctx.fillRect(0, 0, w, h);
        
        ctx.fillStyle = '#0ff';
        ctx.font = '15pt monospace';
        
        ypos.forEach((y, index) => {
            const text = String.fromCharCode(Math.random() * 128);
            const x = index * 20;
            ctx.fillText(text, x, y);
            
            if (y > 100 + Math.random() * 1e4) ypos[index] = 0;
            else ypos[index] = y + 20;
        });
    }
    
    setInterval(matrix, 50);
    
});
