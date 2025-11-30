import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import dashboardImg from "@assets/generated_images/high-fidelity_aiops_dashboard_interface_screenshot_in_dark_mode..png";
import secureNetImg from "@assets/generated_images/abstract_representation_of_a_secure_network_with_cybersecurity_elements..png";
import systemImg from "@assets/generated_images/abstract_holographic_system_diagram_showing_data_flow_and_ai_processing..png";
import { useLanguage } from "@/lib/i18n";

export default function SuccessStories() {
  const { t } = useLanguage();

  const galleryItems = [
    {
      id: 1,
      key: 'dashboard',
      src: dashboardImg,
      colSpan: "md:col-span-2",
    },
    {
      id: 2,
      key: 'security',
      src: secureNetImg,
      colSpan: "md:col-span-1",
    },
    {
      id: 3,
      key: 'architecture',
      src: systemImg,
      colSpan: "md:col-span-3",
    },
  ];

  return (
    <section id="success" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">{t.success.title}</h2>
          <p className="text-muted-foreground">{t.success.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item) => {
            const translation = t.success.items[item.key as keyof typeof t.success.items];
            return (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <motion.div
                    className={`relative group overflow-hidden rounded-lg border border-white/10 cursor-pointer ${item.colSpan}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={item.src}
                      alt={translation.title}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-primary text-xs uppercase tracking-widest font-semibold mb-2 block">{translation.category}</span>
                      <h3 className="text-xl font-serif font-bold text-foreground">{translation.title}</h3>
                    </div>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 p-2 rounded-full backdrop-blur-sm border border-white/10">
                      <ZoomIn className="text-primary w-5 h-5" />
                    </div>

                    <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-lg transition-all duration-300 pointer-events-none" />
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl bg-background/95 border-white/10 p-0 overflow-hidden">
                  <img src={item.src} alt={translation.title} className="w-full h-auto max-h-[80vh] object-contain" />
                  <div className="p-6 bg-card">
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{translation.title}</h3>
                    <p className="text-muted-foreground">{t.success.modal_desc}</p>
                  </div>
                </DialogContent>
              </Dialog>
            )
          })}
        </div>
      </div>
    </section>
  );
}
