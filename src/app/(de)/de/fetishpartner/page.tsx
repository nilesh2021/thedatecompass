import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  EyeOff,
  Lock,
  ShieldAlert,
  UserRound,
  Search,
  KeyRound,
} from "lucide-react";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import NoiseOverlay from "@/components/theme/NoiseOverlay";
import { getOfferAdultImage } from "@/data/adultOfferImages";
import { fetishPartnerLanguageAlternates } from "@/data/fetishPartnerCountryPages";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_PATH = "/de/fetishpartner";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "FetishPartner: Fetisch-Dating in Deutschland | TheDateCompass";
const META_DESCRIPTION =
  "FetishPartner für Fetisch-Dating in Deutschland: Nischenkontakte, Profile und direkte Nachrichten. Nur für Erwachsene ab 18. Preise auf der Anbieterseite.";
const OG_IMAGE = `${SITE_URL}${getOfferAdultImage("fetishpartner")}`;
const GO_BASE = "/go/fetishpartner-de?country=germany";

const faqs = [
  {
    question: "Was ist FetishPartner?",
    answer:
      "FetishPartner ist in diesem Angebot als Plattform für erwachsene soziale Kontakte mit speziellen Interessen eingeordnet. Gelistet sind das Durchsehen von Profilen und direkte Nachrichten. TheDateCompass betreibt die Plattform nicht.",
  },
  {
    question: "Für wen ist Fetisch-Dating bei FetishPartner gedacht?",
    answer:
      "Die Einordnung gilt für Erwachsene ab 18 Jahren in Deutschland, die Fetisch Partner oder andere Nischenkontakte suchen. Dazu kann BDSM- und Kink-Dating gehören. Die Seite ist kein Partnervermittlungsdienst mit Erfolgsgarantie.",
  },
  {
    question: "Was kostet FetishPartner?",
    answer:
      "TheDateCompass nennt keine Preise. Aktuelle Gebühren, kostenlose Funktionen und Abos stehen nur auf der Anbieterseite und können sich ändern.",
  },
  {
    question: "Wie diskret ist die Anmeldung?",
    answer:
      "Diskretion hängt von Ihren eigenen Angaben und von den Einstellungen des Anbieters ab. Nutzen Sie eine E-Mail-Adresse, die Sie kontrollieren, und lesen Sie die Datenschutzerklärung, bevor Sie Fotos oder Kontaktdaten hochladen.",
  },
  {
    question: "Sind alle Profile echte Personen?",
    answer:
      "Das lässt sich von außen nicht belegen. Einige Profile können moderiert sein. Prüfen Sie die Nutzungsbedingungen des Anbieters und verlassen Sie sich nicht auf eine Zusage wie „nur echte Profile“.",
  },
  {
    question: "Gibt es eine Altersgrenze?",
    answer:
      "Ja. FetishPartner und diese Seite sind ausschließlich für Personen ab 18 Jahren. Minderjährige dürfen sich nicht registrieren. Wenn ein Profil unklar wirkt, brechen Sie den Kontakt ab.",
  },
  {
    question: "Was passiert nach dem Klick auf den Button?",
    answer:
      "Der Button führt über eine Weiterleitung von TheDateCompass zur Anbieterseite. TheDateCompass kann eine Provision erhalten, wenn Sie sich dort anmelden. Konto, Bezahlung und Support stellt der Anbieter bereit.",
  },
] as const;

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: META_DESCRIPTION,
  keywords: [
    "FetishPartner",
    "Fetisch Dating Deutschland",
    "Fetisch Partner",
    "Fetisch Kontakte",
    "BDSM Dating",
    "Kink Dating",
    "Fetisch Community",
    "Nischen-Dating",
    "diskret",
    "ab 18",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: fetishPartnerLanguageAlternates(),
  },
  openGraph: {
    title: PAGE_TITLE,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Stimmungsbild unter neonrosa Licht, ohne Bezug zu echten Mitgliedern von FetishPartner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: META_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: PAGE_TITLE,
  description: META_DESCRIPTION,
  url: PAGE_URL,
  inLanguage: "de",
  isPartOf: {
    "@type": "WebSite",
    name: "TheDateCompass",
    url: SITE_URL,
  },
  audience: {
    "@type": "PeopleAudience",
    suggestedMinAge: 18,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Deutschland",
      item: `${SITE_URL}/germany`,
    },
    { "@type": "ListItem", position: 3, name: "FetishPartner", item: PAGE_URL },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const quickFacts = [
  { label: "Region", value: "Deutschland" },
  { label: "Fokus", value: "Spezielle Interessen" },
  { label: "Alter", value: "Ab 18 Jahren" },
  { label: "Preise", value: "Siehe Anbieterseite" },
] as const;

const steps = [
  {
    icon: KeyRound,
    title: "Registrieren",
    text: "Üblich ist eine kurze Registrierung mit E-Mail-Adresse oder einem anderen Login, einer Altersbestätigung und einem Passwort. Welche Felder Pflicht sind, entscheidet der Anbieter.",
  },
  {
    icon: UserRound,
    title: "Profil anlegen",
    text: "Danach legen viele Dienste ein Profil an: Anzeigename, ungefähre Region, kurze Beschreibung und optional ein Foto. Geben Sie nur an, was Sie selbst öffentlich zeigen möchten.",
  },
  {
    icon: Search,
    title: "Profile und Nachrichten",
    text: "Die Einordnung von FetishPartner nennt das Durchsehen von Profilen und direkte Nachrichten. Ob Filter oder der Chat kostenpflichtig sind, steht auf der Anbieterseite.",
  },
] as const;

const privacyTips = [
  {
    icon: EyeOff,
    title: "Wenig preisgeben",
    text: "Ein neutraler Anzeigename, eine eigene E-Mail-Adresse und ein Foto ohne Arbeitsplatz oder Wohnung senken das Risiko, später unerwünscht erkannt zu werden. Standortangaben sollten ungenau bleiben.",
  },
  {
    icon: Lock,
    title: "Datenschutz prüfen",
    text: "Lesen Sie die Datenschutzerklärung des Anbieters, bevor Sie Fotos oder Kontaktdaten hochladen. Zahlen Sie nur über den Zahlungsweg der Anbieterseite. TheDateCompass sieht diese Inhalte nicht.",
  },
  {
    icon: BadgeCheck,
    title: "Vorsicht bei Treffen",
    text: "Für Treffen gelten dieselben Vorsichtsmaßnahmen wie bei jedem anderen Kontakt aus dem Internet: öffentlicher Ort, eigene Anreise und das Recht, abzubrechen. Diese Seite macht keine Zusage zur Sicherheit einzelner Mitglieder.",
  },
] as const;

function Cta({
  href,
  children,
  className = "",
  tone = "pink",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  tone?: "pink" | "light";
}) {
  const toneClass =
    tone === "light"
      ? "bg-white text-[#3d246e] shadow-[0_14px_36px_rgba(0,0,0,0.25)]"
      : "bg-gradient-to-r from-[#9C5CDB] to-[#E83E9B] text-white shadow-[0_14px_36px_rgba(156,92,219,0.4)]";
  return (
    <a
      href={href}
      rel="sponsored nofollow noopener noreferrer"
      className={`group inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-8 text-[0.8rem] font-bold uppercase tracking-[0.12em] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 ${toneClass} ${className}`}
    >
      {children}
      <ArrowRight size={18} className="transition group-hover:translate-x-1" aria-hidden />
    </a>
  );
}

function SectionHead({
  eyebrow,
  title,
  center = false,
}: {
  eyebrow: string;
  title: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#c084fc]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function FetishPartnerGermanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header tone="home" />
      <div className="relative bg-[#0c1230]">
        <NoiseOverlay />
        <main className="relative overflow-hidden pb-28 font-display text-cream md:pb-0">
          <section className="relative">
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse 60% 55% at 85% 20%, rgba(156,92,219,0.38), transparent 60%), radial-gradient(ellipse 45% 40% at 5% 90%, rgba(232,62,155,0.22), transparent 55%)",
              }}
            />
            <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-14 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pb-20 lg:pt-14">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-[#9C5CDB]/50 bg-[#9C5CDB]/15 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#d8b4fe]">
                    Anzeige
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-cream/80">
                    Nur 18+
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-cream/80">
                    Deutschland
                  </span>
                </div>
                <nav aria-label="Brotkrumen" className="mt-4 text-sm text-cream/55">
                  <ol className="flex flex-wrap gap-x-2 gap-y-1">
                    <li>
                      <Link href="/" className="underline-offset-4 hover:text-white hover:underline">
                        Start
                      </Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li>
                      <Link href="/germany" className="underline-offset-4 hover:text-white hover:underline">
                        Deutschland
                      </Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li className="text-cream">FetishPartner</li>
                  </ol>
                </nav>
                <h1 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[3.4rem]">
                  FetishPartner: <span className="text-[#d8b4fe]">Fetisch-Dating</span> in Deutschland
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/75">
                  FetishPartner ist für Erwachsene eingeordnet, die Kontakte zu speziellen
                  Interessen suchen. Profile lassen sich durchsehen, Nachrichten direkt schreiben.
                  Diese Seite stellt nur dieses eine Angebot vor.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                  <Cta href={`${GO_BASE}&placement=lp_hero`}>Zur Anbieterseite</Cta>
                  <p className="text-sm font-semibold text-cream/60">
                    Nur ab 18. Preise siehe Anbieterseite.
                  </p>
                </div>
                <p className="mt-6 max-w-xl text-xs leading-5 text-cream/50">
                  Dieses Angebot richtet sich an Erwachsene in Deutschland. Außerhalb dieses Landes
                  kann die Anbieterseite eine andere Seite anzeigen. Werbehinweis: Diese Seite
                  enthält einen gesponserten Link. TheDateCompass kann eine Provision erhalten,
                  wenn Sie über den Button zur Anbieterseite wechseln.{" "}
                  <Link href="/affiliate-disclosure" className="font-semibold text-[#d8b4fe] underline-offset-4 hover:underline">
                    Hinweise zur Werbung
                  </Link>
                  .
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div className="absolute -inset-3 rounded-[2.4rem] bg-gradient-to-br from-[#9C5CDB]/40 to-transparent blur-2xl" aria-hidden />
                <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] border border-[#9C5CDB]/40 sm:aspect-[4/5]">
                  <Image
                    src={getOfferAdultImage("fetishpartner")}
                    alt="Stimmungsbild unter neonrosa Licht, ohne Bezug zu echten Mitgliedern von FetishPartner"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 480px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1230] via-[#0c1230]/10 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-[#0c1230]/80 p-4 backdrop-blur">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#d8b4fe]">
                      Kurz gesagt
                    </p>
                    <p className="mt-1 text-sm leading-6 text-cream/85">
                      Nischenkontakte für Erwachsene. Konditionen prüfen Sie auf der Anbieterseite.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative mx-auto max-w-6xl px-6">
            <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-[#9C5CDB]/25 bg-[#141a3d]/90 p-4 text-center"
                >
                  <dt className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#d8b4fe]">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-extrabold sm:text-base">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="relative mx-auto mt-16 max-w-6xl px-6">
            <SectionHead eyebrow="Einordnung" title="Fetisch Partner für spezielle Interessen" />
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <p className="text-base leading-7 text-cream/80">
                Wer einen Fetisch Partner sucht, braucht eine Einordnung, die das Interesse nicht
                versteckt. FetishPartner steht in unserem Deutschland-Angebot für erwachsene soziale
                Kontakte mit speziellen Interessen, nicht für ein allgemeines Kennenlernportal.
              </p>
              <p className="text-base leading-7 text-cream/80">
                TheDateCompass betreibt die Plattform nicht, speichert dort keine Profile und kann
                Zusagen des Anbieters nicht prüfen. Mitgliedszahlen, Bewertungen und Erfolgsquoten
                werden hier nicht genannt, weil dazu keine geprüfte Quelle vorliegt.
              </p>
            </div>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <SectionHead eyebrow="Funktionen" title="Fetisch Kontakte: Profile und Nachrichten" />
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <p className="rounded-3xl border border-[#9C5CDB]/25 bg-[#141a3d] p-6 text-sm leading-6 text-cream/80">
                Nischenkontakte: Die gelistete Ausrichtung sind Verbindungen rund um spezielle
                Interessen, nicht ein breites Dating ohne Thema.
              </p>
              <p className="rounded-3xl border border-[#9C5CDB]/25 bg-[#141a3d] p-6 text-sm leading-6 text-cream/80">
                Profile: Das Angebot beschreibt das Durchsehen von Profilen. Welche Angaben
                sichtbar sind, legt der Anbieter fest.
              </p>
              <p className="rounded-3xl border border-[#9C5CDB]/25 bg-[#141a3d] p-6 text-sm leading-6 text-cream/80">
                Nachrichten: Direkte Nachrichten gehören zur Einordnung. Ob sie ohne Bezahlung
                nutzbar sind, sehen Sie nur auf der Anbieterseite.
              </p>
            </div>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <SectionHead eyebrow="Nische" title="BDSM- und Kink-Dating in dieser Einordnung" />
            <p className="mt-5 max-w-3xl text-base leading-7 text-cream/80">
              Menschen, die BDSM-Dating oder Kink-Dating suchen, fallen unter dieselbe Einordnung:
              erwachsene Kontakte mit einem klaren Interesse. FetishPartner wird hier nicht als
              allgemeine Singlebörse beschrieben. Ob die Anbieterseite eigene Kategorien, eine
              Fetisch Community oder weitere Filter führt, steht dort und kann sich ändern. Diese
              Übersicht erfindet keine solchen Funktionen.
            </p>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <SectionHead eyebrow="Ablauf" title="Diskrete Anmeldung" />
            <p className="mt-4 max-w-2xl text-base leading-7 text-cream/80">
              Der konkrete Ablauf steht auf der Anbieterseite und kann sich ändern.
            </p>
            <ol className="mt-8 grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="relative rounded-3xl border border-[#9C5CDB]/25 bg-[#141a3d] p-6"
                >
                  <span className="absolute right-5 top-4 text-5xl font-extrabold text-[#9C5CDB]/20" aria-hidden>
                    {index + 1}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#9C5CDB]/15 text-[#d8b4fe]">
                    <step.icon size={22} aria-hidden />
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-cream/75">{step.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-[#9C5CDB]/30 bg-gradient-to-br from-[#1a2150] to-[#141a3d] p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#c084fc]">
                  Preise
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
                  Kosten auf der Anbieterseite
                </h2>
              </div>
              <div className="space-y-4 text-base leading-7 text-cream/80">
                <p>
                  Für FetishPartner liegt hier kein geprüfter Preis vor. Ob die Anmeldung kostenlos
                  ist und welche Funktionen danach Geld kosten, steht nur aktuell auf der
                  Anbieterseite.
                </p>
                <p>
                  Achten Sie auf Laufzeit, Verlängerung und Zahlungsart, bevor Sie ein Abo
                  bestätigen. Kündigungsfristen und Erstattungen regelt der Anbieter, nicht diese
                  Übersicht.
                </p>
              </div>
            </div>
          </section>

          <section className="relative mx-auto mt-16 max-w-6xl px-6">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#6138A8] via-[#9C5CDB] to-[#E83E9B] px-6 py-12 text-center sm:px-12">
              <h2 className="relative text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl">
                Anbieterseite öffnen und selbst prüfen
              </h2>
              <p className="relative mx-auto mt-3 max-w-xl text-sm leading-6 text-white/85">
                Aktuelle Preise, Funktionen und Bedingungen für dieses Fetisch-Dating-Angebot stehen
                nur dort.
              </p>
              <div className="relative mt-7">
                <Cta href={`${GO_BASE}&placement=lp_mid`} tone="light">
                  FetishPartner auf der Anbieterseite prüfen
                </Cta>
              </div>
              <p className="relative mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/70">
                Anzeige · Nur 18+
              </p>
            </div>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <div className="grid gap-6 rounded-[2rem] border border-amber-300/30 bg-amber-300/[0.06] p-6 sm:p-10 lg:grid-cols-[auto_1fr]">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-300/15 text-amber-300">
                <ShieldAlert size={28} aria-hidden />
              </span>
              <div>
                <h2 className="text-3xl font-extrabold tracking-[-0.03em]">
                  Nur für Erwachsene ab 18
                </h2>
                <div className="mt-4 space-y-4 text-base leading-7 text-cream/85">
                  <p>
                    FetishPartner und diese Seite sind nur für Personen ab 18 Jahren. Minderjährige
                    dürfen sich nicht registrieren. Einige Profile können moderiert sein. Eine
                    pauschale Zusage, dass alle Profile echt seien, geben wir nicht.
                  </p>
                  <p>
                    Wenn ein Gegenüber sehr schnell nach externen Zahlungen oder nach privaten
                    Dokumenten fragt, stoppen Sie das Gespräch. Melden Sie den Fall über die
                    Werkzeuge der Plattform, sofern sie angeboten werden.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <SectionHead eyebrow="Tipps" title="Datenschutz und Diskretion" />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {privacyTips.map((tip) => (
                <div key={tip.title} className="rounded-3xl border border-[#9C5CDB]/25 bg-[#141a3d] p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#9C5CDB]/15 text-[#d8b4fe]">
                    <tip.icon size={22} aria-hidden />
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold">{tip.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-cream/75">{tip.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <div className="rounded-[2rem] border border-[#9C5CDB]/35 bg-gradient-to-br from-[#141a3d] to-[#0c1230] p-6 sm:p-10">
              <SectionHead eyebrow="Zusammenfassung" title="Fazit zu FetishPartner" />
              <div className="mt-5 grid gap-6 text-base leading-7 text-cream/85 md:grid-cols-2">
                <p>
                  FetishPartner ist eine Option für Erwachsene in Deutschland, die Fetisch-Dating
                  und andere Nischenkontakte prüfen möchten. Gelistet sind Profilsuche und direkte
                  Nachrichten. Preise und der genaue Funktionsumfang stehen nur auf der
                  Anbieterseite.
                </p>
                <p>
                  TheDateCompass stellt diesen Überblick als Anzeige bereit und verlinkt nur dieses
                  Angebot. Verantwortung für Profile, Zahlung und Support trägt der Betreiber von
                  FetishPartner.
                </p>
              </div>
              <div className="mt-8">
                <Cta href={`${GO_BASE}&placement=lp_end`}>Weiter zu FetishPartner</Cta>
              </div>
            </div>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6 pb-20">
            <SectionHead eyebrow="FAQ" title="Häufige Fragen zu FetishPartner" center />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqs.map((item) => (
                <section
                  key={item.question}
                  className="rounded-2xl border border-[#9C5CDB]/25 bg-[#141a3d] p-6"
                >
                  <h3 className="text-lg font-bold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-cream/80">{item.answer}</p>
                </section>
              ))}
            </div>
          </section>
        </main>
      </div>
      <Footer />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#9C5CDB]/40 bg-[#0c1230]/95 p-3 backdrop-blur md:hidden">
        <Cta href={`${GO_BASE}&placement=lp_end`} className="w-full">
          Weiter zu FetishPartner
        </Cta>
      </div>
    </>
  );
}
