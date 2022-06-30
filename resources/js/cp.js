import SeoToolsFieldtype from './components/fieldtypes/SeoToolsFieldtype.vue';

Statamic.booting(() => {
    Statamic.$components.register('seo_tools-fieldtype', SeoToolsFieldtype);
});
