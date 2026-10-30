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
import { adultImages } from "@/data/adultOfferImages";
import { getBrandSeo } from "@/lib/pageSeo";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_PATH = "/de/fremdgehen69";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const seo = getBrandSeo(PAGE_PATH)!;
const PAGE_TITLE = seo.title;
const META_DESCRIPTION = seo.description;
const OG_IMAGE = `${SITE_URL}${adultImages.neon}`;
const GO_BASE = "/go/fremdgehen69?country=germany";

const faqs = [
  {
    question: "Ist Fremdgehen69 kostenlos?",
    answer:
      "Die Anmeldung wird als kostenlos beschrieben. Zusätzliche Funktionen können kostenpflichtig sein. Aktuelle Preise siehe Anbieterseite. TheDateCompass nennt hier keine Beträge, weil sich Tarife ändern können.",
  },
  {
    question: "Für wen ist Fremdgehen69 gedacht?",
    answer:
      "Die Plattform richtet sich an Erwachsene ab 18 Jahren, die in Deutschland oder Österreich diskrete, lockere Kontakte suchen. Sie ist kein Partnervermittlungsdienst mit Erfolgsgarantie und kein Ersatz für Beratung.",
  },
  {
    question: "Sind alle Profile echte Personen?",
    answer:
      "Das lässt sich von außen nicht belegen. Einige Profile können moderiert sein. Prüfen Sie die Nutzungsbedingungen des Anbieters und verlassen Sie sich nicht auf eine Zusage wie „nur echte Profile“.",
  },
  {
    question: "Wie diskret ist die Nutzung?",
    answer:
      "Diskretion hängt von Ihren eigenen Angaben und von den Einstellungen des Anbieters ab. Nutzen Sie eine E-Mail-Adresse, die Sie kontrollieren, teilen Sie Zahlungsdaten nur auf der Anbieterseite und lesen Sie die Datenschutzerklärung, bevor Sie Fotos oder Kontaktdaten hochladen.",
  },
  {
    question: "Gibt es eine Altersgrenze?",
    answer:
      "Ja. Fremdgehen69 und diese Seite sind ausschließlich für Personen ab 18 Jahren. Minderjährige dürfen sich nicht registrieren. Wenn ein Profil unklar wirkt, brechen Sie den Kontakt ab und nutzen Sie die Meldefunktion des Anbieters, falls vorhanden.",
  },
  {
    question: "Was passiert nach dem Klick auf den Button?",
    answer:
      "Der Button führt über eine Weiterleitung von TheDateCompass zur Anbieterseite. TheDateCompass kann eine Provision erhalten, wenn Sie sich dort anmelden. Der Anbieter stellt das Konto, die Bezahlung und den Support bereit, nicht TheDateCompass.",
  },
] as const;

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
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
        alt: "Hinweisbild zu Fremdgehen69, einer Dating-Plattform für Erwachsene",
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
    { "@type": "ListItem", position: 3, name: "Fremdgehen69", item: PAGE_URL },
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
  { label: "Region", value: "Deutschland & Österreich" },
  { label: "Anmeldung", value: "Kostenlos" },
  { label: "Alter", value: "Ab 18 Jahren" },
  { label: "Preise", value: "Siehe Anbieterseite" },
] as const;

const steps = [
  {
    icon: KeyRound,
    title: "Registrieren",
    text: "Üblich ist eine kurze Registrierung mit E-Mail-Adresse oder einem anderen Login, einer Altersbestätigung und einem Passwort.",
  },
  {
    icon: UserRound,
    title: "Profil anlegen",
    text: "Danach legen viele Dienste ein Profil an: Anzeigename, ungefähre Region, kurze Beschreibung und optional ein Foto. Welche Felder Pflicht sind, entscheidet der Anbieter.",
  },
  {
    icon: Search,
    title: "Suchen und schreiben",
    text: "Nach dem Profil folgt in der Regel eine Suche oder eine Liste von Vorschlägen. Nachrichten, Favoriten oder erweiterte Filter können an ein kostenpflichtiges Konto gebunden sein.",
  },
] as const;

const privacyTips = [
  {
    icon: EyeOff,
    title: "Wenig preisgeben",
    text: "Diskretion beginnt bei den Daten, die Sie selbst preisgeben. Ein neutraler Anzeigename, eine eigene E-Mail-Adresse und ein Foto ohne Arbeitsplatz, Wohnung oder Kinder senken das Risiko, später unerwünscht erkannt zu werden. Standortangaben sollten ungenau bleiben, bis Sie einer Person vertrauen, die Sie unabhängig einschätzen können.",
  },
  {
    icon: Lock,
    title: "Datenschutz prüfen",
    text: "Lesen Sie die Datenschutzerklärung des Anbieters: welche Stellen Zugriff haben, wie lange Inhalte gespeichert werden und wie Sie Auskunft oder Löschung verlangen. Zahlen Sie nur über den Zahlungsweg, den die Anbieterseite selbst anbietet. Teilen Sie keine Passwörter und keine Fotos von Ausweisen im Chat. TheDateCompass sieht diese Inhalte nicht und kann sie nicht löschen.",
  },
  {
    icon: BadgeCheck,
    title: "Vorsicht bei Treffen",
    text: "Für Treffen gelten dieselben Vorsichtsmaßnahmen wie bei jedem anderen Kontakt aus dem Internet: öffentlicher Ort, eigene Anreise, eine Vertrauensperson, die den Plan kennt, und das Recht, abzubrechen. Diese Seite macht keine Zusage zur Sicherheit einzelner Mitglieder.",
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
      ? "bg-white text-[#8c1d4d] shadow-[0_14px_36px_rgba(0,0,0,0.25)]"
      : "bg-gradient-to-r from-[#ff2d87] to-[#ff5aa5] text-white shadow-[0_14px_36px_rgba(255,45,135,0.4)]";
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
      <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function Fremdgehen69Page() {
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
          {/* Hero */}
          <section className="relative">
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse 60% 55% at 85% 20%, rgba(255,45,135,0.34), transparent 60%), radial-gradient(ellipse 45% 40% at 5% 90%, rgba(40,70,160,0.28), transparent 55%)",
              }}
            />
            <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-14 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pb-20 lg:pt-14">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-[#ff2d87]/50 bg-[#ff2d87]/15 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#ff8aa8]">
                    Anzeige
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-cream/80">
                    Nur 18+
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-cream/80">
                    Nur DE & AT
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
                    <li className="text-cream">Fremdgehen69</li>
                  </ol>
                </nav>
                <h1 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[3.4rem]">
                  Fremdgehen69: <span className="text-[#ff2d87]">diskrete Kontakte</span> in Deutschland und Österreich
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/75">
                  Fremdgehen69 ist eine Dating-Plattform mit Schwerpunkt auf lockeren und
                  diskreten Kontakten. Das Angebot wird für Erwachsene in Deutschland und
                  Österreich eingeordnet.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                  <Cta href={`${GO_BASE}&placement=lp_hero`}>Kostenlos zur Anbieterseite</Cta>
                  <p className="text-sm font-semibold text-cream/60">
                    Anmeldung kostenlos. Preise siehe Anbieterseite. Nur DE & AT.
                  </p>
                </div>
                <p className="mt-6 max-w-xl text-xs leading-5 text-cream/50">
                  Dieses Angebot richtet sich an Erwachsene in Deutschland und Österreich.
                  Außerhalb dieser Länder kann die Anbieterseite eine andere Seite anzeigen.
                  Werbehinweis: Diese Seite enthält einen gesponserten Link. TheDateCompass
                  kann eine Provision erhalten, wenn Sie über den Button zur Anbieterseite
                  wechseln.{" "}
                  <Link href="/affiliate-disclosure" className="font-semibold text-[#ff8aa8] underline-offset-4 hover:underline">
                    Hinweise zur Werbung
                  </Link>
                  .
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div className="absolute -inset-3 rounded-[2.4rem] bg-gradient-to-br from-[#ff2d87]/40 to-transparent blur-2xl" aria-hidden />
                <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] border border-[#ff2d87]/40 sm:aspect-[4/5]">
                  <Image
                    src={adultImages.neon}
                    alt="Stimmungsbild einer Abendstimmung, ohne Bezug zu echten Mitgliedern von Fremdgehen69"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 480px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1230] via-[#0c1230]/10 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-[#0c1230]/80 p-4 backdrop-blur">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#ff8aa8]">
                      Kurz gesagt
                    </p>
                    <p className="mt-1 text-sm leading-6 text-cream/85">
                      Casual und diskret, nur für Erwachsene. Konditionen prüfen Sie auf der Anbieterseite.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick facts */}
          <section className="relative mx-auto max-w-6xl px-6">
            <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-[#ff2d87]/25 bg-[#141a3d]/90 p-4 text-center"
                >
                  <dt className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#ff8aa8]">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-extrabold sm:text-base">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Intro */}
          <section className="relative mx-auto mt-16 grid max-w-6xl gap-6 px-6 md:grid-cols-2">
            <p className="text-base leading-7 text-cream/80">
              TheDateCompass betreibt die Plattform nicht, speichert dort keine Profile und kann
              Zusagen des Anbieters nicht prüfen. Dieser Text beschreibt den üblichen Ablauf
              solcher Dienste und verweist für verbindliche Regeln auf die Anbieterseite.
            </p>
            <p className="text-base leading-7 text-cream/80">
              Wer ein Konto anlegen möchte, sollte vorher klären, welche Angaben öffentlich
              sichtbar sind und welche Funktionen ohne Bezahlung nutzbar bleiben. Nehmen Sie sich
              dafür ein paar Minuten auf der Anbieterseite, statt sich nur auf diese Übersicht zu
              verlassen. Mitgliedszahlen, Bewertungen und Erfolgsquoten werden hier bewusst nicht
              genannt, weil dazu keine geprüfte Quelle vorliegt.
            </p>
          </section>

          {/* Steps */}
          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <SectionHead eyebrow="Ablauf" title="Wie funktioniert die Anmeldung" />
            <p className="mt-4 max-w-2xl text-base leading-7 text-cream/80">
              Der konkrete Ablauf steht auf der Anbieterseite und kann sich ändern.
            </p>
            <ol className="mt-8 grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="relative rounded-3xl border border-[#ff2d87]/25 bg-[#141a3d] p-6"
                >
                  <span className="absolute right-5 top-4 text-5xl font-extrabold text-[#ff2d87]/20" aria-hidden>
                    {index + 1}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#ff2d87]/15 text-[#ff2d87]">
                    <step.icon size={22} aria-hidden />
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-cream/75">{step.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <p className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-6 text-cream/75">
                Lesen Sie vor dem Absenden, ob der Anbieter eine Identitätsprüfung verlangt und wie
                Sie ein Konto später löschen. TheDateCompass hat keinen Zugriff auf Ihr Konto und
                kann Sperrungen oder Löschungen nicht ausführen.
              </p>
              <p className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-6 text-cream/75">
                Planen Sie die erste Sitzung in Ruhe. Übernehmen Sie keine Angaben aus
                Vorbildprofilen, und antworten Sie nicht auf Nachrichten, die nach Geld, Gutscheinen
                oder einem Wechsel auf einen anderen Kanal in den ersten Minuten fragen. Solche
                Muster sind ein häufiger Hinweis auf Betrug, unabhängig vom Namen der Plattform.
              </p>
            </div>
          </section>

          {/* Costs */}
          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-[#ff2d87]/30 bg-gradient-to-br from-[#1a2150] to-[#141a3d] p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">
                  Preise
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">Kosten</h2>
                <p className="mt-6 text-5xl font-extrabold text-[#ff2d87]">Gratis</p>
                <p className="mt-1 text-sm font-semibold text-cream/70">bei der Anmeldung</p>
              </div>
              <div className="space-y-4 text-base leading-7 text-cream/80">
                <p>
                  Die Anmeldung bei Fremdgehen69 ist kostenlos. Damit ist nicht gesagt, dass jede
                  Funktion dauerhaft frei bleibt. Chat, Kontaktfreigaben oder eine höhere
                  Sichtbarkeit können zu einem Bezahlangebot gehören. Aktuelle Preise siehe
                  Anbieterseite.
                </p>
                <p>
                  Achten Sie auf die Laufzeit, auf die Verlängerung und auf die Zahlungsart, bevor
                  Sie ein Abo bestätigen. Eine kostenlose Registrierung ist keine Aussage über
                  spätere Gebühren. Kündigungsfristen und Erstattungen regelt der Anbieter, nicht
                  diese Übersicht. Speichern Sie die Bestätigung, die Sie nach einer Zahlung
                  erhalten.
                </p>
              </div>
            </div>
          </section>

          {/* Pros and cons */}
          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <SectionHead eyebrow="Einordnung" title="Vor- und Nachteile" center />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-400/30 bg-emerald-400/[0.06] p-6 sm:p-8">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-emerald-300">
                  Was dafür spricht
                </p>
                <p className="mt-3 text-base leading-7 text-cream/85">
                  Als Vorteil lässt sich festhalten, dass die Plattform klar auf lockere, diskrete
                  Kontakte für Erwachsene in Deutschland und Österreich ausgerichtet ist und der
                  Einstieg ohne vorausgesetzte Zahlung beschrieben wird. Eine deutschsprachige
                  Zielgruppe kann die Orientierung erleichtern, wenn Oberfläche und Hilfe des
                  Anbieters auf Deutsch vorliegen. Ob das bei Ihrem Besuch zutrifft, sehen Sie erst
                  auf der Anbieterseite.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#141a3d] p-6 sm:p-8">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#ff8aa8]">
                  Worauf Sie achten
                </p>
                <p className="mt-3 text-base leading-7 text-cream/85">
                  Nachteile gehören ebenso dazu. Bezahlfunktionen sind möglich, ohne dass hier ein
                  Preis steht. Der Umfang echter, aktiver Profile ist nicht belegt. Moderierte
                  Profile können vorkommen. Support, Datenschutz und Löschung liegen beim Anbieter.
                  Eine Provision für TheDateCompass ändert nichts an diesen Grenzen: Sie ist ein
                  Hinweis auf Werbung, kein Qualitätsurteil.
                </p>
              </div>
            </div>
          </section>

          {/* Mid CTA */}
          <section className="relative mx-auto mt-16 max-w-6xl px-6">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#ff2d87] via-[#d11f6e] to-[#8c1d4d] px-6 py-12 text-center sm:px-12">
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-2xl"
                aria-hidden
              />
              <h2 className="relative text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl">
                Anbieterseite öffnen und selbst prüfen
              </h2>
              <p className="relative mx-auto mt-3 max-w-xl text-sm leading-6 text-white/85">
                Aktuelle Preise, Funktionen und Bedingungen stehen nur dort. Die Anmeldung ist
                kostenlos.
              </p>
              <div className="relative mt-7">
                <Cta href={`${GO_BASE}&placement=lp_mid`} tone="light">
                  Angebot auf der Anbieterseite prüfen
                </Cta>
              </div>
              <p className="relative mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/70">
                Anzeige · Nur 18+
              </p>
            </div>
          </section>

          {/* Moderated profiles */}
          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <div className="grid gap-6 rounded-[2rem] border border-amber-300/30 bg-amber-300/[0.06] p-6 sm:p-10 lg:grid-cols-[auto_1fr]">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-300/15 text-amber-300">
                <ShieldAlert size={28} aria-hidden />
              </span>
              <div>
                <h2 className="text-3xl font-extrabold tracking-[-0.03em]">
                  Hinweis zu moderierten Profilen
                </h2>
                <div className="mt-4 space-y-4 text-base leading-7 text-cream/85">
                  <p>
                    Einige Profile können moderiert sein. Das bedeutet, dass nicht jede Darstellung
                    von einer Person stammen muss, die selbst schreibt oder sich treffen möchte.
                    Anbieter setzen solche Profile manchmal ein, um die Seite zu füllen oder den
                    Einstieg zu zeigen. Ob und in welchem Umfang Fremdgehen69 das tut, steht in den
                    Nutzungsbedingungen des Anbieters. Prüfen Sie diese Bedingungen, bevor Sie Zeit
                    oder Geld einsetzen.
                  </p>
                  <p>
                    Eine pauschale Zusage, dass alle Profile echt seien, geben wir nicht. Wenn ein
                    Gegenüber sehr schnell nach externen Zahlungen oder nach privaten Dokumenten
                    fragt, stoppen Sie das Gespräch. Melden Sie den Fall über die Werkzeuge der
                    Plattform, sofern sie angeboten werden.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy */}
          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <SectionHead eyebrow="Tipps" title="Datenschutz und Diskretion" />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {privacyTips.map((tip) => (
                <div key={tip.title} className="rounded-3xl border border-[#ff2d87]/25 bg-[#141a3d] p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#ff2d87]/15 text-[#ff2d87]">
                    <tip.icon size={22} aria-hidden />
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold">{tip.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-cream/75">{tip.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Verdict */}
          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <div className="rounded-[2rem] border border-[#ff2d87]/35 bg-gradient-to-br from-[#141a3d] to-[#0c1230] p-6 sm:p-10">
              <SectionHead eyebrow="Zusammenfassung" title="Fazit" />
              <div className="mt-5 grid gap-6 text-base leading-7 text-cream/85 md:grid-cols-2">
                <p>
                  Fremdgehen69 ist eine Option für Erwachsene in Deutschland und Österreich, die
                  eine Plattform für lockere und diskrete Kontakte prüfen möchten. Die Registrierung
                  ist kostenlos; welche Funktionen danach Geld kosten, steht nur aktuell auf der
                  Anbieterseite. Moderierte Profile sind möglich. Bewerten Sie die
                  Nutzungsbedingungen, die Preise und die Datenschutzerklärung selbst, bevor Sie ein
                  Abo abschließen.
                </p>
                <p>
                  TheDateCompass stellt diesen Überblick als Anzeige bereit und verlinkt den
                  Anbieter über eine Weiterleitung. Verantwortung für Profile, Zahlung und Support
                  trägt der Betreiber von Fremdgehen69.
                </p>
              </div>
              <div className="mt-8">
                <Cta href={`${GO_BASE}&placement=lp_end`}>Weiter zu Fremdgehen69</Cta>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="relative mx-auto mt-20 max-w-6xl px-6 pb-20">
            <SectionHead eyebrow="FAQ" title="Häufige Fragen" center />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqs.map((item) => (
                <section
                  key={item.question}
                  className="rounded-2xl border border-[#ff2d87]/25 bg-[#141a3d] p-6"
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
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#ff2d87]/40 bg-[#0c1230]/95 p-3 backdrop-blur md:hidden">
        <Cta href={`${GO_BASE}&placement=lp_end`} className="w-full">
          Weiter zu Fremdgehen69
        </Cta>
      </div>
    </>
  );
}
