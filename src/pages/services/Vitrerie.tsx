import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { GlassWater, CheckCircle2, ArrowRight, Phone, ChevronRight, AlertTriangle, ShieldCheck, Clock, Thermometer, Shield } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const imgVitrerie = "/images/assets/service-vitrerie-v2.webp";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import RepairShowcaseSection from "@/components/RepairShowcaseSection";
import LocalZonesGrid from "@/components/LocalZonesGrid";
import FAQSection from "@/components/FAQSection";
const glazierTechnicianImg = "/images/assets/paris-notre-dame-vitrerie.webp";
import { fadeUp, staggerItem, hoverLift, heroEntry } from "@/lib/animations";

const typesVitrage = [
  { title: "Double vitrage thermique", desc: "La solution standard pour une isolation thermique et phonique efficace. Réduit les pertes de chaleur de 40%.", features: ["Isolation thermique 40%+", "Isolation phonique", "Standard construction neuve"], color: "border-service-emerald/20", badgeColor: "bg-service-emerald/90 text-white border-service-emerald", image: "/images/vitrage/double-vitrage.webp", data: ["U-Value : 1.1 W/m²K", "Épaisseur : 4/16/4", "Gaz Argon inclus"] },
  { title: "Vitrage anti-effraction", desc: "Vitrage feuilleté de sécurité avec film PVB. Résiste aux tentatives d'intrusion et protège contre les blessures.", features: ["Retarde les intrusions", "Sécurité anti-blessure", "Norme EN 356"], color: "border-service-rose/20", badgeColor: "bg-service-rose/90 text-white border-service-rose", image: "/images/vitrage/feuillete.webp", data: ["Classe : P2A à P5A", "Film PVB renforcé", "Anti-éclats"] },
  { title: "Vitrage dépoli & Intimité", desc: "Vitrage traité à l'acide pour un aspect translucide. Laisse passer la lumière tout en préservant votre intimité.", features: ["Intimité totale", "Lumière naturelle", "Design moderne"], color: "border-service-violet/20", badgeColor: "bg-service-violet/90 text-white border-service-violet", image: "/images/vitrage/depoli.webp", data: ["Finition : Dépoli acide", "Usage : SDB / Bureau", "Facile d'entretien"] },
  { title: "Vitrage acoustique", desc: "Composition asymétrique spécifique pour réduire drastiquement les nuisances sonores. Idéal pour les zones urbaines.", features: ["Réduction -35 dB", "Zones urbaines", "Composition asymétrique"], color: "border-service-cyan/20", badgeColor: "bg-service-cyan/90 text-white border-service-cyan", image: "/images/vitrage/phonique.webp", data: ["Atténuation : 35-40 dB", "Verre asymétrique", "Confort phonique"] },
  { title: "Vitrine de magasin", desc: "Installation et remplacement de vitrines pour commerces. Verre feuilleté de sécurité haute résistance.", features: ["Sécurité renforcée", "Transparence maximale", "Sur-mesure"], color: "border-service-blue/20", badgeColor: "bg-service-blue/90 text-white border-service-blue", image: "/images/assets/service-vitrerie.webp", data: ["Usage : Commercial", "Verre : Feuilleté 44.2/SP10", "Installation : Rapide"] },
];

const urgences = [
  "Bris de glace suite à un cambriolage", "Vitre cassée par intempéries (grêle, tempête)",
  "Vitrage fissuré posant un risque de sécurité", "Porte vitrée brisée",
  "Baie vitrée endommagée", "Vitrine de commerce cassée",
];

const VitreriePage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useSEO({
    title: "Vitrerie & Vitrine Paris | Remplacement Vitrage Urgence 7j/7, Double Vitrage & Vitrine Magasin | Répar'Action Volets",
    description: "Vitrier professionnel à Paris & IDF : remplacement vitrage et vitrine en urgence 7j/7, double vitrage thermique, vitrage anti-effraction, vitrine de magasin. Prise en charge assurance. Devis gratuit.",
    keywords: "vitrerie Paris, vitrine magasin Paris, remplacement vitrage urgence, bris de glace Paris, double vitrage devis, vitrage anti-effraction, vitrier urgence 7j/7, remplacement vitre IDF",
    canonicalUrl: "https://reparaction-volets.fr/services/vitrerie-remplacement-vitrage",
  });

  useEffect(() => {
    const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "name": "Vitrerie, Vitrage & Vitrine", "provider": { "@type": "LocalBusiness", "@id": "https://reparaction-volets.fr/#organization" }, "areaServed": [{ "@type": "City", "name": "Paris" }, { "@type": "State", "name": "Île-de-France" }], "description": "Remplacement de vitrage et vitrine en urgence 7j/7 : double vitrage, anti-effraction, vitrine de magasin, acoustique. Prise en charge assurance.", "serviceType": "Vitrerie remplacement vitrage" };
    const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://reparaction-volets.fr" }, { "@type": "ListItem", "position": 2, "name": "Vitrerie, Vitrage & Vitrine", "item": "https://reparaction-volets.fr/services/vitrerie-remplacement-vitrage" }] };
    const speakableSchema = { "@context": "https://schema.org", "@type": "WebPage", "name": "Vitrerie & Remplacement Vitrage à Paris", "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", ".hero-description", "[data-speakable]"] }, "url": "https://reparaction-volets.fr/services/vitrerie-remplacement-vitrage" };
    const s1 = document.createElement('script'); s1.type = 'application/ld+json'; s1.innerHTML = JSON.stringify(serviceSchema); document.head.appendChild(s1);
    const s2 = document.createElement('script'); s2.type = 'application/ld+json'; s2.innerHTML = JSON.stringify(breadcrumbSchema); document.head.appendChild(s2);
    const s3 = document.createElement('script'); s3.type = 'application/ld+json'; s3.innerHTML = JSON.stringify(speakableSchema); document.head.appendChild(s3);
    return () => { document.head.removeChild(s1); document.head.removeChild(s2); document.head.removeChild(s3); };
  }, []);

  return (
    <main id="main-content" className="relative">
      <Navbar />
      <section ref={heroRef} className="relative pt-24 pb-16 min-h-[60vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src={imgVitrerie} alt="Vitrerie et remplacement de vitrage" className="w-full h-[120%] object-cover" fetchPriority="high" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-foreground/60 text-sm mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Vitrerie, Vitrage & Vitrine</span>
          </div>
          <motion.div {...heroEntry(0)} className="max-w-3xl">
            <Badge variant="accent" className="gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              <GlassWater className="h-3.5 w-3.5" /> Urgence 7j/7
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
              Vitrerie, Vitrage & Vitrine — Paris & Île-de-France
            </h1>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Bris de glace, vitrage cassé, vitrine de magasin endommagée ou remplacement programmé ? Nos vitriers professionnels interviennent en urgence 7 jours sur 7.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" variant="accent" asChild className="px-8 py-7 text-lg font-bold rounded-full shadow-xl transition-all duration-300 hover:scale-105">
                <a href="tel:0603205967" className="flex items-center gap-2"><Phone className="h-5 w-5" /> Urgence : 06 03 20 59 67</a>
              </Button>
              <Button size="lg" variant="accent-outline" asChild className="px-8 py-7 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105">
                <a href="/#devis" className="flex items-center gap-2">Devis Gratuit <ArrowRight className="h-5 w-5" /></a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge variant="serviceRose"><AlertTriangle className="h-4 w-4" /> Urgence 7j/7</Badge>
              <Badge variant="serviceBlue"><ShieldCheck className="h-4 w-4" /> Vitrage certifié</Badge>
              <Badge variant="serviceEmerald"><CheckCircle2 className="h-4 w-4" /> Prise en charge assurance</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <AlertTriangle className="h-3.5 w-3.5" /> Urgence 7j/7
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Service d'Urgence Vitrerie — Intervention Rapide</h2>
            <p className="text-muted-foreground leading-relaxed">
              Un vitrage cassé est une urgence de sécurité. Nos vitriers interviennent 7j/7 pour une mise en sécurité immédiate.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="bg-card rounded-xl p-6 border border-service-rose/20 card-shadow max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-service-rose/10 flex items-center justify-center shadow-lg border border-white/10">
                <AlertTriangle className="h-5 w-5 text-service-rose" />
              </div>
              <h3 className="font-display font-bold text-foreground">Nous intervenons en urgence pour :</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              {urgences.map((u) => (
                <div key={u} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> {u}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">Catalogue</span>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Tous les Types de Vitrage Disponibles</h2>
            <p className="text-muted-foreground">Nous posons et remplaçons tous types de vitrage.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {typesVitrage.map((v, i) => (
              <motion.div key={v.title} {...staggerItem(i)} {...hoverLift}
                className={`group bg-card rounded-2xl border ${v.color} overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 flex flex-col`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={v.image} alt={v.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Badge className={`absolute top-4 right-4 text-xs font-bold border ${v.badgeColor} shadow-md backdrop-blur-sm`}>{v.title.split(" ").pop()}</Badge>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{v.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-6 flex-1">{v.desc}</p>
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {v.data.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-[10px] font-bold text-foreground/90 bg-muted/50 p-2 rounded-lg">
                        <ShieldCheck className="h-3 w-3 text-service-emerald" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {v.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[10px] text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3 text-accent shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant="accent" size="sm" className="w-full transition-all duration-300 rounded-xl" asChild>
                    <a href="/#devis">Choisir ce vitrage</a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection 
        title="Comment Se Déroule un Remplacement de Vitrage ou de Vitrine ?"
        subtitle="De la mise en sécurité immédiate à la pose du vitrage ou de la vitrine définitive, voici les étapes de notre intervention."
        detail="En cas de bris de glace ou de vitrine endommagée, nous sécurisons d'abord votre logement ou commerce avec une fermeture provisoire, puis commandons le vitrage définitif aux dimensions exactes. Pose soignée et nettoyage complet du chantier."
      />
      <QuoteFormSection />
      <RepairShowcaseSection image={glazierTechnicianImg} title="Vitrerie & Vitrine d'Excellence — Île de la Cité & Bords de Seine"
        description="Des vitraux historiques de l'Île de la Cité aux vitrines de magasins modernes des quais de Seine, notre expertise couvre tous les besoins. Remplacement, sécurisation et installation de vitrines avec une précision millimétrée."
        highlights={["Expertise des vitrages patrimoniaux et vitrines commerciales", "Mise en sécurité immédiate après bris de glace ou vitrine", "Vitrages et vitrines certifiés conformes aux normes", "Accompagnement pour la prise en charge assurance"]}
        stats={[
          { icon: Clock, label: "Urgence vitrage", value: "2h", color: "text-service-rose", iconBg: "bg-service-rose/10" },
          { icon: Thermometer, label: "Isolation", value: "-40% pertes", color: "text-service-blue", iconBg: "bg-service-blue/10" },
          { icon: Shield, label: "Norme", value: "EN 356", color: "text-service-emerald", iconBg: "bg-service-emerald/10" },
        ]}
      />
      <FAQSection
        title="Questions Fréquentes — Vitrerie, Vitrage & Vitrine"
        subtitle="Tout savoir sur le remplacement de vitrage et de vitrine : urgences, types de verre, prise en charge assurance."
        faqs={[
          { q: "En combien de temps intervenez-vous pour un bris de glace ou de vitrine ?", a: "En urgence, nous intervenons sous 2 heures à Paris pour sécuriser votre logement ou commerce. La pose d'une fermeture provisoire est immédiate. Le vitrage ou la vitrine définitive est posé sous 24 à 72 heures selon le type commandé." },
          { q: "Comment obtenir un devis pour un remplacement de vitrine de magasin ?", a: "Chaque vitrine est unique : les dimensions, l'épaisseur du verre feuilleté de sécurité et la configuration de l'installation varient. Nous établissons un devis gratuit et personnalisé après prise de mesures sur place." },
          { q: "Mon assurance prend-elle en charge le bris de vitrine ?", a: "Oui, la garantie bris de glace pour les commerces couvre généralement les vitrines. Nous établissons un devis conforme aux exigences des assureurs pour faciliter votre remboursement." },
          { q: "Quel type de verre est obligatoire pour une vitrine ?", a: "Pour la sécurité des commerces, un verre feuilleté (type 44.2 ou SP10) est fortement recommandé ou exigé par les assurances pour retarder les effractions et protéger les passants." },
          { q: "Remplacez-vous les vitrages de baies vitrées et vitrines ?", a: "Oui, nous intervenons sur tous types d'ouvertures : fenêtres, baies vitrées, portes-fenêtres, vérandas et vitrines de commerce. Prise de mesures précise et pose certifiée." },
          { q: "Le double vitrage est-il possible pour une vitrine ?", a: "Absolument, nous installons des vitrines en double vitrage pour améliorer l'isolation thermique de votre commerce tout en conservant une sécurité maximale." },
        ]}
      />
      <TestimonialsSection priorityService="vitrerie" title="Avis Clients — Vitrerie, Vitrage & Vitrine" subtitle="Témoignages de nos clients après un remplacement de vitrage ou de vitrine en urgence ou programmé." />

      {/* Maillage interne contextuel */}
      <section className="py-12 bg-section-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Services Complémentaires</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Découvrez nos autres services pour vos volets roulants, vitrages et vitrines.</p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { label: "Réparation de volets", href: "/services/reparation-volets-roulants" },
                { label: "Dépannage Express", href: "/services/depannage-express" },
                { label: "Installation & Remplacement", href: "/services/installation-remplacement-volets" },
                { label: "Motorisation & Domotique", href: "/services/motorisation-domotique" },
              ].map((s) => (
                <Link key={s.href} to={s.href} className="px-4 py-2 rounded-full border border-border bg-card text-sm font-semibold text-accent hover:border-accent hover:shadow-md transition-all duration-300">
                  {s.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <p className="w-full text-sm font-semibold text-foreground mb-2">📖 Articles utiles :</p>
              {[
                { label: "Sécurité et cambriolage", slug: "securite-volets-cambriolage" },
                { label: "Vitrerie & Vitrine : tout savoir", slug: "vitrerie-remplacement-vitrage" },
                { label: "Économie d'énergie", slug: "economie-energie-volets-roulants" },
              ].map((link) => (
                <Link key={link.slug} to={`/blog/${link.slug}`} className="text-xs text-accent hover:text-accent/80 font-medium underline-offset-4 hover:underline transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <LocalZonesGrid pageId="vitrerie" />
      <Footer />
    </main>
  );
};

export default VitreriePage;
