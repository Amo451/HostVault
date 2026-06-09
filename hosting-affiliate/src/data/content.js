// ============================================================
//  CONTENT.JS — Edit this file to update all website content
//  No coding knowledge needed. Just change the text & links.
// ============================================================

export const site = {
  name: "HostVault",
  tagline: "Honest Reviews. Real Comparisons. Your Perfect Host.",
  description: "HostVault helps you find the best web hosting for your needs with in-depth, unbiased reviews and side-by-side comparisons.",
  url: "https://hostvault.vercel.app",
  email: "hello@hostvault.com",
  social: {
    twitter: "https://twitter.com/hostvault",
    youtube: "https://youtube.com/@hostvault",
  },
};

// ---- HERO SECTION ----
export const hero = {
  headline: "Stop Paying for Hosting That Lets You Down",
  subheadline: "We've tested 40+ hosting providers so you don't have to waste time or money. Real speed tests. Real uptime data. Zero fluff.",
  cta_primary: { text: "See Top Picks", href: "#top-picks" },
  cta_secondary: { text: "Compare Plans", href: "#compare" },
  stats: [
    { value: "40+", label: "Hosts Tested" },
    { value: "3 yrs", label: "Testing Period" },
    { value: "12K+", label: "Readers Helped" },
    { value: "99.9%", label: "Avg Uptime Tracked" },
  ],
};

// ---- TOP HOSTING PICKS ----
// To add a new host, copy one object and paste it inside the array.
// affiliate_url: your affiliate/referral link
// badge: optional label like "Best Value", "Editor's Pick", etc.
export const hosts = [
  {
    id: "siteground",
    name: "SiteGround",
    logo: "SG",
    logoColor: "#f5a623",
    badge: "Editor's Pick",
    tagline: "Lightning-fast managed hosting with world-class support",
    rating: 4.9,
    price: "$2.99",
    period: "/mo",
    originalPrice: "$17.99",
    affiliate_url: "https://siteground.com", // 👈 Replace with your affiliate link
    pros: ["Free SSL & CDN", "Daily backups", "24/7 expert support", "99.99% uptime SLA"],
    cons: ["Renewals cost more", "No free domain on starter"],
    specs: { uptime: "99.99%", speed: "412ms", support: "24/7 Live", storage: "10 GB SSD" },
    category: ["shared", "wordpress", "cloud"],
    featured: true,
  },
  {
    id: "bluehost",
    name: "Bluehost",
    logo: "BH",
    logoColor: "#00a4e0",
    badge: "Best for Beginners",
    tagline: "WordPress-recommended host with a smooth onboarding experience",
    rating: 4.7,
    price: "$1.99",
    period: "/mo",
    originalPrice: "$10.99",
    affiliate_url: "https://bluehost.com", // 👈 Replace with your affiliate link
    pros: ["Free domain for 1 year", "1-click WordPress install", "Unmetered bandwidth", "30-day money back"],
    cons: ["Upsells during checkout", "Speed could be faster"],
    specs: { uptime: "99.98%", speed: "489ms", support: "24/7 Phone & Chat", storage: "50 GB SSD" },
    category: ["shared", "wordpress"],
    featured: true,
  },
  {
    id: "cloudways",
    name: "Cloudways",
    logo: "CW",
    logoColor: "#1d6fa4",
    badge: "Best Performance",
    tagline: "Managed cloud hosting built for developers and growing businesses",
    rating: 4.8,
    price: "$11",
    period: "/mo",
    originalPrice: null,
    affiliate_url: "https://cloudways.com", // 👈 Replace with your affiliate link
    pros: ["Choose your cloud provider", "Free SSL & migrations", "Superb page speeds", "Scalable on demand"],
    cons: ["Not ideal for total beginners", "Email hosting not included"],
    specs: { uptime: "99.99%", speed: "218ms", support: "24/7 Expert Chat", storage: "25 GB SSD" },
    category: ["cloud", "managed"],
    featured: true,
  },
  {
    id: "hostinger",
    name: "Hostinger",
    logo: "HO",
    logoColor: "#673de6",
    badge: "Best Budget",
    tagline: "Dirt cheap hosting that actually delivers solid performance",
    rating: 4.6,
    price: "$1.99",
    period: "/mo",
    originalPrice: "$9.99",
    affiliate_url: "https://hostinger.com", // 👈 Replace with your affiliate link
    pros: ["Incredibly affordable", "hPanel is intuitive", "Free SSL included", "Weekly backups"],
    cons: ["Support quality varies", "Limited advanced features"],
    specs: { uptime: "99.9%", speed: "523ms", support: "24/7 Chat", storage: "50 GB SSD" },
    category: ["shared", "wordpress"],
    featured: false,
  },
  {
    id: "kinsta",
    name: "Kinsta",
    logo: "KN",
    logoColor: "#2ecb71",
    badge: "Premium WordPress",
    tagline: "Google Cloud-powered managed WordPress hosting for professionals",
    rating: 4.9,
    price: "$35",
    period: "/mo",
    originalPrice: null,
    affiliate_url: "https://kinsta.com", // 👈 Replace with your affiliate link
    pros: ["Built on Google Cloud", "Free CDN & SSL", "Staging environments", "Elite support team"],
    cons: ["Pricier than shared hosts", "WordPress only"],
    specs: { uptime: "99.99%", speed: "187ms", support: "24/7 Expert Chat", storage: "10 GB NVMe" },
    category: ["managed", "wordpress", "cloud"],
    featured: false,
  },
  {
    id: "a2hosting",
    name: "A2 Hosting",
    logo: "A2",
    logoColor: "#e8452c",
    badge: "Fastest Shared",
    tagline: "Speed-obsessed hosting with Turbo plans that scream",
    rating: 4.5,
    price: "$2.99",
    period: "/mo",
    originalPrice: "$10.99",
    affiliate_url: "https://a2hosting.com", // 👈 Replace with your affiliate link
    pros: ["Turbo servers (20x faster)", "Anytime money-back guarantee", "Free site migration", "Developer-friendly"],
    cons: ["Backups cost extra on basic", "Interface feels dated"],
    specs: { uptime: "99.9%", speed: "320ms", support: "24/7 Guru Crew", storage: "100 GB SSD" },
    category: ["shared", "managed"],
    featured: false,
  },
];

// ---- BLOG POSTS ----
// To add a new post, copy one object and add it to the top of the array.
export const posts = [
  {
    id: "cheap-wordpress-hosting-2025",
    title: "7 Best Cheap WordPress Hosting Plans That Don't Compromise Speed",
    excerpt: "Budget hosting doesn't have to mean slow load times and constant downtime. We put seven wallet-friendly plans through their paces to find the ones worth your money.",
    author: "James Mercer",
    date: "May 28, 2025",
    readTime: "9 min read",
    category: "WordPress",
    tags: ["WordPress", "Budget Hosting", "Shared Hosting"],
    featured: true,
    image_color: "#667eea",
    content: `
    <h1>Best No Verification Casinos in Spain</h1>

    <p>
      No verification casinos are becoming popular in Spain
      because players want faster signups and quicker withdrawals.
    </p>

    <h2>Top Picks</h2>

    <p>
      We tested dozens of casinos and selected the best options
      for Spanish players.
    </p>

    <h2>1. BitStarz</h2>

    <p>
      BitStarz is one of the biggest crypto-friendly casinos...
    </p>
  },
  {
    id: "shared-vs-vps-hosting",
    title: "Shared vs VPS Hosting: Which One Does Your Website Actually Need?",
    excerpt: "The hosting type you choose affects your site's speed, security, and scalability. Here's how to pick the right one without overspending on resources you don't need.",
    author: "Sarah Chen",
    date: "May 14, 2025",
    readTime: "7 min read",
    category: "Guides",
    tags: ["VPS", "Shared Hosting", "Beginners"],
    featured: true,
    image_color: "#f093fb",
  },
  {
    id: "website-speed-optimization",
    title: "Why Your Hosting Plan Is Killing Your SEO (And How to Fix It)",
    excerpt: "Google uses page speed as a ranking factor. If your host is slow, your rankings suffer. We break down exactly how hosting speed affects SEO and what to do about it.",
    author: "James Mercer",
    date: "April 30, 2025",
    readTime: "11 min read",
    category: "SEO",
    tags: ["SEO", "Page Speed", "Performance"],
    featured: false,
    image_color: "#4facfe",
  },
  {
    id: "best-hosting-small-business",
    title: "Best Web Hosting for Small Businesses in 2025: Our Top 5 Picks",
    excerpt: "Small businesses have unique hosting needs — reliability, email, easy management, and room to grow. These five hosts check every box without breaking the budget.",
    author: "Sarah Chen",
    date: "April 18, 2025",
    readTime: "8 min read",
    category: "Guides",
    tags: ["Small Business", "Email Hosting", "Reliability"],
    featured: false,
    image_color: "#43e97b",
  },
];

// ---- CATEGORIES (used for filtering) ----
export const categories = [
  { id: "all", label: "All Hosts" },
  { id: "shared", label: "Shared Hosting" },
  { id: "wordpress", label: "WordPress" },
  { id: "cloud", label: "Cloud Hosting" },
  { id: "managed", label: "Managed Hosting" },
];

// ---- FAQ ----
// Add or remove questions as needed
export const faqs = [
  {
    q: "How do you choose which hosts to review?",
    a: "Every host we review gets tested hands-on for at least 60 days. We measure uptime with third-party monitoring tools, run real speed tests from multiple locations, and contact support multiple times to gauge response quality. We never accept payment to influence our rankings.",
  },
  {
    q: "Do you earn commission from these links?",
    a: "Yes — when you purchase through our links, we may earn a commission at no extra cost to you. This is how we keep the site running and free. Our editorial process is completely independent of any affiliate relationships; a low commission doesn't stop us from giving a host a poor rating if they deserve it.",
  },
  {
    q: "What's the best hosting for a brand-new website?",
    a: "For most beginners, we recommend SiteGround's StartUp plan or Bluehost's Basic plan. Both are affordable, beginner-friendly, and include everything you need to launch — free SSL, WordPress auto-install, and solid support.",
  },
  {
    q: "Is free hosting worth it?",
    a: "Free hosting is fine for learning or hobby projects, but it's not suitable for any serious website. You'll deal with forced ads, severe performance limits, no custom domain, and near-zero support. For the price of a coffee each month, shared hosting gives you a dramatically better experience.",
  },
  {
    q: "How often do you update your reviews?",
    a: "We re-test our top picks every six months and update pricing, features, and performance data accordingly. Our last full review cycle was completed in April 2025.",
  },
];
