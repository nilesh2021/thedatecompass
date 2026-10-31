const unsplash = (id: string, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const germanyPageVisuals = {
  hero: {
    src: unsplash("photo-1528728329032-2972f65dfb3f", 2200),
    alt: "Berlin skyline and Fernsehturm at night",
  },
  og: unsplash("photo-1560969184-10fe8719e047", 1200),
  cities: [
    {
      name: "Berlin",
      src: unsplash("photo-1599946347371-68eb71b16afc", 900),
      alt: "Aerial view of Berlin with the Fernsehturm and the Spree",
    },
    {
      name: "München",
      src: unsplash("photo-1741120026139-8ae0036ebe6d", 900),
      alt: "Munich New Town Hall on Marienplatz at dusk",
    },
    {
      name: "Hamburg",
      src: unsplash("photo-1589797268361-34bd218908de", 900),
      alt: "Elbphilharmonie on the Elbe in Hamburg",
    },
    {
      name: "Rothenburg",
      src: unsplash("photo-1467269204594-9661b134dd2b", 900),
      alt: "Half-timbered street in Rothenburg ob der Tauber",
    },
  ],
  offers: {
    fremdgehen69: {
      src: unsplash("photo-1528728329032-2972f65dfb3f", 1400),
      alt: "Berlin at night with the Fernsehturm and river lights",
      city: "Berlin",
    },
    dirtydating: {
      src: unsplash("photo-1741120026139-8ae0036ebe6d", 1400),
      alt: "Evening crowds at Munich’s Marienplatz",
      city: "München",
    },
    grannyhunter: {
      src: unsplash("photo-1467269204594-9661b134dd2b", 1400),
      alt: "Historic street in a German old town",
      city: "Bayern",
    },
  },
  strip: {
    src: unsplash("photo-1554072675-66db59dba46f", 800),
    alt: "Brandenburg Gate and the Fernsehturm in Berlin",
  },
  guide: {
    src: unsplash("photo-1534313314376-a72289b6181e", 1200),
    alt: "Neuschwanstein Castle in Bavaria",
  },
} as const;
