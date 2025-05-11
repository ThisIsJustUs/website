"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import {
  apiVersion,
  dataset,
  projectId,
} from "./src/app/(blog)/writing/_sanity/env";
import { schema } from "./src/app/(blog)/writing/_sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});
