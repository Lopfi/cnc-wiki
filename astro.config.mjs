// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
    site: 'https://lopfi.github.io',
    base: '/cnc-wiki',
    integrations: [starlight({
        title: 'CNC Wiki',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/lopfi/cnc-wiki' }],
        sidebar: [
            {
                label: 'Intro',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Welcome', slug: 'intro/welcome' },
                    { label: 'Getting Started', slug: 'intro/getting-started' },
                    { label: 'Projects', slug: 'intro/projects' },
                ],
            },
            {
                label: 'Controller',
                autogenerate: { directory: 'controllers' },
            },
            {
                label: 'Hardware',
                autogenerate: { directory: 'hardware' },
            },
            {
                label: 'Software',
                autogenerate: { directory: 'software' },
            },
            {
                label: 'Learning',
                autogenerate: { directory: 'learning' },
            },
        ],
		}), svelte()],
});