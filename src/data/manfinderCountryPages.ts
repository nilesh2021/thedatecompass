import type { Metadata } from "next";
import { getOfferAdultImage } from "@/data/adultOfferImages";

export const MANFINDER_SITE_URL = "https://www.thedatecompass.com";
export const MANFINDER_GENERAL_PATH = "/offers/manfinder";

const OFFER_URL = "https://t.aslr1.com/358917/6488?aff_sub5=SF_006OG000004lmDN";

export type ManfinderFaq = { question: string; answer: string };
export type ManfinderFact = { label: string; value: string };
export type ManfinderStep = { title: string; text: string };

export type ManfinderCountryPage = {
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
    facts: readonly ManfinderFact[];
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
    steps: readonly ManfinderStep[];
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
    privacy: readonly ManfinderStep[];
    summaryEyebrow: string;
    summaryTitle: string;
    summaryBody: readonly [string, string];
    endCta: string;
    faqEyebrow: string;
    faqTitle: string;
    faqs: readonly ManfinderFaq[];
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
}): ManfinderCountryPage {
  const { place, country, keywordPlace } = input;
  return {
    id: input.id,
    path: input.path,
    hreflang: input.hreflang,
    ogLocale: input.ogLocale,
    countryToken: input.countryToken,
    goSlug: input.goSlug,
    hubHref: input.hubHref,
    title: `Manfinder: Gay Dating in ${place} | TheDateCompass`,
    description: `Manfinder for gay dating in ${place}: profiles, direct messages, and connections between men. Adults 18+ only. Prices are on the provider site.`,
    keywords: [
      "Manfinder",
      `gay dating ${keywordPlace}`,
      "gay dating for men",
      "men seeking men",
      "gay contacts",
      "direct messages",
      "discreet",
      "18+",
    ],
    ui: {
      breadcrumbLabel: "Breadcrumb",
      home: "Home",
      country,
      badges: ["Sponsored", "18+ only", country],
      h1Lead: "Manfinder:",
      h1Highlight: "gay dating",
      h1Tail: `in ${place}`,
      intro: `Manfinder is listed for adult men in ${country} who want to meet other men. You can browse profiles and send direct messages. This page covers only this one offer.`,
      heroCta: "Continue to the provider",
      heroNote: "18+ only. Prices are on the provider site.",
      disclosure: `This offer is listed for adults in ${country}. Outside ${country} the provider may show a different page. Advertising notice: this page contains a sponsored link. TheDateCompass may earn a commission if you continue to the provider.`,
      disclosureLink: "Affiliate disclosure",
      imageAlt: "Listing image used for Manfinder, not a verified photo of a member",
      shortEyebrow: "In short",
      shortText: "Gay dating for adult men. Confirm the terms on the provider site.",
      facts: [
        { label: "Region", value: country },
        { label: "Focus", value: "Gay dating" },
        { label: "Age", value: "18 and older" },
        { label: "Prices", value: "See provider site" },
      ],
      partnerEyebrow: "Listing",
      partnerTitle: "Gay dating for men",
      partnerLeft: `Someone looking for gay dating in ${country} needs a listing that says the offer is for men seeking men. Manfinder is that adult option here, rather than a general dating site.`,
      partnerRight:
        "TheDateCompass does not run the platform, store profiles, or check the provider’s claims. Member counts, ratings, and success rates are left out because no verified source is available.",
      contactsEyebrow: "Features",
      contactsTitle: "Profiles, messages, and connections",
      contacts: [
        "Gay dating: the listed focus is men looking to meet and connect with other men.",
        "Profiles: the offer describes browsing profiles. The provider decides which details are visible.",
        "Messages: direct messages are part of the listing. Whether they work without payment is stated only on the provider site.",
      ],
      nicheEyebrow: "Focus",
      nicheTitle: "Men seeking men",
      nicheBody:
        "People looking for gay dating, or for social contact between men, fall under this listing. Manfinder is not described here as a general singles site. Whether the provider site has its own filters, location tools, or extra categories is stated there and can change. This page does not invent those features.",
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
          text: "The Manfinder listing covers browsing profiles and sending direct messages. Whether filters or chat require payment is stated on the provider site.",
        },
      ],
      priceEyebrow: "Pricing",
      priceTitle: "Costs are on the provider site",
      priceBody: [
        "No verified price is available here for Manfinder. Whether signup has a cost, and which features cost money afterward, is shown only on the current provider site.",
        "Check the term, renewal, and payment method before you confirm a subscription. Cancellation and refunds are set by the provider, not by this overview.",
      ],
      midTitle: "Open the provider site and check it yourself",
      midBody: "Current prices, features, and terms for this gay dating offer are listed only there.",
      midCta: "Review Manfinder on the provider site",
      midNote: "Sponsored · 18+ only",
      ageTitle: "Adults 18 and older only",
      ageBody: [
        "Manfinder and this page are only for people 18 or older. Minors must not register. Some profiles may be moderated. We do not claim that every profile is a real person.",
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
      summaryTitle: "Manfinder in short",
      summaryBody: [
        `Manfinder is an option for adult men in ${country} who want gay dating. The listing covers profile browsing and direct messages. Prices and the exact feature set are only on the provider site.`,
        "TheDateCompass publishes this overview as an advertisement and links only this offer. Profiles, payment, and support stay with the operator of Manfinder.",
      ],
      endCta: "Continue to Manfinder",
      faqEyebrow: "FAQ",
      faqTitle: "Common questions about Manfinder",
      faqs: [
        {
          question: "What is Manfinder?",
          answer:
            "Manfinder is listed here as a gay dating platform for men looking to meet other men. The listing covers browsing profiles and sending direct messages. TheDateCompass does not operate the platform.",
        },
        {
          question: `Who is gay dating on Manfinder for in ${country}?`,
          answer: `The listing is for adults 18 or older in ${country} who want connections between men. This page is not a matchmaking service and it does not promise results.`,
        },
        {
          question: "How much does Manfinder cost?",
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
            "Yes. Manfinder and this page are only for people 18 or older. Minors must not register. If a profile seems unclear, stop the conversation.",
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
}): ManfinderCountryPage {
  const { place, country, keywordPlace } = input;
  return {
    id: input.id,
    path: input.path,
    hreflang: input.hreflang,
    ogLocale: input.ogLocale,
    countryToken: input.countryToken,
    goSlug: input.goSlug,
    hubHref: input.hubHref,
    title: `Manfinder: Gay-Dating in ${place} | TheDateCompass`,
    description: `Manfinder für Gay-Dating in ${place}: Profile, Nachrichten und Kontakte zwischen Männern. Nur ab 18. Preise auf der Anbieterseite.`,
    keywords: [
      "Manfinder",
      `Gay Dating ${keywordPlace}`,
      "Gay Dating für Männer",
      "Männer kennenlernen",
      "schwules Dating",
      "direkte Nachrichten",
      "diskret",
      "ab 18",
    ],
    ui: {
      breadcrumbLabel: "Brotkrumen",
      home: "Start",
      country,
      badges: ["Anzeige", "Nur 18+", country],
      h1Lead: "Manfinder:",
      h1Highlight: "Gay-Dating",
      h1Tail: `in ${place}`,
      intro: `Manfinder ist für erwachsene Männer in ${country} eingeordnet, die andere Männer kennenlernen möchten. Profile lassen sich durchsehen, Nachrichten direkt schreiben. Diese Seite stellt nur dieses eine Angebot vor.`,
      heroCta: "Zur Anbieterseite",
      heroNote: "Nur ab 18. Preise siehe Anbieterseite.",
      disclosure: `Dieses Angebot richtet sich an Erwachsene in ${country}. Außerhalb kann die Anbieterseite eine andere Seite anzeigen. Werbehinweis: Diese Seite enthält einen gesponserten Link. TheDateCompass kann eine Provision erhalten, wenn Sie über den Button zur Anbieterseite wechseln.`,
      disclosureLink: "Hinweise zur Werbung",
      imageAlt: "Listenbild für Manfinder, kein geprüftes Foto eines Mitglieds",
      shortEyebrow: "Kurz gesagt",
      shortText: "Gay-Dating für erwachsene Männer. Konditionen prüfen Sie auf der Anbieterseite.",
      facts: [
        { label: "Region", value: country },
        { label: "Fokus", value: "Gay-Dating" },
        { label: "Alter", value: "Ab 18 Jahren" },
        { label: "Preise", value: "Siehe Anbieterseite" },
      ],
      partnerEyebrow: "Einordnung",
      partnerTitle: "Gay-Dating für Männer",
      partnerLeft: `Wer in ${country} andere Männer kennenlernen will, braucht eine Einordnung, die das klar sagt. Manfinder steht hier für Kontakte zwischen Männern, nicht für ein allgemeines Dating-Portal.`,
      partnerRight:
        "TheDateCompass betreibt die Plattform nicht, speichert dort keine Profile und kann Zusagen des Anbieters nicht prüfen. Mitgliedszahlen, Bewertungen und Erfolgsquoten werden hier nicht genannt, weil dazu keine geprüfte Quelle vorliegt.",
      contactsEyebrow: "Funktionen",
      contactsTitle: "Profile, Nachrichten und Kontakte",
      contacts: [
        "Gay-Dating: Die gelistete Ausrichtung sind Männer, die andere Männer kennenlernen möchten.",
        "Profile: Das Angebot beschreibt das Durchsehen von Profilen. Welche Angaben sichtbar sind, legt der Anbieter fest.",
        "Nachrichten: Direkte Nachrichten gehören zur Einordnung. Ob sie ohne Bezahlung nutzbar sind, sehen Sie nur auf der Anbieterseite.",
      ],
      nicheEyebrow: "Fokus",
      nicheTitle: "Männer suchen Männer",
      nicheBody:
        "Menschen, die Gay-Dating oder Kontakte zwischen Männern suchen, fallen unter diese Einordnung. Manfinder wird hier nicht als allgemeine Singlebörse beschrieben. Ob die Anbieterseite eigene Filter, Ortsangaben oder weitere Kategorien führt, steht dort und kann sich ändern. Diese Übersicht erfindet keine solchen Funktionen.",
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
          text: "Die Einordnung von Manfinder nennt das Durchsehen von Profilen und direkte Nachrichten. Ob Filter oder der Chat kostenpflichtig sind, steht auf der Anbieterseite.",
        },
      ],
      priceEyebrow: "Preise",
      priceTitle: "Kosten auf der Anbieterseite",
      priceBody: [
        "Für Manfinder liegt hier kein geprüfter Preis vor. Ob die Anmeldung etwas kostet und welche Funktionen danach Geld kosten, steht nur aktuell auf der Anbieterseite.",
        "Achten Sie auf Laufzeit, Verlängerung und Zahlungsart, bevor Sie ein Abo bestätigen. Kündigungsfristen und Erstattungen regelt der Anbieter, nicht diese Übersicht.",
      ],
      midTitle: "Anbieterseite öffnen und selbst prüfen",
      midBody: "Aktuelle Preise, Funktionen und Bedingungen für dieses Gay-Dating-Angebot stehen nur dort.",
      midCta: "Manfinder auf der Anbieterseite prüfen",
      midNote: "Anzeige · Nur 18+",
      ageTitle: "Nur für Erwachsene ab 18",
      ageBody: [
        "Manfinder und diese Seite sind nur für Personen ab 18 Jahren. Minderjährige dürfen sich nicht registrieren. Einige Profile können moderiert sein. Eine pauschale Zusage, dass alle Profile echt seien, geben wir nicht.",
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
      summaryTitle: "Fazit zu Manfinder",
      summaryBody: [
        `Manfinder ist eine Option für erwachsene Männer in ${country}, die Gay-Dating prüfen möchten. Gelistet sind Profilsuche und direkte Nachrichten. Preise und der genaue Funktionsumfang stehen nur auf der Anbieterseite.`,
        "TheDateCompass stellt diesen Überblick als Anzeige bereit und verlinkt nur dieses Angebot. Verantwortung für Profile, Zahlung und Support trägt der Betreiber von Manfinder.",
      ],
      endCta: "Weiter zu Manfinder",
      faqEyebrow: "FAQ",
      faqTitle: "Häufige Fragen zu Manfinder",
      faqs: [
        {
          question: "Was ist Manfinder?",
          answer:
            "Manfinder ist in diesem Angebot als Gay-Dating-Plattform für Männer eingeordnet, die andere Männer kennenlernen möchten. Gelistet sind das Durchsehen von Profilen und direkte Nachrichten. TheDateCompass betreibt die Plattform nicht.",
        },
        {
          question: `Für wen ist Gay-Dating bei Manfinder in ${country}?`,
          answer: `Die Einordnung gilt für Erwachsene ab 18 Jahren in ${country}, die Kontakte zwischen Männern suchen. Die Seite ist kein Partnervermittlungsdienst mit Erfolgsgarantie.`,
        },
        {
          question: "Was kostet Manfinder?",
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
            "Ja. Manfinder und diese Seite sind ausschließlich für Personen ab 18 Jahren. Minderjährige dürfen sich nicht registrieren. Wenn ein Profil unklar wirkt, brechen Sie den Kontakt ab.",
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
}): ManfinderCountryPage {
  const { place, country, keywordPlace } = input;
  return {
    id: input.id,
    path: input.path,
    hreflang: input.hreflang,
    ogLocale: input.ogLocale,
    countryToken: input.countryToken,
    goSlug: input.goSlug,
    title: `Manfinder: Gay dating in ${place} | TheDateCompass`,
    description: `Manfinder voor gay dating in ${place}: profielen, directe berichten en contacten tussen mannen. Alleen 18+. Prijzen bij de aanbieder.`,
    keywords: [
      "Manfinder",
      `gay dating ${keywordPlace}`,
      "gay dating voor mannen",
      "mannen ontmoeten",
      "directe berichten",
      "gay contacten",
      "discreet",
      "18+",
    ],
    ui: {
      breadcrumbLabel: "Broodkruimels",
      home: "Home",
      country,
      badges: ["Gesponsord", "Alleen 18+", country],
      h1Lead: "Manfinder:",
      h1Highlight: "gay dating",
      h1Tail: `in ${place}`,
      intro: `Manfinder staat hier voor volwassen mannen in ${country} die andere mannen willen ontmoeten. U kunt profielen bekijken en directe berichten sturen. Deze pagina behandelt alleen dit ene aanbod.`,
      heroCta: "Naar de aanbieder",
      heroNote: "Alleen 18+. Prijzen staan bij de aanbieder.",
      disclosure: `Dit aanbod is bedoeld voor volwassenen in ${country}. Buiten ${country} kan de aanbieder een andere pagina tonen. Advertentievermelding: deze pagina bevat een gesponsorde link. TheDateCompass kan een vergoeding ontvangen als u doorgaat naar de aanbieder.`,
      disclosureLink: "Affiliateverklaring",
      imageAlt: "Afbeelding bij de Manfinder-vermelding, geen gecontroleerde foto van een lid",
      shortEyebrow: "Kort",
      shortText: "Gay dating voor volwassen mannen. Voorwaarden staan bij de aanbieder.",
      facts: [
        { label: "Regio", value: country },
        { label: "Focus", value: "Gay dating" },
        { label: "Leeftijd", value: "18 jaar en ouder" },
        { label: "Prijzen", value: "Zie de aanbieder" },
      ],
      partnerEyebrow: "Vermelding",
      partnerTitle: "Gay dating voor mannen",
      partnerLeft: `Wie in ${country} andere mannen wil ontmoeten, heeft een vermelding nodig die dat duidelijk zegt. Manfinder staat hier voor contacten tussen mannen, niet voor een algemene datingsite.`,
      partnerRight:
        "TheDateCompass beheert het platform niet, bewaart daar geen profielen en controleert de claims van de aanbieder niet. Ledenaantallen, beoordelingen en succescijfers staan hier niet, omdat er geen gecontroleerde bron is.",
      contactsEyebrow: "Functies",
      contactsTitle: "Profielen, berichten en contacten",
      contacts: [
        "Gay dating: de vermelde focus zijn mannen die andere mannen willen ontmoeten.",
        "Profielen: het aanbod beschrijft het bekijken van profielen. De aanbieder bepaalt welke gegevens zichtbaar zijn.",
        "Berichten: directe berichten horen bij de vermelding. Of ze zonder betaling werken, staat alleen op de site van de aanbieder.",
      ],
      nicheEyebrow: "Focus",
      nicheTitle: "Mannen zoeken mannen",
      nicheBody:
        "Mensen die gay dating of contact tussen mannen zoeken, vallen onder deze vermelding. Manfinder wordt hier niet beschreven als een algemene datingsite. Of de site van de aanbieder eigen filters, locatiehulpmiddelen of extra categorieën heeft, staat daar en kan veranderen. Deze pagina verzint die functies niet.",
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
          text: "De vermelding van Manfinder omvat het bekijken van profielen en het sturen van directe berichten. Of filters of chat betaling vragen, staat bij de aanbieder.",
        },
      ],
      priceEyebrow: "Prijzen",
      priceTitle: "Kosten staan bij de aanbieder",
      priceBody: [
        "Voor Manfinder is hier geen gecontroleerde prijs beschikbaar. Of aanmelden iets kost en welke functies daarna geld kosten, staat alleen op de actuele site van de aanbieder.",
        "Controleer de looptijd, verlenging en betaalmethode voordat u een abonnement bevestigt. Opzegging en terugbetaling regelt de aanbieder, niet dit overzicht.",
      ],
      midTitle: "Open de site van de aanbieder en controleer zelf",
      midBody: "Actuele prijzen, functies en voorwaarden voor dit gay-datingaanbod staan alleen daar.",
      midCta: "Manfinder bij de aanbieder bekijken",
      midNote: "Gesponsord · Alleen 18+",
      ageTitle: "Alleen voor volwassenen van 18 jaar en ouder",
      ageBody: [
        "Manfinder en deze pagina zijn alleen voor mensen van 18 jaar en ouder. Minderjarigen mogen zich niet registreren. Sommige profielen kunnen gemodereerd zijn. We beweren niet dat elk profiel een echt persoon is.",
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
      summaryTitle: "Manfinder in het kort",
      summaryBody: [
        `Manfinder is een optie voor volwassen mannen in ${country} die gay dating willen bekijken. De vermelding omvat profielen en directe berichten. Prijzen en de precieze functies staan alleen bij de aanbieder.`,
        "TheDateCompass publiceert dit overzicht als advertentie en linkt alleen dit aanbod. Profielen, betaling en support blijven bij de exploitant van Manfinder.",
      ],
      endCta: "Verder naar Manfinder",
      faqEyebrow: "FAQ",
      faqTitle: "Veelgestelde vragen over Manfinder",
      faqs: [
        {
          question: "Wat is Manfinder?",
          answer:
            "Manfinder staat hier als gay-datingplatform voor mannen die andere mannen willen ontmoeten. De vermelding omvat het bekijken van profielen en het sturen van directe berichten. TheDateCompass exploiteert het platform niet.",
        },
        {
          question: `Voor wie is gay dating op Manfinder in ${country}?`,
          answer: `De vermelding is voor volwassenen van 18 jaar en ouder in ${country} die contacten tussen mannen zoeken. Deze pagina is geen relatiebemiddeling en belooft geen resultaat.`,
        },
        {
          question: "Wat kost Manfinder?",
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
            "Ja. Manfinder en deze pagina zijn alleen voor mensen van 18 jaar en ouder. Minderjarigen mogen zich niet registreren. Als een profiel onduidelijk lijkt, stop dan het gesprek.",
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

export const manfinderCountryPages: ManfinderCountryPage[] = [
  {
    id: "norway",
    path: "/no/manfinder",
    hreflang: "nb-NO",
    ogLocale: "nb_NO",
    countryToken: "norway",
    goSlug: "manfinder-no",
    title: "Manfinder: Gay dating i Norge | TheDateCompass",
    description:
      "Manfinder for gay dating i Norge: profiler, direkte meldinger og kontakt mellom menn. Kun for voksne over 18. Prisene står hos leverandøren.",
    keywords: ["Manfinder", "gay dating Norge", "menn søker menn", "homofil dating", "direkte meldinger", "profiler", "diskret", "18+"],
    ui: {
      breadcrumbLabel: "Brødsmulesti",
      home: "Hjem",
      country: "Norge",
      badges: ["Sponset", "Kun 18+", "Norge"],
      h1Lead: "Manfinder:",
      h1Highlight: "gay dating",
      h1Tail: "i Norge",
      intro:
        "Manfinder er oppført for voksne menn i Norge som vil møte andre menn. Du kan se gjennom profiler og sende direkte meldinger. Denne siden gjelder bare dette ene tilbudet.",
      heroCta: "Gå til leverandøren",
      heroNote: "Kun over 18. Priser står hos leverandøren.",
      disclosure:
        "Dette tilbudet er listet for voksne i Norge. Utenfor Norge kan leverandøren vise en annen side. Reklamemerknad: siden inneholder en sponset lenke. TheDateCompass kan få provisjon hvis du går videre til leverandøren.",
      disclosureLink: "Informasjon om samarbeidslenker",
      imageAlt: "Bilde brukt for Manfinder-oppføringen, ikke et bekreftet medlemsfoto",
      shortEyebrow: "Kort sagt",
      shortText: "Gay dating for voksne menn. Vilkårene står hos leverandøren.",
      facts: [
        { label: "Region", value: "Norge" },
        { label: "Fokus", value: "Gay dating" },
        { label: "Alder", value: "18 år og eldre" },
        { label: "Priser", value: "Se leverandøren" },
      ],
      partnerEyebrow: "Oppføring",
      partnerTitle: "Gay dating for menn i Norge",
      partnerLeft:
        "Den som søker gay dating i Norge, trenger en oppføring som sier at tilbudet er for menn som vil møte menn. Manfinder står her for det, ikke for en generell datingside.",
      partnerRight:
        "TheDateCompass driver ikke plattformen, lagrer ikke profiler der og kan ikke kontrollere leverandørens påstander. Medlemstall, vurderinger og suksessrater er utelatt fordi ingen bekreftet kilde finnes.",
      contactsEyebrow: "Funksjoner",
      contactsTitle: "Profiler, meldinger og kontakt",
      contacts: [
        "Gay dating: den oppgitte retningen er menn som vil møte og få kontakt med andre menn.",
        "Profiler: tilbudet beskriver gjennomgang av profiler. Leverandøren bestemmer hvilke opplysninger som vises.",
        "Meldinger: direkte meldinger er en del av oppføringen. Om de kan brukes uten betaling, står bare hos leverandøren.",
      ],
      nicheEyebrow: "Fokus",
      nicheTitle: "Menn som søker menn",
      nicheBody:
        "Folk som søker gay dating eller kontakt mellom menn, hører til denne oppføringen. Manfinder beskrives ikke her som en generell datingside. Om leverandørens nettsted har egne filtre, stedsverktøy eller flere kategorier, står det der og kan endres. Denne siden finner ikke opp slike funksjoner.",
      signupEyebrow: "Steg",
      signupTitle: "Registrering hos leverandøren",
      signupIntro: "De nøyaktige stegene står hos leverandøren og kan endres.",
      steps: [
        { title: "Registrer deg", text: "En kort registrering med e-post eller en annen innlogging, aldersbekreftelse og passord er vanlig. Leverandøren bestemmer hvilke felt som er påkrevd." },
        { title: "Lag en profil", text: "Deretter ber mange tjenester om visningsnavn, omtrentlig område, en kort beskrivelse og et valgfritt bilde. Del bare det du selv vil ha offentlig." },
        { title: "Profiler og meldinger", text: "Manfinder-oppføringen dekker gjennomgang av profiler og direkte meldinger. Om filtre eller chat koster penger, står hos leverandøren." },
      ],
      priceEyebrow: "Pris",
      priceTitle: "Kostnader står hos leverandøren",
      priceBody: [
        "Ingen bekreftet pris for Manfinder finnes her. Om registrering koster noe, og hvilke funksjoner som koster penger etterpå, vises bare på leverandørens aktuelle nettsted.",
        "Sjekk varighet, fornyelse og betalingsmåte før du bekrefter et abonnement. Oppsigelse og refusjon bestemmes av leverandøren, ikke av denne oversikten.",
      ],
      midTitle: "Åpne leverandørens nettsted og sjekk selv",
      midBody: "Aktuelle priser, funksjoner og vilkår for dette gay dating-tilbudet står bare der.",
      midCta: "Se Manfinder hos leverandøren",
      midNote: "Sponset · Kun 18+",
      ageTitle: "Bare for voksne over 18",
      ageBody: [
        "Manfinder og denne siden er bare for personer som er 18 år eller eldre. Mindreårige skal ikke registrere seg. Noen profiler kan være moderert. Vi påstår ikke at hver profil er en ekte person.",
        "Hvis noen raskt ber om betaling utenfor nettstedet, eller om private dokumenter, avslutt samtalen. Rapporter det med plattformens verktøy når de finnes.",
      ],
      privacyEyebrow: "Tips",
      privacyTitle: "Personvern og diskresjon",
      privacy: [
        { title: "Del mindre", text: "Et nøytralt visningsnavn, en e-post du kontrollerer, og et bilde uten arbeidsplass eller hjem reduserer sjansen for å bli gjenkjent senere. Hold stedsopplysninger vage." },
        { title: "Les personvernerklæringen", text: "Les leverandørens personvernerklæring før du laster opp bilder eller kontaktopplysninger. Betal bare via kassen på leverandørens nettsted. TheDateCompass ser ikke disse opplysningene." },
        { title: "Vær forsiktig med møter", text: "Samme forsiktighet gjelder som ved enhver kontakt fra internett: et offentlig sted, egen transport og retten til å dra. Denne siden lover ingenting om sikkerheten til enkeltmedlemmer." },
      ],
      summaryEyebrow: "Oppsummering",
      summaryTitle: "Manfinder i korte trekk",
      summaryBody: [
        "Manfinder er et alternativ for voksne menn i Norge som vil se på gay dating. Oppføringen dekker profilsøk og direkte meldinger. Priser og det nøyaktige funksjonssettet finnes bare hos leverandøren.",
        "TheDateCompass publiserer denne oversikten som reklame og lenker bare til dette tilbudet. Profiler, betaling og support ligger hos den som driver Manfinder.",
      ],
      endCta: "Gå videre til Manfinder",
      faqEyebrow: "FAQ",
      faqTitle: "Vanlige spørsmål om Manfinder",
      faqs: [
        { question: "Hva er Manfinder?", answer: "Manfinder er oppført her som en gay dating-plattform for menn som vil møte andre menn. Oppføringen dekker gjennomgang av profiler og direkte meldinger. TheDateCompass driver ikke plattformen." },
        { question: "Hvem er gay dating på Manfinder for i Norge?", answer: "Oppføringen er for voksne over 18 år i Norge som vil ha kontakt mellom menn. Siden er ikke en matchmaking-tjeneste og lover ikke resultater." },
        { question: "Hva koster Manfinder?", answer: "TheDateCompass oppgir ingen priser. Gjeldende gebyrer og abonnement vises bare hos leverandøren og kan endres." },
        { question: "Hvor diskret er registreringen?", answer: "Diskresjon avhenger av hva du deler og av leverandørens innstillinger. Bruk en e-post du kontrollerer, og les personvernerklæringen før du laster opp bilder eller kontaktopplysninger." },
        { question: "Er alle profiler ekte personer?", answer: "Det kan ikke bekreftes utenfra. Noen profiler kan være moderert. Les leverandørens vilkår, og stol ikke på et utsagn som «bare ekte profiler»." },
        { question: "Finnes det en aldersgrense?", answer: "Ja. Manfinder og denne siden er bare for personer over 18 år. Mindreårige skal ikke registrere seg. Hvis en profil virker uklar, avslutt kontakten." },
        { question: "Hva skjer etter at jeg trykker på knappen?", answer: "Knappen sender deg via en viderekobling fra TheDateCompass til leverandørens nettsted. TheDateCompass kan få provisjon hvis du registrerer deg der. Leverandøren håndterer konto, betaling og support." },
      ],
    },
  },
  {
    id: "sweden",
    path: "/se/manfinder",
    hreflang: "sv-SE",
    ogLocale: "sv_SE",
    countryToken: "sweden",
    goSlug: "manfinder-se",
    title: "Manfinder: Gay dating i Sverige | TheDateCompass",
    description:
      "Manfinder för gay dating i Sverige: profiler, direkta meddelanden och kontakt mellan män. Endast för vuxna över 18. Priser finns hos leverantören.",
    keywords: ["Manfinder", "gay dating Sverige", "män söker män", "gaydejting", "direkta meddelanden", "profiler", "diskret", "18+"],
    ui: {
      breadcrumbLabel: "Brödsmulor",
      home: "Hem",
      country: "Sverige",
      badges: ["Sponsrad", "Endast 18+", "Sverige"],
      h1Lead: "Manfinder:",
      h1Highlight: "gay dating",
      h1Tail: "i Sverige",
      intro:
        "Manfinder är listad för vuxna män i Sverige som vill träffa andra män. Du kan titta på profiler och skicka direkta meddelanden. Sidan gäller bara det här enda erbjudandet.",
      heroCta: "Gå till leverantören",
      heroNote: "Endast över 18. Priser finns hos leverantören.",
      disclosure:
        "Erbjudandet är listat för vuxna i Sverige. Utanför Sverige kan leverantören visa en annan sida. Reklamnotis: sidan innehåller en sponsrad länk. TheDateCompass kan få provision om du går vidare till leverantören.",
      disclosureLink: "Information om samarbetslänkar",
      imageAlt: "Bild som används för Manfinder-listningen, inte ett verifierat medlemsfoto",
      shortEyebrow: "Kort sagt",
      shortText: "Gay dating för vuxna män. Villkoren finns hos leverantören.",
      facts: [
        { label: "Region", value: "Sverige" },
        { label: "Fokus", value: "Gay dating" },
        { label: "Ålder", value: "18 år och äldre" },
        { label: "Priser", value: "Se leverantören" },
      ],
      partnerEyebrow: "Listning",
      partnerTitle: "Gay dating för män i Sverige",
      partnerLeft:
        "Den som söker gay dating i Sverige behöver en listning som säger att erbjudandet är för män som vill träffa män. Manfinder står här för det, inte för en allmän dejtingsajt.",
      partnerRight:
        "TheDateCompass driver inte plattformen, lagrar inte profiler där och kan inte kontrollera leverantörens påståenden. Medlemstal, betyg och träffsäkerhet utelämnas eftersom ingen verifierad källa finns.",
      contactsEyebrow: "Funktioner",
      contactsTitle: "Profiler, meddelanden och kontakt",
      contacts: [
        "Gay dating: den angivna inriktningen är män som vill träffa och få kontakt med andra män.",
        "Profiler: erbjudandet beskriver att man tittar på profiler. Leverantören bestämmer vilka uppgifter som syns.",
        "Meddelanden: direkta meddelanden ingår i listningen. Om de fungerar utan betalning står bara hos leverantören.",
      ],
      nicheEyebrow: "Fokus",
      nicheTitle: "Män som söker män",
      nicheBody:
        "Personer som söker gay dating eller kontakt mellan män hör till den här listningen. Manfinder beskrivs inte här som en allmän dejtingsajt. Om leverantörens webbplats har egna filter, platsverktyg eller fler kategorier står det där och kan ändras. Den här sidan hittar inte på sådana funktioner.",
      signupEyebrow: "Steg",
      signupTitle: "Registrering hos leverantören",
      signupIntro: "De exakta stegen finns hos leverantören och kan ändras.",
      steps: [
        { title: "Registrera dig", text: "En kort registrering med e-post eller en annan inloggning, åldersbekräftelse och lösenord är vanlig. Leverantören bestämmer vilka fält som krävs." },
        { title: "Skapa en profil", text: "Därefter ber många tjänster om ett visningsnamn, ett ungefärligt område, en kort beskrivning och ett valfritt foto. Dela bara det du själv vill ha offentligt." },
        { title: "Profiler och meddelanden", text: "Manfinder-listningen omfattar profilvisning och direkta meddelanden. Om filter eller chatt kostar pengar står det hos leverantören." },
      ],
      priceEyebrow: "Pris",
      priceTitle: "Kostnader finns hos leverantören",
      priceBody: [
        "Inget verifierat pris för Manfinder finns här. Om registrering kostar något, och vilka funktioner som kostar pengar efteråt, visas bara på leverantörens aktuella webbplats.",
        "Kontrollera löptid, förnyelse och betalningssätt innan du bekräftar en prenumeration. Uppsägning och återbetalning bestäms av leverantören, inte av den här översikten.",
      ],
      midTitle: "Öppna leverantörens webbplats och kontrollera själv",
      midBody: "Aktuella priser, funktioner och villkor för det här gay dating-erbjudandet finns bara där.",
      midCta: "Granska Manfinder hos leverantören",
      midNote: "Sponsrad · Endast 18+",
      ageTitle: "Endast för vuxna över 18",
      ageBody: [
        "Manfinder och den här sidan är bara för personer som är 18 år eller äldre. Minderåriga får inte registrera sig. Vissa profiler kan vara modererade. Vi påstår inte att varje profil är en verklig person.",
        "Om någon snabbt ber om betalning utanför webbplatsen, eller om privata dokument, avsluta samtalet. Rapportera det med plattformens verktyg när de finns.",
      ],
      privacyEyebrow: "Tips",
      privacyTitle: "Integritet och diskretion",
      privacy: [
        { title: "Dela mindre", text: "Ett neutralt visningsnamn, en e-post du kontrollerar och ett foto utan arbetsplats eller hem minskar risken att bli igenkänd senare. Håll platsuppgifter vaga." },
        { title: "Läs integritetspolicyn", text: "Läs leverantörens integritetspolicy innan du laddar upp foton eller kontaktuppgifter. Betala bara via kassan på leverantörens webbplats. TheDateCompass ser inte de uppgifterna." },
        { title: "Var försiktig med möten", text: "Samma försiktighet gäller som vid varje kontakt från internet: en offentlig plats, egen transport och rätten att gå. Sidan lovar inget om enskilda medlemmars säkerhet." },
      ],
      summaryEyebrow: "Sammanfattning",
      summaryTitle: "Manfinder i korthet",
      summaryBody: [
        "Manfinder är ett alternativ för vuxna män i Sverige som vill titta på gay dating. Listningen omfattar profilsökning och direkta meddelanden. Priser och den exakta funktionsuppsättningen finns bara hos leverantören.",
        "TheDateCompass publicerar den här översikten som reklam och länkar bara det här erbjudandet. Profiler, betalning och support ligger hos den som driver Manfinder.",
      ],
      endCta: "Fortsätt till Manfinder",
      faqEyebrow: "FAQ",
      faqTitle: "Vanliga frågor om Manfinder",
      faqs: [
        { question: "Vad är Manfinder?", answer: "Manfinder listas här som en gay dating-plattform för män som vill träffa andra män. Listningen omfattar profilvisning och direkta meddelanden. TheDateCompass driver inte plattformen." },
        { question: "Vem är gay dating på Manfinder för i Sverige?", answer: "Listningen är för vuxna över 18 år i Sverige som vill ha kontakt mellan män. Sidan är inte en matchmaking-tjänst och lovar inga resultat." },
        { question: "Vad kostar Manfinder?", answer: "TheDateCompass publicerar inga priser. Aktuella avgifter och abonnemang visas bara hos leverantören och kan ändras." },
        { question: "Hur diskret är registreringen?", answer: "Diskretion beror på vad du delar och på leverantörens inställningar. Använd en e-post du kontrollerar och läs integritetspolicyn innan du laddar upp foton eller kontaktuppgifter." },
        { question: "Är alla profiler verkliga personer?", answer: "Det går inte att verifiera utifrån. Vissa profiler kan vara modererade. Läs leverantörens villkor och lita inte på ett påstående som ”bara riktiga profiler”." },
        { question: "Finns det en åldersgräns?", answer: "Ja. Manfinder och den här sidan är bara för personer över 18 år. Minderåriga får inte registrera sig. Om en profil verkar oklar, avsluta kontakten." },
        { question: "Vad händer efter att jag klickar på knappen?", answer: "Knappen skickar dig via en omdirigering från TheDateCompass till leverantörens webbplats. TheDateCompass kan få provision om du registrerar dig där. Leverantören hanterar konto, betalning och support." },
      ],
    },
  },
  {
    id: "denmark",
    path: "/dk/manfinder",
    hreflang: "da-DK",
    ogLocale: "da_DK",
    countryToken: "denmark",
    goSlug: "manfinder-dk",
    hubHref: "/denmark",
    title: "Manfinder: Gay dating i Danmark | TheDateCompass",
    description:
      "Manfinder til gay dating i Danmark: profiler, direkte beskeder og kontakt mellem mænd. Kun for voksne over 18. Priser står hos udbyderen.",
    keywords: ["Manfinder", "gay dating Danmark", "mænd søger mænd", "homoseksuel dating", "direkte beskeder", "profiler", "diskret", "18+"],
    ui: {
      breadcrumbLabel: "Brødkrumme",
      home: "Hjem",
      country: "Danmark",
      badges: ["Sponsoreret", "Kun 18+", "Danmark"],
      h1Lead: "Manfinder:",
      h1Highlight: "gay dating",
      h1Tail: "i Danmark",
      intro:
        "Manfinder er opført for voksne mænd i Danmark, der vil møde andre mænd. Du kan gennemse profiler og sende direkte beskeder. Siden dækker kun dette ene tilbud.",
      heroCta: "Gå til udbyderen",
      heroNote: "Kun over 18. Priser står hos udbyderen.",
      disclosure:
        "Tilbuddet er listet for voksne i Danmark. Uden for Danmark kan udbyderen vise en anden side. Reklamebemærkning: siden indeholder et sponsoreret link. TheDateCompass kan få provision, hvis du går videre til udbyderen.",
      disclosureLink: "Oplysning om samarbejdslinks",
      imageAlt: "Billede brugt til Manfinder-opslaget, ikke et bekræftet medlemsfoto",
      shortEyebrow: "Kort fortalt",
      shortText: "Gay dating for voksne mænd. Vilkårene står hos udbyderen.",
      facts: [
        { label: "Region", value: "Danmark" },
        { label: "Fokus", value: "Gay dating" },
        { label: "Alder", value: "18 år og derover" },
        { label: "Priser", value: "Se udbyderen" },
      ],
      partnerEyebrow: "Opslag",
      partnerTitle: "Gay dating for mænd i Danmark",
      partnerLeft:
        "Den, der søger gay dating i Danmark, har brug for et opslag, der siger, at tilbuddet er for mænd, der vil møde mænd. Manfinder står her for det, ikke for en almindelig datingside.",
      partnerRight:
        "TheDateCompass driver ikke platformen, gemmer ikke profiler dér og kan ikke kontrollere udbyderens påstande. Medlemstal, vurderinger og succesrater er udeladt, fordi der ikke findes en bekræftet kilde.",
      contactsEyebrow: "Funktioner",
      contactsTitle: "Profiler, beskeder og kontakt",
      contacts: [
        "Gay dating: den angivne retning er mænd, der vil møde og få kontakt med andre mænd.",
        "Profiler: tilbuddet beskriver gennemsyn af profiler. Udbyderen bestemmer, hvilke oplysninger der vises.",
        "Beskeder: direkte beskeder er en del af opslaget. Om de virker uden betaling, står kun hos udbyderen.",
      ],
      nicheEyebrow: "Fokus",
      nicheTitle: "Mænd der søger mænd",
      nicheBody:
        "Folk, der søger gay dating eller kontakt mellem mænd, hører under dette opslag. Manfinder beskrives ikke her som en almindelig datingside. Om udbyderens side har egne filtre, stedværktøjer eller flere kategorier, står der og kan ændre sig. Denne side opfinder ikke de funktioner.",
      signupEyebrow: "Trin",
      signupTitle: "Tilmelding hos udbyderen",
      signupIntro: "De præcise trin står hos udbyderen og kan ændre sig.",
      steps: [
        { title: "Registrer dig", text: "En kort tilmelding med e-mail eller et andet login, aldersbekræftelse og adgangskode er almindelig. Udbyderen bestemmer, hvilke felter der er påkrævet." },
        { title: "Opret en profil", text: "Derefter beder mange tjenester om et visningsnavn, et omtrentligt område, en kort beskrivelse og et valgfrit foto. Del kun det, du selv vil have offentligt." },
        { title: "Profiler og beskeder", text: "Manfinder-opslaget dækker gennemsyn af profiler og direkte beskeder. Om filtre eller chat koster penge, står hos udbyderen." },
      ],
      priceEyebrow: "Pris",
      priceTitle: "Omkostninger står hos udbyderen",
      priceBody: [
        "Der findes ingen bekræftet pris for Manfinder her. Om tilmelding koster noget, og hvilke funktioner der koster penge bagefter, vises kun på udbyderens aktuelle side.",
        "Tjek løbetid, fornyelse og betalingsmåde, før du bekræfter et abonnement. Opsigelse og tilbagebetaling fastsættes af udbyderen, ikke af denne oversigt.",
      ],
      midTitle: "Åbn udbyderens side og tjek selv",
      midBody: "Aktuelle priser, funktioner og vilkår for dette gay dating-tilbud står kun dér.",
      midCta: "Se Manfinder hos udbyderen",
      midNote: "Sponsoreret · Kun 18+",
      ageTitle: "Kun for voksne over 18",
      ageBody: [
        "Manfinder og denne side er kun for personer på 18 år eller derover. Mindreårige må ikke registrere sig. Nogle profiler kan være modereret. Vi påstår ikke, at hver profil er en rigtig person.",
        "Hvis nogen hurtigt beder om betaling uden for siden eller om private dokumenter, så stop samtalen. Rapportér det med platformens værktøjer, når de findes.",
      ],
      privacyEyebrow: "Tips",
      privacyTitle: "Privatliv og diskretion",
      privacy: [
        { title: "Del mindre", text: "Et neutralt visningsnavn, en e-mail du kontrollerer, og et foto uden arbejdsplads eller hjem mindsker risikoen for at blive genkendt senere. Hold stedoplysninger vage." },
        { title: "Læs privatlivspolitikken", text: "Læs udbyderens privatlivspolitik, før du uploader fotos eller kontaktoplysninger. Betal kun via kassen på udbyderens side. TheDateCompass ser ikke de oplysninger." },
        { title: "Vær forsigtig med møder", text: "Samme forsigtighed gælder som ved enhver kontakt fra internettet: et offentligt sted, egen transport og retten til at gå. Siden lover intet om enkelte medlemmers sikkerhed." },
      ],
      summaryEyebrow: "Opsummering",
      summaryTitle: "Manfinder i korte træk",
      summaryBody: [
        "Manfinder er en mulighed for voksne mænd i Danmark, der vil se på gay dating. Opslaget dækker profilsøgning og direkte beskeder. Priser og det præcise funktionssæt findes kun hos udbyderen.",
        "TheDateCompass udgiver denne oversigt som reklame og linker kun til dette tilbud. Profiler, betaling og support ligger hos den, der driver Manfinder.",
      ],
      endCta: "Videre til Manfinder",
      faqEyebrow: "FAQ",
      faqTitle: "Almindelige spørgsmål om Manfinder",
      faqs: [
        { question: "Hvad er Manfinder?", answer: "Manfinder er opført her som en gay dating-platform for mænd, der vil møde andre mænd. Opslaget dækker gennemsyn af profiler og direkte beskeder. TheDateCompass driver ikke platformen." },
        { question: "Hvem er gay dating på Manfinder til i Danmark?", answer: "Opslaget er for voksne over 18 år i Danmark, der vil have kontakt mellem mænd. Siden er ikke en matchmaking-tjeneste og lover ikke resultater." },
        { question: "Hvad koster Manfinder?", answer: "TheDateCompass oplyser ingen priser. Gældende gebyrer og abonnementer vises kun hos udbyderen og kan ændre sig." },
        { question: "Hvor diskret er tilmeldingen?", answer: "Diskretion afhænger af, hvad du deler, og af udbyderens indstillinger. Brug en e-mail, du kontrollerer, og læs privatlivspolitikken, før du uploader fotos eller kontaktoplysninger." },
        { question: "Er alle profiler rigtige personer?", answer: "Det kan ikke bekræftes udefra. Nogle profiler kan være modereret. Læs udbyderens vilkår, og stol ikke på et udsagn som «kun rigtige profiler»." },
        { question: "Er der en aldersgrænse?", answer: "Ja. Manfinder og denne side er kun for personer over 18 år. Mindreårige må ikke registrere sig. Hvis en profil virker uklar, så stop kontakten." },
        { question: "Hvad sker der, når jeg klikker på knappen?", answer: "Knappen sender dig via en omdirigering fra TheDateCompass til udbyderens side. TheDateCompass kan få provision, hvis du tilmelder dig dér. Udbyderen håndterer konto, betaling og support." },
      ],
    },
  },
  dutchPage({
    id: "netherlands",
    path: "/nl/manfinder",
    hreflang: "nl-NL",
    ogLocale: "nl_NL",
    countryToken: "netherlands",
    goSlug: "manfinder-nl",
    place: "Nederland",
    country: "Nederland",
    keywordPlace: "Nederland",
  }),
  {
    id: "finland",
    path: "/fi/manfinder",
    hreflang: "fi-FI",
    ogLocale: "fi_FI",
    countryToken: "finland",
    goSlug: "manfinder-fi",
    title: "Manfinder: Gay-deittailu Suomessa | TheDateCompass",
    description:
      "Manfinder gay-deittailuun Suomessa: profiilit, suorat viestit ja yhteydet miesten välillä. Vain yli 18-vuotiaille. Hinnat palveluntarjoajalla.",
    keywords: ["Manfinder", "gay deittailu Suomi", "miehet etsivät miehiä", "homodeittailu", "suorat viestit", "profiilit", "hienovarainen", "18+"],
    ui: {
      breadcrumbLabel: "Murupolku",
      home: "Etusivu",
      country: "Suomi",
      badges: ["Sponsoroitu", "Vain 18+", "Suomi"],
      h1Lead: "Manfinder:",
      h1Highlight: "gay-deittailu",
      h1Tail: "Suomessa",
      intro:
        "Manfinder on listattu aikuisille miehille Suomessa, jotka haluavat tavata muita miehiä. Profiileja voi selata ja viestejä lähettää suoraan. Tämä sivu käsittelee vain tätä yhtä tarjousta.",
      heroCta: "Siirry palveluntarjoajalle",
      heroNote: "Vain yli 18-vuotiaille. Hinnat palveluntarjoajalla.",
      disclosure:
        "Tarjous on listattu aikuisille Suomessa. Suomen ulkopuolella palveluntarjoaja voi näyttää toisen sivun. Mainosilmoitus: sivulla on sponsoroitu linkki. TheDateCompass voi saada palkkion, jos jatkat palveluntarjoajalle.",
      disclosureLink: "Kumppanuuslinkkien ilmoitus",
      imageAlt: "Manfinder-listauksen kuva, ei vahvistettu jäsenen valokuva",
      shortEyebrow: "Lyhyesti",
      shortText: "Gay-deittailua aikuisille miehille. Ehdot ovat palveluntarjoajalla.",
      facts: [
        { label: "Alue", value: "Suomi" },
        { label: "Painotus", value: "Gay-deittailu" },
        { label: "Ikä", value: "18 vuotta ja vanhemmat" },
        { label: "Hinnat", value: "Katso palveluntarjoaja" },
      ],
      partnerEyebrow: "Listaus",
      partnerTitle: "Gay-deittailu miehille Suomessa",
      partnerLeft:
        "Gay-deittailua Suomessa etsivä tarvitsee listauksen, joka sanoo tarjouksen olevan miehille, jotka haluavat tavata miehiä. Manfinder on tässä sitä varten, ei yleinen deittisivusto.",
      partnerRight:
        "TheDateCompass ei ylläpidä alustaa, ei tallenna siellä profiileja eikä tarkista palveluntarjoajan väitteitä. Jäsenmääriä, arvioita ja onnistumisprosentteja ei mainita, koska vahvistettua lähdettä ei ole.",
      contactsEyebrow: "Ominaisuudet",
      contactsTitle: "Profiilit, viestit ja yhteydet",
      contacts: [
        "Gay-deittailu: listattu painotus on miehet, jotka haluavat tavata ja olla yhteydessä muihin miehiin.",
        "Profiilit: tarjous kuvaa profiilien selaamista. Palveluntarjoaja päättää, mitkä tiedot näkyvät.",
        "Viestit: suorat viestit kuuluvat listaukseen. Toimivatko ne ilman maksua, kerrotaan vain palveluntarjoajan sivulla.",
      ],
      nicheEyebrow: "Painotus",
      nicheTitle: "Miehet etsivät miehiä",
      nicheBody:
        "Gay-deittailua tai yhteyksiä miesten välillä etsivät kuuluvat tähän listaukseen. Manfinderia ei kuvata tässä yleisenä deittisivustona. Onko palveluntarjoajalla omia suodattimia, sijaintityökaluja tai lisäluokkia, kerrotaan siellä ja se voi muuttua. Tämä sivu ei keksi sellaisia ominaisuuksia.",
      signupEyebrow: "Vaiheet",
      signupTitle: "Rekisteröityminen palveluntarjoajalla",
      signupIntro: "Tarkat vaiheet ovat palveluntarjoajan sivulla ja voivat muuttua.",
      steps: [
        { title: "Rekisteröidy", text: "Lyhyt rekisteröityminen sähköpostilla tai muulla kirjautumisella, iän vahvistus ja salasana on tavanomaista. Palveluntarjoaja päättää, mitkä kentät ovat pakollisia." },
        { title: "Luo profiili", text: "Sen jälkeen monet palvelut pyytävät näyttönimeä, summittaista aluetta, lyhyttä kuvausta ja valinnaista kuvaa. Jaa vain se, minkä haluat julkiseksi." },
        { title: "Profiilit ja viestit", text: "Manfinder-listaus kattaa profiilien selaamisen ja suorat viestit. Maksavatko suodattimet tai keskustelu, kerrotaan palveluntarjoajalla." },
      ],
      priceEyebrow: "Hinta",
      priceTitle: "Kulut ovat palveluntarjoajalla",
      priceBody: [
        "Manfinderille ei ole tässä vahvistettua hintaa. Maksaako rekisteröityminen ja mitkä ominaisuudet maksavat sen jälkeen, näkyy vain palveluntarjoajan ajantasaisella sivulla.",
        "Tarkista kesto, uusiminen ja maksutapa ennen kuin vahvistat tilauksen. Peruutus ja hyvitykset päättää palveluntarjoaja, ei tämä yhteenveto.",
      ],
      midTitle: "Avaa palveluntarjoajan sivu ja tarkista itse",
      midBody: "Tämän gay-deittailun ajantasaiset hinnat, ominaisuudet ja ehdot ovat vain siellä.",
      midCta: "Katso Manfinder palveluntarjoajalla",
      midNote: "Sponsoroitu · Vain 18+",
      ageTitle: "Vain yli 18-vuotiaille",
      ageBody: [
        "Manfinder ja tämä sivu ovat vain 18 vuotta täyttäneille. Alaikäiset eivät saa rekisteröityä. Osa profiileista voi olla valvottuja. Emme väitä, että jokainen profiili on oikea henkilö.",
        "Jos joku pyytää nopeasti maksua sivuston ulkopuolella tai yksityisiä asiakirjoja, lopeta keskustelu. Ilmoita siitä alustan työkaluilla, jos niitä on.",
      ],
      privacyEyebrow: "Vinkit",
      privacyTitle: "Tietosuoja ja hienovaraisuus",
      privacy: [
        { title: "Jaa vähemmän", text: "Neutraali näyttönimi, hallitsemasi sähköposti ja kuva ilman työpaikkaa tai kotia pienentävät riskiä tulla tunnistetuksi myöhemmin. Pidä sijaintitiedot epätarkkoina." },
        { title: "Lue tietosuojaseloste", text: "Lue palveluntarjoajan tietosuojaseloste ennen kuin lataat kuvia tai yhteystietoja. Maksa vain palveluntarjoajan kassan kautta. TheDateCompass ei näe näitä tietoja." },
        { title: "Ole varovainen tapaamisissa", text: "Sama varovaisuus pätee kuin missä tahansa internetkontaktissa: julkinen paikka, oma kulkuneuvo ja oikeus lähteä. Tämä sivu ei lupaa yksittäisten jäsenten turvallisuutta." },
      ],
      summaryEyebrow: "Yhteenveto",
      summaryTitle: "Manfinder lyhyesti",
      summaryBody: [
        "Manfinder on vaihtoehto aikuisille miehille Suomessa, jotka haluavat katsoa gay-deittailua. Listaus kattaa profiilit ja suorat viestit. Hinnat ja tarkat ominaisuudet ovat vain palveluntarjoajalla.",
        "TheDateCompass julkaisee tämän yhteenvedon mainoksena ja linkittää vain tähän tarjoukseen. Profiilit, maksu ja tuki kuuluvat Manfinderin ylläpitäjälle.",
      ],
      endCta: "Jatka Manfinderiin",
      faqEyebrow: "UKK",
      faqTitle: "Yleisiä kysymyksiä Manfinderista",
      faqs: [
        { question: "Mikä Manfinder on?", answer: "Manfinder on listattu tässä gay-deittailualustaksi miehille, jotka haluavat tavata muita miehiä. Listaus kattaa profiilien selaamisen ja suorat viestit. TheDateCompass ei ylläpidä alustaa." },
        { question: "Kenelle Manfinderin gay-deittailu Suomessa on?", answer: "Listaus on yli 18-vuotiaille aikuisille Suomessa, jotka etsivät yhteyksiä miesten välillä. Sivu ei ole matchmaking-palvelu eikä lupaa tuloksia." },
        { question: "Mitä Manfinder maksaa?", answer: "TheDateCompass ei julkaise hintoja. Ajantasaiset maksut ja tilaukset näkyvät vain palveluntarjoajalla ja voivat muuttua." },
        { question: "Kuinka hienovaraista rekisteröityminen on?", answer: "Hienovaraisuus riippuu siitä, mitä jaat, ja palveluntarjoajan asetuksista. Käytä hallitsemaasi sähköpostia ja lue tietosuojaseloste ennen kuvien tai yhteystietojen lataamista." },
        { question: "Ovatko kaikki profiilit oikeita henkilöitä?", answer: "Sitä ei voi varmistaa alustan ulkopuolelta. Osa profiileista voi olla valvottuja. Lue palveluntarjoajan ehdot äläkä luota väitteeseen kuten “vain oikeat profiilit”." },
        { question: "Onko ikäraja?", answer: "Kyllä. Manfinder ja tämä sivu ovat vain yli 18-vuotiaille. Alaikäiset eivät saa rekisteröityä. Jos profiili vaikuttaa epäselvältä, lopeta yhteydenpito." },
        { question: "Mitä tapahtuu painikkeen jälkeen?", answer: "Painike vie TheDateCompassin uudelleenohjauksen kautta palveluntarjoajan sivulle. TheDateCompass voi saada palkkion, jos rekisteröidyt siellä. Palveluntarjoaja hoitaa tilin, maksun ja tuen." },
      ],
    },
  },
  englishPage({
    id: "canada",
    path: "/canada/manfinder",
    hreflang: "en-CA",
    ogLocale: "en_CA",
    countryToken: "canada",
    goSlug: "manfinder-ca",
    hubHref: "/canada",
    place: "Canada",
    country: "Canada",
    keywordPlace: "Canada",
  }),
  englishPage({
    id: "uk",
    path: "/uk/manfinder",
    hreflang: "en-GB",
    ogLocale: "en_GB",
    countryToken: "uk",
    goSlug: "manfinder-uk",
    hubHref: "/uk",
    place: "the UK",
    country: "the UK",
    keywordPlace: "UK",
  }),
  englishPage({
    id: "ireland",
    path: "/ireland/manfinder",
    hreflang: "en-IE",
    ogLocale: "en_IE",
    countryToken: "ireland",
    goSlug: "manfinder-ie",
    place: "Ireland",
    country: "Ireland",
    keywordPlace: "Ireland",
  }),
  germanPage({
    id: "switzerland",
    path: "/ch/manfinder",
    hreflang: "de-CH",
    ogLocale: "de_CH",
    countryToken: "switzerland",
    goSlug: "manfinder-ch",
    place: "der Schweiz",
    country: "Schweiz",
    keywordPlace: "Schweiz",
  }),
  germanPage({
    id: "austria",
    path: "/at/manfinder",
    hreflang: "de-AT",
    ogLocale: "de_AT",
    countryToken: "austria",
    goSlug: "manfinder-at",
    place: "Österreich",
    country: "Österreich",
    keywordPlace: "Österreich",
  }),
  germanPage({
    id: "germany",
    path: "/de/manfinder",
    hreflang: "de-DE",
    ogLocale: "de_DE",
    countryToken: "germany",
    goSlug: "manfinder-de",
    hubHref: "/germany",
    place: "Deutschland",
    country: "Deutschland",
    keywordPlace: "Deutschland",
  }),
  dutchPage({
    id: "belgium",
    path: "/be/manfinder",
    hreflang: "nl-BE",
    ogLocale: "nl_BE",
    countryToken: "belgium",
    goSlug: "manfinder-be",
    place: "België",
    country: "België",
    keywordPlace: "België",
  }),
  englishPage({
    id: "new-zealand",
    path: "/new-zealand/manfinder",
    hreflang: "en-NZ",
    ogLocale: "en_NZ",
    countryToken: "new-zealand",
    goSlug: "manfinder-nz",
    place: "New Zealand",
    country: "New Zealand",
    keywordPlace: "New Zealand",
  }),
  englishPage({
    id: "usa",
    path: "/usa/manfinder",
    hreflang: "en-US",
    ogLocale: "en_US",
    countryToken: "usa",
    goSlug: "manfinder-us",
    hubHref: "/usa",
    place: "the USA",
    country: "the USA",
    keywordPlace: "USA",
  }),
  englishPage({
    id: "australia",
    path: "/australia/manfinder",
    hreflang: "en-AU",
    ogLocale: "en_AU",
    countryToken: "australia",
    goSlug: "manfinder-au",
    hubHref: "/australia",
    place: "Australia",
    country: "Australia",
    keywordPlace: "Australia",
  }),
];

export const manfinderCountryDestinations: Record<string, string> = Object.fromEntries(
  manfinderCountryPages.map((page) => [page.goSlug, OFFER_URL]),
);

const pagesById = new Map(manfinderCountryPages.map((page) => [page.id, page]));

export function getManfinderCountryPage(id: string): ManfinderCountryPage {
  const page = pagesById.get(id);
  if (!page) {
    throw new Error(`Missing Manfinder country page: ${id}`);
  }
  return page;
}

export function manfinderLanguageAlternates(): Record<string, string> {
  return Object.fromEntries([
    ["x-default", `${MANFINDER_SITE_URL}${MANFINDER_GENERAL_PATH}`],
    ...manfinderCountryPages.map((page) => [page.hreflang, `${MANFINDER_SITE_URL}${page.path}`]),
  ]);
}

export function manfinderCountryMetadata(page: ManfinderCountryPage): Metadata {
  const url = `${MANFINDER_SITE_URL}${page.path}`;
  const image = `${MANFINDER_SITE_URL}${getOfferAdultImage("manfinder")}`;
  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: [...page.keywords],
    alternates: {
      canonical: url,
      languages: manfinderLanguageAlternates(),
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
