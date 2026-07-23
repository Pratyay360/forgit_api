// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightOpenAPI, { openAPISidebarGroups } from "starlight-openapi";
// import min from "astro-min";
// import playformCompress from "@playform/compress";
// import { classShortener } from "astro-class-shortener";
// import starlightLinksValidator from "starlight-links-validator";
// https://astro.build/config
export default defineConfig({
  integrations: [
		starlight({
			title: "forgit api docs",
			plugins: [
				starlightOpenAPI([
					{
						base: "github",
						schema:
							"https://raw.githubusercontent.com/github/rest-api-description/main/descriptions/api.github.com/api.github.com.json",
						snippets: {
							operation: false,
						},
					},
					{
						base: "gitlab",
						schema:
							"https://gitlab.com/gitlab-org/gitlab/-/raw/master/doc/api/openapi/openapi_v3.yaml?ref_type=heads",
						snippets: {
							operation: false,
						},

					},
					{
						base: "bitbucket",
						schema:
							"https://dac-static.atlassian.com/cloud/bitbucket/swagger.v3.json",
						snippets: {
							operation: false,
						},
					},
					{
						base: "forgejo",
						// schema: "",
						schema: "https://v15.next.forgejo.org/swagger.v1.json",
						snippets: {
							operation: false,
						},
					},{
						base: "codeberg",
						// schema: "https://v15.next.forgejo.org/swagger.v1.json",
						schema: "https://codeberg.org/swagger.v1.json",
						snippets: {
							operation: false,
						},
					},
				]),
			],
			sidebar: [
				{
					label: "forgit app",
					items: [
						{
							label: "Sourcehut",
							items: [{ autogenerate: { directory: "sourcehut" } }],
						},
						...openAPISidebarGroups,
					],
				},

				{
					label: "Reference",
					items: [{ autogenerate: { directory: "reference" } }],
				},
			],
		}),
	],
});
