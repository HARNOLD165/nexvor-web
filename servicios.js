// =========================================
// BASE DE DATOS DE SERVICIOS PARA EL MODAL
// =========================================
const servicesData = {
    'pentesting': {
        badge: 'MOD://01-OFFENSIVE',
        title: 'Pentesting & Ethical Hacking',
        capacidades: [
            'Simulación de amenazas avanzadas persistentes (APT) y actores patrocinados por estados.',
            'Auditoría profunda de API REST/GraphQL y aplicaciones web bajo el marco metodológico OWASP Top 10.',
            'Ejecución de escenarios de red teaming en modalidad de doble ciego (Double-Blind).'
        ],
        entregables: [
            'Informe técnico detallado con calificación de riesgo CVSS v3.1.',
            'Pruebas de Concepto (PoC) para replicación controlada de las vulnerabilidades.',
            'Plan estratégico de remediación priorizado y retes gratuito a los 30 días.'
        ]
    },
    'soc': {
        badge: 'MOD://02-SENTINEL',
        title: 'SOC & Vigilancia 24/7',
        capacidades: [
            'Monitoreo ininterrumpido de telemetría proveniente de firewalls, endpoints y sistemas cloud.',
            'Análisis heurístico y de comportamiento (UEBA) respaldado por machine learning.',
            'Caza de amenazas (Threat Hunting) proactiva en busca de adversarios ocultos.'
        ],
        entregables: [
            'Alertas escaladas en tiempo real para incidentes críticos (SLA < 5 minutos).',
            'Tablero ejecutivo con métricas de postura de seguridad (MTTD y MTTR).',
            'Reportes mensuales de inteligencia de amenazas (Threat Intelligence).'
        ]
    },
    'zerotrust': {
        badge: 'MOD://03-FORTRESS',
        title: 'Arquitectura Zero-Trust',
        capacidades: [
            'Diseño de microsegmentación de red para contener movimientos laterales.',
            'Implementación de autenticación robusta y llaves de hardware FIDO2.',
            'Verificación continua de la postura de los dispositivos antes de conceder acceso.'
        ],
        entregables: [
            'Matriz de control de acceso basada en roles (RBAC) de mínimo privilegio.',
            'Blueprint de arquitectura de red segmentada.',
            'Despliegue de túneles ZTNA (Zero Trust Network Access) reemplazando VPNs heredadas.'
        ]
    },
    'dfir': {
        badge: 'MOD://04-CIRT-ALERT',
        title: 'Respuesta a Incidentes (DFIR)',
        capacidades: [
            'Despliegue inmediato de escuadrón táctico para aislar sistemas comprometidos.',
            'Preservación de memoria volátil y discos para análisis forense digital con cadena de custodia.',
            'Ingeniería inversa de malware y negociación/mitigación de ransomware.'
        ],
        entregables: [
            'Informe de línea de tiempo del ataque (Attack Kill Chain).',
            'Identificación del paciente cero y vectores de compromiso (IoCs).',
            'Reconstrucción de la infraestructura y certificación de ambiente limpio.'
        ]
    },
    'cloud': {
        badge: 'MOD://05-PIPELINE',
        title: 'Protección Cloud & DevSecOps',
        capacidades: [
            'Escaneo de vulnerabilidades integrado directamente en tuberías CI/CD (SAST/DAST).',
            'Hardening de clústeres Kubernetes y entornos serverless (AWS Lambda, Azure Functions).',
            'Auditoría de infraestructura como código (Terraform, CloudFormation).'
        ],
        entregables: [
            'Matriz de remediación de malas configuraciones en la nube (CSPM).',
            'Inventario de secretos expuestos y credenciales hardcodeadas.',
            'Pipelines automatizados con pasarelas de seguridad (Security Gates).'
        ]
    },
    'grc': {
        badge: 'MOD://06-ASSURANCE',
        title: 'Auditoría & Cumplimiento GRC',
        capacidades: [
            'Mapeo exhaustivo de controles técnicos contra marcos normativos exigentes.',
            'Evaluación de riesgos de terceros y cadena de suministro.',
            'Auditoría de privacidad de datos y flujos de información restringida.'
        ],
        entregables: [
            'Scorecard de cumplimiento para ISO 27001, SOC 2, PCI-DSS o ENS.',
            'Políticas de seguridad de la información listas para implementación corporativa.',
            'Plan maestro de tratamiento de riesgos residuales.'
        ]
    }
};

// =========================================
// LÓGICA DE APERTURA Y CIERRE DEL MODAL
// =========================================
let modal, modalBadge, modalTitle, modalCapacidades, modalEntregables;

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar variables solo cuando el DOM esté listo
    modal = document.getElementById('tacticalModal');
    modalBadge = document.getElementById('modalBadge');
    modalTitle = document.getElementById('modalTitle');
    modalCapacidades = document.getElementById('modalCapacidades');
    modalEntregables = document.getElementById('modalEntregables');

    // Cerrar el modal si se hace clic afuera de la tarjeta (en el fondo oscuro)
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
});

// Función global para abrir el modal
window.openModal = function(serviceId) {
    // 1. Obtener los datos del servicio clickeado
    const data = servicesData[serviceId];
    if (!data || !modal) return;

    // 2. Llenar los textos básicos
    modalBadge.textContent = data.badge;
    modalTitle.textContent = data.title;

    // 3. Generar la lista de capacidades (limpiar primero)
    modalCapacidades.innerHTML = '';
    data.capacidades.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        modalCapacidades.appendChild(li);
    });

    // 4. Generar la lista de entregables (limpiar primero)
    modalEntregables.innerHTML = '';
    data.entregables.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        modalEntregables.appendChild(li);
    });

    // 5. Mostrar el modal añadiendo la clase active
    modal.classList.add('active');
};

// Función global para cerrar el modal
window.closeModal = function() {
    if (modal) {
        // Ocultar el modal quitando la clase active
        modal.classList.remove('active');
    }
};

// =========================================
// LÓGICA DEL SELECTOR DE TEMAS
// =========================================
window.setTheme = function(themeName, btnElement) {
    // Cambiar la clase del body
    document.body.className = ''; 
    if (themeName !== 'cyberpunk') {
        document.body.classList.add('theme-' + themeName);
    }

    // Actualizar los botones activos
    const buttons = document.querySelectorAll('.theme-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (btnElement) {
        btnElement.classList.add('active');
    }
};