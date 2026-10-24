import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import { adultImages } from "@/data/adultOfferImages";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_PATH = "/de/fremdgehen69";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "Fremdgehen69 Erfahrungen 2026: Kosten, Ablauf & Fazit";
const META_DESCRIPTION =
  "Fremdgehen69: sachlicher Überblick für Erwachsene in Deutschland und Österreich. Anmeldung, Kosten, moderierte Profile, Diskretion und FAQ. Anzeige, 18+.";
const OG_IMAGE = `${SITE_URL}${adultImages.neon}`;
const GO_BASE = "/go/fremdgehen69";

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

function Cta({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      rel="sponsored nofollow noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center rounded-full bg-[#ff2d87] px-6 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_8px_24px_rgba(255,45,135,0.28)] transition hover:brightness-110 ${className}`}
    >
      {children}
    </a>
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
      <Header />
      <main className="bg-[#0c1230] pb-24 text-cream md:pb-0">
        <article className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff8aa8]">
            Anzeige
          </p>
          <nav aria-label="Brotkrumen" className="mt-4 text-sm text-cream/70">
            <ol className="flex flex-wrap gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="underline-offset-4 hover:underline">
                  Start
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/germany" className="underline-offset-4 hover:underline">
                  Deutschland
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>Fremdgehen69</li>
            </ol>
          </nav>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Fremdgehen69: Überblick für Erwachsene in Deutschland und Österreich
          </h1>
          <p className="mt-3 text-sm font-semibold text-cream/80">
            Nur für Personen ab 18 Jahren.
          </p>
          <p className="mt-4 text-sm leading-6 text-cream/70">
            Werbehinweis: Diese Seite enthält einen gesponserten Link. TheDateCompass
            kann eine Provision erhalten, wenn Sie über den Button zur Anbieterseite
            wechseln.{" "}
            <Link
              href="/affiliate-disclosure"
              className="font-semibold text-[#ff8aa8] underline-offset-4 hover:underline"
            >
              Hinweise zur Werbung
            </Link>
            .
          </p>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl">
            <Image
              src={adultImages.neon}
              alt="Stimmungsbild einer Abendstimmung, ohne Bezug zu echten Mitgliedern von Fremdgehen69"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <p className="mt-8 text-base leading-7 text-cream/85">
            Fremdgehen69 ist eine Dating-Plattform mit Schwerpunkt auf lockeren und
            diskreten Kontakten. Das Angebot wird für Erwachsene in Deutschland und
            Österreich eingeordnet. TheDateCompass betreibt die Plattform nicht, speichert
            dort keine Profile und kann Zusagen des Anbieters nicht prüfen. Dieser Text
            beschreibt den üblichen Ablauf solcher Dienste und verweist für verbindliche
            Regeln auf die Anbieterseite.
          </p>
          <p className="mt-4 text-base leading-7 text-cream/85">
            Wer ein Konto anlegen möchte, sollte vorher klären, welche Angaben öffentlich
            sichtbar sind und welche Funktionen ohne Bezahlung nutzbar bleiben. Nehmen Sie sich
            dafür ein paar Minuten auf der Anbieterseite, statt sich nur auf diese Übersicht zu
            verlassen. Mitgliedszahlen,
            Bewertungen und Erfolgsquoten werden hier bewusst nicht genannt, weil dazu keine
            geprüfte Quelle vorliegt.
          </p>
          <div className="mt-8">
            <Cta href={`${GO_BASE}?placement=lp_hero`}>Zur Anbieterseite</Cta>
          </div>

          <h2 className="mt-12 text-2xl font-extrabold">Wie funktioniert die Anmeldung</h2>
          <p className="mt-4 text-base leading-7 text-cream/85">
            Der konkrete Ablauf steht auf der Anbieterseite und kann sich ändern. Üblich ist
            eine kurze Registrierung mit E-Mail-Adresse oder einem anderen Login, einer
            Altersbestätigung und einem Passwort. Danach legen viele Dienste ein Profil an:
            Anzeigename, ungefähre Region, kurze Beschreibung und optional ein Foto. Welche
            Felder Pflicht sind, entscheidet der Anbieter.
          </p>
          <p className="mt-4 text-base leading-7 text-cream/85">
            Nach dem Profil folgt in der Regel eine Suche oder eine Liste von Vorschlägen.
            Nachrichten, Favoriten oder erweiterte Filter können an ein kostenpflichtiges
            Konto gebunden sein. Lesen Sie vor dem Absenden, ob der Anbieter eine
            Identitätsprüfung verlangt und wie Sie ein Konto später löschen. TheDateCompass
            hat keinen Zugriff auf Ihr Konto und kann Sperrungen oder Löschungen nicht ausführen.
          </p>
          <p className="mt-4 text-base leading-7 text-cream/85">
            Planen Sie die erste Sitzung in Ruhe. Übernehmen Sie keine Angaben aus
            Vorbildprofilen, und antworten Sie nicht auf Nachrichten, die nach Geld, Gutscheinen
            oder einem Wechsel auf einen anderen Kanal in den ersten Minuten fragen. Solche
            Muster sind ein häufiger Hinweis auf Betrug, unabhängig vom Namen der Plattform.
          </p>

          <h2 className="mt-12 text-2xl font-extrabold">Kosten</h2>
          <p className="mt-4 text-base leading-7 text-cream/85">
            Die Anmeldung bei Fremdgehen69 ist kostenlos. Damit ist nicht gesagt, dass jede
            Funktion dauerhaft frei bleibt. Chat, Kontaktfreigaben oder eine höhere Sichtbarkeit
            können zu einem Bezahlangebot gehören. Aktuelle Preise siehe Anbieterseite.
          </p>
          <p className="mt-4 text-base leading-7 text-cream/85">
            Achten Sie auf die Laufzeit, auf die Verlängerung und auf die Zahlungsart, bevor
            Sie ein Abo bestätigen. Eine kostenlose Registrierung ist keine Aussage über spätere
            Gebühren. Kündigungsfristen und Erstattungen regelt der Anbieter, nicht diese
            Übersicht. Speichern Sie die Bestätigung, die Sie nach einer Zahlung erhalten.
          </p>

          <h2 className="mt-12 text-2xl font-extrabold">Vor- und Nachteile</h2>
          <p className="mt-4 text-base leading-7 text-cream/85">
            Als Vorteil lässt sich festhalten, dass die Plattform klar auf lockere, diskrete
            Kontakte für Erwachsene in Deutschland und Österreich ausgerichtet ist und der
            Einstieg ohne vorausgesetzte Zahlung beschrieben wird. Eine deutschsprachige
            Zielgruppe kann die Orientierung erleichtern, wenn Oberfläche und Hilfe des
            Anbieters auf Deutsch vorliegen. Ob das bei Ihrem Besuch zutrifft, sehen Sie erst
            auf der Anbieterseite.
          </p>
          <p className="mt-4 text-base leading-7 text-cream/85">
            Nachteile gehören ebenso dazu. Bezahlfunktionen sind möglich, ohne dass hier ein
            Preis steht. Der Umfang echter, aktiver Profile ist nicht belegt. Moderierte
            Profile können vorkommen. Support, Datenschutz und Löschung liegen beim Anbieter.
            Eine Provision für TheDateCompass ändert nichts an diesen Grenzen: Sie ist ein
            Hinweis auf Werbung, kein Qualitätsurteil.
          </p>
          <div className="mt-8">
            <Cta href={`${GO_BASE}?placement=lp_mid`}>Angebot auf der Anbieterseite prüfen</Cta>
          </div>

          <h2 className="mt-12 text-2xl font-extrabold">Hinweis zu moderierten Profilen</h2>
          <p className="mt-4 text-base leading-7 text-cream/85">
            Einige Profile können moderiert sein. Das bedeutet, dass nicht jede Darstellung
            von einer Person stammen muss, die selbst schreibt oder sich treffen möchte.
            Anbieter setzen solche Profile manchmal ein, um die Seite zu füllen oder den
            Einstieg zu zeigen. Ob und in welchem Umfang Fremdgehen69 das tut, steht in den
            Nutzungsbedingungen des Anbieters. Prüfen Sie diese Bedingungen, bevor Sie Zeit
            oder Geld einsetzen.
          </p>
          <p className="mt-4 text-base leading-7 text-cream/85">
            Eine pauschale Zusage, dass alle Profile echt seien, geben wir nicht. Wenn ein
            Gegenüber sehr schnell nach externen Zahlungen oder nach privaten Dokumenten fragt,
            stoppen Sie das Gespräch. Melden Sie den Fall über die Werkzeuge der Plattform,
            sofern sie angeboten werden.
          </p>

          <h2 className="mt-12 text-2xl font-extrabold">Datenschutz und Diskretion</h2>
          <p className="mt-4 text-base leading-7 text-cream/85">
            Diskretion beginnt bei den Daten, die Sie selbst preisgeben. Ein neutraler
            Anzeigename, eine eigene E-Mail-Adresse und ein Foto ohne Arbeitsplatz, Wohnung
            oder Kinder senken das Risiko, später unerwünscht erkannt zu werden. Standortangaben
            sollten ungenau bleiben, bis Sie einer Person vertrauen, die Sie unabhängig
            einschätzen können.
          </p>
          <p className="mt-4 text-base leading-7 text-cream/85">
            Lesen Sie die Datenschutzerklärung des Anbieters: welche Stellen Zugriff haben,
            wie lange Inhalte gespeichert werden und wie Sie Auskunft oder Löschung verlangen.
            Zahlen Sie nur über den Zahlungsweg, den die Anbieterseite selbst anbietet. Teilen
            Sie keine Passwörter und keine Fotos von Ausweisen im Chat. TheDateCompass sieht
            diese Inhalte nicht und kann sie nicht löschen.
          </p>
          <p className="mt-4 text-base leading-7 text-cream/85">
            Für Treffen gelten dieselben Vorsichtsmaßnahmen wie bei jedem anderen Kontakt aus
            dem Internet: öffentlicher Ort, eigene Anreise, eine Vertrauensperson, die den Plan
            kennt, und das Recht, abzubrechen. Diese Seite macht keine Zusage zur Sicherheit
            einzelner Mitglieder.
          </p>

          <h2 className="mt-12 text-2xl font-extrabold">Fazit</h2>
          <p className="mt-4 text-base leading-7 text-cream/85">
            Fremdgehen69 ist eine Option für Erwachsene in Deutschland und Österreich, die eine
            Plattform für lockere und diskrete Kontakte prüfen möchten. Die Registrierung ist
            kostenlos; welche Funktionen danach Geld kosten, steht nur aktuell auf der
            Anbieterseite. Moderierte Profile sind möglich. Bewerten Sie die Nutzungsbedingungen,
            die Preise und die Datenschutzerklärung selbst, bevor Sie ein Abo abschließen.
          </p>
          <p className="mt-4 text-base leading-7 text-cream/85">
            TheDateCompass stellt diesen Überblick als Anzeige bereit und verlinkt den Anbieter
            über eine Weiterleitung. Verantwortung für Profile, Zahlung und Support trägt der
            Betreiber von Fremdgehen69.
          </p>
          <div className="mt-8">
            <Cta href={`${GO_BASE}?placement=lp_end`}>Weiter zu Fremdgehen69</Cta>
          </div>

          <h2 className="mt-12 text-2xl font-extrabold">Häufige Fragen</h2>
          <div className="mt-6 space-y-6">
            {faqs.map((item) => (
              <section key={item.question}>
                <h3 className="text-lg font-bold">{item.question}</h3>
                <p className="mt-2 text-base leading-7 text-cream/85">{item.answer}</p>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#ff2d87]/30 bg-[#0c1230]/95 p-3 md:hidden">
        <Cta href={`${GO_BASE}?placement=lp_end`} className="w-full">
          Weiter zu Fremdgehen69
        </Cta>
      </div>
    </>
  );
}
