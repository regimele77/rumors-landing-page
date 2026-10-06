import { FooterWordmark } from "@/components/layout/FooterWordmark";
import { Container } from "@/components/layout/Container";
import { AnimatedLink } from "@/components/ui/AnimatedLink";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-navy mt-auto bg-navy text-white">
      <Container className="pt-16 md:pt-24">
        <div className="footer-panel relative z-10 rounded-3xl border border-white/20 px-6 py-10 md:px-12 md:py-14">
          <div aria-hidden="true" className="footer-panel-glass" />
          <div className="relative z-10">
          <div className="mb-14 flex items-center gap-4 md:gap-5">
            <Logo tone="white" className="h-20 w-auto md:h-28" />
            <p className="text-4xl font-extrabold tracking-[-0.045em] md:text-6xl">
              Rumors
            </p>
          </div>

            <div className="grid gap-10 sm:grid-cols-2">
              <nav aria-label="Company">
                <p className="mb-4 text-sm text-white/70">Company</p>
                <ul className="space-y-2 text-sm">
                  {site.companyLinks.map((item) => (
                    <li key={item.href}>
                      <AnimatedLink href={item.href}>{item.label}</AnimatedLink>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <p className="mb-4 text-sm text-white/70">Contact</p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <AnimatedLink href={`mailto:${site.email}`}>
                      {site.email}
                    </AnimatedLink>
                  </li>
                  <li>{site.address}</li>
                </ul>
              </div>
            </div>

            <div className="footer-legal mt-12 flex flex-col gap-4 border-t border-white/20 pt-6 text-sm md:flex-row md:items-center md:justify-between">
              <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
                {site.footerLegalLinks.map((item, index) => (
                  <li key={item.href} className="flex items-center gap-x-3">
                    {index > 0 ? (
                      <span aria-hidden="true" className="h-3 w-px bg-white/30" />
                    ) : null}
                    <AnimatedLink href={item.href}>{item.label}</AnimatedLink>
                  </li>
                ))}
              </ul>
              <p>© {year} Rumors. All rights reserved.</p>
            </div>
          </div>
        </div>
      </Container>

      <FooterWordmark />
    </footer>
  );
}
