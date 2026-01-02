// Optimized App Loader
(function() {
    'use strict';
    
    // Utility functions
    const utils = {
        ready: function(fn) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', fn);
            } else {
                fn();
            }
        },
        
        getCurrentPage: function() {
            const path = window.location.pathname;
            const page = path.split('/').pop() || 'index.html';
            return page.replace('.html', '');
        },
        
        isActivePage: function(page, currentPage) {
            if (page === 'index' && (currentPage === 'index' || currentPage === '')) {
                return true;
            }
            return currentPage === page;
        }
    };

    // Navigation Component (Optimized)
    const Navigation = {
        currentPage: utils.getCurrentPage(),
        
        getNavLinkClass: function(page) {
            if (utils.isActivePage(page, this.currentPage)) {
                return "text-primary-400 font-medium border-b-2 border-primary-400 pb-1";
            }
            return "text-white/90 hover:text-primary-400 transition-colors duration-300 font-medium hover:border-b-2 hover:border-primary-400 pb-1";
        },

        getMobileNavLinkClass: function(page) {
            if (utils.isActivePage(page, this.currentPage)) {
                return "block text-primary-400 font-medium py-2 px-4 rounded-lg bg-primary-500/20";
            }
            return "block text-white/90 hover:text-primary-400 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/10";
        },

        render: function() {
            return `
                <header class="fixed w-full top-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
                    <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex justify-between items-center py-4">
                            <div class="logo">
                                <h1 class="text-2xl font-display font-bold italic tracking-tight text-white">
                                    <span class="text-primary-400">Koffee</span>
                                    <span class="text-primary-400"> Digital</span>
                                </h1>
                            </div>
                            <ul class="hidden md:flex space-x-8">
                                <li><a href="index.html" class="${this.getNavLinkClass('index')}">Home</a></li>
                                <li><a href="about.html" class="${this.getNavLinkClass('about')}">About</a></li>
                                <li><a href="services.html" class="${this.getNavLinkClass('services')}">Services</a></li>
                                <li><a href="contact.html" class="${this.getNavLinkClass('contact')}">Contact</a></li>
                            </ul>
                            <button id="mobile-menu-button" class="md:hidden text-white/90 hover:text-primary-400 transition-colors duration-300 p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary-400">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
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
        },

        setupMobileMenu: function() {
            const button = document.getElementById('mobile-menu-button');
            const menu = document.getElementById('mobile-menu');
            
            if (button && menu) {
                button.addEventListener('click', () => menu.classList.toggle('hidden'));
                
                document.addEventListener('click', (e) => {
                    if (!button.contains(e.target) && !menu.contains(e.target)) {
                        menu.classList.add('hidden');
                    }
                });
                
                window.addEventListener('resize', () => {
                    if (window.innerWidth >= 768) menu.classList.add('hidden');
                });
            }
        },

        init: function() {
            const container = document.getElementById('navigation');
            if (container) {
                container.innerHTML = this.render();
                this.setupMobileMenu();
            }
        }
    };

    // Footer Component (Optimized)
    const Footer = {
        render: function() {
            return `
                <footer class="bg-slate-950 text-white relative overflow-hidden">
                    <div class="relative z-10">
                        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div class="lg:col-span-1">
                                    <div class="mb-6">
                                        <h3 class="text-2xl font-display font-bold mb-4 text-primary-400">Koffee Digital</h3>
                                        <p class="text-slate-300 leading-relaxed mb-6">
                                            Specialized web development agency dedicated to helping local small businesses and professional services create affordable, professional websites that drive real results.
                                        </p>
                                        <div class="flex flex-wrap gap-2 mb-6">
                                            <span class="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium">🇮🇪 Dublin Based</span>
                                            <span class="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium">💬 Direct Access</span>
                                            <span class="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium">💰 Transparent Pricing</span>
                                        </div>
                                    </div>
                                    <div class="space-y-3">
                                        <div class="flex items-center gap-3">
                                            <span class="text-xl">📧</span>
                                            <a href="mailto:sholesikofoworola@gmail.com" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">
                                                sholesikofoworola@gmail.com
                                            </a>
                                        </div>
                                        <div class="flex items-center gap-3">
                                            <span class="text-xl">📞</span>
                                            <a href="tel:+353894805043" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">
                                                +353 89 480 5043
                                            </a>
                                        </div>
                                        <div class="flex items-center gap-3">
                                            <span class="text-xl">⏰</span>
                                            <span class="text-slate-300">Mon-Fri: 10AM-6PM | Sat: 12PM-8PM</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 class="text-lg font-semibold mb-4 text-white">Our Services</h4>
                                    <ul class="space-y-2">
                                        <li><a href="services.html#small-business-website" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Small Business Website Package</a></li>
                                        <li><a href="services.html#professional-services-website" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Professional Services Website</a></li>
                                        <li><a href="services.html#website-maintenance" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Website Care & Maintenance</a></li>
                                        <li><a href="services.html#local-seo" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Local SEO & Google My Business</a></li>
                                        <li><a href="services.html#website-hosting" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Website Hosting</a></li>
                                        <li><a href="services.html#packages" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Website Packages</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 class="text-lg font-semibold mb-4 text-white">About Us</h4>
                                    <ul class="space-y-2">
                                        <li><a href="about.html" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Why Koffee Digital Exists</a></li>
                                        <li><a href="about.html#small-business-focus" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Supporting Local Small Businesses</a></li>
                                        <li><a href="about.html#expertise" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Our Technical Expertise & Approach</a></li>
                                        <li><a href="about.html#values" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Our Values & Commitment to Small Business Success</a></li>
                                        <li><a href="about.html#team" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Our Development Approach</a></li>
                                        <li><a href="about.html#industries" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Industries We Serve</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 class="text-lg font-semibold mb-4 text-white">Get Started</h4>
                                    <ul class="space-y-2">
                                        <li><a href="contact.html" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Free, No-Pressure Consultation</a></li>
                                        <li><a href="contact.html#contact-form" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Send Us a Message</a></li>
                                        <li><a href="index.html#process" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Our Development Process</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="mt-12 pt-8 border-t border-white/10 text-center">
                                <div class="text-slate-300">
                                    <p>&copy; 2025 Koffee Digital. All rights reserved.</p>
                                    <p class="mt-2 text-slate-400">Helping Dublin small businesses succeed online.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            `;
        },

        init: function() {
            const container = document.getElementById('footer');
            if (container) {
                container.innerHTML = this.render();
            }
        }
    };

    // Initialize components
    utils.ready(function() {
        Navigation.init();
        Footer.init();
    });

})();