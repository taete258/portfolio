"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import { div } from "framer-motion/client";

const Footer = () => {
  const t = useTranslations();

  const contacts = [
    {
      icons: <Github className="w-4 h-4" />,
      href: "https://github.com/taete258",
      target: "_blank",
      label: "GitHub",
    },
    {
      icons: <Mail className="w-4 h-4" />,
      href: "mailto:ratchanon.tpta@gmail.com",
      target: "_blank",
      label: "Email",
    },
    {
      icons: <Phone className="w-4 h-4" />,
      href: "tel:+66648482388",
      target: "_self",
      label: "Phone",
    },
    {
      icons: <Linkedin className="w-4 h-4" />,
      href: "https://www.linkedin.com/in/ratchanon-pheungta-6846a9229/",
      target: "_blank",
      label: "LinkedIn",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "hsl(var(--secondary) / .2)",
      }}
    >
      <motion.footer
        id="contact"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="border-t border-border/50 py-12 px-6 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left section - Brand/Version */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">
                Ratchanon Pheungta
              </h3>
              <p className="text-muted-foreground mb-2">Full Stack Developer</p>
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-sm font-medium text-primary">v2.0</span>
              </div>
            </motion.div>

            {/* Center section - Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-muted-foreground mb-4">Connect with me</p>
              <div className="flex justify-center gap-3">
                {contacts.map((contact) => (
                  <Button
                    key={contact.href}
                    variant="outline"
                    size="sm"
                    href={contact.href}
                    target={contact.target}
                    className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                    aria-label={contact.label}
                  >
                    {contact.icons}
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Right section - Copyright */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <p className="text-muted-foreground text-sm mb-2">
                © {new Date().getFullYear()} All rights reserved
              </p>
              <div className="flex items-center justify-center md:justify-end gap-1 text-sm text-muted-foreground">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                <span>using Next.js & TypeScript</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom divider with additional fade animation */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 pt-6 border-t border-border/30"
          >
            <p className="text-center text-xs text-muted-foreground">
              This portfolio showcases my journey as a developer. Thank you for
              visiting!
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
