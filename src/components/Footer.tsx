import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-serif font-bold text-foreground mb-4">
              A<span className="text-primary">S</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Representing Los Angeles' most exceptional properties with uncompromising 
              standards for quality, discretion, and client service.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>(310) 555-0123</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>alexandra@baker-estates.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-foreground mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Receive exclusive market insights and new listings.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Email address" 
                className="bg-background border-border flex-1"
              />
              <Button size="sm" className="bg-gradient-luxury text-primary-foreground hover:shadow-gold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              <p>© 2024 Alexandra Baker Real Estate. All rights reserved.</p>
              <p className="mt-1">DRE License #01234567 | Equal Housing Opportunity</p>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
