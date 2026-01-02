// Navigation Component
class Navigation {
    constructor() {
        this.currentPage = this.getCurrentPage();
        this.init();
    }

    getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        return page.replace('.html', '');
    }

    isActivePage(page) {
        if (page === 'index' && (this.currentPage === 'index' || this.currentPage === '')) {
            return true;
        }
        return this.currentPage === page;
    }

    getNavLinkClass(page) {
        if (this.isActivePage(page)) {
            return "text-primary-400 font-medium border-b-2 border-primary-400 pb-1";
        }
        return "text-white/90 hover:text-primary-400 transition-colors duration-300 font-medium hover:border-b-2 hover:border-primary-400 pb-1";
    }

    getMobileNavLinkClass(page) {
        if (this.isActivePage(page)) {
            return "block text-primary-400 font-medium py-2 px-4 rounded-lg bg-primary-500/20";
        }
        return "block text-white/90 hover:text-primary-400 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/10";
    }

    render() {
        return `
            <header class="fixed w-full top-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
                <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center py-4">
                        <!-- Logo -->
                        <div class="logo">
                            <h1 class="text-2xl font-display font-bold italic tracking-tight text-white">
                                <span class="text-primary-400">Koffee</span>
                                <span class="text-primary-400"> Digital</span>
                            </h1>
                        </div>

                        <!-- Desktop Navigation -->
                        <ul class="hidden md:flex space-x-8">
                            <li><a href="index.html" class="${this.getNavLinkClass('index')}">Home</a></li>
                            <li><a href="about.html" class="${this.getNavLinkClass('about')}">About</a></li>
                            <li><a href="services.html" class="${this.getNavLinkClass('services')}">Services</a></li>
                            <li><a href="contact.html" class="${this.getNavLinkClass('contact')}">Contact</a></li>
                        </ul>

                        <!-- Mobile Menu Button -->
                        <button id="mobile-menu-button" class="md:hidden text-white/90 hover:text-primary-400 transition-colors duration-300 p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary-400">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                    
                    <!-- Mobile Navigation Menu -->
                    <div id="mobile-menu" class="md:hidden hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 mt-4 py-4 rounded-lg">
                        <ul class="space-y-4 px-4">
                            <li><a href="index.html" class="${this.getMobileNavLinkClass('index')}">Home</a></li>
                            <li><a href="about.html" class="${this.getMobileNavLinkClass('about')}">About</a></li>
                            <li><a href="services.html" class="${this.getMobileNavLinkClass('services')}">Services</a></li>
                            <li><a href="contact.html" class="${this.getMobileNavLinkClass('contact')}">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        `;
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.mount());
        } else {
            this.mount();
        }
    }

    mount() {
        const navContainer = document.getElementById('navigation');
        if (navContainer) {
            navContainer.innerHTML = this.render();
            this.setupMobileMenu();
        }
    }

    setupMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                    mobileMenu.classList.add('hidden');
                }
            });
            
            // Close mobile menu when window is resized to desktop
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 768) {
                    mobileMenu.classList.add('hidden');
                }
            });
        }
    }
}

// Initialize navigation
new Navigation();