document.addEventListener('DOMContentLoaded', () => {
    
    // 1. LÓGICA DE MOSTRAR / OCULTAR CONTRASEÑA
    const togglePasswordBtn = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePasswordBtn.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        if (type === 'text') {
            togglePasswordBtn.innerHTML = '🙈'; 
            togglePasswordBtn.style.color = 'var(--accent-color)';
        } else {
            togglePasswordBtn.innerHTML = '👁️'; 
            togglePasswordBtn.style.color = 'var(--text-muted)';
        }
    });

    // Pequeño efecto de carga al enviar el formulario
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.querySelector('.btn-submit');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = 'AUTENTICANDO... ⏳';
        setTimeout(() => { btn.innerHTML = originalText; }, 1500);
    });
});

// 2. LÓGICA DEL SELECTOR DE TEMAS
function setTheme(themeName, buttonElement) {
    // Quitar clases anteriores del body
    document.body.classList.remove('theme-corporate', 'theme-redteam');
    
    // Aplicar la nueva clase si no es la predeterminada (cyberpunk)
    if (themeName !== 'cyberpunk') {
        document.body.classList.add('theme-' + themeName);
    }
    
    // Actualizar estados de los botones (quitar el estado activo de todos)
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Poner activo solo el botón clickeado
    buttonElement.classList.add('active');
}





