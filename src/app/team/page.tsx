import { Metadata } from "next";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/section";
import teamData from "@/content/en/team.json";
import { Sparkles, Globe2, Zap, Code, Youtube, Instagram, Twitter, Send, Linkedin, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Team - UOR Foundation",
  description:
    "Meet the team behind UOR Foundation. Researchers, engineers, and innovators building decentralized data infrastructure.",
};

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    youtube?: string;
    instagram?: string;
    telegram?: string;
    facebook?: string;
    reddit?: string;
  };
}

export default function TeamPage() {
  return (
    <>
      {/* Mission Statement */}
      <Section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-10">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                Our Mission
              </h1>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <p className="text-lg sm:text-xl leading-relaxed text-white font-medium">
                Hologram exists to accelerate the age of abundant intelligence and unleash human potential.
              </p>
              
              <p className="text-lg sm:text-xl leading-relaxed text-white font-medium">
                We believe intelligence should not be scarce, centralized, or constrained by hardware, cost, or infrastructure. It should be instantly accessible to everyone, on every device, as a basic capability of the modern world.
              </p>
              
              <p className="text-lg sm:text-xl leading-relaxed text-white font-medium">
                The next era of progress will not be driven by larger systems or increasing complexity, but by how efficiently intelligence can be delivered and used at scale.
              </p>
              
              <p className="text-lg sm:text-xl leading-relaxed text-white font-medium">
                Our mission is to build the foundational virtual infrastructure that makes this possible. Starting with high-performance compute that runs everywhere, efficiently and securely, without dependence on specialized hardware or closed ecosystems.
              </p>
              
              <p className="text-lg sm:text-xl leading-relaxed text-white font-medium">
                By removing the structural physical limits of traditional computing, we make intelligence abundant, predictable, and universal.
              </p>
              
              <p className="text-lg sm:text-xl leading-relaxed text-white font-medium">
                When intelligence is no longer a bottleneck, human capability compounds, and progress accelerates for everyone.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* What We Stand For */}
      <Section className="py-16 sm:py-20 lg:py-24 border-t border-border/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              What We Stand For
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="rounded-lg border border-border/20 bg-surface-dark/30 p-6 sm:p-8 hover:border-border/40 hover:bg-surface-dark/40 transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 text-white flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Simplicity
                </h3>
              </div>
              <p className="text-base sm:text-lg text-white leading-relaxed mb-3">
                Great technology should fade into the background.
              </p>
              <p className="text-base sm:text-lg text-white leading-relaxed">
                Hologram removes friction so builders can focus on creating, not configuring.
              </p>
            </div>
            
            <div className="rounded-lg border border-border/20 bg-surface-dark/30 p-6 sm:p-8 hover:border-border/40 hover:bg-surface-dark/40 transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <Globe2 className="h-6 w-6 sm:h-7 sm:w-7 text-white flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Universality
                </h3>
              </div>
              <p className="text-base sm:text-lg text-white leading-relaxed mb-3">
                Powerful computation should work everywhere.
              </p>
              <p className="text-base sm:text-lg text-white leading-relaxed">
                It should run on any device, at any scale, without reliance on specialized hardware or closed ecosystems.
              </p>
            </div>
            
            <div className="rounded-lg border border-border/20 bg-surface-dark/30 p-6 sm:p-8 hover:border-border/40 hover:bg-surface-dark/40 transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 sm:h-7 sm:w-7 text-white flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Efficiency
                </h3>
              </div>
              <p className="text-base sm:text-lg text-white leading-relaxed mb-3">
                Performance should never come at the cost of waste.
              </p>
              <p className="text-base sm:text-lg text-white leading-relaxed">
                We believe doing more with less is not only good engineering, but a responsibility.
              </p>
            </div>
            
            <div className="rounded-lg border border-border/20 bg-surface-dark/30 p-6 sm:p-8 hover:border-border/40 hover:bg-surface-dark/40 transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <Code className="h-6 w-6 sm:h-7 sm:w-7 text-white flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Open-source
                </h3>
              </div>
              <p className="text-base sm:text-lg text-white leading-relaxed mb-3">
                Innovation depends on trust and control.
              </p>
              <p className="text-base sm:text-lg text-white leading-relaxed">
                Systems should be open, secure, and owned by the people who use them.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title={teamData.title}
          description={teamData.description}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {(teamData.members as TeamMember[]).map((member) => (
            <Card key={member.name} className="flex flex-col hover:border-purple/20 hover:shadow-sm hover:shadow-transparent">
              <CardHeader className="space-y-4">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="mt-2 sm:mt-3 text-sm sm:text-base font-semibold">
                    {member.role}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="text-sm sm:text-base text-white leading-[1.6]">
                  {member.bio.split('\n').map((paragraph, idx) => (
                    <p key={idx} className={idx > 0 ? "mt-4" : ""}>
                      {paragraph.split(/(\*\*.*?\*\*)/g).map((part, partIdx) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          const text = part.slice(2, -2);
                          return (
                            <strong key={partIdx} className="font-semibold">
                              {text}
                            </strong>
                          );
                        }
                        return <span key={partIdx}>{part}</span>;
                      })}
                    </p>
                  ))}
                </div>
                <div className="mt-auto pt-4 flex gap-3 flex-wrap">
                  {member.social.youtube && (
                    <a
                      href={member.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan hover:text-cyan/80 transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan hover:text-cyan/80 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan hover:text-cyan/80 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.telegram && (
                    <a
                      href={member.social.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan hover:text-cyan/80 transition-colors"
                      aria-label="Telegram"
                    >
                      <Send className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan hover:text-cyan/80 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan hover:text-cyan/80 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

    </>
  );
}
