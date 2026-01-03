// Footer Component
class Footer {
    constructor() {
        this.init();
    }

    render() {
        return `
            <footer class="bg-slate-950 text-white relative overflow-hidden">
                <div class="relative z-10">
                    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <!-- Company Info -->
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

                            <!-- Services -->
                            <div>
                                <h4 class="text-lg font-semibold mb-4 text-white">Our Services</h4>
                                <ul class="space-y-2">
                                    <li><a href="/services/#small-business-website" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Small Business Website Package</a></li>
                                    <li><a href="/services/#professional-services-website" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Professional Services Website</a></li>
                                    <li><a href="/services/#website-maintenance" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Website Care & Maintenance</a></li>
                                    <li><a href="/services/#local-seo" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Local SEO & Google My Business</a></li>
                                    <li><a href="/services/#website-hosting" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Website Hosting</a></li>
                                    <li><a href="/services/#packages" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Website Packages</a></li>
                                </ul>
                            </div>

                            <!-- About -->
                            <div>
                                <h4 class="text-lg font-semibold mb-4 text-white">About Us</h4>
                                <ul class="space-y-2">
                                    <li><a href="/about/" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Why Koffee Digital Exists</a></li>
                                    <li><a href="/about/#small-business-focus" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Supporting Local Small Businesses</a></li>
                                    <li><a href="/about/#expertise" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Our Technical Expertise & Approach</a></li>
                                    <li><a href="/about/#values" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Our Values & Commitment</a></li>
                                    <li><a href="/about/#team" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Our Development Approach</a></li>
                                    <li><a href="/about/#industries" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Industries We Serve</a></li>
                                </ul>
                            </div>

                            <!-- Get Started -->
                            <div>
                                <h4 class="text-lg font-semibold mb-4 text-white">Get Started</h4>
                                <ul class="space-y-2">
                                    <li><a href="/contact/" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Free, No-Pressure Consultation</a></li>
                                    <li><a href="/contact/#contact-form" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Send Us a Message</a></li>
                                    <li><a href="/#process" class="text-slate-300 hover:text-primary-400 transition-colors duration-300">Our Development Process</a></li>
                                </ul>
                            </div>
                        </div>

                        <!-- Newsletter Signup -->
                        <div class="mt-12 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                            <div class="grid md:grid-cols-2 gap-6 items-center">
                                <div>
                                    <h4 class="text-xl font-semibold mb-2 text-white">Stay Updated with Web Development Insights</h4>
                                    <p class="text-slate-300">Get the latest tips, trends, and best practices in web development delivered to your inbox.</p>
                                </div>
                                <form class="space-y-4">
                                    <div class="flex gap-2">
                                        <input 
                                            type="email" 
                                            placeholder="Enter your email address" 
                                            required
                                            class="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        >
                                        <button 
                                            type="submit" 
                                            class="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                    <p class="text-sm text-slate-400">We respect your privacy. Unsubscribe at any time.</p>
                                </form>
                            </div>
                        </div>

                        <!-- Footer Bottom -->
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
        const footerContainer = document.getElementById('footer');
        if (footerContainer) {
            footerContainer.innerHTML = this.render();
        }
    }
}

// Initialize footer
new Footer();