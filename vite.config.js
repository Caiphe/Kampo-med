import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/animate.css',
                'resources/css/aos.css',
                'resources/css/index.css',
                'resources/css/about.css',
                'resources/css/appointment.css',
                'resources/css/contact.css',
                'resources/css/custom.css',
                'resources/css/service-list.css',
                'resources/css/services.css',
                'resources/css/slick-theme.css',
                'resources/css/slick.css',
                'resources/js/app.js',
                'resources/js/aos.js',
            ],
            refresh: true,
        }),
    ],
});
