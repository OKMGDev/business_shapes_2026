import type {
  BusinessTruths,
  ChannelKey,
  ChannelScores,
  ShapeId,
  StageId,
} from "./types";

export const shapes: {
  id: ShapeId;
  label: string;
  sub: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
}[] = [
  {
    id: "Service B2B",
    label: "Service B2B",
    sub: "Professional services, consulting, agencies",
    icon: "/icons/service-b2b.svg",
    iconWidth: 36,
    iconHeight: 36,
  },
  {
    id: "Personal Brand",
    label: "Personal Brand",
    sub: "Creators, speakers, coaches, consultants",
    icon: "/icons/personal-brand.svg",
    iconWidth: 36,
    iconHeight: 36,
  },
  {
    id: "Service B2C",
    label: "Service B2C",
    sub: "Consumer-facing services, trades, hospitality",
    icon: "/icons/service-b2c.svg",
    iconWidth: 36,
    iconHeight: 36,
  },
  {
    id: "SaaS",
    label: "SaaS",
    sub: "Software products, platforms, apps",
    icon: "/icons/saas.svg",
    iconWidth: 38,
    iconHeight: 36,
  },
  {
    id: "Ecommerce",
    label: "Ecommerce",
    sub: "Online retail, DTC product brands",
    icon: "/icons/ecommerce.svg",
    iconWidth: 36,
    iconHeight: 36,
  },
  {
    id: "NFP",
    label: "NFP",
    sub: "Not-for-profit, charities, social enterprise",
    icon: "/icons/nfp.svg",
    iconWidth: 37,
    iconHeight: 36,
  },
  {
    id: "Membership",
    label: "Membership",
    sub: "Communities, subscriptions, associations",
    icon: "/icons/membership.svg",
    iconWidth: 36,
    iconHeight: 36,
  },
];

export const stages: StageId[] = ["Early", "Mid", "Late"];

export const stageMeta: Record<StageId, { title: string; sub: string }> = {
  Early: {
    title: "Early Stage",
    sub: "Building foundations, finding product-market fit",
  },
  Mid: {
    title: "Mid Stage",
    sub: "Growing traction, scaling what works",
  },
  Late: {
    title: "Late Stage",
    sub: "Market leader, optimising and defending",
  },
};

export const channels: { key: ChannelKey; label: string }[] = [
  { key: "content", label: "Content & Social" },
  { key: "website", label: "Website & CRO" },
  { key: "seo", label: "SEO" },
  { key: "paid", label: "Paid Media" },
  { key: "email", label: "Email & Lifecycle" },
];

export const radarOrder: ChannelKey[] = [
  "content",
  "paid",
  "email",
  "seo",
  "website",
];

export const scores: Record<ShapeId, Record<StageId, ChannelScores>> = {
  "Service B2B": {
    Early: { content: 80, website: 60, seo: 10, paid: 10, email: 20 },
    Mid: { content: 30, website: 60, seo: 30, paid: 80, email: 30 },
    Late: { content: 60, website: 50, seo: 90, paid: 20, email: 30 },
  },
  "Service B2C": {
    Early: { content: 20, website: 60, seo: 30, paid: 80, email: 10 },
    Mid: { content: 20, website: 80, seo: 50, paid: 50, email: 10 },
    Late: { content: 30, website: 90, seo: 70, paid: 40, email: 20 },
  },
  Ecommerce: {
    Early: { content: 20, website: 60, seo: 10, paid: 80, email: 10 },
    Mid: { content: 10, website: 60, seo: 20, paid: 80, email: 40 },
    Late: { content: 20, website: 60, seo: 40, paid: 50, email: 80 },
  },
  Membership: {
    Early: { content: 90, website: 40, seo: 10, paid: 20, email: 10 },
    Mid: { content: 30, website: 80, seo: 20, paid: 30, email: 50 },
    Late: { content: 30, website: 80, seo: 50, paid: 20, email: 80 },
  },
  "Personal Brand": {
    Early: { content: 90, website: 30, seo: 10, paid: 10, email: 20 },
    Mid: { content: 70, website: 50, seo: 10, paid: 20, email: 50 },
    Late: { content: 60, website: 50, seo: 20, paid: 40, email: 80 },
  },
  SaaS: {
    Early: { content: 80, website: 50, seo: 10, paid: 20, email: 20 },
    Mid: { content: 30, website: 50, seo: 30, paid: 80, email: 30 },
    Late: { content: 30, website: 60, seo: 50, paid: 30, email: 80 },
  },
  NFP: {
    Early: { content: 80, website: 50, seo: 10, paid: 10, email: 20 },
    Mid: { content: 40, website: 50, seo: 20, paid: 20, email: 80 },
    Late: { content: 40, website: 60, seo: 30, paid: 20, email: 80 },
  },
};

export const truths: Record<ShapeId, Record<StageId, BusinessTruths>> = {
  "Service B2B": {
    Early: {
      description:
        "Founder-led, 1-3 staff, hands-on delivery for a handful of clients",
      revenue: "Ad hoc project fees, inconsistent invoicing",
      barriers:
        "No systemised sales process, founder is the delivery bottleneck",
      benefits: "Full control over quality, direct client relationships",
      competition: "Low — wins on relationship and referral",
    },
    Mid: {
      description: "Small team, defined service lines, repeatable delivery",
      revenue: "Retainers or recurring project fees",
      barriers:
        "Team capacity caps growth, quality depends on senior hires",
      benefits: "Established reputation, case studies doing real work",
      competition: "Moderate — competes on expertise and track record",
    },
    Late: {
      description:
        "Multiple senior leads, structured team & project delivery",
      revenue: "Diversified retainers, larger contracts",
      barriers:
        "Margin pressure from labour cost, growth needs new leadership layers",
      benefits: "Market authority, inbound demand, selective client base",
      competition: "High — visibility invites larger competitors",
    },
  },
  "Service B2C": {
    Early: {
      description: "Solo operator or small crew, local coverage",
      revenue: "Per-job or per-visit billing",
      barriers: "Reliant on personal network, no consistent pipeline",
      benefits: "Low overheads, fast decisions",
      competition: "High — many local operators competing on price",
    },
    Mid: {
      description: "Multiple crews, defined service area, booking systems",
      revenue: "Volume-based per-job revenue, early recurring plans",
      barriers: "Staff turnover and quality control across crews",
      benefits: "Brand recognition building, review volume",
      competition: "High — differentiation on reviews and reliability",
    },
    Late: {
      description: "Multi-crew or multi-location, standardised process",
      revenue: "Recurring service plans, higher order value",
      barriers: "Margin thinning at scale, franchise competitors entering",
      benefits:
        "Economies of scale, low-cost acquisition from reputation",
      competition:
        "High — regional and national players competing on coverage",
    },
  },
  Ecommerce: {
    Early: {
      description: "Single founder-run store, limited range",
      revenue: "Per-transaction sales, low order volume",
      barriers: "Low traffic, unproven conversion funnel",
      benefits: "Agility to test products and messaging",
      competition: "High — competing against established brands",
    },
    Mid: {
      description: "Growing catalogue, dedicated marketing spend",
      revenue: "Scaling transaction volume, early repeat revenue",
      barriers: "Rising acquisition costs, fulfilment strain",
      benefits: "Customer data enabling targeting, early loyalty",
      competition: "High — constant pressure from paid channel cost",
    },
    Late: {
      description: "Established brand, multiple product lines",
      revenue: "Diversified revenue — direct, subscription, wholesale",
      barriers: "Diminishing returns on paid acquisition",
      benefits: "Strong repeat purchase rate, brand equity",
      competition:
        "High — defending share against marketplaces and new entrants",
    },
  },
  Membership: {
    Early: {
      description: "Single site, small member base, founder-operated",
      revenue: "Membership fees, casual visit fees",
      barriers: "Capacity limited by space and staff, low awareness",
      benefits: "Strong personal relationships with early members",
      competition: "Local — nearby facilities and informal alternatives",
    },
    Mid: {
      description:
        "Established facility, consistent base, structured programs",
      revenue: "Recurring membership revenue, tiered plans",
      barriers:
        "Facility capacity caps growth, retention becomes critical",
      benefits: "Community loyalty, referral engine",
      competition:
        "Moderate — differentiated by community and program quality",
    },
    Late: {
      description: "Multiple locations, professionalised operations",
      revenue: "Multi-site recurring revenue, franchise potential",
      barriers:
        "Consistency across locations, cultural dilution at scale",
      benefits: "Brand recognition, proven playbook to replicate",
      competition:
        "Moderate to high — regional chains competing for members",
    },
  },
  "Personal Brand": {
    Early: {
      description: "Individual building initial content presence",
      revenue: "Little to no direct monetisation, occasional consulting",
      barriers: "Low visibility, no proof of audience yet",
      benefits: "Full creative control, authentic voice",
      competition: "High — crowded content space",
    },
    Mid: {
      description: "Recognised voice in niche, growing engaged following",
      revenue: "Consulting, speaking, early digital products",
      barriers: "Founder is the sole content and delivery engine",
      benefits: "Trust built through consistent content",
      competition: "Moderate — differentiated by point of view",
    },
    Late: {
      description: "Established authority, audience treated as an asset",
      revenue: "Diversified — courses, programs, partnerships, media",
      barriers: "Personal brand dependency, hard to delegate",
      benefits: "Inbound opportunity flow, premium pricing power",
      competition:
        "Lower direct competition, but attention is the scarce resource",
    },
  },
  SaaS: {
    Early: {
      description: "MVP live, small user base, product still evolving",
      revenue: "Early subscriptions, discounts or trials",
      barriers: "Unproven product-market fit, low awareness",
      benefits: "Fast iteration from direct user feedback",
      competition: "Varies — first-mover or crowded category",
    },
    Mid: {
      description: "Growing user base, defined ideal customer profile",
      revenue: "Recurring subscription revenue, tiered pricing",
      barriers: "Churn management, rising acquisition cost",
      benefits: "Recurring revenue base, usage data informing product",
      competition:
        "High — competitors chasing same growth-stage customers",
    },
    Late: {
      description:
        "Established platform, large base, enterprise tier emerging",
      revenue:
        "Diversified tiers, expansion revenue from existing accounts",
      barriers:
        "Market saturation, needs continual innovation for retention",
      benefits:
        "Strong recurring revenue, brand trust reduces sales friction",
      competition: "High — defending against incumbents and new entrants",
    },
  },
  NFP: {
    Early: {
      description: "Small team or volunteer-run, single cause focus",
      revenue: "Small-scale donations, grants, fundraising events",
      barriers: "Limited visibility, small donor base",
      benefits: "Strong founder passion, authentic cause story",
      competition:
        "Moderate — competing for donor attention among many causes",
    },
    Mid: {
      description: "Structured organisation, paid staff, defined programs",
      revenue: "Recurring donor giving, grants, corporate partnerships",
      barriers: "Overhead ratio scrutiny, donor fatigue",
      benefits: "Track record of impact, growing donor trust",
      competition: "High — crowded cause landscape for same donor pool",
    },
    Late: {
      description:
        "Established organisation, multiple programs, sector recognition",
      revenue: "Diversified funding — major donors, government, corporate",
      barriers:
        "Scaling impact without diluting cause focus, reporting burden",
      benefits: "Strong reputation, attracts major partnerships",
      competition:
        "Moderate to high — defending position against emerging causes",
    },
  },
};

export const strategyProfiles: Record<ShapeId, Record<StageId, string>> = {
  "Service B2B": {
    Early:
      "At this stage, content builds credibility and drives organic reach before your pipeline matures. Invest in thought leadership and case studies to establish authority — paid and SEO will compound later once your offer is proven.",
    Mid: "Your conversion rates matter most now. A targeted paid campaign accelerates pipeline velocity, while a refined website turns traffic into qualified leads. Email keeps warm prospects engaged through longer B2B cycles.",
    Late: "SEO becomes your most defensible moat. High-intent search capture at scale compounds over time. Content supports brand authority while keeping cost-per-acquisition low as you harvest existing market demand.",
  },
  "Service B2C": {
    Early:
      "Consumer services need immediate demand capture. Paid media shortens the time-to-first-customer dramatically. A sharp website with clear booking or enquiry flows converts that traffic efficiently.",
    Mid: "Website CRO unlocks compounding growth from the traffic you're already generating. SEO and paid work in tandem — organic builds trust while paid captures high-intent moments.",
    Late: "Your brand is established. Doubling down on website experience maximises every dollar spent. SEO locks in organic dominance and paid retargeting recaptures warm audiences efficiently.",
  },
  Ecommerce: {
    Early:
      "Paid media is the fastest path to first sales and real customer data. Your website's product pages and checkout need to be conversion-optimised before you scale spend.",
    Mid: "Paid remains your primary growth lever, now layered with email to improve LTV and reduce dependency on acquisition spend. SEO starts building a durable organic baseline.",
    Late: "Email is your highest-ROI channel at scale — lifecycle flows, winback sequences, and loyalty programmes maximise revenue from your existing base. SEO and paid sustain acquisition.",
  },
  Membership: {
    Early:
      "Community and content attract the right founding members. Your early cohort sets the tone — content seeding and organic social are more effective than paid at this stage.",
    Mid: "A polished website with a compelling membership proposition drives conversions. Email nurtures prospects through a considered decision and onboards new members effectively.",
    Late: "SEO makes your community discoverable to people actively seeking what you offer. Email deepens retention, reduces churn, and drives referrals from your most engaged members.",
  },
  "Personal Brand": {
    Early:
      "Content is everything. Your audience is built through consistent, distinctive content across social platforms. Volume and distinctiveness of voice matter far more than any other channel right now.",
    Mid: "Your content machine is running. Email converts followers into an owned, direct relationship — immune to algorithm changes. It's the channel that monetises your audience most reliably.",
    Late: "Paid amplifies your most proven content to new audiences. Email sequences drive product launches, offers, and events. SEO extends your reach to discovery-mode audiences finding you for the first time.",
  },
  SaaS: {
    Early:
      "Content-led growth establishes your category positioning and drives inbound interest. A sharp website converts curious visitors into trial signups — your funnel begins here.",
    Mid: "Paid media accelerates pipeline velocity precisely when product-market fit is confirmed. SEO starts building a compounding inbound channel as you invest in category-defining content.",
    Late: "Email and lifecycle flows maximise revenue from your user base through expansion, upsell, and retention. SEO dominates non-branded discovery. Both channels compound without proportional spend increases.",
  },
  NFP: {
    Early:
      "Content and storytelling build your mission profile and attract early supporters. Organic reach is cost-effective at this stage — your story is your most powerful asset.",
    Mid: "Email turns supporters into committed donors and advocates. Consistent stewardship flows retain existing supporters while a stronger web presence improves acquisition of new ones.",
    Late: "Email is your highest-impact channel — major donor stewardship, campaign communications, and event promotion. SEO improves discoverability for people actively seeking to support your cause.",
  },
};

/** Former SaaS B2C set. The redesign shows one SaaS card, which uses the platform scores above. */
export const saasConsumer: {
  scores: Record<StageId, ChannelScores>;
  truths: Record<StageId, BusinessTruths>;
  strategy: Record<StageId, string>;
} = {
  scores: {
    Early: { content: 50, website: 60, seo: 10, paid: 80, email: 20 },
    Mid: { content: 20, website: 70, seo: 20, paid: 80, email: 40 },
    Late: { content: 30, website: 60, seo: 30, paid: 30, email: 80 },
  },
  truths: {
    Early: {
      description:
        "Consumer app live, small but growing user base testing product-market fit",
      revenue: "Freemium or low-cost subscription, most users on free tier",
      barriers:
        "High user churn, low awareness, no proof retention works long-term",
      benefits:
        "Fast user feedback loops, low switching cost drives quick adoption",
      competition:
        "High — crowded app stores, low-cost alternatives everywhere",
    },
    Mid: {
      description: "Growing user base, defined free-to-paid conversion funnel",
      revenue: "Recurring subscription revenue, tiered or usage-based pricing",
      barriers: "Rising acquisition cost, churn management at scale",
      benefits: "Usage data informing product, early habit or network effects",
      competition: "High — well-funded competitors chasing same user segment",
    },
    Late: {
      description: "Established consumer platform, large active user base",
      revenue: "Scaled subscription revenue, upsell tiers, possible ad revenue",
      barriers: "Market saturation, retention plateau, app store fee dependency",
      benefits:
        "Strong brand recognition, retention data enabling personalisation",
      competition:
        "High — defending share against incumbents and new low-cost entrants",
    },
  },
  strategy: {
    Early:
      "You have a live product and early users — now the priority is proving retention before scaling spend. Paid media drives fast user volume for testing, while a frictionless onboarding experience on your website converts sign-ups into active users. Content builds organic awareness without burning budget.",
    Mid: "Your free-to-paid conversion funnel is defined — paid media scales user acquisition while the website and in-product experience optimise that conversion. Email and lifecycle flows are now critical: reducing churn and nudging free users to paid is more cost-effective than acquiring new ones.",
    Late: "At scale, email and lifecycle automation are your highest-ROI channel — personalised retention flows, upsell sequences, and re-engagement campaigns extract maximum value from a large user base. Paid can be dialled back strategically as brand recognition and word-of-mouth carry more weight.",
  },
};
