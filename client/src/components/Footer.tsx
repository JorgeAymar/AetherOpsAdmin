import { MapPin, Phone, Mail, Twitter, Linkedin, Instagram, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-background pt-24 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="text-3xl font-serif font-bold text-foreground tracking-tighter mb-4">
              Aether<span className="text-primary">Ops</span>
            </div>
            <p className="text-muted-foreground text-lg mb-6">
              {t.footer.tagline}
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Instagram, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6 uppercase tracking-wider">{t.footer.newsletter.title}</h4>
            <p className="text-muted-foreground mb-4">{t.footer.newsletter.description}</p>
            <div className="flex gap-2">
              <Input placeholder={t.footer.newsletter.placeholder} className="bg-white/5 border-white/10 text-foreground focus-visible:ring-primary" />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">{t.footer.newsletter.button}</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} AetherOps Inc. {t.footer.rights}
            </p>
            <div className="hidden md:block w-1 h-1 rounded-full bg-muted-foreground/30" />
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              <span>{t.footer.open_source}</span>
              <a
                href="https://github.com/jorgesaymar/AetherOps"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors underline underline-offset-4"
              >
                {t.footer.view_github}
              </a>
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">{t.footer.links.privacy}</a>
            <a href="#" className="hover:text-foreground">{t.footer.links.terms}</a>
            <a href="#" className="hover:text-foreground">{t.footer.links.sla}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
