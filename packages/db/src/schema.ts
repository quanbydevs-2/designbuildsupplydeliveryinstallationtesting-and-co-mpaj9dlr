import { defineRelations } from "drizzle-orm"
import { createTable } from "./utils/table.js"

// ═══════════════ AUTH TABLES ═══════════════

export const users = createTable("users", t => ({
  id: t.text("id").primaryKey(),
  name: t.text("name").notNull(),
  email: t.text("email").notNull().unique(),
  emailVerified: t.boolean("email_verified").default(false).notNull(),
  image: t.text("image"),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const sessions = createTable("sessions", t => ({
  id: t.text("id").primaryKey(),
  token: t.text("token").notNull().unique(),
  userId: t.text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  expiresAt: t.timestamp("expires_at").notNull(),
  ipAddress: t.text("ip_address"),
  userAgent: t.text("user_agent"),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const accounts = createTable("accounts", t => ({
  id: t.text("id").primaryKey(),
  accountId: t.text("account_id").notNull(),
  providerId: t.text("provider_id").notNull(),
  userId: t.text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  accessToken: t.text("access_token"),
  refreshToken: t.text("refresh_token"),
  password: t.text("password"),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const verifications = createTable("verifications", t => ({
  id: t.text("id").primaryKey(),
  identifier: t.text("identifier").notNull(),
  value: t.text("value").notNull(),
  expiresAt: t.timestamp("expires_at").notNull(),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

// ═══════════════ MODULE TABLES ═══════════════

export const farmers = createTable("farmers", t => ({
  id: t.serial("id").primaryKey(),
  firstName: t.text("first_name").notNull(),
  lastName: t.text("last_name").notNull(),
  contactNumber: t.text("contact_number").notNull(),
  address: t.text("address").notNull(),
  farmSize: t.doublePrecision("farm_size").notNull(),
  primaryCrop: t.text("primary_crop").notNull(),
  registrationDate: t.timestamp("registration_date").notNull(),
  isActive: t.boolean("is_active").default(false).notNull(),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const crops = createTable("crops", t => ({
  id: t.serial("id").primaryKey(),
  name: t.text("name").notNull(),
  variety: t.text("variety"),
  season: t.text("season").notNull(),
  plantingDate: t.timestamp("planting_date").notNull(),
  expectedHarvest: t.timestamp("expected_harvest"),
  areaPlanted: t.doublePrecision("area_planted").notNull(),
  estimatedYield: t.doublePrecision("estimated_yield"),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const programs = createTable("programs", t => ({
  id: t.serial("id").primaryKey(),
  title: t.text("title").notNull(),
  description: t.text("description").notNull(),
  startDate: t.timestamp("start_date").notNull(),
  endDate: t.timestamp("end_date").notNull(),
  budget: t.doublePrecision("budget").notNull(),
  beneficiaryCount: t.integer("beneficiary_count"),
  isActive: t.boolean("is_active").default(false).notNull(),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const resources = createTable("resources", t => ({
  id: t.serial("id").primaryKey(),
  name: t.text("name").notNull(),
  category: t.text("category").notNull(),
  quantity: t.integer("quantity").notNull(),
  unit: t.text("unit").notNull(),
  cost: t.doublePrecision("cost"),
  supplier: t.text("supplier"),
  dateAcquired: t.timestamp("date_acquired").notNull(),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const distributions = createTable("distributions", t => ({
  id: t.serial("id").primaryKey(),
  resourceName: t.text("resource_name").notNull(),
  recipientName: t.text("recipient_name").notNull(),
  quantity: t.integer("quantity").notNull(),
  distributionDate: t.timestamp("distribution_date").notNull(),
  purpose: t.text("purpose").notNull(),
  status: t.text("status").notNull(),
  notes: t.text("notes"),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

// ═══════════════ RELATIONS ═══════════════

export const relations = defineRelations({ users, sessions, accounts, farmers, crops, programs, resources, distributions }, r => ({
  users: {
    sessions: r.many.sessions(),
    accounts: r.many.accounts(),
  },
  sessions: {
    user: r.one.users({ from: r.sessions.userId, to: r.users.id }),
  },
  accounts: {
    user: r.one.users({ from: r.accounts.userId, to: r.users.id }),
  },
  farmers: {
    author: r.one.users({ from: r.farmers.authorId, to: r.users.id }),
  },
  crops: {
    author: r.one.users({ from: r.crops.authorId, to: r.users.id }),
  },
  programs: {
    author: r.one.users({ from: r.programs.authorId, to: r.users.id }),
  },
  resources: {
    author: r.one.users({ from: r.resources.authorId, to: r.users.id }),
  },
  distributions: {
    author: r.one.users({ from: r.distributions.authorId, to: r.users.id }),
  },
}))

export const schema = Object.assign({ users, sessions, accounts, verifications, farmers, crops, programs, resources, distributions }, relations)
