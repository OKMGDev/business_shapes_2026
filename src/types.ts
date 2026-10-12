export type ShapeId =
  | "Service B2B"
  | "Service B2C"
  | "Ecommerce"
  | "Membership"
  | "SaaS"
  | "Personal Brand"
  | "NFP";

export type StageId = "Early" | "Mid" | "Late";

export type ChannelKey = "content" | "website" | "seo" | "paid" | "email";

export type ChannelScores = Record<ChannelKey, number>;

export type BusinessTruths = {
  description: string;
  revenue: string;
  barriers: string;
  benefits: string;
  competition: string;
};

export type StageCopy = Record<StageId, string>;
