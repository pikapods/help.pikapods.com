// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

export default defineConfig({
	site: 'https://docs.pikapods.com',
	// Emit apps/nextcloud.html instead of apps/nextcloud/index.html to keep the existing extensionless URLs on Cloudflare Pages.
	build: { format: 'file' },
	redirects: { '/faq': '/faq/account' },
	integrations: [
		starlight({
			title: 'PikaPods Help',
			description: 'Guides and answers for running your apps on PikaPods.',
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
			lastUpdated: true,
			plugins: [starlightLinksValidator()],
			sidebar: [
				'index',
				'manage/getting-started',
				{
					label: 'Manage Your Pods',
					items: [
						'manage/custom-domains',
						'manage/files',
						'manage/database',
						'manage/backup',
						'manage/debug',
						'manage/firewall',
					],
				},
				{
					label: 'App Help',
					collapsed: true,
					items: [{ autogenerate: { directory: 'apps' } }],
				},
				{
					label: 'App Tutorials',
					collapsed: true,
					items: [
						'tutorials',
						'tutorials/finance/actual-1-basics',
						'tutorials/documentation/bookstack-1-basics',
						'tutorials/monitoring/changedetection-1-basics',
						'tutorials/photo/immich-1-basics',
						'tutorials/email/listmonk-1-basics',
						'tutorials/productivity/monica-1-basics',
						'tutorials/photo/photoprism-1-basics',
						'tutorials/monitoring/uptime-kuma-1-setup',
					],
				},
				{
					label: 'FAQ',
					items: ['faq/account', 'faq/apps', 'faq/technical'],
				},
				{ label: 'Contact Support', link: 'mailto:hello@pikapods.com' },
			],
		}),
	],
});
