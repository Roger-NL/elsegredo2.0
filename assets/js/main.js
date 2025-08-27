// JavaScript Premium - Nível Apple para O Código Secreto do Inglês
// Sistema de Animações e Interações Simplificadas

// Configurações do Hotmart (substitua pelos seus dados reais)
const HOTMART_CONFIG = {
    productId: 'YOUR_PRODUCT_ID',
    checkoutUrl: 'https://pay.hotmart.com/YOUR_CHECKOUT_URL',
    affiliateId: 'YOUR_AFFILIATE_ID'
};

// URLs de checkout por seção (para tracking diferenciado)
const CHECKOUT_URLS = {
    hero: `${HOTMART_CONFIG.checkoutUrl}?src=hero`,
    produto: `${HOTMART_CONFIG.checkoutUrl}?src=produto`,
    'oferta-final': `${HOTMART_CONFIG.checkoutUrl}?src=oferta-final`
};

// Sistema de Animações Premium (Corrigido)
class PremiumAnimations {
    constructor() {
        this.isScrolling = false;
        this.init();
    }

    init() {
        this.setupIntersectionObservers();
        this.setupAdvancedInteractions();
        this.setupSafeParallax();
        this.setupStaggeredAnimations();
    }

    // Observer para animações de entrada elaboradas
    setupIntersectionObservers() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observa elementos para animações
        document.querySelectorAll('.animate-fadeInUp, .animate-fadeInLeft, .animate-fadeInRight').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = this.getInitialTransform(element);
            element.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            observer.observe(element);
        });

        // Observa cards para animações escalonadas
        document.querySelectorAll('.card, .testimonial-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(40px) scale(0.9)';
            card.style.transition = `all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.1}s`;
            observer.observe(card);
        });
    }

    getInitialTransform(element) {
        if (element.classList.contains('animate-fadeInUp')) {
            return 'translateY(24px)';
        } else if (element.classList.contains('animate-fadeInLeft')) {
            return 'translateX(-24px)';
        } else if (element.classList.contains('animate-fadeInRight')) {
            return 'translateX(24px)';
        } else if (element.classList.contains('animate-apple-float')) {
            return 'translateY(0)';
        }
        return 'translateY(24px)';
    }

    animateElement(element) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0) translateX(0)';
        element.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        // Apple-style subtle shine effect
        setTimeout(() => {
            element.classList.add('animate-shimmer');
            setTimeout(() => element.classList.remove('animate-shimmer'), 1000);
        }, 200);
    }

    // Parallax seguro (desabilitado no mobile)
    setupSafeParallax() {
        // Detecta se é mobile
        const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
            // Remove todas as animações de float no mobile
            document.querySelectorAll('.ebook-mockup').forEach(element => {
                element.style.animation = 'none';
                element.style.transform = 'none';
            });
            return;
        }

        const parallaxElements = document.querySelectorAll('.ebook-mockup');
        
        if (parallaxElements.length === 0) return;

        const handleParallax = () => {
            if (this.isScrolling) return;
            
            this.isScrolling = true;
            requestAnimationFrame(() => {
                const scrolled = window.pageYOffset * 0.3; // Reduzido para ser mais sutil
                
                parallaxElements.forEach((element, index) => {
                    const speed = 0.05 + (index * 0.02); // Muito mais sutil
                    const yPos = scrolled * speed;
                    const rotation = Math.sin(scrolled * 0.0005) * 1; // Rotação mínima
                    
                    // Apenas aplica transform se o elemento estiver visível
                    const rect = element.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        element.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
                    }
                });
                
                this.isScrolling = false;
            });
        };

        // Throttle do scroll com delay maior
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // Animações escalonadas
    setupStaggeredAnimations() {
        const staggerGroups = [
            { selector: '#problema .card', delay: 100 },
            { selector: '#bonus .card', delay: 150 },
            { selector: '.testimonial-card', delay: 120 }
        ];

        staggerGroups.forEach(group => {
            const elements = document.querySelectorAll(group.selector);
            elements.forEach((element, index) => {
                const delay = index * group.delay;
                element.style.animationDelay = `${delay}ms`;
            });
        });
    }

    // Micro-interações otimizadas para mobile
    setupAdvancedInteractions() {
        const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        // Efeitos de interação nos botões
        document.querySelectorAll('.btn').forEach(btn => {
            if (isMobile) {
                // Touch events para mobile
                btn.addEventListener('touchstart', () => {
                    btn.style.transform = 'translateY(-1px) scale(0.98)';
                    btn.style.transition = 'all 0.1s ease';
                });

                btn.addEventListener('touchend', () => {
                    btn.style.transform = 'translateY(0) scale(1)';
                    btn.style.transition = 'all 0.2s ease';
                });
            } else {
                // Mouse events para desktop
                btn.addEventListener('mouseenter', () => {
                    btn.style.transform = 'translateY(-3px) scale(1.02)';
                    btn.style.boxShadow = '0 15px 30px rgba(28, 100, 242, 0.3)';
                });

                btn.addEventListener('mouseleave', () => {
                    btn.style.transform = 'translateY(0) scale(1)';
                    btn.style.boxShadow = '';
                });

                btn.addEventListener('mousedown', () => {
                    btn.style.transform = 'translateY(-1px) scale(0.98)';
                });

                btn.addEventListener('mouseup', () => {
                    btn.style.transform = 'translateY(-3px) scale(1.02)';
                });
            }
        });

        // Efeitos nos cards
        document.querySelectorAll('.card').forEach(card => {
            if (isMobile) {
                // Touch feedback mais sutil para mobile
                card.addEventListener('touchstart', () => {
                    card.style.transform = 'translateY(-2px) scale(1.01)';
                    card.style.transition = 'all 0.2s ease';
                });

                card.addEventListener('touchend', () => {
                    card.style.transform = 'translateY(0) scale(1)';
                });
            } else {
                // Hover effects para desktop
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-12px) scale(1.03) rotate(1deg)';
                    card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
                });

                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0) scale(1) rotate(0deg)';
                    card.style.boxShadow = '';
                });
            }
        });

        // Efeitos nos testimoniais
        document.querySelectorAll('.testimonial-card').forEach(testimonial => {
            if (isMobile) {
                testimonial.addEventListener('touchstart', () => {
                    testimonial.style.transform = 'translateY(-2px) scale(1.01)';
                    testimonial.style.transition = 'all 0.2s ease';
                });

                testimonial.addEventListener('touchend', () => {
                    testimonial.style.transform = 'translateY(0) scale(1)';
                });
            } else {
                testimonial.addEventListener('mouseenter', () => {
                    testimonial.style.transform = 'translateY(-10px) scale(1.02)';
                    testimonial.classList.add('animate-shimmer');
                });

                testimonial.addEventListener('mouseleave', () => {
                    testimonial.style.transform = 'translateY(0) scale(1)';
                    testimonial.classList.remove('animate-shimmer');
                });
            }
        });

        // Efeito de foco para inputs
        document.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('focus', () => {
                input.style.transform = isMobile ? 'scale(1.01)' : 'scale(1.02)';
                input.style.boxShadow = '0 0 0 3px rgba(28, 100, 242, 0.1)';
            });

            input.addEventListener('blur', () => {
                input.style.transform = 'scale(1)';
                input.style.boxShadow = '';
            });
        });
    }
}

// Sistema de Performance Premium
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.setupLazyLoading();
        this.setupImageOptimization();
        this.setupScrollOptimization();
        this.monitorPerformance();
    }

    // Lazy loading premium
    setupLazyLoading() {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Otimização de imagens
    setupImageOptimization() {
        // Adiciona loading="lazy" para imagens
        document.querySelectorAll('img').forEach(img => {
            if (!img.loading) {
                img.loading = 'lazy';
            }
        });
    }

    // Otimização de scroll
    setupScrollOptimization() {
        let ticking = false;

        const updateScroll = () => {
            updateScrollProgress();
            trackDeepScroll();
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScroll);
                ticking = true;
            }
        });
    }

    // Monitoramento de performance
    monitorPerformance() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'page_load_time', {
                        event_category: 'performance',
                        value: Math.round(loadTime)
                    });
                }

                console.log(`Page loaded in ${Math.round(loadTime)}ms`);
            }, 0);
        });
    }
}

// Sistema de Tracking Premium
class PremiumTracking {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventTracking();
        this.setupScrollTracking();
        this.setupEngagementTracking();
    }

    // Tracking de eventos premium
    setupEventTracking() {
        // Tracking de cliques em elementos específicos
        document.querySelectorAll('.testimonial-card').forEach(card => {
            card.addEventListener('click', () => {
                this.trackEvent('testimonial_click', 'social_proof');
            });
        });

        document.querySelectorAll('[id^="bonus"]').forEach(bonus => {
            bonus.addEventListener('click', () => {
                this.trackEvent('bonus_click', bonus.id);
            });
        });

        // Tracking de tempo na página
        this.trackTimeOnPage();
    }

    // Tracking de scroll premium
    setupScrollTracking() {
        let scrollDepth = 0;
        const scrollThresholds = [25, 50, 75, 90];

        window.addEventListener('scroll', () => {
            const scrollPercent = this.getScrollPercentage();
            
            scrollThresholds.forEach(threshold => {
                if (scrollPercent >= threshold && scrollDepth < threshold) {
                    scrollDepth = threshold;
                    this.trackEvent('scroll_depth', `${threshold}%`);
                }
            });
        });
    }

    // Tracking de engajamento
    setupEngagementTracking() {
        // Detectar tentativa de saída
        document.addEventListener('mouseleave', (e) => {
            if (e.clientY <= 0) {
                this.trackEvent('exit_intent', 'mouse_leave');
            }
        });

        // Tracking de foco na página
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.trackEvent('page_hidden', 'visibility_change');
            } else {
                this.trackEvent('page_visible', 'visibility_change');
            }
        });
    }

    // Funções auxiliares
    getScrollPercentage() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        return (winScroll / height) * 100;
    }

    trackEvent(eventName, eventLabel) {
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                event_category: 'engagement',
                event_label: eventLabel
            });
        }

        console.log(`Event tracked: ${eventName} - ${eventLabel}`);
    }

    trackTimeOnPage() {
        const startTime = Date.now();
        
        window.addEventListener('beforeunload', () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000);
            this.trackEvent('time_on_page', timeSpent.toString());
        });
    }
}

// Função para reproduzir vídeo
function playVideo() {
    // Aqui você pode adicionar a lógica para abrir um modal com vídeo
    // ou redirecionar para uma página de vídeo
    alert('Aqui você colocaria o link do seu vídeo de apresentação!');
    
    // Tracking do clique no vídeo
    if (typeof gtag !== 'undefined') {
        gtag('event', 'video_play', {
            event_category: 'engagement',
            event_label: 'presentation_video'
        });
    }
}

// Sistema de Navegação entre Seções
function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const headerHeight = 60; // Altura do header
        const elementPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
        
        // Track navigation event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'section_navigation', {
                event_category: 'engagement',
                event_label: targetId
            });
        }
    }
}

// Função de navegação inteligente por botão
function navigateBySection(currentSection) {
    const sectionMap = {
        'hero': 'method-overview',
        'method-overview': 'pilares', 
        'pilares': 'problema-escolas',
        'problema-escolas': 'conteudo-detalhado',
        'conteudo-detalhado': 'beneficios-especificos',
        'beneficios-especificos': 'depoimentos',
        'depoimentos': 'faq',
        'faq': 'how-it-works',
        'how-it-works': 'guarantee',
        'guarantee': 'contato-section',
        'contato-section': 'oferta-final',
        'oferta-final': 'checkout' // Último botão vai para checkout
    };
    
    const nextSection = sectionMap[currentSection];
    
    if (nextSection === 'checkout') {
        // Último botão - vai para Hotmart
        goToCheckout('final');
    } else if (nextSection) {
        // Navega para próxima seção
        scrollToSection(nextSection);
    }
}

// Função principal para checkout
function goToCheckout(source = 'default') {
    // Produto: O Segredo do Inglês Completo
    let productType = 'curso_completo';
    let price = 97.00;
    
    // Track evento para compra
    if (typeof gtag !== 'undefined') {
        gtag('event', 'begin_checkout', {
            event_category: 'ecommerce',
            event_label: source,
            value: price,
            currency: 'BRL'
        });
    }
    
    // Track evento no Hotmart (se disponível)
    if (typeof hotmart !== 'undefined') {
        hotmart('track', 'checkout_click', {
            source: source,
            product_id: 'SEGREDO_INGLES_COMPLETO'
        });
    }
    
    console.log('Checkout O Segredo do Inglês iniciado - Fonte:', source);
    
    // URL do Hotmart (SUBSTITUA PELA SUA URL REAL)
    const hotmartUrl = 'https://pay.hotmart.com/YOUR_CHECKOUT_URL';
    
    // Adiciona loading state premium ao botão clicado
    if (typeof event !== 'undefined' && event.target) {
        const button = event.target;
        const originalText = button.innerHTML;
        button.innerHTML = '<span class="spinner"></span> Redirecionando...';
        button.classList.add('loading');
        
        // Simula redirecionamento (remova o alert quando tiver a URL real)
        setTimeout(() => {
            alert(`Redirecionando para checkout do Segredo do Inglês (R$ ${price.toFixed(2).replace('.', ',')})...\n\nFonte: ${source}\n\nSubstitua pela URL real do Hotmart!`);
            // window.open(hotmartUrl, '_blank'); // Descomente quando tiver a URL real
            
            // Restaura o botão
            button.innerHTML = originalText;
            button.classList.remove('loading');
        }, 1500);
    } else {
        // Fallback se não houver botão
        alert(`Redirecionando para checkout do Segredo do Inglês (R$ ${price.toFixed(2).replace('.', ',')})...\n\nSubstitua pela URL real do Hotmart!`);
        // window.open(hotmartUrl, '_blank');
    }
}

// Scroll Progress Indicator Premium
function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    let progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = scrolled + '%';
}

// Tracking de scroll profundo (90% da página)
let deepScrollTracked = false;
function trackDeepScroll() {
    if (deepScrollTracked) return;
    
    const scrollPercent = ((document.documentElement.scrollTop + document.body.scrollTop) / 
                          (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
    
    if (scrollPercent >= 90) {
        deepScrollTracked = true;
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'scroll_90_percent', {
                event_category: 'engagement',
                event_label: 'deep_scroll'
            });
        }
        
        console.log('90% scroll tracked');
    }
}

// Smooth scroll para links internos
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'scroll_to_section', {
                        event_category: 'engagement',
                        event_label: this.getAttribute('href')
                    });
                }
            }
        });
    });
}

// Função removida - contador não implementado na página

// Validação de formulários premium
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submit', {
                    event_category: 'engagement',
                    event_label: form.id || 'unknown_form'
                });
            }
        });
    });
}

// Funções de utilidade premium
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Header que desaparece ao rolar
let lastScrollTop = 0;
let header;

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log('O Código Secreto do Inglês - Site Premium carregado');
    
    // Inicializa header minimal
    initHeaderBehavior();
    
    // Inicializa sistemas premium corrigidos
    new PremiumAnimations();
    new PerformanceOptimizer();
    new PremiumTracking();
    
    // Inicializa funcionalidades básicas
    initSmoothScroll();
    initFormValidation();
    initModulesInteraction();
    
    // Track page view
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href
        });
    }
});

// Função para controlar o comportamento do header
function initHeaderBehavior() {
    header = document.getElementById('header');
    if (!header) return;
    
    // Event listener para scroll
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Rolando para baixo - esconder header
            header.classList.add('header-hidden');
        } else {
            // Rolando para cima - mostrar header
            header.classList.remove('header-hidden');
        }
        
        lastScrollTop = scrollTop;
    });
}

// Função para abrir WhatsApp diretamente com mensagem automática
function openWhatsAppDirect() {
    // Mensagem automática pré-definida
    const message = `Olá! Quero receber mais informações sobre o método secreto do inglês. Pode me ajudar?`;
    
    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Número do WhatsApp (substitua pelo seu número real)
    const whatsappNumber = '5511999999999'; // Exemplo: 11 99999-9999
    
    // Criar link do WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Tracking do evento
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_direct_click', {
            event_category: 'engagement',
            event_label: 'hero_whatsapp_direct'
        });
    }
    
    // Feedback visual
    const button = event.target.closest('button');
    if (button) {
        const originalText = button.innerHTML;
        button.innerHTML = '<span class="text-3xl">✅</span> WhatsApp Aberto!';
        button.classList.add('bg-green-600');
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('bg-green-600');
        }, 3000);
    }
}

// Event listeners para scroll otimizados
window.addEventListener('scroll', debounce(() => {
    updateScrollProgress();
    trackDeepScroll();
}, 100));

// Fallback para checkout caso haja erro
window.addEventListener('error', (e) => {
    console.error('Erro detectado:', e);
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'javascript_error', {
            event_category: 'error',
            event_label: e.message
        });
    }
});

// Módulos simple interaction
function initModulesInteraction() {
    const moduleItems = document.querySelectorAll('.module-item');
    
    moduleItems.forEach(item => {
        item.addEventListener('click', () => {
            // Add click tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'module_click', {
                    event_category: 'engagement',
                    event_label: item.querySelector('h3').textContent
                });
            }
        });
    });
}

// Expo global para depuração
window.CodigoSecreto = {
    goToCheckout,
    trackEvent: (name, params) => {
        if (typeof gtag !== 'undefined') {
            gtag('event', name, params);
        }
    },
    config: HOTMART_CONFIG,
    animations: PremiumAnimations,
    performance: PerformanceOptimizer,
    tracking: PremiumTracking
};
