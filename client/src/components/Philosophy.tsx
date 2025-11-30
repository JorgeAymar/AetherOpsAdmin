import { motion } from "framer-motion";
import { Server, ShieldCheck, Activity } from "lucide-react";
import zenStonesImg from "@/assets/images/zen_stones.jpg";
import { useLanguage } from "@/lib/i18n";

const stats = [
  { label: "cores", value: "500k+", icon: Server },
  { label: "incidents", value: "95%", icon: ShieldCheck },
  { label: "uptime", value: "+15%", icon: Activity },
];

export default function Philosophy() {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              {t.philosophy.title} <br />
              <span className="text-primary">{t.philosophy.title_highlight}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t.philosophy.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-start p-4 border-l border-primary/30">
                  <stat.icon className="w-8 h-8 text-primary mb-3" />
                  <span className="text-3xl font-bold text-foreground mb-1">{stat.value}</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">
                    {t.philosophy.stats[stat.label as keyof typeof t.philosophy.stats]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-30 pointer-events-none" />
            <img
              src={zenStonesImg}
              alt="Zen Philosophy"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
