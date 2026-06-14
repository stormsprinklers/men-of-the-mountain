export const siteConfig = {
  name: "Men of the Mountain Coaching",
  tagline: "Helping Christian men reclaim their confidence, health, and identity.",
  description:
    "Helping Christian men reclaim their confidence, health, and identity. Free 30-minute intro session with John Baker.",
  coach: {
    name: "John Baker",
    fullName: "John C. Baker",
    title: "Founder, Men of the Mountain Coaching",
    location: "Salt Lake City Metropolitan Area, Utah",
    email: "johncbaker814@gmail.com",
  },
  links: {
    calendly: "https://calendly.com/johncbaker814/30min",
    email: "mailto:johncbaker814@gmail.com",
    applePodcasts:
      "https://podcasts.apple.com/us/podcast/men-of-the-mountain/id1828541099",
    spotify: "https://open.spotify.com/show/5gtc06WSKoYAht6EVtAgSJ",
    blog: "https://mancamp7.wordpress.com/",
    linkedin: "https://www.linkedin.com/in/johncbaker/",
  },
  leadMagnet: {
    title: "6 Ways to Begin to Reclaim Power & Confidence in Your Identity",
    description:
      "A practical guide for driven men who are tired of winning at work while losing themselves at home.",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Coaching", href: "/coaching" },
    { label: "Podcast", href: "/podcast" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
