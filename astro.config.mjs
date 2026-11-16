// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

// Tutorials are folders (page + media), which autogenerate would turn into nested groups.
const tutorialCategory = (label, dir, tutorials) => ({
	label,
	collapsed: true,
	items: [`tutorials/${dir}`, ...tutorials.map((t) => `tutorials/${dir}/${t}`)],
});

export default defineConfig({
	site: 'https://docs.pikapods.com',
	// Emit apps/nextcloud.html instead of apps/nextcloud/index.html to keep the existing extensionless URLs on Cloudflare Pages.
	build: { format: 'file' },
	integrations: [
		starlight({
			title: 'PikaPods Docs',
			description: 'Notes on selected apps and PikaPods controls',
			logo: { src: './src/assets/logo.svg' },
			favicon: '/favicon.png',
			customCss: ['./src/styles/custom.css'],
			components: {
				SocialIcons: './src/components/SocialIcons.astro',
			},
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://stats.snapdragon.cc/script.js',
						'data-website-id': '4ce76f4b-9d80-4151-9fdf-e2eadf50a9fe',
						async: true,
					},
				},
			],
			plugins: [starlightLinksValidator()],
			sidebar: [
				'index',
				{
					label: 'Pod Management',
					items: [
						'manage',
						'manage/getting-started',
						'manage/custom-domains',
						'manage/files',
						'manage/database',
						'manage/backup',
						'manage/debug',
						'manage/firewall',
					],
				},
				{
					label: 'Tutorials',
					collapsed: true,
					items: [
						'tutorials',
						tutorialCategory('Documentation', 'documentation', ['bookstack-1-basics']),
						tutorialCategory('Email', 'email', ['listmonk-1-basics']),
						tutorialCategory('Finance', 'finance', ['actual-1-basics']),
						tutorialCategory('Monitoring', 'monitoring', ['changedetection-1-basics', 'uptime-kuma-1-setup']),
						tutorialCategory('Photo', 'photo', ['photoprism-1-basics', 'immich-1-basics']),
						tutorialCategory('Productivity', 'productivity', ['monica-1-basics']),
					],
				},
				{
					label: 'App Notes',
					collapsed: true,
					items: [{ autogenerate: { directory: 'apps' } }],
				},
				{
					label: 'FAQ',
					items: ['faq', 'faq/account', 'faq/apps', 'faq/technical'],
				},
			],
		}),
	],
});
