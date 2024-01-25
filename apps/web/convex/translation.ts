import { v } from "convex/values";
import { internalMutation, internalQuery, query } from "./_generated/server";

export const list = query({
  args: {
    targetLanguage: v.string(),
  },
  handler: async (ctx, { targetLanguage }) => {
    const languageTag =
      targetLanguage === "en"
        ? "en-US"
        : targetLanguage === "pt"
          ? "pt-PT"
          : targetLanguage;

    const translations = await ctx.db
      .query("translations")
      .filter((q) => q.eq(q.field("languageTag"), languageTag))
      .collect();

    return translations;
  },
});

export const get = internalQuery({
  args: {
    text: v.string(),
    targetLanguage: v.optional(v.string()),
  },
  handler: async (ctx, { text, targetLanguage }) => {
    const languageTag =
      targetLanguage === "en"
        ? "en-US"
        : targetLanguage === "pt"
          ? "pt-PT"
          : targetLanguage;

    const existingTranslation = await ctx.db
      .query("translations")
      .withIndex("byLanguage")
      .filter((q) => q.eq(q.field("languageTag"), languageTag))
      .filter((q) => q.eq(q.field("text"), text))
      .first();
    return existingTranslation;
  },
});

export const save = internalMutation({
  args: {
    text: v.string(),
    translation: v.string(),
    languageTag: v.string(),
  },
  handler: async (ctx, { text, translation, languageTag }) => {
    ctx.db.insert("translations", { text, translation, languageTag });
  },
});
