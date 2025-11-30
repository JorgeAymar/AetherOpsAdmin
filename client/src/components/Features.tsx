import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Cloud, Shield, Zap, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

import workspaceImg from "@/assets/images/workspace_zen.jpg";
import sailingImg from "@/assets/images/sailing_zen.jpg";
import bestPracticesImg from "@/assets/images/zen_stones.jpg";
import { useLanguage } from "@/lib/i18n";

function ActivityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      id: "scaling",
      title: t.features.items.scaling.title,
      description: t.features.items.scaling.description,
      value: t.features.items.scaling.value,
      integrations: ["Auto-Scaling", "Load Balancing", "Optimization"],
      icon: Zap,
      image: workspaceImg,
    },
    {
      id: "security",
      title: t.features.items.security.title,
      description: t.features.items.security.description,
      value: t.features.items.security.value,
      integrations: ["Auto-Patching", "Threat Detection", "Compliance"],
      icon: Shield,
      image: bestPracticesImg,
    },
    {
      id: "freedom",
      title: t.features.items.freedom.title,
      description: t.features.items.freedom.description,
      value: t.features.items.freedom.value,
      integrations: ["Remote Monitoring", "Mobile Alerts", "Self-Healing"],
      icon: Cloud,
      image: sailingImg,
    },
    {
      id: "clarity",
      title: t.features.items.clarity.title,
      description: t.features.items.clarity.description,
      value: t.features.items.clarity.value,
      integrations: ["No Notifications", "Auto-Reports", "Zen Mode"],
      icon: ActivityIcon,
      image: bestPracticesImg,
    },
  ];

  return (
    <section id="features" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-serif font-bold text-foreground mb-6">{t.features.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-xl font-light leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-16 lg:gap-24`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-serif font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm font-semibold tracking-widest text-primary uppercase">
                    {feature.value}
                  </p>
                </div>
                <ul className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                  {feature.integrations.map((item) => (
                    <li key={item} className="px-4 py-1.5 rounded-full bg-secondary/50 text-secondary-foreground text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="flex-1 w-full relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
