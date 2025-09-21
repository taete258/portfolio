import { getLocale, getTranslations } from "next-intl/server";
import TypingAnimation from "./ui/typing-animation";
import TextSlideAnimation from "./ui/text-slide-animation";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import profileImage from "@images/profile-self.jpg";
import Image from "next/image";
import WaveDivider from "./ui/wave-divider";
const AboutMe = async () => {
  const t = await getTranslations();
  const locale = await getLocale();

  const contacts = [
    {
      icons: <Github />,
      href: "https://github.com/taete258",
      target: "_blank",
    },
    {
      icons: <Mail />,
      href: "mailto:ratchanon.tpta@gmail.com",
      target: "_blank",
    },
    {
      icons: <Phone />,
      href: "tel:+66648482388",
      target: "_self",
    },
    {
      icons: <Linkedin />,
      href: "https://www.linkedin.com/in/ratchanon-pheungta-6846a9229/",
      target: "_blank",
    },
  ];

  return (
    <section
      id="about"
      className="relative flex flex-col justify-center py-20 px-6 min-h-[100dvh]"
    >
      <div className="max-w-6xl mx-auto w-auto p-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="animate-slide-up space-y-4">
            <TextSlideAnimation
              className="text-2xl"
              duration={0.8}
              text={locale === "th" ? "รัชนนนท์ พึ่งตา" : "Ratchanon Pheungta"}
              locale={locale}
            />
            <TypingAnimation
              text={"Full Stack Developer"}
              highlight
              highlightText="Developer"
            />

            <TextSlideAnimation
              className="space-y-4 text-lg font-thin text-muted-foreground"
              direction="down"
              duration={0.8}
              text={t("about.description1")}
              locale={locale}
            />

            {/* Contacts */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">
                {t("about.contactsTitle")}
              </h3>
              <div className="flex gap-4 justify-center items-center lg:justify-start">
                {contacts.map((item) => (
                  <Button
                    key={item.href}
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10 w-14 h-14 lg:w-auto lg:h-auto p-2 lg:p-4"
                    size="lg"
                    href={item.href}
                    target={item.target}
                  >
                    {item.icons}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="animate-fade-in animate-duration-1000 max-w-[552px]  m-auto">
            <div className="relative rounded-2xl box-content">
              <Image
                src={profileImage}
                alt="Profile ratchanon pheungta"
                className="rounded-3xl card-glow mx-auto w-64 h-48 md:w-96 md:h-72 lg:w-[450px] lg:h-[350px] object-cover"
                priority
                width={450}
                height={350}
              />
              {/* Decorative elements */}
              <div className="absolute top-0 -left-1 w-20 h-20 md:w-44 md:h-44 rounded-full bg-primary/70 animate-float card-glow " />
              <div className="absolute -top-2 right-3 w-16 h-16 md:w-24 md:h-24 rounded-full bg-accent/70 animate-float card-glow " />
              <div className="absolute bottom-2 left-6 w-11 h-11 md:w-16 md:h-16 rounded-full bg-accent/70 animate-float card-glow " />
            </div>
          </div>
        </div>
      </div>
      <WaveDivider nextSectionColor="hsl(164 26% 17%)" />
    </section>
  );
};

export default AboutMe;
