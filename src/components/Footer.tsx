import { forwardRef } from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { content } from "@/data/content";

const phoneClean = content.company.contact.phoneMobile.replace(/\s/g, '');

const Footer = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => (
  <footer ref={ref} {...props} className="bg-primary text-primary-foreground" itemScope itemType="https://schema.org/LocalBusiness">
    {/* CTA Banner */}
    <div className="border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-xl md:text-2xl font-bold">Prêt à réparer vos volets ?</p>
          <p className="text-primary-foreground/70 text-sm mt-1">Contactez-nous dès maintenant pour un devis gratuit et personnalisé.</p>
        </div>
        <div className="flex gap-3">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
            <Link to="/#devis">Demander un devis <ArrowRight className="h-4 w-4" /></Link>
          </Button>
           <Button asChild className="border border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 gap-2">
            <a href={`tel:${phoneClean}`}><Phone className="h-4 w-4" /> Appeler</a>
          </Button>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-4 gap-10 mb-10">
        <div>
          <div className="font-display font-bold text-2xl mb-4">{content.company.name.replace('Volets', '')}<span className="text-accent">Volets</span></div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed mb-3">
            Spécialiste du dépannage, de la réparation et de l'installation de volets roulants à Paris et en Île-de-France. Qualité, rapidité et garantie 3 ans pièces et main d'œuvre.
          </p>
          <p className="text-primary-foreground/50 text-xs mb-3">SIRET : 982 156 978 000 16</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {[...content.certifications, "Garantie 3 ans"].map((c) => (
              <Badge key={c} variant="default" className="text-[10px]">{c}</Badge>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="https://wa.me/33603205967" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" title="Contactez-nous sur WhatsApp">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/services/reparation-volets-roulants" className="hover:text-primary-foreground transition-colors">Réparation de volets</Link></li>
            <li><Link to="/services/installation-remplacement-volets" className="hover:text-primary-foreground transition-colors">Remplacement de volets</Link></li>
            <li><Link to="/services/vitrerie-remplacement-vitrage" className="hover:text-primary-foreground transition-colors">Vitrerie, Vitrage & Vitrine</Link></li>
            <li><Link to="/services/motorisation-domotique" className="hover:text-primary-foreground transition-colors">Motorisation & Domotique</Link></li>
            <li><Link to="/services/depannage-express" className="hover:text-primary-foreground transition-colors">Dépannage express</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/" className="hover:text-primary-foreground transition-colors">Accueil</Link></li>
            <li><Link to="/qui-sommes-nous" className="hover:text-primary-foreground transition-colors">Qui sommes-nous</Link></li>
            <li><Link to="/blog" className="hover:text-primary-foreground transition-colors">Blog Expert</Link></li>
            <li><Link to="/zones-intervention" className="hover:text-primary-foreground transition-colors">Zones d'intervention</Link></li>
            <li><a href="/#devis" className="hover:text-primary-foreground transition-colors">Devis gratuit</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" /> Paris & Île-de-France — Proche de chez vous</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /><a href={`tel:${phoneClean}`} className="hover:text-primary-foreground transition-colors" itemProp="telephone">{content.company.contact.phoneMobile}</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> <span itemProp="email">{content.company.contact.email}</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} Répar'Action Volets. Tous droits réservés.</p>
        <div className="flex gap-4">
          <Link to="/mentions-legales" className="hover:text-primary-foreground transition-colors">Mentions légales</Link>
          <Link to="/politique-confidentialite" className="hover:text-primary-foreground transition-colors">Politique de confidentialité</Link>
          <Link to="/cgv" className="hover:text-primary-foreground transition-colors">CGV</Link>
        </div>
      </div>
    </div>
  </footer>
));

Footer.displayName = "Footer";

export default Footer;
