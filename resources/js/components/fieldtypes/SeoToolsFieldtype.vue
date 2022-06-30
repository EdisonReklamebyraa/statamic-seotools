<template>
    <div class="flex flex-wrap gap-2">        
        <a v-if="this.meta.permalink" @click="facebookDebugger()" class="flex items-center justify-center btn-flat w-full px-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 mr-1"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M23.251 7.498V.748h-6.75m6.75 0-15 15m3-10.5h-9a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-9"></path></svg><span>Facebook Debugger</span></a>
        <a v-if="this.meta.permalink" @click="pagespeedInsight()" class="flex items-center justify-center btn-flat w-full px-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 mr-1"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M23.251 7.498V.748h-6.75m6.75 0-15 15m3-10.5h-9a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-9"></path></svg><span>Pagespeed Insight</span></a>
        <span v-else class="help-block">Not yet available.</span>
    </div>
</template>

<script>
export default {

    mixins: [Fieldtype],

    data() {
        return {};
    },

    methods: {
        facebookDebugger() {
            window.open('https://developers.facebook.com/tools/debug/?q=' + this.meta.permalink);
        },
        pagespeedInsight() {
            window.open('https://pagespeed.web.dev/report?url=' + this.meta.permalink);
        }
    }

};
</script>
