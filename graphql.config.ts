export default {
	schema:
		"https://git.sr.ht/~sircmpwn/git.sr.ht/blob/master/api/graph/schema.graphqls",
	extensions: {
		"graphql-markdown": {
			rootPath: "./src/content/docs",
			baseURL: "sourcehut",
			formatter: "@graphql-markdown/formatters/starlight",
			loaders: {
				UrlLoader: "@graphql-tools/url-loader",
			},
		},
	},
};
