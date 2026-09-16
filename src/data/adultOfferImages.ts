/**
 * Local adult lifestyle portraits used across country shortlists
 * and adult-category offer cards.
 */
export const adultImages = {
  neon: "/images/extra/2.jpg",
  stairs: "/images/extra/ai-model.jpg",
  gay: "/images/extra/manfinder-gay-dating.jpg",
  gaybloom:
    "https://images.unsplash.com/photo-1567476783296-fff06012e17a?auto=format&fit=crop&w=900&q=80",
  pridepair:
    "https://images.unsplash.com/photo-1577130661762-1e4944ba63ac?auto=format&fit=crop&w=900&q=80",
  manfinderPortrait:
    "https://images.unsplash.com/photo-1580353588316-395bcff2eb2d?auto=format&fit=crop&w=900&q=80",
  alt: "/images/extra/a.jpg",
  portraitA:
    "/images/extra/1eqyiSccso7couzchcXqVLjQF8PFkPWvsBwD9ptKVCw9ztaCl92n4L7nhdgjLvk46LfHmeLlhFLsWD3idQzAi1t9afPweJcUW9UlkwZQyQT3-qtwayhtiXo5DKJD_6WpHC6XOr0iBiMZ5aOctCGRWDT69PkJ7LY6hdewU3kp4Ne.png",
  portraitB: "/images/extra/a.jpg",
  portraitC:
    "/images/extra/1eqyiSccso7couzchcXqVLjQF8PFkPWvsBwD9ptKVCw9ztaCl92n4L7nhdgjLvk46LfHmeLlhFLsWD3idQzAi1t9afPweJcUW9UlkwZQyQT3-qtwayhtiXo5DKJD_6WpHC6XOr0iBiMZ5aOctCGRWDT69PkJ7LY6hdewU3kp4Ne.png",
  portraitD:
    "/images/extra/IuJU7xxK5CBG801VwI4LrRyJZrR3nvIbBpM-A6Ig59zbMHpDjDcfTsmLinTPxKj3XtpB4vk1lOlp9WKaOeJZSD9eDNOar8yIAHvLjURnTPuAXngQObP8aqve7qEg6c1TZ5U3On8ZMYDnCDary9VzstCL2pTdpEAsNSgB14sEER8.jpg",
  portraitE:
    "/images/extra/XWB8SOkp9vB_OqUj38mQvKq_6eHMmAediIcYizJkB1Oo9D7UV-wxfv6CVV4iDy5lgsUwIYbU0iwl4qrCpzWcSUfiKHEnb_W6NSSSxnU1yxTWyR_VyqqyVZvhDxfloBSKDGdPczBLjGIXrtMVtDFARfOAFZI8P0wefRpNnUThZ36.jpg",
  portraitF: "/images/extra/ai-model.jpg",
  portraitG:
    "/images/extra/IuJU7xxK5CBG801VwI4LrRyJZrR3nvIbBpM-A6Ig59zbMHpDjDcfTsmLinTPxKj3XtpB4vk1lOlp9WKaOeJZSD9eDNOar8yIAHvLjURnTPuAXngQObP8aqve7qEg6c1TZ5U3On8ZMYDnCDary9VzstCL2pTdpEAsNSgB14sEER8.jpg",
  portraitH: "/images/extra/2.jpg",
  aiCompanion: "/images/dreamz/companion-1.webp",
} as const;

export const offerAdultImages: Record<string, string> = {
  gonaughty: adultImages.portraitA,
  realsexclub: adultImages.portraitD,
  transdate: adultImages.portraitE,
  dirtydating: adultImages.neon,
  milffinder: adultImages.stairs,
  grannyhunter: adultImages.stairs,
  fetishpartner: adultImages.alt,
  fuckfinder: adultImages.portraitA,
  litlatinz: adultImages.portraitD,
  manfinder: adultImages.manfinderPortrait,
  cheekycrush: adultImages.portraitA,
  naughtycharm: adultImages.portraitD,
  gaybloom: adultImages.gaybloom,
  pridepair: adultImages.pridepair,
};

export function getOfferAdultImage(offerKey: string): string {
  return offerAdultImages[offerKey.toLowerCase()] ?? adultImages.neon;
}
