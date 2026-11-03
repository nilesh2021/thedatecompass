import type { Metadata } from "next";

export const FETISHPARTNER_SITE_URL = "https://www.thedatecompass.com";

const OFFER_URL = "https://t.aslr1.com/358917/5055?aff_sub5=SF_006OG000004lmDN";

export type FetishPartnerFaq = { question: string; answer: string };
export type FetishPartnerFact = { label: string; value: string };
export type FetishPartnerStep = { title: string; text: string };

export type FetishPartnerCountryPage = {
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
    facts: readonly FetishPartnerFact[];
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
    steps: readonly FetishPartnerStep[];
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
    privacy: readonly FetishPartnerStep[];
    summaryEyebrow: string;
    summaryTitle: string;
    summaryBody: readonly [string, string];
    endCta: string;
    faqEyebrow: string;
    faqTitle: string;
    faqs: readonly FetishPartnerFaq[];
  };
};

const EXISTING_HREFLANG = [
  { hreflang: "de-DE", path: "/de/fetishpartner" },
  { hreflang: "en-CA", path: "/canada/fetishpartner" },
] as const;

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
}): FetishPartnerCountryPage {
  const { place, country, keywordPlace } = input;
  return {
    id: input.id,
    path: input.path,
    hreflang: input.hreflang,
    ogLocale: input.ogLocale,
    countryToken: input.countryToken,
    goSlug: input.goSlug,
    hubHref: input.hubHref,
    title: `FetishPartner: Fetish Dating in ${place} | TheDateCompass`,
    description: `FetishPartner for fetish dating in ${place}: niche contacts, profiles, and direct messages. Adults 18+ only. Prices are on the provider site.`,
    keywords: [
      "FetishPartner",
      `fetish dating ${keywordPlace}`,
      "fetish partner",
      "fetish contacts",
      "BDSM dating",
      "kink dating",
      "fetish community",
      "niche dating",
      "discreet",
      "18+",
    ],
    ui: {
      breadcrumbLabel: "Breadcrumb",
      home: "Home",
      country,
      badges: ["Sponsored", "18+ only", country],
      h1Lead: "FetishPartner:",
      h1Highlight: "fetish dating",
      h1Tail: `in ${place}`,
      intro: `FetishPartner is listed for adults in ${country} who want connections around specific interests. You can browse profiles and send direct messages. This page covers only this one offer.`,
      heroCta: "Continue to the provider",
      heroNote: "18+ only. Prices are on the provider site.",
      disclosure: `This offer is listed for adults in ${country}. Outside ${country} the provider may show a different page. Advertising notice: this page contains a sponsored link. TheDateCompass may earn a commission if you continue to the provider.`,
      disclosureLink: "Affiliate disclosure",
      imageAlt: "Neon pink mood image, not a photo of a real FetishPartner member",
      shortEyebrow: "In short",
      shortText: "Niche contacts for adults. Confirm the terms on the provider site.",
      facts: [
        { label: "Region", value: country },
        { label: "Focus", value: "Specific interests" },
        { label: "Age", value: "18 and older" },
        { label: "Prices", value: "See provider site" },
      ],
      partnerEyebrow: "Listing",
      partnerTitle: "A fetish partner for specific interests",
      partnerLeft: `Someone looking for a fetish partner needs a listing that states the interest. For ${country}, FetishPartner is the adult social option for connections around specific interests, rather than a general dating site.`,
      partnerRight:
        "TheDateCompass does not run the platform, store profiles, or check the provider’s claims. Member counts, ratings, and success rates are left out because no verified source is available.",
      contactsEyebrow: "Features",
      contactsTitle: "Fetish contacts: profiles and messages",
      contacts: [
        "Niche contacts: the listed focus is connections around specific interests, not broad dating with no topic.",
        "Profiles: the offer describes browsing profiles. The provider decides which details are visible.",
        "Messages: direct messages are part of the listing. Whether they work without payment is stated only on the provider site.",
      ],
      nicheEyebrow: "Niche",
      nicheTitle: "BDSM and kink dating in this listing",
      nicheBody:
        "People looking for BDSM dating or kink dating fall under the same listing: adult contacts with a clear interest. FetishPartner is not described here as a general singles site. Whether the provider site has its own categories, a fetish community, or extra filters is stated there and can change. This page does not invent those features.",
      signupEyebrow: "Steps",
      signupTitle: "Discreet signup",
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
          text: "The FetishPartner listing covers browsing profiles and sending direct messages. Whether filters or chat require payment is stated on the provider site.",
        },
      ],
      priceEyebrow: "Pricing",
      priceTitle: "Costs are on the provider site",
      priceBody: [
        "No verified price is available here for FetishPartner. Whether signup is free, and which features cost money afterward, is shown only on the current provider site.",
        "Check the term, renewal, and payment method before you confirm a subscription. Cancellation and refunds are set by the provider, not by this overview.",
      ],
      midTitle: "Open the provider site and check it yourself",
      midBody: "Current prices, features, and terms for this fetish dating offer are listed only there.",
      midCta: "Review FetishPartner on the provider site",
      midNote: "Sponsored · 18+ only",
      ageTitle: "Adults 18 and older only",
      ageBody: [
        "FetishPartner and this page are only for people 18 or older. Minors must not register. Some profiles may be moderated. We do not claim that every profile is a real person.",
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
      summaryTitle: "FetishPartner in short",
      summaryBody: [
        `FetishPartner is an option for adults in ${country} who want to look at fetish dating and other niche contacts. The listing covers profile browsing and direct messages. Prices and the exact feature set are only on the provider site.`,
        "TheDateCompass publishes this overview as an advertisement and links only this offer. Profiles, payment, and support stay with the operator of FetishPartner.",
      ],
      endCta: "Continue to FetishPartner",
      faqEyebrow: "FAQ",
      faqTitle: "Common questions about FetishPartner",
      faqs: [
        {
          question: "What is FetishPartner?",
          answer:
            "FetishPartner is listed here as an adult platform for connections around specific interests. The listing covers browsing profiles and sending direct messages. TheDateCompass does not operate the platform.",
        },
        {
          question: `Who is fetish dating on FetishPartner for in ${country}?`,
          answer: `The listing is for adults 18 or older in ${country} who want a fetish partner or other niche contacts. That can include BDSM and kink dating. This page is not a matchmaking service and it does not promise results.`,
        },
        {
          question: "How much does FetishPartner cost?",
          answer:
            "TheDateCompass does not publish prices. Current fees, free features, and subscriptions are shown only on the provider site and can change.",
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
            "Yes. FetishPartner and this page are only for people 18 or older. Minors must not register. If a profile seems unclear, stop the conversation.",
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
  place: string;
  country: string;
  keywordPlace: string;
}): FetishPartnerCountryPage {
  const { place, country, keywordPlace } = input;
  return {
    id: input.id,
    path: input.path,
    hreflang: input.hreflang,
    ogLocale: input.ogLocale,
    countryToken: input.countryToken,
    goSlug: input.goSlug,
    title: `FetishPartner: Fetisch-Dating in ${place} | TheDateCompass`,
    description: `FetishPartner für Fetisch-Dating in ${place}: Nischenkontakte, Profile und direkte Nachrichten. Nur für Erwachsene ab 18. Preise auf der Anbieterseite.`,
    keywords: [
      "FetishPartner",
      `Fetisch Dating ${keywordPlace}`,
      "Fetisch Partner",
      "Fetisch Kontakte",
      "BDSM Dating",
      "Kink Dating",
      "Fetisch Community",
      "Nischen-Dating",
      "diskret",
      "ab 18",
    ],
    ui: {
      breadcrumbLabel: "Brotkrumen",
      home: "Start",
      country,
      badges: ["Anzeige", "Nur 18+", country],
      h1Lead: "FetishPartner:",
      h1Highlight: "Fetisch-Dating",
      h1Tail: `in ${place}`,
      intro: `FetishPartner ist für Erwachsene in ${country} eingeordnet, die Kontakte zu speziellen Interessen suchen. Profile lassen sich durchsehen, Nachrichten direkt schreiben. Diese Seite stellt nur dieses eine Angebot vor.`,
      heroCta: "Zur Anbieterseite",
      heroNote: "Nur ab 18. Preise siehe Anbieterseite.",
      disclosure: `Dieses Angebot richtet sich an Erwachsene in ${country}. Außerhalb kann die Anbieterseite eine andere Seite anzeigen. Werbehinweis: Diese Seite enthält einen gesponserten Link. TheDateCompass kann eine Provision erhalten, wenn Sie über den Button zur Anbieterseite wechseln.`,
      disclosureLink: "Hinweise zur Werbung",
      imageAlt: "Stimmungsbild unter neonrosa Licht, ohne Bezug zu echten Mitgliedern von FetishPartner",
      shortEyebrow: "Kurz gesagt",
      shortText: "Nischenkontakte für Erwachsene. Konditionen prüfen Sie auf der Anbieterseite.",
      facts: [
        { label: "Region", value: country },
        { label: "Fokus", value: "Spezielle Interessen" },
        { label: "Alter", value: "Ab 18 Jahren" },
        { label: "Preise", value: "Siehe Anbieterseite" },
      ],
      partnerEyebrow: "Einordnung",
      partnerTitle: "Fetisch Partner für spezielle Interessen",
      partnerLeft: `Wer einen Fetisch Partner sucht, braucht eine Einordnung, die das Interesse nicht versteckt. Für ${country} steht FetishPartner für erwachsene soziale Kontakte mit speziellen Interessen, nicht für ein allgemeines Kennenlernportal.`,
      partnerRight:
        "TheDateCompass betreibt die Plattform nicht, speichert dort keine Profile und kann Zusagen des Anbieters nicht prüfen. Mitgliedszahlen, Bewertungen und Erfolgsquoten werden hier nicht genannt, weil dazu keine geprüfte Quelle vorliegt.",
      contactsEyebrow: "Funktionen",
      contactsTitle: "Fetisch Kontakte: Profile und Nachrichten",
      contacts: [
        "Nischenkontakte: Die gelistete Ausrichtung sind Verbindungen rund um spezielle Interessen, nicht ein breites Dating ohne Thema.",
        "Profile: Das Angebot beschreibt das Durchsehen von Profilen. Welche Angaben sichtbar sind, legt der Anbieter fest.",
        "Nachrichten: Direkte Nachrichten gehören zur Einordnung. Ob sie ohne Bezahlung nutzbar sind, sehen Sie nur auf der Anbieterseite.",
      ],
      nicheEyebrow: "Nische",
      nicheTitle: "BDSM- und Kink-Dating in dieser Einordnung",
      nicheBody:
        "Menschen, die BDSM-Dating oder Kink-Dating suchen, fallen unter dieselbe Einordnung: erwachsene Kontakte mit einem klaren Interesse. FetishPartner wird hier nicht als allgemeine Singlebörse beschrieben. Ob die Anbieterseite eigene Kategorien, eine Fetisch Community oder weitere Filter führt, steht dort und kann sich ändern. Diese Übersicht erfindet keine solchen Funktionen.",
      signupEyebrow: "Ablauf",
      signupTitle: "Diskrete Anmeldung",
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
          text: "Die Einordnung von FetishPartner nennt das Durchsehen von Profilen und direkte Nachrichten. Ob Filter oder der Chat kostenpflichtig sind, steht auf der Anbieterseite.",
        },
      ],
      priceEyebrow: "Preise",
      priceTitle: "Kosten auf der Anbieterseite",
      priceBody: [
        "Für FetishPartner liegt hier kein geprüfter Preis vor. Ob die Anmeldung kostenlos ist und welche Funktionen danach Geld kosten, steht nur aktuell auf der Anbieterseite.",
        "Achten Sie auf Laufzeit, Verlängerung und Zahlungsart, bevor Sie ein Abo bestätigen. Kündigungsfristen und Erstattungen regelt der Anbieter, nicht diese Übersicht.",
      ],
      midTitle: "Anbieterseite öffnen und selbst prüfen",
      midBody: "Aktuelle Preise, Funktionen und Bedingungen für dieses Fetisch-Dating-Angebot stehen nur dort.",
      midCta: "FetishPartner auf der Anbieterseite prüfen",
      midNote: "Anzeige · Nur 18+",
      ageTitle: "Nur für Erwachsene ab 18",
      ageBody: [
        "FetishPartner und diese Seite sind nur für Personen ab 18 Jahren. Minderjährige dürfen sich nicht registrieren. Einige Profile können moderiert sein. Eine pauschale Zusage, dass alle Profile echt seien, geben wir nicht.",
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
      summaryTitle: "Fazit zu FetishPartner",
      summaryBody: [
        `FetishPartner ist eine Option für Erwachsene in ${country}, die Fetisch-Dating und andere Nischenkontakte prüfen möchten. Gelistet sind Profilsuche und direkte Nachrichten. Preise und der genaue Funktionsumfang stehen nur auf der Anbieterseite.`,
        "TheDateCompass stellt diesen Überblick als Anzeige bereit und verlinkt nur dieses Angebot. Verantwortung für Profile, Zahlung und Support trägt der Betreiber von FetishPartner.",
      ],
      endCta: "Weiter zu FetishPartner",
      faqEyebrow: "FAQ",
      faqTitle: "Häufige Fragen zu FetishPartner",
      faqs: [
        {
          question: "Was ist FetishPartner?",
          answer:
            "FetishPartner ist in diesem Angebot als Plattform für erwachsene soziale Kontakte mit speziellen Interessen eingeordnet. Gelistet sind das Durchsehen von Profilen und direkte Nachrichten. TheDateCompass betreibt die Plattform nicht.",
        },
        {
          question: `Für wen ist Fetisch-Dating bei FetishPartner in ${country}?`,
          answer: `Die Einordnung gilt für Erwachsene ab 18 Jahren in ${country}, die Fetisch Partner oder andere Nischenkontakte suchen. Dazu kann BDSM- und Kink-Dating gehören. Die Seite ist kein Partnervermittlungsdienst mit Erfolgsgarantie.`,
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
      ],
    },
  };
}

export const fetishPartnerCountryPages: FetishPartnerCountryPage[] = [
  englishPage({
    id: "australia",
    path: "/australia/fetishpartner",
    hreflang: "en-AU",
    ogLocale: "en_AU",
    countryToken: "australia",
    goSlug: "fetishpartner-au",
    hubHref: "/australia",
    place: "Australia",
    country: "Australia",
    keywordPlace: "Australia",
  }),
  germanPage({
    id: "austria",
    path: "/at/fetishpartner",
    hreflang: "de-AT",
    ogLocale: "de_AT",
    countryToken: "austria",
    goSlug: "fetishpartner-at",
    place: "Österreich",
    country: "Österreich",
    keywordPlace: "Österreich",
  }),
  {
    id: "czech-republic",
    path: "/cs/fetishpartner",
    hreflang: "cs-CZ",
    ogLocale: "cs_CZ",
    countryToken: "czech-republic",
    goSlug: "fetishpartner-cz",
    title: "FetishPartner: Fetiš seznamka v Česku | TheDateCompass",
    description:
      "FetishPartner pro fetiš seznamku v Česku: zájmové kontakty, profily a přímé zprávy. Jen pro dospělé od 18 let. Ceny jsou na webu provozovatele.",
    keywords: [
      "FetishPartner",
      "fetiš seznamka Česko",
      "fetiš partner",
      "fetiš kontakty",
      "BDSM seznamka",
      "kink seznamka",
      "fetiš komunita",
      "zájmové seznamování",
      "diskrétní",
      "od 18",
    ],
    ui: {
      breadcrumbLabel: "Drobečková navigace",
      home: "Domů",
      country: "Česko",
      badges: ["Reklama", "Jen 18+", "Česko"],
      h1Lead: "FetishPartner:",
      h1Highlight: "fetiš seznamka",
      h1Tail: "v Česku",
      intro:
        "FetishPartner je tu zařazen pro dospělé v Česku, kteří hledají kontakty ke konkrétním zájmům. Profily lze prohlížet a posílat přímé zprávy. Tato stránka představuje jen tuto jednu nabídku.",
      heroCta: "Pokračovat na web provozovatele",
      heroNote: "Jen od 18 let. Ceny jsou na webu provozovatele.",
      disclosure:
        "Tato nabídka je určena dospělým v Česku. Mimo tuto zemi může provozovatel zobrazit jinou stránku. Upozornění: stránka obsahuje sponzorovaný odkaz. TheDateCompass může získat provizi, když přejdete na web provozovatele.",
      disclosureLink: "Informace o reklamě",
      imageAlt: "Náladový snímek v neonově růžovém světle, nejde o člena FetishPartner",
      shortEyebrow: "Stručně",
      shortText: "Zájmové kontakty pro dospělé. Podmínky ověřte u provozovatele.",
      facts: [
        { label: "Region", value: "Česko" },
        { label: "Zaměření", value: "Konkrétní zájmy" },
        { label: "Věk", value: "Od 18 let" },
        { label: "Ceny", value: "Web provozovatele" },
      ],
      partnerEyebrow: "Zařazení",
      partnerTitle: "Fetiš partner pro konkrétní zájmy",
      partnerLeft:
        "Kdo hledá fetiš partnera, potřebuje zařazení, které zájem neskrývá. Pro Česko je FetishPartner dospělá sociální nabídka kontaktů ke konkrétním zájmům, ne obecná seznamka.",
      partnerRight:
        "TheDateCompass platformu neprovozuje, neukládá profily a nemůže ověřit sliby provozovatele. Počty členů, hodnocení a úspěšnost tu neuvádíme, protože k nim není ověřený zdroj.",
      contactsEyebrow: "Funkce",
      contactsTitle: "Fetiš kontakty: profily a zprávy",
      contacts: [
        "Zájmové kontakty: uvedené zaměření jsou spojení kolem konkrétních zájmů, ne seznamka bez tématu.",
        "Profily: nabídka popisuje prohlížení profilů. Co je vidět, určuje provozovatel.",
        "Zprávy: přímé zprávy jsou součástí zařazení. Zda jdou bez platby, je jen na webu provozovatele.",
      ],
      nicheEyebrow: "Nika",
      nicheTitle: "BDSM a kink seznamka v tomto zařazení",
      nicheBody:
        "Lidé, kteří hledají BDSM seznamku nebo kink seznamku, spadají do stejného zařazení: dospělé kontakty s jasným zájmem. FetishPartner tu není obecná seznamka. Zda má web vlastní kategorie, fetiš komunitu nebo další filtry, je uvedeno tam a může se změnit. Tahle stránka si takové funkce nevymýšlí.",
      signupEyebrow: "Postup",
      signupTitle: "Diskrétní registrace",
      signupIntro: "Přesný postup je na webu provozovatele a může se změnit.",
      steps: [
        {
          title: "Registrace",
          text: "Obvyklá je krátká registrace e-mailem nebo jiným přihlášením, potvrzení věku a heslo. Povinná pole určuje provozovatel.",
        },
        {
          title: "Profil",
          text: "Potom mnoho služeb chce zobrazované jméno, přibližnou oblast, krátký popis a volitelnou fotku. Uveďte jen to, co chcete mít veřejné.",
        },
        {
          title: "Profily a zprávy",
          text: "Zařazení FetishPartner zahrnuje prohlížení profilů a přímé zprávy. Zda jsou filtry nebo chat placené, je na webu provozovatele.",
        },
      ],
      priceEyebrow: "Ceny",
      priceTitle: "Ceny jsou na webu provozovatele",
      priceBody: [
        "Ověřená cena FetishPartner tu není. Zda je registrace zdarma a co se pak platí, je jen na aktuálním webu provozovatele.",
        "Než potvrdíte předplatné, zkontrolujte dobu, obnovení a způsob platby. Zrušení a vrácení peněz řeší provozovatel, ne tenhle přehled.",
      ],
      midTitle: "Otevřete web provozovatele a ověřte si ho",
      midBody: "Aktuální ceny, funkce a podmínky této fetiš seznamky jsou jen tam.",
      midCta: "Zkontrolovat FetishPartner u provozovatele",
      midNote: "Reklama · Jen 18+",
      ageTitle: "Jen pro dospělé od 18 let",
      ageBody: [
        "FetishPartner i tato stránka jsou jen pro osoby od 18 let. Nezletilí se nesmí registrovat. Některé profily mohou být moderované. Netvrdíme, že je každý profil skutečná osoba.",
        "Když někdo rychle žádá platbu mimo web nebo soukromé dokumenty, rozhovor ukončete. Případ nahlaste nástroji platformy, pokud je nabízí.",
      ],
      privacyEyebrow: "Tipy",
      privacyTitle: "Soukromí a diskrétnost",
      privacy: [
        {
          title: "Sdílejte méně",
          text: "Neutrální jméno, e-mail, který ovládáte, a fotka bez pracoviště nebo bydliště snižují riziko, že vás později někdo pozná. Polohu nechte obecnou.",
        },
        {
          title: "Přečtěte zásady ochrany",
          text: "Než nahrajete fotky nebo kontakty, přečtěte zásady provozovatele. Plaťte jen přes jeho pokladnu. TheDateCompass tyto údaje nevidí.",
        },
        {
          title: "Opatrně při setkání",
          text: "Platí stejná opatrnost jako u každého kontaktu z internetu: veřejné místo, vlastní doprava a právo odejít. Tahle stránka neslibuje bezpečí jednotlivých členů.",
        },
      ],
      summaryEyebrow: "Shrnutí",
      summaryTitle: "FetishPartner ve zkratce",
      summaryBody: [
        "FetishPartner je možnost pro dospělé v Česku, kteří chtějí ověřit fetiš seznamku a další zájmové kontakty. Uvedeno je prohlížení profilů a přímé zprávy. Ceny a přesné funkce jsou jen u provozovatele.",
        "TheDateCompass zveřejňuje tento přehled jako reklamu a odkazuje jen tuto nabídku. Profily, platby a podpora zůstávají u provozovatele FetishPartner.",
      ],
      endCta: "Pokračovat na FetishPartner",
      faqEyebrow: "FAQ",
      faqTitle: "Časté otázky k FetishPartner",
      faqs: [
        {
          question: "Co je FetishPartner?",
          answer:
            "FetishPartner je tu zařazen jako dospělá platforma pro kontakty ke konkrétním zájmům. Zařazení zahrnuje prohlížení profilů a přímé zprávy. TheDateCompass platformu neprovozuje.",
        },
        {
          question: "Pro koho je fetiš seznamka FetishPartner v Česku?",
          answer:
            "Zařazení platí pro dospělé od 18 let v Česku, kteří hledají fetiš partnera nebo jiné zájmové kontakty. Může jít i o BDSM a kink seznamku. Stránka není seznamka s garancí výsledku.",
        },
        {
          question: "Kolik FetishPartner stojí?",
          answer:
            "TheDateCompass ceny neuvádí. Aktuální poplatky, bezplatné funkce a předplatné jsou jen na webu provozovatele a mohou se změnit.",
        },
        {
          question: "Jak diskrétní je registrace?",
          answer:
            "Diskrétnost závisí na tom, co sami uvedete, a na nastavení provozovatele. Použijte e-mail, který ovládáte, a před nahráním fotek nebo kontaktů si přečtěte zásady ochrany.",
        },
        {
          question: "Jsou všechny profily skutečné osoby?",
          answer:
            "Zvenčí to ověřit nejde. Některé profily mohou být moderované. Přečtěte si podmínky a nespoléhejte na slib typu „jen skutečné profily“.",
        },
        {
          question: "Je tu věková hranice?",
          answer:
            "Ano. FetishPartner i tato stránka jsou jen pro osoby od 18 let. Nezletilí se nesmí registrovat. Když profil působí nejasně, rozhovor ukončete.",
        },
        {
          question: "Co se stane po kliknutí na tlačítko?",
          answer:
            "Tlačítko vede přes přesměrování TheDateCompass na web provozovatele. TheDateCompass může získat provizi, když se tam zaregistrujete. Účet, platbu a podporu zajišťuje provozovatel.",
        },
      ],
    },
  },
  {
    id: "france",
    path: "/fr/fetishpartner",
    hreflang: "fr-FR",
    ogLocale: "fr_FR",
    countryToken: "france",
    goSlug: "fetishpartner-fr",
    hubHref: "/france",
    title: "FetishPartner : dating fétichiste en France | TheDateCompass",
    description:
      "FetishPartner pour le dating fétichiste en France : contacts de niche, profils et messages directs. Réservé aux 18 ans et plus. Prix sur le site.",
    keywords: [
      "FetishPartner",
      "dating fétichiste France",
      "partenaire fétiche",
      "contacts fétiches",
      "dating BDSM",
      "dating kink",
      "communauté fétiche",
      "dating de niche",
      "discret",
      "18+",
    ],
    ui: {
      breadcrumbLabel: "Fil d’Ariane",
      home: "Accueil",
      country: "France",
      badges: ["Annonce", "18+ seulement", "France"],
      h1Lead: "FetishPartner :",
      h1Highlight: "dating fétichiste",
      h1Tail: "en France",
      intro:
        "FetishPartner est présenté pour les adultes en France qui cherchent des contacts autour d’intérêts précis. On peut parcourir des profils et envoyer des messages directs. Cette page ne présente que cette offre.",
      heroCta: "Continuer vers le site",
      heroNote: "18+ seulement. Les prix sont sur le site de l’éditeur.",
      disclosure:
        "Cette offre s’adresse aux adultes en France. Ailleurs, le site de l’éditeur peut afficher une autre page. Mention publicitaire : cette page contient un lien sponsorisé. TheDateCompass peut recevoir une commission si vous continuez vers le site.",
      disclosureLink: "Mentions sur la publicité",
      imageAlt: "Image d’ambiance sous une lumière rose, sans lien avec un membre réel de FetishPartner",
      shortEyebrow: "En bref",
      shortText: "Contacts de niche pour adultes. Vérifiez les conditions sur le site de l’éditeur.",
      facts: [
        { label: "Région", value: "France" },
        { label: "Focus", value: "Intérêts précis" },
        { label: "Âge", value: "18 ans et plus" },
        { label: "Prix", value: "Site de l’éditeur" },
      ],
      partnerEyebrow: "Présentation",
      partnerTitle: "Un partenaire fétiche pour des intérêts précis",
      partnerLeft:
        "Quelqu’un qui cherche un partenaire fétiche a besoin d’une fiche qui dit l’intérêt. Pour la France, FetishPartner est l’offre sociale adulte pour des contacts autour d’intérêts précis, pas un site de rencontre généraliste.",
      partnerRight:
        "TheDateCompass n’exploite pas la plateforme, ne stocke pas les profils et ne peut pas vérifier les promesses de l’éditeur. Les effectifs, notes et taux de réussite ne figurent pas ici, faute de source vérifiée.",
      contactsEyebrow: "Fonctions",
      contactsTitle: "Contacts fétiches : profils et messages",
      contacts: [
        "Contacts de niche : l’orientation indiquée concerne des liens autour d’intérêts précis, pas une rencontre sans sujet.",
        "Profils : l’offre décrit la consultation de profils. L’éditeur décide de ce qui est visible.",
        "Messages : les messages directs font partie de la fiche. S’ils fonctionnent sans paiement, cela figure seulement sur le site de l’éditeur.",
      ],
      nicheEyebrow: "Niche",
      nicheTitle: "Dating BDSM et kink dans cette fiche",
      nicheBody:
        "Les personnes qui cherchent un dating BDSM ou un dating kink relèvent de la même fiche : des contacts adultes avec un intérêt clair. FetishPartner n’est pas décrit ici comme un site de célibataires généraliste. Si le site a ses propres catégories, une communauté fétiche ou des filtres, cela y est indiqué et peut changer. Cette page n’invente pas ces fonctions.",
      signupEyebrow: "Étapes",
      signupTitle: "Inscription discrète",
      signupIntro: "Le déroulé exact est sur le site de l’éditeur et peut changer.",
      steps: [
        {
          title: "S’inscrire",
          text: "Une courte inscription avec un e-mail ou un autre identifiant, une confirmation d’âge et un mot de passe est habituelle. L’éditeur fixe les champs obligatoires.",
        },
        {
          title: "Créer un profil",
          text: "Beaucoup de services demandent ensuite un nom affiché, une région approximative, une courte description et une photo facultative. Ne montrez que ce que vous voulez rendre public.",
        },
        {
          title: "Profils et messages",
          text: "La fiche FetishPartner couvre la consultation des profils et les messages directs. Filtres ou chat payants : cela se voit sur le site de l’éditeur.",
        },
      ],
      priceEyebrow: "Prix",
      priceTitle: "Les coûts sont sur le site de l’éditeur",
      priceBody: [
        "Aucun prix vérifié n’est disponible ici pour FetishPartner. Inscription gratuite ou non, et fonctions payantes ensuite : cela figure seulement sur le site actuel.",
        "Vérifiez la durée, le renouvellement et le moyen de paiement avant de confirmer un abonnement. Résiliation et remboursements dépendent de l’éditeur, pas de cet aperçu.",
      ],
      midTitle: "Ouvrez le site de l’éditeur et vérifiez-le",
      midBody: "Les prix, fonctions et conditions actuels de cette offre de dating fétichiste n’y figurent que là.",
      midCta: "Voir FetishPartner sur le site de l’éditeur",
      midNote: "Annonce · 18+ seulement",
      ageTitle: "Adultes de 18 ans et plus seulement",
      ageBody: [
        "FetishPartner et cette page sont réservés aux personnes de 18 ans et plus. Les mineurs ne doivent pas s’inscrire. Certains profils peuvent être modérés. Nous ne disons pas que chaque profil est une personne réelle.",
        "Si quelqu’un demande vite un paiement hors du site ou des documents privés, arrêtez l’échange. Signalez-le avec les outils de la plateforme lorsqu’ils existent.",
      ],
      privacyEyebrow: "Conseils",
      privacyTitle: "Vie privée et discrétion",
      privacy: [
        {
          title: "En dire peu",
          text: "Un nom neutre, une adresse e-mail que vous contrôlez et une photo sans lieu de travail ni domicile réduisent le risque d’être reconnu plus tard. Restez vague sur le lieu.",
        },
        {
          title: "Lire la politique",
          text: "Lisez la politique de confidentialité de l’éditeur avant d’envoyer des photos ou des coordonnées. Payez seulement via son paiement. TheDateCompass ne voit pas ces données.",
        },
        {
          title: "Prudence pour se voir",
          text: "Les mêmes précautions valent que pour tout contact venu d’internet : lieu public, trajet personnel et droit de partir. Cette page ne promet rien sur la sécurité des membres.",
        },
      ],
      summaryEyebrow: "Résumé",
      summaryTitle: "FetishPartner en bref",
      summaryBody: [
        "FetishPartner est une option pour les adultes en France qui veulent examiner le dating fétichiste et d’autres contacts de niche. La fiche couvre les profils et les messages directs. Les prix et le détail des fonctions sont seulement sur le site de l’éditeur.",
        "TheDateCompass publie cet aperçu comme une annonce et ne lie que cette offre. Profils, paiement et assistance restent chez l’exploitant de FetishPartner.",
      ],
      endCta: "Continuer vers FetishPartner",
      faqEyebrow: "FAQ",
      faqTitle: "Questions fréquentes sur FetishPartner",
      faqs: [
        {
          question: "Qu’est-ce que FetishPartner ?",
          answer:
            "FetishPartner est présenté ici comme une plateforme adulte pour des contacts autour d’intérêts précis. La fiche couvre les profils et les messages directs. TheDateCompass n’exploite pas la plateforme.",
        },
        {
          question: "À qui s’adresse le dating fétichiste FetishPartner en France ?",
          answer:
            "La fiche vise les adultes de 18 ans et plus en France qui cherchent un partenaire fétiche ou d’autres contacts de niche. Cela peut inclure le dating BDSM et kink. Cette page n’est pas une agence et ne promet aucun résultat.",
        },
        {
          question: "Combien coûte FetishPartner ?",
          answer:
            "TheDateCompass ne publie pas de prix. Frais, fonctions gratuites et abonnements figurent seulement sur le site de l’éditeur et peuvent changer.",
        },
        {
          question: "L’inscription est-elle discrète ?",
          answer:
            "La discrétion dépend de ce que vous indiquez et des réglages de l’éditeur. Utilisez une adresse e-mail que vous contrôlez et lisez la politique de confidentialité avant d’envoyer des photos ou des coordonnées.",
        },
        {
          question: "Tous les profils sont-ils de vraies personnes ?",
          answer:
            "On ne peut pas le vérifier de l’extérieur. Certains profils peuvent être modérés. Lisez les conditions et ne vous fiez pas à une formule du type « profils réels uniquement ».",
        },
        {
          question: "Y a-t-il un âge minimum ?",
          answer:
            "Oui. FetishPartner et cette page sont réservés aux personnes de 18 ans et plus. Les mineurs ne doivent pas s’inscrire. Si un profil semble peu clair, arrêtez l’échange.",
        },
        {
          question: "Que se passe-t-il après le clic ?",
          answer:
            "Le bouton passe par une redirection TheDateCompass vers le site de l’éditeur. TheDateCompass peut recevoir une commission si vous vous inscrivez. Le compte, le paiement et l’assistance relèvent de l’éditeur.",
        },
      ],
    },
  },
  {
    id: "hungary",
    path: "/hu/fetishpartner",
    hreflang: "hu-HU",
    ogLocale: "hu_HU",
    countryToken: "hungary",
    goSlug: "fetishpartner-hu",
    title: "FetishPartner: fétis társkeresés Magyarországon | TheDateCompass",
    description:
      "A FetishPartner fétis társkereső Magyarországon: rétegkapcsolatok, profilok és közvetlen üzenetek. Csak 18 éven felülieknek. Az árak a szolgáltatónál.",
    keywords: [
      "FetishPartner",
      "fétis társkeresés Magyarország",
      "fétis partner",
      "fétis kapcsolatok",
      "BDSM társkeresés",
      "kink társkeresés",
      "fétis közösség",
      "réteg társkeresés",
      "diszkrét",
      "18+",
    ],
    ui: {
      breadcrumbLabel: "Morzsamenü",
      home: "Kezdőlap",
      country: "Magyarország",
      badges: ["Hirdetés", "Csak 18+", "Magyarország"],
      h1Lead: "FetishPartner:",
      h1Highlight: "fétis társkeresés",
      h1Tail: "Magyarországon",
      intro:
        "A FetishPartner azoknak a magyarországi felnőtteknek szól, akik konkrét érdeklődés körüli kapcsolatokat keresnek. Profilokat lehet böngészni, és közvetlen üzenetet küldeni. Ez az oldal csak ezt az egy ajánlatot mutatja.",
      heroCta: "Tovább a szolgáltatóhoz",
      heroNote: "Csak 18 éven felülieknek. Az árak a szolgáltató oldalán vannak.",
      disclosure:
        "Ez az ajánlat magyarországi felnőtteknek szól. Az országon kívül a szolgáltató más oldalt mutathat. Hirdetési tájékoztató: az oldal szponzorált linket tartalmaz. A TheDateCompass jutalékot kaphat, ha továbbmegy a szolgáltatóhoz.",
      disclosureLink: "Tájékoztató a hirdetésről",
      imageAlt: "Neonrózsaszín hangulatkép, nem egy valódi FetishPartner-tag fotója",
      shortEyebrow: "Röviden",
      shortText: "Rétegkapcsolatok felnőtteknek. A feltételeket a szolgáltatónál ellenőrizze.",
      facts: [
        { label: "Régió", value: "Magyarország" },
        { label: "Fókusz", value: "Konkrét érdeklődés" },
        { label: "Életkor", value: "18 év felett" },
        { label: "Árak", value: "A szolgáltató oldala" },
      ],
      partnerEyebrow: "Besorolás",
      partnerTitle: "Fétis partner konkrét érdeklődéshez",
      partnerLeft:
        "Aki fétis partnert keres, olyan bemutatást igényel, amely kimondja az érdeklődést. Magyarországon a FetishPartner felnőtt közösségi ajánlat konkrét érdeklődés körüli kapcsolatokra, nem általános társkereső.",
      partnerRight:
        "A TheDateCompass nem üzemelteti a platformot, nem tárol profilokat, és nem ellenőrizheti a szolgáltató ígéreteit. Tagszámot, értékelést és sikerarányt nem írunk, mert nincs ellenőrzött forrás.",
      contactsEyebrow: "Funkciók",
      contactsTitle: "Fétis kapcsolatok: profilok és üzenetek",
      contacts: [
        "Rétegkapcsolatok: a megadott irány konkrét érdeklődés körüli kapcsolatok, nem témátlan társkeresés.",
        "Profilok: az ajánlat a profilok böngészését írja le. Azt, mi látszik, a szolgáltató dönti el.",
        "Üzenetek: a közvetlen üzenet a besorolás része. Fizetés nélkül elérhető-e, csak a szolgáltató oldalán derül ki.",
      ],
      nicheEyebrow: "Rész",
      nicheTitle: "BDSM- és kink-társkeresés ebben a besorolásban",
      nicheBody:
        "Aki BDSM- vagy kink-társkeresést keres, ugyanebbe a besorolásba esik: felnőtt kapcsolatok egyértelmű érdeklődéssel. A FetishPartnert itt nem általános társkeresőként írjuk le. Hogy a szolgáltatónál van-e saját kategória, fétis közösség vagy további szűrő, ott olvasható, és változhat. Ez az oldal nem talál ki ilyen funkciókat.",
      signupEyebrow: "Lépések",
      signupTitle: "Diszkrét regisztráció",
      signupIntro: "A pontos menet a szolgáltató oldalán van, és változhat.",
      steps: [
        {
          title: "Regisztráció",
          text: "Szokásos a rövid regisztráció e-mail-címmel vagy más belépéssel, életkor-igazolással és jelszóval. A kötelező mezőket a szolgáltató határozza meg.",
        },
        {
          title: "Profil",
          text: "Ezután sok szolgáltatás megjelenített nevet, hozzávetőleges körzetet, rövid leírást és választható fotót kér. Csak azt adja meg, amit nyilvánossá akar tenni.",
        },
        {
          title: "Profilok és üzenetek",
          text: "A FetishPartner besorolása a profilböngészést és a közvetlen üzenetet fedi le. A szűrők vagy a chat fizetősek-e, a szolgáltató oldalán derül ki.",
        },
      ],
      priceEyebrow: "Árak",
      priceTitle: "A költségek a szolgáltató oldalán vannak",
      priceBody: [
        "A FetishPartnerhez nincs itt ellenőrzött ár. Hogy a regisztráció ingyenes-e, és utána mi kerül pénzbe, csak a szolgáltató aktuális oldalán látszik.",
        "Előfizetés előtt nézze meg az időtartamot, a megújulást és a fizetési módot. A lemondást és a visszatérítést a szolgáltató intézi, nem ez az áttekintés.",
      ],
      midTitle: "Nyissa meg a szolgáltató oldalát, és ellenőrizze",
      midBody: "Ennek a fétis társkereső ajánlatnak az aktuális árai, funkciói és feltételei csak ott vannak.",
      midCta: "A FetishPartner megnyitása a szolgáltatónál",
      midNote: "Hirdetés · Csak 18+",
      ageTitle: "Csak 18 éven felülieknek",
      ageBody: [
        "A FetishPartner és ez az oldal csak 18 éven felülieknek szól. Kiskorú nem regisztrálhat. Egyes profilok moderáltak lehetnek. Nem állítjuk, hogy minden profil valódi személy.",
        "Ha valaki gyorsan az oldalon kívüli fizetést vagy magánokmányt kér, szakítsa meg a beszélgetést. Jelentse a platform eszközeivel, ha van ilyen.",
      ],
      privacyEyebrow: "Tippek",
      privacyTitle: "Adatvédelem és diszkréció",
      privacy: [
        {
          title: "Osszon meg kevesebbet",
          text: "Semleges név, ön által kezelt e-mail és munkahely vagy lakás nélküli fotó csökkenti a későbbi felismerés esélyét. A helyet hagyja általánosnak.",
        },
        {
          title: "Olvassa el az adatvédelmet",
          text: "Fotó vagy elérhetőség feltöltése előtt olvassa el a szolgáltató adatvédelmi tájékoztatóját. Csak az ő fizetésén keresztül fizessen. A TheDateCompass ezeket az adatokat nem látja.",
        },
        {
          title: "Óvatosan a találkozónál",
          text: "Ugyanaz az óvatosság érvényes, mint bármely internetes kapcsolatnál: nyilvános hely, saját útvonal, és joga van eljönni. Ez az oldal nem ígér semmit az egyes tagok biztonságáról.",
        },
      ],
      summaryEyebrow: "Összegzés",
      summaryTitle: "A FetishPartner röviden",
      summaryBody: [
        "A FetishPartner lehetőség a magyarországi felnőtteknek, akik fétis társkeresést és más rétegkapcsolatokat néznének meg. A besorolás a profilböngészést és a közvetlen üzenetet fedi. Az árak és a pontos funkciók csak a szolgáltatónál vannak.",
        "A TheDateCompass ezt az áttekintést hirdetésként közli, és csak ezt az ajánlatot linkeli. A profilok, a fizetés és a támogatás a FetishPartner üzemeltetőjénél marad.",
      ],
      endCta: "Tovább a FetishPartnerre",
      faqEyebrow: "GYIK",
      faqTitle: "Gyakori kérdések a FetishPartnerről",
      faqs: [
        {
          question: "Mi a FetishPartner?",
          answer:
            "A FetishPartner itt felnőtt platformként szerepel konkrét érdeklődés körüli kapcsolatokra. A besorolás a profilböngészést és a közvetlen üzenetet fedi. A TheDateCompass nem üzemelteti a platformot.",
        },
        {
          question: "Kinek szól a FetishPartner fétis társkeresés Magyarországon?",
          answer:
            "A besorolás 18 éven felüli, magyarországi felnőtteknek szól, akik fétis partnert vagy más rétegkapcsolatot keresnek. Ide tartozhat a BDSM- és a kink-társkeresés. Az oldal nem ígér eredményt.",
        },
        {
          question: "Mennyibe kerül a FetishPartner?",
          answer:
            "A TheDateCompass nem közöl árakat. Az aktuális díjak, ingyenes funkciók és előfizetések csak a szolgáltató oldalán vannak, és változhatnak.",
        },
        {
          question: "Mennyire diszkrét a regisztráció?",
          answer:
            "A diszkréció attól függ, mit oszt meg, és a szolgáltató beállításaitól. Olyan e-mailt használjon, amelyet kezel, és fotó vagy elérhetőség előtt olvassa el az adatvédelmi tájékoztatót.",
        },
        {
          question: "Minden profil valódi személy?",
          answer:
            "Kívülről ezt nem lehet ellenőrizni. Egyes profilok moderáltak lehetnek. Olvassa el a feltételeket, és ne hagyatkozzon egy „csak valódi profilok” ígéretre.",
        },
        {
          question: "Van korhatár?",
          answer:
            "Igen. A FetishPartner és ez az oldal csak 18 éven felülieknek szól. Kiskorú nem regisztrálhat. Ha egy profil homályos, szakítsa meg a beszélgetést.",
        },
        {
          question: "Mi történik a gomb után?",
          answer:
            "A gomb a TheDateCompass átirányításán át a szolgáltató oldalára visz. A TheDateCompass jutalékot kaphat, ha ott regisztrál. A fiókot, a fizetést és a támogatást a szolgáltató intézi.",
        },
      ],
    },
  },
  englishPage({
    id: "ireland",
    path: "/ireland/fetishpartner",
    hreflang: "en-IE",
    ogLocale: "en_IE",
    countryToken: "ireland",
    goSlug: "fetishpartner-ie",
    place: "Ireland",
    country: "Ireland",
    keywordPlace: "Ireland",
  }),
  {
    id: "italy",
    path: "/it/fetishpartner",
    hreflang: "it-IT",
    ogLocale: "it_IT",
    countryToken: "italy",
    goSlug: "fetishpartner-it",
    title: "FetishPartner: dating fetish in Italia | TheDateCompass",
    description:
      "FetishPartner per il dating fetish in Italia: contatti di nicchia, profili e messaggi diretti. Solo adulti dai 18 anni. Prezzi sul sito del fornitore.",
    keywords: [
      "FetishPartner",
      "dating fetish Italia",
      "partner fetish",
      "contatti fetish",
      "dating BDSM",
      "dating kink",
      "comunità fetish",
      "dating di nicchia",
      "discreto",
      "18+",
    ],
    ui: {
      breadcrumbLabel: "Percorso di navigazione",
      home: "Home",
      country: "Italia",
      badges: ["Annuncio", "Solo 18+", "Italia"],
      h1Lead: "FetishPartner:",
      h1Highlight: "dating fetish",
      h1Tail: "in Italia",
      intro:
        "FetishPartner è indicato per adulti in Italia che cercano contatti intorno a interessi specifici. Si possono consultare profili e inviare messaggi diretti. Questa pagina presenta solo questa offerta.",
      heroCta: "Continua sul sito del fornitore",
      heroNote: "Solo dai 18 anni. I prezzi sono sul sito del fornitore.",
      disclosure:
        "Questa offerta è indicata per adulti in Italia. Fuori dal paese il fornitore può mostrare un’altra pagina. Avviso pubblicitario: questa pagina contiene un link sponsorizzato. TheDateCompass può ricevere una commissione se prosegui verso il fornitore.",
      disclosureLink: "Informativa sulla pubblicità",
      imageAlt: "Immagine d’atmosfera con luce rosa, non la foto di un membro reale di FetishPartner",
      shortEyebrow: "In breve",
      shortText: "Contatti di nicchia per adulti. Verifica le condizioni sul sito del fornitore.",
      facts: [
        { label: "Area", value: "Italia" },
        { label: "Focus", value: "Interessi specifici" },
        { label: "Età", value: "Dai 18 anni" },
        { label: "Prezzi", value: "Sito del fornitore" },
      ],
      partnerEyebrow: "Scheda",
      partnerTitle: "Un partner fetish per interessi specifici",
      partnerLeft:
        "Chi cerca un partner fetish ha bisogno di una scheda che dichiari l’interesse. Per l’Italia, FetishPartner è l’offerta sociale per adulti dedicata a contatti intorno a interessi specifici, non un sito di incontri generico.",
      partnerRight:
        "TheDateCompass non gestisce la piattaforma, non conserva i profili e non può verificare le promesse del fornitore. Numeri di iscritti, voti e tassi di successo non compaiono qui, perché non c’è una fonte verificata.",
      contactsEyebrow: "Funzioni",
      contactsTitle: "Contatti fetish: profili e messaggi",
      contacts: [
        "Contatti di nicchia: l’orientamento indicato riguarda legami intorno a interessi specifici, non incontri senza tema.",
        "Profili: l’offerta descrive la consultazione dei profili. Cosa è visibile lo decide il fornitore.",
        "Messaggi: i messaggi diretti fanno parte della scheda. Se funzionano senza pagamento, è scritto solo sul sito del fornitore.",
      ],
      nicheEyebrow: "Nicchia",
      nicheTitle: "Dating BDSM e kink in questa scheda",
      nicheBody:
        "Chi cerca dating BDSM o dating kink rientra nella stessa scheda: contatti tra adulti con un interesse chiaro. FetishPartner non è descritto qui come un sito di single generico. Se il sito ha categorie proprie, una comunità fetish o altri filtri, lo indica lì e può cambiare. Questa pagina non inventa quelle funzioni.",
      signupEyebrow: "Passi",
      signupTitle: "Iscrizione discreta",
      signupIntro: "I passi esatti sono sul sito del fornitore e possono cambiare.",
      steps: [
        {
          title: "Registrarsi",
          text: "Di solito c’è una breve registrazione con e-mail o un altro accesso, una conferma dell’età e una password. I campi obbligatori li decide il fornitore.",
        },
        {
          title: "Creare un profilo",
          text: "Poi molti servizi chiedono un nome visibile, una zona approssimativa, una breve descrizione e una foto facoltativa. Mostra solo ciò che vuoi rendere pubblico.",
        },
        {
          title: "Profili e messaggi",
          text: "La scheda FetishPartner copre la consultazione dei profili e i messaggi diretti. Filtri o chat a pagamento: lo vedi sul sito del fornitore.",
        },
      ],
      priceEyebrow: "Prezzi",
      priceTitle: "I costi sono sul sito del fornitore",
      priceBody: [
        "Qui non c’è un prezzo verificato per FetishPartner. Se l’iscrizione è gratuita e quali funzioni si pagano dopo, è indicato solo sul sito attuale del fornitore.",
        "Prima di confermare un abbonamento controlla durata, rinnovo e metodo di pagamento. Recesso e rimborsi li regola il fornitore, non questa scheda.",
      ],
      midTitle: "Apri il sito del fornitore e verifica di persona",
      midBody: "Prezzi, funzioni e condizioni attuali di questa offerta di dating fetish sono solo lì.",
      midCta: "Controlla FetishPartner sul sito del fornitore",
      midNote: "Annuncio · Solo 18+",
      ageTitle: "Solo adulti dai 18 anni",
      ageBody: [
        "FetishPartner e questa pagina sono solo per persone dai 18 anni. I minorenni non devono registrarsi. Alcuni profili possono essere moderati. Non affermiamo che ogni profilo sia una persona reale.",
        "Se qualcuno chiede in fretta un pagamento fuori dal sito o documenti privati, interrompi lo scambio. Segnalalo con gli strumenti della piattaforma, se esistono.",
      ],
      privacyEyebrow: "Consigli",
      privacyTitle: "Privacy e discrezione",
      privacy: [
        {
          title: "Condividi meno",
          text: "Un nome neutro, un’e-mail che controlli e una foto senza luogo di lavoro o casa riducono il rischio di essere riconosciuto dopo. Tieni vaga la posizione.",
        },
        {
          title: "Leggi l’informativa",
          text: "Leggi l’informativa del fornitore prima di caricare foto o contatti. Paga solo tramite il suo pagamento. TheDateCompass non vede questi dati.",
        },
        {
          title: "Prudenza negli incontri",
          text: "Valgono le stesse cautele di ogni contatto nato su internet: luogo pubblico, mezzo tuo e diritto di andartene. Questa pagina non promette nulla sulla sicurezza dei singoli membri.",
        },
      ],
      summaryEyebrow: "Sintesi",
      summaryTitle: "FetishPartner in breve",
      summaryBody: [
        "FetishPartner è un’opzione per adulti in Italia che vogliono valutare il dating fetish e altri contatti di nicchia. La scheda copre profili e messaggi diretti. Prezzi e funzioni esatte sono solo sul sito del fornitore.",
        "TheDateCompass pubblica questa sintesi come annuncio e collega solo questa offerta. Profili, pagamenti e assistenza restano al gestore di FetishPartner.",
      ],
      endCta: "Continua su FetishPartner",
      faqEyebrow: "FAQ",
      faqTitle: "Domande frequenti su FetishPartner",
      faqs: [
        {
          question: "Che cos’è FetishPartner?",
          answer:
            "FetishPartner è indicato qui come piattaforma per adulti dedicata a contatti intorno a interessi specifici. La scheda copre profili e messaggi diretti. TheDateCompass non gestisce la piattaforma.",
        },
        {
          question: "A chi è rivolto il dating fetish di FetishPartner in Italia?",
          answer:
            "La scheda vale per adulti dai 18 anni in Italia che cercano un partner fetish o altri contatti di nicchia. Può includere dating BDSM e kink. Questa pagina non è un’agenzia e non promette risultati.",
        },
        {
          question: "Quanto costa FetishPartner?",
          answer:
            "TheDateCompass non pubblica prezzi. Tariffe, funzioni gratuite e abbonamenti sono solo sul sito del fornitore e possono cambiare.",
        },
        {
          question: "Quanto è discreta l’iscrizione?",
          answer:
            "La discrezione dipende da ciò che indichi e dalle impostazioni del fornitore. Usa un’e-mail che controlli e leggi l’informativa prima di caricare foto o contatti.",
        },
        {
          question: "Tutti i profili sono persone reali?",
          answer:
            "Non si può verificarlo dall’esterno. Alcuni profili possono essere moderati. Leggi le condizioni e non fare affidamento su una formula come «solo profili reali».",
        },
        {
          question: "C’è un limite di età?",
          answer:
            "Sì. FetishPartner e questa pagina sono solo per persone dai 18 anni. I minorenni non devono registrarsi. Se un profilo non è chiaro, interrompi lo scambio.",
        },
        {
          question: "Cosa succede dopo il clic?",
          answer:
            "Il pulsante passa da un reindirizzamento di TheDateCompass al sito del fornitore. TheDateCompass può ricevere una commissione se ti iscrivi. Account, pagamento e assistenza li gestisce il fornitore.",
        },
      ],
    },
  },
  {
    id: "netherlands",
    path: "/nl/fetishpartner",
    hreflang: "nl-NL",
    ogLocale: "nl_NL",
    countryToken: "netherlands",
    goSlug: "fetishpartner-nl",
    title: "FetishPartner: fetish dating in Nederland | TheDateCompass",
    description:
      "FetishPartner voor fetish dating in Nederland: nichecontacten, profielen en directe berichten. Alleen 18+. Prijzen staan op de site van de aanbieder.",
    keywords: [
      "FetishPartner",
      "fetish dating Nederland",
      "fetish partner",
      "fetish contacten",
      "BDSM dating",
      "kink dating",
      "fetish community",
      "niche dating",
      "discreet",
      "18+",
    ],
    ui: {
      breadcrumbLabel: "Kruimelpad",
      home: "Home",
      country: "Nederland",
      badges: ["Advertentie", "Alleen 18+", "Nederland"],
      h1Lead: "FetishPartner:",
      h1Highlight: "fetish dating",
      h1Tail: "in Nederland",
      intro:
        "FetishPartner staat hier voor volwassenen in Nederland die contacten zoeken rond specifieke interesses. Profielen bekijken en directe berichten sturen hoort bij de vermelding. Deze pagina behandelt alleen dit ene aanbod.",
      heroCta: "Verder naar de aanbieder",
      heroNote: "Alleen 18+. Prijzen staan op de site van de aanbieder.",
      disclosure:
        "Dit aanbod is bedoeld voor volwassenen in Nederland. Buiten Nederland kan de aanbieder een andere pagina tonen. Advertentievermelding: deze pagina bevat een gesponsorde link. TheDateCompass kan een vergoeding krijgen als u doorgaat naar de aanbieder.",
      disclosureLink: "Toelichting op reclame",
      imageAlt: "Sfeerbeeld in neonroze licht, geen foto van een echt FetishPartner-lid",
      shortEyebrow: "Kort",
      shortText: "Nichecontacten voor volwassenen. Controleer de voorwaarden bij de aanbieder.",
      facts: [
        { label: "Regio", value: "Nederland" },
        { label: "Focus", value: "Specifieke interesses" },
        { label: "Leeftijd", value: "18 jaar en ouder" },
        { label: "Prijzen", value: "Site van de aanbieder" },
      ],
      partnerEyebrow: "Vermelding",
      partnerTitle: "Een fetish partner voor specifieke interesses",
      partnerLeft:
        "Wie een fetish partner zoekt, heeft een vermelding nodig die de interesse benoemt. Voor Nederland is FetishPartner het volwassen sociale aanbod voor contacten rond specifieke interesses, geen algemene datingsite.",
      partnerRight:
        "TheDateCompass beheert het platform niet, bewaart geen profielen en kan beloften van de aanbieder niet controleren. Ledenaantallen, scores en succescijfers staan hier niet, omdat er geen geverifieerde bron is.",
      contactsEyebrow: "Functies",
      contactsTitle: "Fetish contacten: profielen en berichten",
      contacts: [
        "Nichecontacten: de vermelde richting is contact rond specifieke interesses, niet daten zonder onderwerp.",
        "Profielen: het aanbod beschrijft het bekijken van profielen. Wat zichtbaar is, bepaalt de aanbieder.",
        "Berichten: directe berichten horen bij de vermelding. Of ze zonder betaling werken, staat alleen op de site van de aanbieder.",
      ],
      nicheEyebrow: "Niche",
      nicheTitle: "BDSM- en kink-dating in deze vermelding",
      nicheBody:
        "Mensen die BDSM-dating of kink-dating zoeken, vallen onder dezelfde vermelding: contacten tussen volwassenen met een duidelijke interesse. FetishPartner wordt hier niet als algemene singlessite beschreven. Of de site eigen categorieën, een fetish community of extra filters heeft, staat daar en kan veranderen. Deze pagina verzint die functies niet.",
      signupEyebrow: "Stappen",
      signupTitle: "Discrete aanmelding",
      signupIntro: "De precieze stappen staan op de site van de aanbieder en kunnen veranderen.",
      steps: [
        {
          title: "Registreren",
          text: "Een korte registratie met e-mail of een andere login, een leeftijdsbevestiging en een wachtwoord is gebruikelijk. De verplichte velden bepaalt de aanbieder.",
        },
        {
          title: "Profiel maken",
          text: "Daarna vragen veel diensten een weergavenaam, een globale regio, een korte tekst en een optionele foto. Deel alleen wat u openbaar wilt maken.",
        },
        {
          title: "Profielen en berichten",
          text: "De vermelding van FetishPartner dekt het bekijken van profielen en directe berichten. Of filters of chat geld kosten, ziet u op de site van de aanbieder.",
        },
      ],
      priceEyebrow: "Prijzen",
      priceTitle: "Kosten staan op de site van de aanbieder",
      priceBody: [
        "Een geverifieerde prijs voor FetishPartner staat hier niet. Of aanmelden gratis is en welke functies daarna geld kosten, staat alleen op de actuele site van de aanbieder.",
        "Controleer looptijd, verlenging en betaalwijze voordat u een abonnement bevestigt. Opzeggen en terugbetalen regelt de aanbieder, niet dit overzicht.",
      ],
      midTitle: "Open de site van de aanbieder en controleer zelf",
      midBody: "Actuele prijzen, functies en voorwaarden van dit fetish-datingaanbod staan alleen daar.",
      midCta: "FetishPartner bekijken bij de aanbieder",
      midNote: "Advertentie · Alleen 18+",
      ageTitle: "Alleen volwassenen van 18 jaar en ouder",
      ageBody: [
        "FetishPartner en deze pagina zijn alleen voor mensen van 18 jaar en ouder. Minderjarigen mogen zich niet registreren. Sommige profielen kunnen gemodereerd zijn. We zeggen niet dat elk profiel een echte persoon is.",
        "Vraagt iemand snel om betaling buiten de site of om privédocumenten, stop het gesprek. Meld het via de hulpmiddelen van het platform als die er zijn.",
      ],
      privacyEyebrow: "Tips",
      privacyTitle: "Privacy en discretie",
      privacy: [
        {
          title: "Deel minder",
          text: "Een neutrale naam, een e-mailadres dat u beheert en een foto zonder werk of woning verkleinen de kans later herkend te worden. Houd de locatie globaal.",
        },
        {
          title: "Lees het privacybeleid",
          text: "Lees het privacybeleid van de aanbieder voordat u foto’s of contactgegevens uploadt. Betaal alleen via de betaling van de aanbieder. TheDateCompass ziet die gegevens niet.",
        },
        {
          title: "Voorzichtig bij afspreken",
          text: "Dezelfde voorzorg geldt als bij elk contact van internet: een openbare plek, eigen vervoer en het recht om te stoppen. Deze pagina belooft niets over de veiligheid van individuele leden.",
        },
      ],
      summaryEyebrow: "Samenvatting",
      summaryTitle: "FetishPartner in het kort",
      summaryBody: [
        "FetishPartner is een optie voor volwassenen in Nederland die fetish dating en andere nichecontacten willen bekijken. De vermelding dekt profielen en directe berichten. Prijzen en de precieze functies staan alleen bij de aanbieder.",
        "TheDateCompass publiceert dit overzicht als advertentie en linkt alleen dit aanbod. Profielen, betaling en support blijven bij de exploitant van FetishPartner.",
      ],
      endCta: "Verder naar FetishPartner",
      faqEyebrow: "FAQ",
      faqTitle: "Veelgestelde vragen over FetishPartner",
      faqs: [
        {
          question: "Wat is FetishPartner?",
          answer:
            "FetishPartner staat hier als platform voor volwassenen voor contacten rond specifieke interesses. De vermelding dekt profielen bekijken en directe berichten. TheDateCompass beheert het platform niet.",
        },
        {
          question: "Voor wie is fetish dating van FetishPartner in Nederland?",
          answer:
            "De vermelding is voor volwassenen van 18 jaar en ouder in Nederland die een fetish partner of andere nichecontacten zoeken. Dat kan BDSM- en kink-dating zijn. Deze pagina is geen bemiddeling en belooft geen resultaat.",
        },
        {
          question: "Wat kost FetishPartner?",
          answer:
            "TheDateCompass publiceert geen prijzen. Actuele kosten, gratis functies en abonnementen staan alleen op de site van de aanbieder en kunnen veranderen.",
        },
        {
          question: "Hoe discreet is aanmelden?",
          answer:
            "Discretie hangt af van wat u deelt en van de instellingen van de aanbieder. Gebruik een e-mailadres dat u beheert en lees het privacybeleid voordat u foto’s of contactgegevens uploadt.",
        },
        {
          question: "Zijn alle profielen echte personen?",
          answer:
            "Dat is van buitenaf niet te controleren. Sommige profielen kunnen gemodereerd zijn. Lees de voorwaarden en vertrouw niet op een belofte als „alleen echte profielen“.",
        },
        {
          question: "Is er een leeftijdsgrens?",
          answer:
            "Ja. FetishPartner en deze pagina zijn alleen voor mensen van 18 jaar en ouder. Minderjarigen mogen zich niet registreren. Lijkt een profiel onduidelijk, stop het gesprek.",
        },
        {
          question: "Wat gebeurt er na de knop?",
          answer:
            "De knop gaat via een doorverwijzing van TheDateCompass naar de site van de aanbieder. TheDateCompass kan een vergoeding krijgen als u zich daar aanmeldt. Account, betaling en support regelt de aanbieder.",
        },
      ],
    },
  },
  englishPage({
    id: "new-zealand",
    path: "/new-zealand/fetishpartner",
    hreflang: "en-NZ",
    ogLocale: "en_NZ",
    countryToken: "new-zealand",
    goSlug: "fetishpartner-nz",
    place: "New Zealand",
    country: "New Zealand",
    keywordPlace: "New Zealand",
  }),
  germanPage({
    id: "switzerland",
    path: "/ch/fetishpartner",
    hreflang: "de-CH",
    ogLocale: "de_CH",
    countryToken: "switzerland",
    goSlug: "fetishpartner-ch",
    place: "der Schweiz",
    country: "Schweiz",
    keywordPlace: "Schweiz",
  }),
  englishPage({
    id: "uk",
    path: "/uk/fetishpartner",
    hreflang: "en-GB",
    ogLocale: "en_GB",
    countryToken: "uk",
    goSlug: "fetishpartner-uk",
    hubHref: "/uk",
    place: "the UK",
    country: "the UK",
    keywordPlace: "UK",
  }),
];

export const fetishPartnerCountryDestinations: Record<string, string> = Object.fromEntries(
  fetishPartnerCountryPages.map((page) => [page.goSlug, OFFER_URL]),
);

const pagesById = new Map(fetishPartnerCountryPages.map((page) => [page.id, page]));

export function getFetishPartnerCountryPage(id: string): FetishPartnerCountryPage {
  const page = pagesById.get(id);
  if (!page) {
    throw new Error(`Missing FetishPartner country page: ${id}`);
  }
  return page;
}

export function fetishPartnerLanguageAlternates(): Record<string, string> {
  const entries = [
    ...EXISTING_HREFLANG,
    ...fetishPartnerCountryPages.map((page) => ({
      hreflang: page.hreflang,
      path: page.path,
    })),
  ];
  return Object.fromEntries(
    entries.map((entry) => [entry.hreflang, `${FETISHPARTNER_SITE_URL}${entry.path}`]),
  );
}

export function fetishPartnerCountryMetadata(page: FetishPartnerCountryPage): Metadata {
  const url = `${FETISHPARTNER_SITE_URL}${page.path}`;
  const image = `${FETISHPARTNER_SITE_URL}/images/extra/a.jpg`;
  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: [...page.keywords],
    alternates: {
      canonical: url,
      languages: fetishPartnerLanguageAlternates(),
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: "TheDateCompass",
      locale: page.ogLocale,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: page.ui.imageAlt }],
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
