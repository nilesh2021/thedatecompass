import type { Metadata } from "next";
import { getOfferAdultImage } from "@/data/adultOfferImages";

export const FUCKFINDER_SITE_URL = "https://www.thedatecompass.com";
export const FUCKFINDER_GENERAL_PATH = "/offers/casual-dating";

const OFFER_URL = "https://t.aslr1.com/358917/7346?aff_sub5=SF_006OG000004lmDN";

export type FuckFinderFaq = { question: string; answer: string };
export type FuckFinderFact = { label: string; value: string };
export type FuckFinderStep = { title: string; text: string };

export type FuckFinderCountryPage = {
  id: string;
  path: string;
  hreflang: string;
  ogLocale: string;
  countryToken: string;
  goSlug: string;
  hubHref?: string;
  title: string;
  description: string;
  keywords: string[];
  ui: {
    breadcrumbLabel: string;
    home: string;
    country: string;
    badges: readonly [string, string, string];
    h1Lead: string;
    h1Highlight: string;
    h1Tail: string;
    intro: string;
    heroCta: string;
    heroNote: string;
    disclosure: string;
    disclosureLink: string;
    imageAlt: string;
    shortEyebrow: string;
    shortText: string;
    facts: readonly FuckFinderFact[];
    partnerEyebrow: string;
    partnerTitle: string;
    partnerLeft: string;
    partnerRight: string;
    contactsEyebrow: string;
    contactsTitle: string;
    contacts: readonly [string, string, string];
    nicheEyebrow: string;
    nicheTitle: string;
    nicheBody: string;
    signupEyebrow: string;
    signupTitle: string;
    signupIntro: string;
    steps: readonly FuckFinderStep[];
    priceEyebrow: string;
    priceTitle: string;
    priceBody: readonly [string, string];
    midTitle: string;
    midBody: string;
    midCta: string;
    midNote: string;
    ageTitle: string;
    ageBody: readonly [string, string];
    privacyEyebrow: string;
    privacyTitle: string;
    privacy: readonly FuckFinderStep[];
    summaryEyebrow: string;
    summaryTitle: string;
    summaryBody: readonly [string, string];
    endCta: string;
    faqEyebrow: string;
    faqTitle: string;
    faqs: readonly FuckFinderFaq[];
  };
};

function englishPage(input: {
  id: string;
  path: string;
  hreflang: string;
  ogLocale: string;
  countryToken: string;
  goSlug: string;
  hubHref?: string;
  place: string;
  country: string;
  keywordPlace: string;
}): FuckFinderCountryPage {
  const { place, country, keywordPlace } = input;
  return {
    id: input.id,
    path: input.path,
    hreflang: input.hreflang,
    ogLocale: input.ogLocale,
    countryToken: input.countryToken,
    goSlug: input.goSlug,
    hubHref: input.hubHref,
    title: `FuckFinder: Casual Dating in ${place} | TheDateCompass`,
    description: `FuckFinder for casual dating in ${place}: profiles, direct messages, and adult encounters. Adults 18+ only. Prices are on the provider site.`,
    keywords: [
      "FuckFinder",
      `casual dating ${keywordPlace}`,
      "adult dating",
      "casual encounters",
      "direct messages",
      "adult contacts",
      "discreet",
      "18+",
    ],
    ui: {
      breadcrumbLabel: "Breadcrumb",
      home: "Home",
      country,
      badges: ["Sponsored", "18+ only", country],
      h1Lead: "FuckFinder:",
      h1Highlight: "casual dating",
      h1Tail: `in ${place}`,
      intro: `FuckFinder is listed for adults in ${country} who want casual dating rather than a long-term introduction service. You can browse profiles and send direct messages. This page covers only this one offer.`,
      heroCta: "Continue to the provider",
      heroNote: "18+ only. Prices are on the provider site.",
      disclosure: `This offer is listed for adults in ${country}. Outside ${country} the provider may show a different page. Advertising notice: this page contains a sponsored link. TheDateCompass may earn a commission if you continue to the provider.`,
      disclosureLink: "Affiliate disclosure",
      imageAlt: "Listing image used for FuckFinder, not a verified photo of a member",
      shortEyebrow: "In short",
      shortText: "Casual adult contacts. Confirm the terms on the provider site.",
      facts: [
        { label: "Region", value: country },
        { label: "Focus", value: "Casual dating" },
        { label: "Age", value: "18 and older" },
        { label: "Prices", value: "See provider site" },
      ],
      partnerEyebrow: "Listing",
      partnerTitle: "A casual dating listing for adults",
      partnerLeft: `Someone looking for casual dating in ${country} needs a listing that says so. FuckFinder is the adult option here for encounters and direct connections, rather than a general relationship site.`,
      partnerRight:
        "TheDateCompass does not run the platform, store profiles, or check the provider’s claims. Member counts, ratings, and success rates are left out because no verified source is available.",
      contactsEyebrow: "Features",
      contactsTitle: "Profiles, messages, and encounters",
      contacts: [
        "Casual dating: the listed focus is adult encounters and direct connections, not a broad relationship service.",
        "Profiles: the offer describes browsing profiles. The provider decides which details are visible.",
        "Messages: direct messages are part of the listing. Whether they work without payment is stated only on the provider site.",
      ],
      nicheEyebrow: "Focus",
      nicheTitle: "Casual encounters, not a relationship service",
      nicheBody:
        "People looking for casual dating or adult encounters fall under this listing. FuckFinder is not described here as a long-term matchmaking site. Whether the provider site has its own filters, location tools, or extra categories is stated there and can change. This page does not invent those features.",
      signupEyebrow: "Steps",
      signupTitle: "Signup on the provider site",
      signupIntro: "The exact steps are on the provider site and can change.",
      steps: [
        {
          title: "Register",
          text: "A short signup with an email address or another login, an age confirmation, and a password is typical. The provider decides which fields are required.",
        },
        {
          title: "Create a profile",
          text: "Many services then ask for a display name, an approximate region, a short description, and an optional photo. Share only what you want to be public.",
        },
        {
          title: "Profiles and messages",
          text: "The FuckFinder listing covers browsing profiles and sending direct messages. Whether filters or chat require payment is stated on the provider site.",
        },
      ],
      priceEyebrow: "Pricing",
      priceTitle: "Costs are on the provider site",
      priceBody: [
        "No verified price is available here for FuckFinder. Whether signup has a cost, and which features cost money afterward, is shown only on the current provider site.",
        "Check the term, renewal, and payment method before you confirm a subscription. Cancellation and refunds are set by the provider, not by this overview.",
      ],
      midTitle: "Open the provider site and check it yourself",
      midBody: "Current prices, features, and terms for this casual dating offer are listed only there.",
      midCta: "Review FuckFinder on the provider site",
      midNote: "Sponsored · 18+ only",
      ageTitle: "Adults 18 and older only",
      ageBody: [
        "FuckFinder and this page are only for people 18 or older. Minors must not register. Some profiles may be moderated. We do not claim that every profile is a real person.",
        "If someone quickly asks for payment outside the site, or for private documents, stop the conversation. Report it with the platform’s tools when those tools are available.",
      ],
      privacyEyebrow: "Tips",
      privacyTitle: "Privacy and discretion",
      privacy: [
        {
          title: "Share less",
          text: "A neutral display name, an email address you control, and a photo that does not show your workplace or home reduce the chance of being recognized later. Keep location details vague.",
        },
        {
          title: "Check the privacy policy",
          text: "Read the provider’s privacy policy before you upload photos or contact details. Pay only through the checkout on the provider site. TheDateCompass never sees those details.",
        },
        {
          title: "Be careful meeting",
          text: "The same precautions apply as with any contact from the internet: a public place, your own transport, and the right to leave. This page makes no promise about the safety of individual members.",
        },
      ],
      summaryEyebrow: "Summary",
      summaryTitle: "FuckFinder in short",
      summaryBody: [
        `FuckFinder is an option for adults in ${country} who want to look at casual dating. The listing covers profile browsing and direct messages. Prices and the exact feature set are only on the provider site.`,
        "TheDateCompass publishes this overview as an advertisement and links only this offer. Profiles, payment, and support stay with the operator of FuckFinder.",
      ],
      endCta: "Continue to FuckFinder",
      faqEyebrow: "FAQ",
      faqTitle: "Common questions about FuckFinder",
      faqs: [
        {
          question: "What is FuckFinder?",
          answer:
            "FuckFinder is listed here as an adult platform for casual dating. The listing covers browsing profiles and sending direct messages. TheDateCompass does not operate the platform.",
        },
        {
          question: `Who is casual dating on FuckFinder for in ${country}?`,
          answer: `The listing is for adults 18 or older in ${country} who want casual encounters and direct connections. This page is not a matchmaking service and it does not promise results.`,
        },
        {
          question: "How much does FuckFinder cost?",
          answer:
            "TheDateCompass does not publish prices. Current fees and subscriptions are shown only on the provider site and can change.",
        },
        {
          question: "How discreet is signup?",
          answer:
            "Discretion depends on what you share and on the provider’s settings. Use an email address you control, and read the privacy policy before you upload photos or contact details.",
        },
        {
          question: "Are all profiles real people?",
          answer:
            "That cannot be verified from outside the platform. Some profiles may be moderated. Read the provider’s terms, and do not rely on a claim such as “real profiles only.”",
        },
        {
          question: "Is there an age limit?",
          answer:
            "Yes. FuckFinder and this page are only for people 18 or older. Minors must not register. If a profile seems unclear, stop the conversation.",
        },
        {
          question: "What happens after I click the button?",
          answer:
            "The button sends you through a TheDateCompass redirect to the provider site. TheDateCompass may earn a commission if you sign up there. The provider handles the account, payment, and support.",
        },
      ],
    },
  };
}

function germanPage(input: {
  id: string;
  path: string;
  hreflang: string;
  ogLocale: string;
  countryToken: string;
  goSlug: string;
  hubHref?: string;
  place: string;
  country: string;
  keywordPlace: string;
}): FuckFinderCountryPage {
  const { place, country, keywordPlace } = input;
  return {
    id: input.id,
    path: input.path,
    hreflang: input.hreflang,
    ogLocale: input.ogLocale,
    countryToken: input.countryToken,
    goSlug: input.goSlug,
    hubHref: input.hubHref,
    title: `FuckFinder: Casual-Dating in ${place} | TheDateCompass`,
    description: `FuckFinder für Casual-Dating in ${place}: Profile, Nachrichten und unverbindliche Kontakte. Nur ab 18. Preise auf der Anbieterseite.`,
    keywords: [
      "FuckFinder",
      `Casual Dating ${keywordPlace}`,
      "unverbindliche Kontakte",
      "Erwachsene Dating",
      "direkte Nachrichten",
      "Casual Kontakte",
      "diskret",
      "ab 18",
    ],
    ui: {
      breadcrumbLabel: "Brotkrumen",
      home: "Start",
      country,
      badges: ["Anzeige", "Nur 18+", country],
      h1Lead: "FuckFinder:",
      h1Highlight: "Casual-Dating",
      h1Tail: `in ${place}`,
      intro: `FuckFinder ist für Erwachsene in ${country} eingeordnet, die unverbindliche Kontakte suchen und kein langfristiges Kennenlernen. Profile lassen sich durchsehen, Nachrichten direkt schreiben. Diese Seite stellt nur dieses eine Angebot vor.`,
      heroCta: "Zur Anbieterseite",
      heroNote: "Nur ab 18. Preise siehe Anbieterseite.",
      disclosure: `Dieses Angebot richtet sich an Erwachsene in ${country}. Außerhalb kann die Anbieterseite eine andere Seite anzeigen. Werbehinweis: Diese Seite enthält einen gesponserten Link. TheDateCompass kann eine Provision erhalten, wenn Sie über den Button zur Anbieterseite wechseln.`,
      disclosureLink: "Hinweise zur Werbung",
      imageAlt: "Listenbild für FuckFinder, kein geprüftes Foto eines Mitglieds",
      shortEyebrow: "Kurz gesagt",
      shortText: "Unverbindliche Kontakte für Erwachsene. Konditionen prüfen Sie auf der Anbieterseite.",
      facts: [
        { label: "Region", value: country },
        { label: "Fokus", value: "Casual-Dating" },
        { label: "Alter", value: "Ab 18 Jahren" },
        { label: "Preise", value: "Siehe Anbieterseite" },
      ],
      partnerEyebrow: "Einordnung",
      partnerTitle: "Casual-Dating für Erwachsene",
      partnerLeft: `Wer in ${country} unverbindliche Kontakte sucht, braucht eine Einordnung, die das klar sagt. FuckFinder steht hier für erwachsene Begegnungen und direkte Verbindungen, nicht für eine allgemeine Partnervermittlung.`,
      partnerRight:
        "TheDateCompass betreibt die Plattform nicht, speichert dort keine Profile und kann Zusagen des Anbieters nicht prüfen. Mitgliedszahlen, Bewertungen und Erfolgsquoten werden hier nicht genannt, weil dazu keine geprüfte Quelle vorliegt.",
      contactsEyebrow: "Funktionen",
      contactsTitle: "Profile, Nachrichten und Kontakte",
      contacts: [
        "Casual-Dating: Die gelistete Ausrichtung sind erwachsene Begegnungen und direkte Verbindungen, nicht ein breites Beziehungsportal.",
        "Profile: Das Angebot beschreibt das Durchsehen von Profilen. Welche Angaben sichtbar sind, legt der Anbieter fest.",
        "Nachrichten: Direkte Nachrichten gehören zur Einordnung. Ob sie ohne Bezahlung nutzbar sind, sehen Sie nur auf der Anbieterseite.",
      ],
      nicheEyebrow: "Fokus",
      nicheTitle: "Unverbindliche Kontakte, keine Partnervermittlung",
      nicheBody:
        "Menschen, die Casual-Dating oder unverbindliche Kontakte suchen, fallen unter diese Einordnung. FuckFinder wird hier nicht als langfristige Partnervermittlung beschrieben. Ob die Anbieterseite eigene Filter, Ortsangaben oder weitere Kategorien führt, steht dort und kann sich ändern. Diese Übersicht erfindet keine solchen Funktionen.",
      signupEyebrow: "Ablauf",
      signupTitle: "Anmeldung auf der Anbieterseite",
      signupIntro: "Der konkrete Ablauf steht auf der Anbieterseite und kann sich ändern.",
      steps: [
        {
          title: "Registrieren",
          text: "Üblich ist eine kurze Registrierung mit E-Mail-Adresse oder einem anderen Login, einer Altersbestätigung und einem Passwort. Welche Felder Pflicht sind, entscheidet der Anbieter.",
        },
        {
          title: "Profil anlegen",
          text: "Danach legen viele Dienste ein Profil an: Anzeigename, ungefähre Region, kurze Beschreibung und optional ein Foto. Geben Sie nur an, was Sie selbst öffentlich zeigen möchten.",
        },
        {
          title: "Profile und Nachrichten",
          text: "Die Einordnung von FuckFinder nennt das Durchsehen von Profilen und direkte Nachrichten. Ob Filter oder der Chat kostenpflichtig sind, steht auf der Anbieterseite.",
        },
      ],
      priceEyebrow: "Preise",
      priceTitle: "Kosten auf der Anbieterseite",
      priceBody: [
        "Für FuckFinder liegt hier kein geprüfter Preis vor. Ob die Anmeldung etwas kostet und welche Funktionen danach Geld kosten, steht nur aktuell auf der Anbieterseite.",
        "Achten Sie auf Laufzeit, Verlängerung und Zahlungsart, bevor Sie ein Abo bestätigen. Kündigungsfristen und Erstattungen regelt der Anbieter, nicht diese Übersicht.",
      ],
      midTitle: "Anbieterseite öffnen und selbst prüfen",
      midBody: "Aktuelle Preise, Funktionen und Bedingungen für dieses Casual-Dating-Angebot stehen nur dort.",
      midCta: "FuckFinder auf der Anbieterseite prüfen",
      midNote: "Anzeige · Nur 18+",
      ageTitle: "Nur für Erwachsene ab 18",
      ageBody: [
        "FuckFinder und diese Seite sind nur für Personen ab 18 Jahren. Minderjährige dürfen sich nicht registrieren. Einige Profile können moderiert sein. Eine pauschale Zusage, dass alle Profile echt seien, geben wir nicht.",
        "Wenn ein Gegenüber sehr schnell nach externen Zahlungen oder nach privaten Dokumenten fragt, stoppen Sie das Gespräch. Melden Sie den Fall über die Werkzeuge der Plattform, sofern sie angeboten werden.",
      ],
      privacyEyebrow: "Tipps",
      privacyTitle: "Datenschutz und Diskretion",
      privacy: [
        {
          title: "Wenig preisgeben",
          text: "Ein neutraler Anzeigename, eine eigene E-Mail-Adresse und ein Foto ohne Arbeitsplatz oder Wohnung senken das Risiko, später unerwünscht erkannt zu werden. Standortangaben sollten ungenau bleiben.",
        },
        {
          title: "Datenschutz prüfen",
          text: "Lesen Sie die Datenschutzerklärung des Anbieters, bevor Sie Fotos oder Kontaktdaten hochladen. Zahlen Sie nur über den Zahlungsweg der Anbieterseite. TheDateCompass sieht diese Inhalte nicht.",
        },
        {
          title: "Vorsicht bei Treffen",
          text: "Für Treffen gelten dieselben Vorsichtsmaßnahmen wie bei jedem anderen Kontakt aus dem Internet: öffentlicher Ort, eigene Anreise und das Recht, abzubrechen. Diese Seite macht keine Zusage zur Sicherheit einzelner Mitglieder.",
        },
      ],
      summaryEyebrow: "Zusammenfassung",
      summaryTitle: "Fazit zu FuckFinder",
      summaryBody: [
        `FuckFinder ist eine Option für Erwachsene in ${country}, die Casual-Dating prüfen möchten. Gelistet sind Profilsuche und direkte Nachrichten. Preise und der genaue Funktionsumfang stehen nur auf der Anbieterseite.`,
        "TheDateCompass stellt diesen Überblick als Anzeige bereit und verlinkt nur dieses Angebot. Verantwortung für Profile, Zahlung und Support trägt der Betreiber von FuckFinder.",
      ],
      endCta: "Weiter zu FuckFinder",
      faqEyebrow: "FAQ",
      faqTitle: "Häufige Fragen zu FuckFinder",
      faqs: [
        {
          question: "Was ist FuckFinder?",
          answer:
            "FuckFinder ist in diesem Angebot als Plattform für Casual-Dating unter Erwachsenen eingeordnet. Gelistet sind das Durchsehen von Profilen und direkte Nachrichten. TheDateCompass betreibt die Plattform nicht.",
        },
        {
          question: `Für wen ist Casual-Dating bei FuckFinder in ${country}?`,
          answer: `Die Einordnung gilt für Erwachsene ab 18 Jahren in ${country}, die unverbindliche Kontakte und direkte Verbindungen suchen. Die Seite ist kein Partnervermittlungsdienst mit Erfolgsgarantie.`,
        },
        {
          question: "Was kostet FuckFinder?",
          answer:
            "TheDateCompass nennt keine Preise. Aktuelle Gebühren und Abos stehen nur auf der Anbieterseite und können sich ändern.",
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
            "Ja. FuckFinder und diese Seite sind ausschließlich für Personen ab 18 Jahren. Minderjährige dürfen sich nicht registrieren. Wenn ein Profil unklar wirkt, brechen Sie den Kontakt ab.",
        },
        {
          question: "Was passiert nach dem Klick auf den Button?",
          answer:
            "Der Button führt über eine Weiterleitung von TheDateCompass zur Anbieterseite. TheDateCompass kann eine Provision erhalten, wenn Sie sich dort anmelden. Konto, Bezahlung und Support stellt der Anbieter bereit.",
        },
      ],
    },
  };
}

function dutchPage(input: {
  id: string;
  path: string;
  hreflang: string;
  ogLocale: string;
  countryToken: string;
  goSlug: string;
  place: string;
  country: string;
  keywordPlace: string;
}): FuckFinderCountryPage {
  const { place, country, keywordPlace } = input;
  return {
    id: input.id,
    path: input.path,
    hreflang: input.hreflang,
    ogLocale: input.ogLocale,
    countryToken: input.countryToken,
    goSlug: input.goSlug,
    title: `FuckFinder: Casual dating in ${place} | TheDateCompass`,
    description: `FuckFinder voor casual dating in ${place}: profielen, directe berichten en vrijblijvende contacten. Alleen 18+. Prijzen bij de aanbieder.`,
    keywords: [
      "FuckFinder",
      `casual dating ${keywordPlace}`,
      "vrijblijvende contacten",
      "volwassen dating",
      "directe berichten",
      "casual contacten",
      "discreet",
      "18+",
    ],
    ui: {
      breadcrumbLabel: "Broodkruimels",
      home: "Home",
      country,
      badges: ["Gesponsord", "Alleen 18+", country],
      h1Lead: "FuckFinder:",
      h1Highlight: "casual dating",
      h1Tail: `in ${place}`,
      intro: `FuckFinder staat hier voor volwassenen in ${country} die vrijblijvende contacten zoeken en geen langdurige kennismaking. U kunt profielen bekijken en directe berichten sturen. Deze pagina behandelt alleen dit ene aanbod.`,
      heroCta: "Naar de aanbieder",
      heroNote: "Alleen 18+. Prijzen staan bij de aanbieder.",
      disclosure: `Dit aanbod is bedoeld voor volwassenen in ${country}. Buiten ${country} kan de aanbieder een andere pagina tonen. Advertentievermelding: deze pagina bevat een gesponsorde link. TheDateCompass kan een vergoeding ontvangen als u doorgaat naar de aanbieder.`,
      disclosureLink: "Affiliateverklaring",
      imageAlt: "Afbeelding bij de FuckFinder-vermelding, geen gecontroleerde foto van een lid",
      shortEyebrow: "Kort",
      shortText: "Vrijblijvende contacten voor volwassenen. Voorwaarden staan bij de aanbieder.",
      facts: [
        { label: "Regio", value: country },
        { label: "Focus", value: "Casual dating" },
        { label: "Leeftijd", value: "18 jaar en ouder" },
        { label: "Prijzen", value: "Zie de aanbieder" },
      ],
      partnerEyebrow: "Vermelding",
      partnerTitle: "Casual dating voor volwassenen",
      partnerLeft: `Wie in ${country} vrijblijvende contacten zoekt, heeft een vermelding nodig die dat duidelijk zegt. FuckFinder staat hier voor ontmoetingen tussen volwassenen en directe verbindingen, niet voor een algemene relatiesite.`,
      partnerRight:
        "TheDateCompass beheert het platform niet, bewaart daar geen profielen en controleert de claims van de aanbieder niet. Ledenaantallen, beoordelingen en succescijfers staan hier niet, omdat er geen gecontroleerde bron is.",
      contactsEyebrow: "Functies",
      contactsTitle: "Profielen, berichten en contacten",
      contacts: [
        "Casual dating: de vermelde focus zijn ontmoetingen tussen volwassenen en directe verbindingen, geen brede relatieservice.",
        "Profielen: het aanbod beschrijft het bekijken van profielen. De aanbieder bepaalt welke gegevens zichtbaar zijn.",
        "Berichten: directe berichten horen bij de vermelding. Of ze zonder betaling werken, staat alleen op de site van de aanbieder.",
      ],
      nicheEyebrow: "Focus",
      nicheTitle: "Vrijblijvende contacten, geen relatiemakelaar",
      nicheBody:
        "Mensen die casual dating of vrijblijvende contacten zoeken, vallen onder deze vermelding. FuckFinder wordt hier niet beschreven als een dienst voor langdurige relaties. Of de site van de aanbieder eigen filters, locatiehulpmiddelen of extra categorieën heeft, staat daar en kan veranderen. Deze pagina verzint die functies niet.",
      signupEyebrow: "Stappen",
      signupTitle: "Aanmelden bij de aanbieder",
      signupIntro: "De precieze stappen staan op de site van de aanbieder en kunnen veranderen.",
      steps: [
        {
          title: "Registreren",
          text: "Een korte aanmelding met een e-mailadres of een andere login, een leeftijdsbevestiging en een wachtwoord is gebruikelijk. De aanbieder bepaalt welke velden verplicht zijn.",
        },
        {
          title: "Profiel maken",
          text: "Daarna vragen veel diensten om een weergavenaam, een globale regio, een korte beschrijving en een optionele foto. Deel alleen wat u zelf openbaar wilt maken.",
        },
        {
          title: "Profielen en berichten",
          text: "De vermelding van FuckFinder omvat het bekijken van profielen en het sturen van directe berichten. Of filters of chat betaling vragen, staat bij de aanbieder.",
        },
      ],
      priceEyebrow: "Prijzen",
      priceTitle: "Kosten staan bij de aanbieder",
      priceBody: [
        "Voor FuckFinder is hier geen gecontroleerde prijs beschikbaar. Of aanmelden iets kost en welke functies daarna geld kosten, staat alleen op de actuele site van de aanbieder.",
        "Controleer de looptijd, verlenging en betaalmethode voordat u een abonnement bevestigt. Opzegging en terugbetaling regelt de aanbieder, niet dit overzicht.",
      ],
      midTitle: "Open de site van de aanbieder en controleer zelf",
      midBody: "Actuele prijzen, functies en voorwaarden voor dit casual-datingaanbod staan alleen daar.",
      midCta: "FuckFinder bij de aanbieder bekijken",
      midNote: "Gesponsord · Alleen 18+",
      ageTitle: "Alleen voor volwassenen van 18 jaar en ouder",
      ageBody: [
        "FuckFinder en deze pagina zijn alleen voor mensen van 18 jaar en ouder. Minderjarigen mogen zich niet registreren. Sommige profielen kunnen gemodereerd zijn. We beweren niet dat elk profiel een echt persoon is.",
        "Als iemand snel om betaling buiten de site vraagt, of om privédocumenten, stop dan het gesprek. Meld het met de hulpmiddelen van het platform wanneer die beschikbaar zijn.",
      ],
      privacyEyebrow: "Tips",
      privacyTitle: "Privacy en discretie",
      privacy: [
        {
          title: "Weinig delen",
          text: "Een neutrale weergavenaam, een e-mailadres dat u beheert en een foto zonder werkplek of woning verkleinen de kans dat u later ongewenst herkend wordt. Houd locatiegegevens vaag.",
        },
        {
          title: "Privacybeleid lezen",
          text: "Lees het privacybeleid van de aanbieder voordat u foto’s of contactgegevens uploadt. Betaal alleen via de kassa op de site van de aanbieder. TheDateCompass ziet die gegevens niet.",
        },
        {
          title: "Voorzichtig afspreken",
          text: "Dezelfde voorzorg geldt als bij elk contact via internet: een openbare plek, eigen vervoer en het recht om te vertrekken. Deze pagina doet geen belofte over de veiligheid van individuele leden.",
        },
      ],
      summaryEyebrow: "Samenvatting",
      summaryTitle: "FuckFinder in het kort",
      summaryBody: [
        `FuckFinder is een optie voor volwassenen in ${country} die casual dating willen bekijken. De vermelding omvat profielen en directe berichten. Prijzen en de precieze functies staan alleen bij de aanbieder.`,
        "TheDateCompass publiceert dit overzicht als advertentie en linkt alleen dit aanbod. Profielen, betaling en support blijven bij de exploitant van FuckFinder.",
      ],
      endCta: "Verder naar FuckFinder",
      faqEyebrow: "FAQ",
      faqTitle: "Veelgestelde vragen over FuckFinder",
      faqs: [
        {
          question: "Wat is FuckFinder?",
          answer:
            "FuckFinder staat hier als platform voor casual dating tussen volwassenen. De vermelding omvat het bekijken van profielen en het sturen van directe berichten. TheDateCompass exploiteert het platform niet.",
        },
        {
          question: `Voor wie is casual dating op FuckFinder in ${country}?`,
          answer: `De vermelding is voor volwassenen van 18 jaar en ouder in ${country} die vrijblijvende contacten en directe verbindingen zoeken. Deze pagina is geen relatiebemiddeling en belooft geen resultaat.`,
        },
        {
          question: "Wat kost FuckFinder?",
          answer:
            "TheDateCompass publiceert geen prijzen. Actuele kosten en abonnementen staan alleen op de site van de aanbieder en kunnen veranderen.",
        },
        {
          question: "Hoe discreet is aanmelden?",
          answer:
            "Discretie hangt af van wat u deelt en van de instellingen van de aanbieder. Gebruik een e-mailadres dat u beheert en lees het privacybeleid voordat u foto’s of contactgegevens uploadt.",
        },
        {
          question: "Zijn alle profielen echte personen?",
          answer:
            "Dat is van buiten het platform niet te controleren. Sommige profielen kunnen gemodereerd zijn. Lees de voorwaarden van de aanbieder en vertrouw niet op een claim als “alleen echte profielen”.",
        },
        {
          question: "Is er een leeftijdsgrens?",
          answer:
            "Ja. FuckFinder en deze pagina zijn alleen voor mensen van 18 jaar en ouder. Minderjarigen mogen zich niet registreren. Als een profiel onduidelijk lijkt, stop dan het gesprek.",
        },
        {
          question: "Wat gebeurt er na de knop?",
          answer:
            "De knop gaat via een doorverwijzing van TheDateCompass naar de site van de aanbieder. TheDateCompass kan een vergoeding krijgen als u zich daar aanmeldt. Account, betaling en support regelt de aanbieder.",
        },
      ],
    },
  };
}

export const fuckFinderCountryPages: FuckFinderCountryPage[] = [
  {
    id: "norway",
    path: "/no/fuckfinder",
    hreflang: "nb-NO",
    ogLocale: "nb_NO",
    countryToken: "norway",
    goSlug: "fuckfinder-no",
    title: "FuckFinder: Casual dating i Norge | TheDateCompass",
    description:
      "FuckFinder for casual dating i Norge: profiler, direkte meldinger og uforpliktende møter. Kun for voksne over 18. Prisene står hos leverandøren.",
    keywords: [
      "FuckFinder",
      "casual dating Norge",
      "uforpliktende dating",
      "voksen dating",
      "direkte meldinger",
      "profiler",
      "diskret",
      "18+",
    ],
    ui: {
      breadcrumbLabel: "Brødsmulesti",
      home: "Hjem",
      country: "Norge",
      badges: ["Sponset", "Kun 18+", "Norge"],
      h1Lead: "FuckFinder:",
      h1Highlight: "casual dating",
      h1Tail: "i Norge",
      intro:
        "FuckFinder er oppført for voksne i Norge som vil ha uforpliktende kontakter, ikke en tjeneste for langsiktig kjennskap. Du kan se gjennom profiler og sende direkte meldinger. Denne siden gjelder bare dette ene tilbudet.",
      heroCta: "Gå til leverandøren",
      heroNote: "Kun over 18. Priser står hos leverandøren.",
      disclosure:
        "Dette tilbudet er listet for voksne i Norge. Utenfor Norge kan leverandøren vise en annen side. Reklamemerknad: siden inneholder en sponset lenke. TheDateCompass kan få provisjon hvis du går videre til leverandøren.",
      disclosureLink: "Informasjon om samarbeidslenker",
      imageAlt: "Bilde brukt for FuckFinder-oppføringen, ikke et bekreftet medlemsfoto",
      shortEyebrow: "Kort sagt",
      shortText: "Uforpliktende kontakter for voksne. Vilkårene står hos leverandøren.",
      facts: [
        { label: "Region", value: "Norge" },
        { label: "Fokus", value: "Casual dating" },
        { label: "Alder", value: "18 år og eldre" },
        { label: "Priser", value: "Se leverandøren" },
      ],
      partnerEyebrow: "Oppføring",
      partnerTitle: "Casual dating for voksne i Norge",
      partnerLeft:
        "Den som søker uforpliktende dating i Norge, trenger en oppføring som sier det rett ut. FuckFinder står her for voksne møter og direkte kontakt, ikke for en generell parformingstjeneste.",
      partnerRight:
        "TheDateCompass driver ikke plattformen, lagrer ikke profiler der og kan ikke kontrollere leverandørens påstander. Medlemstall, vurderinger og suksessrater er utelatt fordi ingen bekreftet kilde finnes.",
      contactsEyebrow: "Funksjoner",
      contactsTitle: "Profiler, meldinger og møter",
      contacts: [
        "Casual dating: den oppgitte retningen er voksne møter og direkte kontakt, ikke en bred relasjonstjeneste.",
        "Profiler: tilbudet beskriver gjennomgang av profiler. Leverandøren bestemmer hvilke opplysninger som vises.",
        "Meldinger: direkte meldinger er en del av oppføringen. Om de kan brukes uten betaling, står bare hos leverandøren.",
      ],
      nicheEyebrow: "Fokus",
      nicheTitle: "Uforpliktende møter, ikke matchmaking",
      nicheBody:
        "Folk som søker casual dating eller uforpliktende kontakter, hører til denne oppføringen. FuckFinder beskrives ikke her som en tjeneste for langvarige forhold. Om leverandørens nettsted har egne filtre, stedsverktøy eller flere kategorier, står det der og kan endres. Denne siden finner ikke opp slike funksjoner.",
      signupEyebrow: "Steg",
      signupTitle: "Registrering hos leverandøren",
      signupIntro: "De nøyaktige stegene står hos leverandøren og kan endres.",
      steps: [
        {
          title: "Registrer deg",
          text: "En kort registrering med e-post eller en annen innlogging, aldersbekreftelse og passord er vanlig. Leverandøren bestemmer hvilke felt som er påkrevd.",
        },
        {
          title: "Lag en profil",
          text: "Deretter ber mange tjenester om visningsnavn, omtrentlig område, en kort beskrivelse og et valgfritt bilde. Del bare det du selv vil ha offentlig.",
        },
        {
          title: "Profiler og meldinger",
          text: "FuckFinder-oppføringen dekker gjennomgang av profiler og direkte meldinger. Om filtre eller chat koster penger, står hos leverandøren.",
        },
      ],
      priceEyebrow: "Pris",
      priceTitle: "Kostnader står hos leverandøren",
      priceBody: [
        "Ingen bekreftet pris for FuckFinder finnes her. Om registrering koster noe, og hvilke funksjoner som koster penger etterpå, vises bare på leverandørens aktuelle nettsted.",
        "Sjekk varighet, fornyelse og betalingsmåte før du bekrefter et abonnement. Oppsigelse og refusjon bestemmes av leverandøren, ikke av denne oversikten.",
      ],
      midTitle: "Åpne leverandørens nettsted og sjekk selv",
      midBody: "Aktuelle priser, funksjoner og vilkår for dette casual dating-tilbudet står bare der.",
      midCta: "Se FuckFinder hos leverandøren",
      midNote: "Sponset · Kun 18+",
      ageTitle: "Bare for voksne over 18",
      ageBody: [
        "FuckFinder og denne siden er bare for personer som er 18 år eller eldre. Mindreårige skal ikke registrere seg. Noen profiler kan være moderert. Vi påstår ikke at hver profil er en ekte person.",
        "Hvis noen raskt ber om betaling utenfor nettstedet, eller om private dokumenter, avslutt samtalen. Rapporter det med plattformens verktøy når de finnes.",
      ],
      privacyEyebrow: "Tips",
      privacyTitle: "Personvern og diskresjon",
      privacy: [
        {
          title: "Del mindre",
          text: "Et nøytralt visningsnavn, en e-post du kontrollerer, og et bilde uten arbeidsplass eller hjem reduserer sjansen for å bli gjenkjent senere. Hold stedsopplysninger vage.",
        },
        {
          title: "Les personvernerklæringen",
          text: "Les leverandørens personvernerklæring før du laster opp bilder eller kontaktopplysninger. Betal bare via kassen på leverandørens nettsted. TheDateCompass ser ikke disse opplysningene.",
        },
        {
          title: "Vær forsiktig med møter",
          text: "Samme forsiktighet gjelder som ved enhver kontakt fra internett: et offentlig sted, egen transport og retten til å dra. Denne siden lover ingenting om sikkerheten til enkeltmedlemmer.",
        },
      ],
      summaryEyebrow: "Oppsummering",
      summaryTitle: "FuckFinder i korte trekk",
      summaryBody: [
        "FuckFinder er et alternativ for voksne i Norge som vil se på casual dating. Oppføringen dekker profilsøk og direkte meldinger. Priser og det nøyaktige funksjonssettet finnes bare hos leverandøren.",
        "TheDateCompass publiserer denne oversikten som reklame og lenker bare til dette tilbudet. Profiler, betaling og support ligger hos den som driver FuckFinder.",
      ],
      endCta: "Gå videre til FuckFinder",
      faqEyebrow: "FAQ",
      faqTitle: "Vanlige spørsmål om FuckFinder",
      faqs: [
        {
          question: "Hva er FuckFinder?",
          answer:
            "FuckFinder er oppført her som en plattform for casual dating mellom voksne. Oppføringen dekker gjennomgang av profiler og direkte meldinger. TheDateCompass driver ikke plattformen.",
        },
        {
          question: "Hvem er casual dating på FuckFinder for i Norge?",
          answer:
            "Oppføringen er for voksne over 18 år i Norge som vil ha uforpliktende kontakter og direkte forbindelser. Siden er ikke en matchmaking-tjeneste og lover ikke resultater.",
        },
        {
          question: "Hva koster FuckFinder?",
          answer:
            "TheDateCompass oppgir ingen priser. Gjeldende gebyrer og abonnement vises bare hos leverandøren og kan endres.",
        },
        {
          question: "Hvor diskret er registreringen?",
          answer:
            "Diskresjon avhenger av hva du deler og av leverandørens innstillinger. Bruk en e-post du kontrollerer, og les personvernerklæringen før du laster opp bilder eller kontaktopplysninger.",
        },
        {
          question: "Er alle profiler ekte personer?",
          answer:
            "Det kan ikke bekreftes utenfra. Noen profiler kan være moderert. Les leverandørens vilkår, og stol ikke på et utsagn som «bare ekte profiler».",
        },
        {
          question: "Finnes det en aldersgrense?",
          answer:
            "Ja. FuckFinder og denne siden er bare for personer over 18 år. Mindreårige skal ikke registrere seg. Hvis en profil virker uklar, avslutt kontakten.",
        },
        {
          question: "Hva skjer etter at jeg trykker på knappen?",
          answer:
            "Knappen sender deg via en viderekobling fra TheDateCompass til leverandørens nettsted. TheDateCompass kan få provisjon hvis du registrerer deg der. Leverandøren håndterer konto, betaling og support.",
        },
      ],
    },
  },
  {
    id: "denmark",
    path: "/dk/fuckfinder",
    hreflang: "da-DK",
    ogLocale: "da_DK",
    countryToken: "denmark",
    goSlug: "fuckfinder-dk",
    hubHref: "/denmark",
    title: "FuckFinder: Casual dating i Danmark | TheDateCompass",
    description:
      "FuckFinder til casual dating i Danmark: profiler, direkte beskeder og uforpligtende møder. Kun for voksne over 18. Priser står hos udbyderen.",
    keywords: [
      "FuckFinder",
      "casual dating Danmark",
      "uforpligtende dating",
      "voksen dating",
      "direkte beskeder",
      "profiler",
      "diskret",
      "18+",
    ],
    ui: {
      breadcrumbLabel: "Brødkrumme",
      home: "Hjem",
      country: "Danmark",
      badges: ["Sponsoreret", "Kun 18+", "Danmark"],
      h1Lead: "FuckFinder:",
      h1Highlight: "casual dating",
      h1Tail: "i Danmark",
      intro:
        "FuckFinder er opført for voksne i Danmark, der vil have uforpligtende kontakter og ikke en tjeneste til længere bekendtskab. Du kan gennemse profiler og sende direkte beskeder. Siden dækker kun dette ene tilbud.",
      heroCta: "Gå til udbyderen",
      heroNote: "Kun over 18. Priser står hos udbyderen.",
      disclosure:
        "Tilbuddet er listet for voksne i Danmark. Uden for Danmark kan udbyderen vise en anden side. Reklamebemærkning: siden indeholder et sponsoreret link. TheDateCompass kan få provision, hvis du går videre til udbyderen.",
      disclosureLink: "Oplysning om samarbejdslinks",
      imageAlt: "Billede brugt til FuckFinder-opslaget, ikke et bekræftet medlemsfoto",
      shortEyebrow: "Kort fortalt",
      shortText: "Uforpligtende kontakter for voksne. Vilkårene står hos udbyderen.",
      facts: [
        { label: "Region", value: "Danmark" },
        { label: "Fokus", value: "Casual dating" },
        { label: "Alder", value: "18 år og derover" },
        { label: "Priser", value: "Se udbyderen" },
      ],
      partnerEyebrow: "Opslag",
      partnerTitle: "Casual dating for voksne i Danmark",
      partnerLeft:
        "Den, der søger uforpligtende dating i Danmark, har brug for et opslag, der siger det tydeligt. FuckFinder står her for voksne møder og direkte kontakt, ikke for en almindelig parformidling.",
      partnerRight:
        "TheDateCompass driver ikke platformen, gemmer ikke profiler dér og kan ikke kontrollere udbyderens påstande. Medlemstal, vurderinger og succesrater er udeladt, fordi der ikke findes en bekræftet kilde.",
      contactsEyebrow: "Funktioner",
      contactsTitle: "Profiler, beskeder og møder",
      contacts: [
        "Casual dating: den angivne retning er voksne møder og direkte kontakt, ikke en bred relationstjeneste.",
        "Profiler: tilbuddet beskriver gennemsyn af profiler. Udbyderen bestemmer, hvilke oplysninger der vises.",
        "Beskeder: direkte beskeder er en del af opslaget. Om de virker uden betaling, står kun hos udbyderen.",
      ],
      nicheEyebrow: "Fokus",
      nicheTitle: "Uforpligtende møder, ikke matchmaking",
      nicheBody:
        "Folk, der søger casual dating eller uforpligtende kontakter, hører under dette opslag. FuckFinder beskrives ikke her som en tjeneste til langvarige forhold. Om udbyderens side har egne filtre, stedværktøjer eller flere kategorier, står der og kan ændre sig. Denne side opfinder ikke de funktioner.",
      signupEyebrow: "Trin",
      signupTitle: "Tilmelding hos udbyderen",
      signupIntro: "De præcise trin står hos udbyderen og kan ændre sig.",
      steps: [
        {
          title: "Registrer dig",
          text: "En kort tilmelding med e-mail eller et andet login, aldersbekræftelse og adgangskode er almindelig. Udbyderen bestemmer, hvilke felter der er påkrævet.",
        },
        {
          title: "Opret en profil",
          text: "Derefter beder mange tjenester om et visningsnavn, et omtrentligt område, en kort beskrivelse og et valgfrit foto. Del kun det, du selv vil have offentligt.",
        },
        {
          title: "Profiler og beskeder",
          text: "FuckFinder-opslaget dækker gennemsyn af profiler og direkte beskeder. Om filtre eller chat koster penge, står hos udbyderen.",
        },
      ],
      priceEyebrow: "Pris",
      priceTitle: "Omkostninger står hos udbyderen",
      priceBody: [
        "Der findes ingen bekræftet pris for FuckFinder her. Om tilmelding koster noget, og hvilke funktioner der koster penge bagefter, vises kun på udbyderens aktuelle side.",
        "Tjek løbetid, fornyelse og betalingsmåde, før du bekræfter et abonnement. Opsigelse og tilbagebetaling fastsættes af udbyderen, ikke af denne oversigt.",
      ],
      midTitle: "Åbn udbyderens side og tjek selv",
      midBody: "Aktuelle priser, funktioner og vilkår for dette casual dating-tilbud står kun dér.",
      midCta: "Se FuckFinder hos udbyderen",
      midNote: "Sponsoreret · Kun 18+",
      ageTitle: "Kun for voksne over 18",
      ageBody: [
        "FuckFinder og denne side er kun for personer på 18 år eller derover. Mindreårige må ikke registrere sig. Nogle profiler kan være modereret. Vi påstår ikke, at hver profil er en rigtig person.",
        "Hvis nogen hurtigt beder om betaling uden for siden eller om private dokumenter, så stop samtalen. Rapportér det med platformens værktøjer, når de findes.",
      ],
      privacyEyebrow: "Tips",
      privacyTitle: "Privatliv og diskretion",
      privacy: [
        {
          title: "Del mindre",
          text: "Et neutralt visningsnavn, en e-mail du kontrollerer, og et foto uden arbejdsplads eller hjem mindsker risikoen for at blive genkendt senere. Hold stedoplysninger vage.",
        },
        {
          title: "Læs privatlivspolitikken",
          text: "Læs udbyderens privatlivspolitik, før du uploader fotos eller kontaktoplysninger. Betal kun via kassen på udbyderens side. TheDateCompass ser ikke de oplysninger.",
        },
        {
          title: "Vær forsigtig med møder",
          text: "Samme forsigtighed gælder som ved enhver kontakt fra internettet: et offentligt sted, egen transport og retten til at gå. Siden lover intet om enkelte medlemmers sikkerhed.",
        },
      ],
      summaryEyebrow: "Opsummering",
      summaryTitle: "FuckFinder i korte træk",
      summaryBody: [
        "FuckFinder er en mulighed for voksne i Danmark, der vil se på casual dating. Opslaget dækker profilsøgning og direkte beskeder. Priser og det præcise funktionssæt findes kun hos udbyderen.",
        "TheDateCompass udgiver denne oversigt som reklame og linker kun til dette tilbud. Profiler, betaling og support ligger hos den, der driver FuckFinder.",
      ],
      endCta: "Videre til FuckFinder",
      faqEyebrow: "FAQ",
      faqTitle: "Almindelige spørgsmål om FuckFinder",
      faqs: [
        {
          question: "Hvad er FuckFinder?",
          answer:
            "FuckFinder er opført her som en platform til casual dating mellem voksne. Opslaget dækker gennemsyn af profiler og direkte beskeder. TheDateCompass driver ikke platformen.",
        },
        {
          question: "Hvem er casual dating på FuckFinder til i Danmark?",
          answer:
            "Opslaget er for voksne over 18 år i Danmark, der vil have uforpligtende kontakter og direkte forbindelser. Siden er ikke en matchmaking-tjeneste og lover ikke resultater.",
        },
        {
          question: "Hvad koster FuckFinder?",
          answer:
            "TheDateCompass oplyser ingen priser. Gældende gebyrer og abonnementer vises kun hos udbyderen og kan ændre sig.",
        },
        {
          question: "Hvor diskret er tilmeldingen?",
          answer:
            "Diskretion afhænger af, hvad du deler, og af udbyderens indstillinger. Brug en e-mail, du kontrollerer, og læs privatlivspolitikken, før du uploader fotos eller kontaktoplysninger.",
        },
        {
          question: "Er alle profiler rigtige personer?",
          answer:
            "Det kan ikke bekræftes udefra. Nogle profiler kan være modereret. Læs udbyderens vilkår, og stol ikke på et udsagn som «kun rigtige profiler».",
        },
        {
          question: "Er der en aldersgrænse?",
          answer:
            "Ja. FuckFinder og denne side er kun for personer over 18 år. Mindreårige må ikke registrere sig. Hvis en profil virker uklar, så stop kontakten.",
        },
        {
          question: "Hvad sker der, når jeg klikker på knappen?",
          answer:
            "Knappen sender dig via en omdirigering fra TheDateCompass til udbyderens side. TheDateCompass kan få provision, hvis du tilmelder dig dér. Udbyderen håndterer konto, betaling og support.",
        },
      ],
    },
  },
  germanPage({
    id: "switzerland",
    path: "/ch/fuckfinder",
    hreflang: "de-CH",
    ogLocale: "de_CH",
    countryToken: "switzerland",
    goSlug: "fuckfinder-ch",
    place: "der Schweiz",
    country: "Schweiz",
    keywordPlace: "Schweiz",
  }),
  germanPage({
    id: "germany",
    path: "/de/fuckfinder",
    hreflang: "de-DE",
    ogLocale: "de_DE",
    countryToken: "germany",
    goSlug: "fuckfinder-de",
    hubHref: "/germany",
    place: "Deutschland",
    country: "Deutschland",
    keywordPlace: "Deutschland",
  }),
  {
    id: "finland",
    path: "/fi/fuckfinder",
    hreflang: "fi-FI",
    ogLocale: "fi_FI",
    countryToken: "finland",
    goSlug: "fuckfinder-fi",
    title: "FuckFinder: Rento deittailu Suomessa | TheDateCompass",
    description:
      "FuckFinder rentoa deittailua varten Suomessa: profiilit, suorat viestit ja vapaaehtoiset tapaamiset. Vain yli 18-vuotiaille. Hinnat palveluntarjoajalla.",
    keywords: [
      "FuckFinder",
      "rento deittailu Suomi",
      "casual dating Suomi",
      "aikuisten deittailu",
      "suorat viestit",
      "profiilit",
      "hienovarainen",
      "18+",
    ],
    ui: {
      breadcrumbLabel: "Murupolku",
      home: "Etusivu",
      country: "Suomi",
      badges: ["Sponsoroitu", "Vain 18+", "Suomi"],
      h1Lead: "FuckFinder:",
      h1Highlight: "rento deittailu",
      h1Tail: "Suomessa",
      intro:
        "FuckFinder on listattu aikuisille Suomessa, jotka etsivät rentoa deittailua eivätkä pitkäaikaista tutustumispalvelua. Profiileja voi selata ja viestejä lähettää suoraan. Tämä sivu käsittelee vain tätä yhtä tarjousta.",
      heroCta: "Siirry palveluntarjoajalle",
      heroNote: "Vain yli 18-vuotiaille. Hinnat palveluntarjoajalla.",
      disclosure:
        "Tarjous on listattu aikuisille Suomessa. Suomen ulkopuolella palveluntarjoaja voi näyttää toisen sivun. Mainosilmoitus: sivulla on sponsoroitu linkki. TheDateCompass voi saada palkkion, jos jatkat palveluntarjoajalle.",
      disclosureLink: "Kumppanuuslinkkien ilmoitus",
      imageAlt: "FuckFinder-listauksen kuva, ei vahvistettu jäsenen valokuva",
      shortEyebrow: "Lyhyesti",
      shortText: "Rentoja aikuiskontakteja. Ehdot ovat palveluntarjoajalla.",
      facts: [
        { label: "Alue", value: "Suomi" },
        { label: "Painotus", value: "Rento deittailu" },
        { label: "Ikä", value: "18 vuotta ja vanhemmat" },
        { label: "Hinnat", value: "Katso palveluntarjoaja" },
      ],
      partnerEyebrow: "Listaus",
      partnerTitle: "Rento deittailu aikuisille Suomessa",
      partnerLeft:
        "Rentoa deittailua Suomessa etsivä tarvitsee listauksen, joka sanoo sen suoraan. FuckFinder on tässä aikuisten tapaamisiin ja suoriin yhteyksiin, ei yleiseen parisuhdepalveluun.",
      partnerRight:
        "TheDateCompass ei ylläpidä alustaa, ei tallenna siellä profiileja eikä tarkista palveluntarjoajan väitteitä. Jäsenmääriä, arvioita ja onnistumisprosentteja ei mainita, koska vahvistettua lähdettä ei ole.",
      contactsEyebrow: "Ominaisuudet",
      contactsTitle: "Profiilit, viestit ja tapaamiset",
      contacts: [
        "Rento deittailu: listattu painotus on aikuisten tapaamiset ja suorat yhteydet, ei laaja parisuhdepalvelu.",
        "Profiilit: tarjous kuvaa profiilien selaamista. Palveluntarjoaja päättää, mitkä tiedot näkyvät.",
        "Viestit: suorat viestit kuuluvat listaukseen. Toimivatko ne ilman maksua, kerrotaan vain palveluntarjoajan sivulla.",
      ],
      nicheEyebrow: "Painotus",
      nicheTitle: "Vapaaehtoiset tapaamiset, ei parisuhdevälitystä",
      nicheBody:
        "Rentoa deittailua tai vapaaehtoisia kontakteja etsivät kuuluvat tähän listaukseen. FuckFinderia ei kuvata tässä pitkäaikaisena matchmaking-palveluna. Onko palveluntarjoajalla omia suodattimia, sijaintityökaluja tai lisäluokkia, kerrotaan siellä ja se voi muuttua. Tämä sivu ei keksi sellaisia ominaisuuksia.",
      signupEyebrow: "Vaiheet",
      signupTitle: "Rekisteröityminen palveluntarjoajalla",
      signupIntro: "Tarkat vaiheet ovat palveluntarjoajan sivulla ja voivat muuttua.",
      steps: [
        {
          title: "Rekisteröidy",
          text: "Lyhyt rekisteröityminen sähköpostilla tai muulla kirjautumisella, iän vahvistus ja salasana on tavanomaista. Palveluntarjoaja päättää, mitkä kentät ovat pakollisia.",
        },
        {
          title: "Luo profiili",
          text: "Sen jälkeen monet palvelut pyytävät näyttönimeä, summittaista aluetta, lyhyttä kuvausta ja valinnaista kuvaa. Jaa vain se, minkä haluat julkiseksi.",
        },
        {
          title: "Profiilit ja viestit",
          text: "FuckFinder-listaus kattaa profiilien selaamisen ja suorat viestit. Maksavatko suodattimet tai keskustelu, kerrotaan palveluntarjoajalla.",
        },
      ],
      priceEyebrow: "Hinta",
      priceTitle: "Kulut ovat palveluntarjoajalla",
      priceBody: [
        "FuckFinderille ei ole tässä vahvistettua hintaa. Maksaako rekisteröityminen ja mitkä ominaisuudet maksavat sen jälkeen, näkyy vain palveluntarjoajan ajantasaisella sivulla.",
        "Tarkista kesto, uusiminen ja maksutapa ennen kuin vahvistat tilauksen. Peruutus ja hyvitykset päättää palveluntarjoaja, ei tämä yhteenveto.",
      ],
      midTitle: "Avaa palveluntarjoajan sivu ja tarkista itse",
      midBody: "Tämän rennon deittailun ajantasaiset hinnat, ominaisuudet ja ehdot ovat vain siellä.",
      midCta: "Katso FuckFinder palveluntarjoajalla",
      midNote: "Sponsoroitu · Vain 18+",
      ageTitle: "Vain yli 18-vuotiaille",
      ageBody: [
        "FuckFinder ja tämä sivu ovat vain 18 vuotta täyttäneille. Alaikäiset eivät saa rekisteröityä. Osa profiileista voi olla valvottuja. Emme väitä, että jokainen profiili on oikea henkilö.",
        "Jos joku pyytää nopeasti maksua sivuston ulkopuolella tai yksityisiä asiakirjoja, lopeta keskustelu. Ilmoita siitä alustan työkaluilla, jos niitä on.",
      ],
      privacyEyebrow: "Vinkit",
      privacyTitle: "Tietosuoja ja hienovaraisuus",
      privacy: [
        {
          title: "Jaa vähemmän",
          text: "Neutraali näyttönimi, hallitsemasi sähköposti ja kuva ilman työpaikkaa tai kotia pienentävät riskiä tulla tunnistetuksi myöhemmin. Pidä sijaintitiedot epätarkkoina.",
        },
        {
          title: "Lue tietosuojaseloste",
          text: "Lue palveluntarjoajan tietosuojaseloste ennen kuin lataat kuvia tai yhteystietoja. Maksa vain palveluntarjoajan kassan kautta. TheDateCompass ei näe näitä tietoja.",
        },
        {
          title: "Ole varovainen tapaamisissa",
          text: "Sama varovaisuus pätee kuin missä tahansa internetkontaktissa: julkinen paikka, oma kulkuneuvo ja oikeus lähteä. Tämä sivu ei lupaa yksittäisten jäsenten turvallisuutta.",
        },
      ],
      summaryEyebrow: "Yhteenveto",
      summaryTitle: "FuckFinder lyhyesti",
      summaryBody: [
        "FuckFinder on vaihtoehto aikuisille Suomessa, jotka haluavat katsoa rentoa deittailua. Listaus kattaa profiilit ja suorat viestit. Hinnat ja tarkat ominaisuudet ovat vain palveluntarjoajalla.",
        "TheDateCompass julkaisee tämän yhteenvedon mainoksena ja linkittää vain tähän tarjoukseen. Profiilit, maksu ja tuki kuuluvat FuckFinderin ylläpitäjälle.",
      ],
      endCta: "Jatka FuckFinderiin",
      faqEyebrow: "UKK",
      faqTitle: "Yleisiä kysymyksiä FuckFinderista",
      faqs: [
        {
          question: "Mikä FuckFinder on?",
          answer:
            "FuckFinder on listattu tässä aikuisten rennon deittailun alustaksi. Listaus kattaa profiilien selaamisen ja suorat viestit. TheDateCompass ei ylläpidä alustaa.",
        },
        {
          question: "Kenelle FuckFinderin rento deittailu Suomessa on?",
          answer:
            "Listaus on yli 18-vuotiaille aikuisille Suomessa, jotka etsivät vapaaehtoisia kontakteja ja suoria yhteyksiä. Sivu ei ole matchmaking-palvelu eikä lupaa tuloksia.",
        },
        {
          question: "Mitä FuckFinder maksaa?",
          answer:
            "TheDateCompass ei julkaise hintoja. Ajantasaiset maksut ja tilaukset näkyvät vain palveluntarjoajalla ja voivat muuttua.",
        },
        {
          question: "Kuinka hienovaraista rekisteröityminen on?",
          answer:
            "Hienovaraisuus riippuu siitä, mitä jaat, ja palveluntarjoajan asetuksista. Käytä hallitsemaasi sähköpostia ja lue tietosuojaseloste ennen kuvien tai yhteystietojen lataamista.",
        },
        {
          question: "Ovatko kaikki profiilit oikeita henkilöitä?",
          answer:
            "Sitä ei voi varmistaa alustan ulkopuolelta. Osa profiileista voi olla valvottuja. Lue palveluntarjoajan ehdot äläkä luota väitteeseen kuten “vain oikeat profiilit”.",
        },
        {
          question: "Onko ikäraja?",
          answer:
            "Kyllä. FuckFinder ja tämä sivu ovat vain yli 18-vuotiaille. Alaikäiset eivät saa rekisteröityä. Jos profiili vaikuttaa epäselvältä, lopeta yhteydenpito.",
        },
        {
          question: "Mitä tapahtuu painikkeen jälkeen?",
          answer:
            "Painike vie TheDateCompassin uudelleenohjauksen kautta palveluntarjoajan sivulle. TheDateCompass voi saada palkkion, jos rekisteröidyt siellä. Palveluntarjoaja hoitaa tilin, maksun ja tuen.",
        },
      ],
    },
  },
  englishPage({
    id: "canada",
    path: "/canada/fuckfinder",
    hreflang: "en-CA",
    ogLocale: "en_CA",
    countryToken: "canada",
    goSlug: "fuckfinder-ca",
    hubHref: "/canada",
    place: "Canada",
    country: "Canada",
    keywordPlace: "Canada",
  }),
  {
    id: "sweden",
    path: "/se/fuckfinder",
    hreflang: "sv-SE",
    ogLocale: "sv_SE",
    countryToken: "sweden",
    goSlug: "fuckfinder-se",
    title: "FuckFinder: Casual dating i Sverige | TheDateCompass",
    description:
      "FuckFinder för casual dating i Sverige: profiler, direkta meddelanden och otvungna möten. Endast för vuxna över 18. Priser finns hos leverantören.",
    keywords: [
      "FuckFinder",
      "casual dating Sverige",
      "otvungen dejting",
      "vuxen dejting",
      "direkta meddelanden",
      "profiler",
      "diskret",
      "18+",
    ],
    ui: {
      breadcrumbLabel: "Brödsmulor",
      home: "Hem",
      country: "Sverige",
      badges: ["Sponsrad", "Endast 18+", "Sverige"],
      h1Lead: "FuckFinder:",
      h1Highlight: "casual dating",
      h1Tail: "i Sverige",
      intro:
        "FuckFinder är listad för vuxna i Sverige som vill ha otvungna kontakter, inte en tjänst för långsiktig bekantskap. Du kan titta på profiler och skicka direkta meddelanden. Sidan gäller bara det här enda erbjudandet.",
      heroCta: "Gå till leverantören",
      heroNote: "Endast över 18. Priser finns hos leverantören.",
      disclosure:
        "Erbjudandet är listat för vuxna i Sverige. Utanför Sverige kan leverantören visa en annan sida. Reklamnotis: sidan innehåller en sponsrad länk. TheDateCompass kan få provision om du går vidare till leverantören.",
      disclosureLink: "Information om samarbetslänkar",
      imageAlt: "Bild som används för FuckFinder-listningen, inte ett verifierat medlemsfoto",
      shortEyebrow: "Kort sagt",
      shortText: "Otvungna kontakter för vuxna. Villkoren finns hos leverantören.",
      facts: [
        { label: "Region", value: "Sverige" },
        { label: "Fokus", value: "Casual dating" },
        { label: "Ålder", value: "18 år och äldre" },
        { label: "Priser", value: "Se leverantören" },
      ],
      partnerEyebrow: "Listning",
      partnerTitle: "Casual dating för vuxna i Sverige",
      partnerLeft:
        "Den som söker otvungen dejting i Sverige behöver en listning som säger det rakt ut. FuckFinder står här för vuxna möten och direkt kontakt, inte för en allmän parförmedling.",
      partnerRight:
        "TheDateCompass driver inte plattformen, lagrar inte profiler där och kan inte kontrollera leverantörens påståenden. Medlemstal, betyg och träffsäkerhet utelämnas eftersom ingen verifierad källa finns.",
      contactsEyebrow: "Funktioner",
      contactsTitle: "Profiler, meddelanden och möten",
      contacts: [
        "Casual dating: den angivna inriktningen är vuxna möten och direkt kontakt, inte en bred relationstjänst.",
        "Profiler: erbjudandet beskriver att man tittar på profiler. Leverantören bestämmer vilka uppgifter som syns.",
        "Meddelanden: direkta meddelanden ingår i listningen. Om de fungerar utan betalning står bara hos leverantören.",
      ],
      nicheEyebrow: "Fokus",
      nicheTitle: "Otvungna möten, inte matchmaking",
      nicheBody:
        "Personer som söker casual dating eller otvungna kontakter hör till den här listningen. FuckFinder beskrivs inte här som en tjänst för långvariga relationer. Om leverantörens webbplats har egna filter, platsverktyg eller fler kategorier står det där och kan ändras. Den här sidan hittar inte på sådana funktioner.",
      signupEyebrow: "Steg",
      signupTitle: "Registrering hos leverantören",
      signupIntro: "De exakta stegen finns hos leverantören och kan ändras.",
      steps: [
        {
          title: "Registrera dig",
          text: "En kort registrering med e-post eller en annan inloggning, åldersbekräftelse och lösenord är vanlig. Leverantören bestämmer vilka fält som krävs.",
        },
        {
          title: "Skapa en profil",
          text: "Därefter ber många tjänster om ett visningsnamn, ett ungefärligt område, en kort beskrivning och ett valfritt foto. Dela bara det du själv vill ha offentligt.",
        },
        {
          title: "Profiler och meddelanden",
          text: "FuckFinder-listningen omfattar profilvisning och direkta meddelanden. Om filter eller chatt kostar pengar står det hos leverantören.",
        },
      ],
      priceEyebrow: "Pris",
      priceTitle: "Kostnader finns hos leverantören",
      priceBody: [
        "Inget verifierat pris för FuckFinder finns här. Om registrering kostar något, och vilka funktioner som kostar pengar efteråt, visas bara på leverantörens aktuella webbplats.",
        "Kontrollera löptid, förnyelse och betalningssätt innan du bekräftar en prenumeration. Uppsägning och återbetalning bestäms av leverantören, inte av den här översikten.",
      ],
      midTitle: "Öppna leverantörens webbplats och kontrollera själv",
      midBody: "Aktuella priser, funktioner och villkor för det här casual dating-erbjudandet finns bara där.",
      midCta: "Granska FuckFinder hos leverantören",
      midNote: "Sponsrad · Endast 18+",
      ageTitle: "Endast för vuxna över 18",
      ageBody: [
        "FuckFinder och den här sidan är bara för personer som är 18 år eller äldre. Minderåriga får inte registrera sig. Vissa profiler kan vara modererade. Vi påstår inte att varje profil är en verklig person.",
        "Om någon snabbt ber om betalning utanför webbplatsen, eller om privata dokument, avsluta samtalet. Rapportera det med plattformens verktyg när de finns.",
      ],
      privacyEyebrow: "Tips",
      privacyTitle: "Integritet och diskretion",
      privacy: [
        {
          title: "Dela mindre",
          text: "Ett neutralt visningsnamn, en e-post du kontrollerar och ett foto utan arbetsplats eller hem minskar risken att bli igenkänd senare. Håll platsuppgifter vaga.",
        },
        {
          title: "Läs integritetspolicyn",
          text: "Läs leverantörens integritetspolicy innan du laddar upp foton eller kontaktuppgifter. Betala bara via kassan på leverantörens webbplats. TheDateCompass ser inte de uppgifterna.",
        },
        {
          title: "Var försiktig med möten",
          text: "Samma försiktighet gäller som vid varje kontakt från internet: en offentlig plats, egen transport och rätten att gå. Sidan lovar inget om enskilda medlemmars säkerhet.",
        },
      ],
      summaryEyebrow: "Sammanfattning",
      summaryTitle: "FuckFinder i korthet",
      summaryBody: [
        "FuckFinder är ett alternativ för vuxna i Sverige som vill titta på casual dating. Listningen omfattar profilsökning och direkta meddelanden. Priser och den exakta funktionsuppsättningen finns bara hos leverantören.",
        "TheDateCompass publicerar den här översikten som reklam och länkar bara det här erbjudandet. Profiler, betalning och support ligger hos den som driver FuckFinder.",
      ],
      endCta: "Fortsätt till FuckFinder",
      faqEyebrow: "FAQ",
      faqTitle: "Vanliga frågor om FuckFinder",
      faqs: [
        {
          question: "Vad är FuckFinder?",
          answer:
            "FuckFinder listas här som en plattform för casual dating mellan vuxna. Listningen omfattar profilvisning och direkta meddelanden. TheDateCompass driver inte plattformen.",
        },
        {
          question: "Vem är casual dating på FuckFinder för i Sverige?",
          answer:
            "Listningen är för vuxna över 18 år i Sverige som vill ha otvungna kontakter och direkta förbindelser. Sidan är inte en matchmaking-tjänst och lovar inga resultat.",
        },
        {
          question: "Vad kostar FuckFinder?",
          answer:
            "TheDateCompass publicerar inga priser. Aktuella avgifter och abonnemang visas bara hos leverantören och kan ändras.",
        },
        {
          question: "Hur diskret är registreringen?",
          answer:
            "Diskretion beror på vad du delar och på leverantörens inställningar. Använd en e-post du kontrollerar och läs integritetspolicyn innan du laddar upp foton eller kontaktuppgifter.",
        },
        {
          question: "Är alla profiler verkliga personer?",
          answer:
            "Det går inte att verifiera utifrån. Vissa profiler kan vara modererade. Läs leverantörens villkor och lita inte på ett påstående som ”bara riktiga profiler”.",
        },
        {
          question: "Finns det en åldersgräns?",
          answer:
            "Ja. FuckFinder och den här sidan är bara för personer över 18 år. Minderåriga får inte registrera sig. Om en profil verkar oklar, avsluta kontakten.",
        },
        {
          question: "Vad händer efter att jag klickar på knappen?",
          answer:
            "Knappen skickar dig via en omdirigering från TheDateCompass till leverantörens webbplats. TheDateCompass kan få provision om du registrerar dig där. Leverantören hanterar konto, betalning och support.",
        },
      ],
    },
  },
  englishPage({
    id: "uk",
    path: "/uk/fuckfinder",
    hreflang: "en-GB",
    ogLocale: "en_GB",
    countryToken: "uk",
    goSlug: "fuckfinder-uk",
    hubHref: "/uk",
    place: "the UK",
    country: "the UK",
    keywordPlace: "UK",
  }),
  dutchPage({
    id: "netherlands",
    path: "/nl/fuckfinder",
    hreflang: "nl-NL",
    ogLocale: "nl_NL",
    countryToken: "netherlands",
    goSlug: "fuckfinder-nl",
    place: "Nederland",
    country: "Nederland",
    keywordPlace: "Nederland",
  }),
  englishPage({
    id: "australia",
    path: "/australia/fuckfinder",
    hreflang: "en-AU",
    ogLocale: "en_AU",
    countryToken: "australia",
    goSlug: "fuckfinder-au",
    hubHref: "/australia",
    place: "Australia",
    country: "Australia",
    keywordPlace: "Australia",
  }),
  englishPage({
    id: "usa",
    path: "/usa/fuckfinder",
    hreflang: "en-US",
    ogLocale: "en_US",
    countryToken: "usa",
    goSlug: "fuckfinder-us",
    hubHref: "/usa",
    place: "the USA",
    country: "the USA",
    keywordPlace: "USA",
  }),
  englishPage({
    id: "ireland",
    path: "/ireland/fuckfinder",
    hreflang: "en-IE",
    ogLocale: "en_IE",
    countryToken: "ireland",
    goSlug: "fuckfinder-ie",
    place: "Ireland",
    country: "Ireland",
    keywordPlace: "Ireland",
  }),
  germanPage({
    id: "austria",
    path: "/at/fuckfinder",
    hreflang: "de-AT",
    ogLocale: "de_AT",
    countryToken: "austria",
    goSlug: "fuckfinder-at",
    place: "Österreich",
    country: "Österreich",
    keywordPlace: "Österreich",
  }),
  englishPage({
    id: "new-zealand",
    path: "/new-zealand/fuckfinder",
    hreflang: "en-NZ",
    ogLocale: "en_NZ",
    countryToken: "new-zealand",
    goSlug: "fuckfinder-nz",
    place: "New Zealand",
    country: "New Zealand",
    keywordPlace: "New Zealand",
  }),
  dutchPage({
    id: "belgium",
    path: "/be/fuckfinder",
    hreflang: "nl-BE",
    ogLocale: "nl_BE",
    countryToken: "belgium",
    goSlug: "fuckfinder-be",
    place: "België",
    country: "België",
    keywordPlace: "België",
  }),
];

export const fuckFinderCountryDestinations: Record<string, string> = Object.fromEntries(
  fuckFinderCountryPages.map((page) => [page.goSlug, OFFER_URL]),
);

const pagesById = new Map(fuckFinderCountryPages.map((page) => [page.id, page]));

export function getFuckFinderCountryPage(id: string): FuckFinderCountryPage {
  const page = pagesById.get(id);
  if (!page) {
    throw new Error(`Missing FuckFinder country page: ${id}`);
  }
  return page;
}

export function fuckFinderLanguageAlternates(): Record<string, string> {
  return Object.fromEntries([
    ["x-default", `${FUCKFINDER_SITE_URL}${FUCKFINDER_GENERAL_PATH}`],
    ...fuckFinderCountryPages.map((page) => [page.hreflang, `${FUCKFINDER_SITE_URL}${page.path}`]),
  ]);
}

export function fuckFinderCountryMetadata(page: FuckFinderCountryPage): Metadata {
  const url = `${FUCKFINDER_SITE_URL}${page.path}`;
  const image = `${FUCKFINDER_SITE_URL}${getOfferAdultImage("fuckfinder")}`;
  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: [...page.keywords],
    alternates: {
      canonical: url,
      languages: fuckFinderLanguageAlternates(),
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: "TheDateCompass",
      locale: page.ogLocale,
      type: "website",
      images: [{ url: image, alt: page.ui.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}
