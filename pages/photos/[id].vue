<script setup>
    const title = (useRoute().params && useRoute().params.id) ? atob(useRoute().params.id) : navigateTo("/")
    const thumbnail = (useRoute().query && useRoute().query.h) ? atob(useRoute().query.h) : navigateTo("/")
    const source_img = (useRoute().query && useRoute().query.h) ? new URL(thumbnail).origin : "https://www.bing.com"
    const { data: links } = await useFetch(`/api/porn?q=${title}`)
    useSeoMeta({
        title: title,
        ogTitle: title,
        keywords: title + ', Download Top Hot Photo Gallery, Download Top naked Photo Collection, Download Popular Nude girl, Download Hot Teen Photos, asian teen',
        description: title + ', Download free top Nude Porn photo gallery and free naked Girls Porn Pics collection in high resolution, List Popular Nude model Picture, Hot Teen Photos gallery.',
        ogDescription: title + ', Download free top Nude Porn photo gallery and free naked Girls Porn Pics collection in high resolution, List Popular Nude model Picture, Hot Teen Photos gallery.',
    })
</script>
<template>
    <div class="content" id="page">
        <article class="article leftcolum">
        <h1>{{title}}</h1>
        <div class="gallerydetail">
            <nuxt-img v-if="thumbnail !== ''" :src="thumbnail" :alt="title" :title="title" style=""/>
            <br>{{title}}
            <br>
            If this picture is your intelectual property (copyright infringement) or child pornography / immature images, please send email to <nuxt-link to="mailto:illigirldotcom@fixcaicc4ne.com" style="color:#000">illigirldotcom[at]fixcaicc4ne.com</nuxt-link> for abuse. <br>
            <br>
            <nuxt-link v-if="thumbnail !== ''" :to="thumbnail" style="color:#000" target="_blank">Image Source : {{source_img}}</nuxt-link>
            <br>
            <br>
        </div>
        <div style="text-align: center;">
            <!-- Ads -->
            
            <!--ds END-->
        </div>
        <h3>Related Images : </h3>
            <div class="gallerylist">
                <div class="gallery-item" v-for="link in links" :key="link.image_token">
                    <nuxt-link rel="bookmark" :to="link.url" :title="link.title">
                        <nuxt-img :src="link.thumbnail" :alt="link.title" :title="link.title" />
                    </nuxt-link>
                    <h2>
                        <nuxt-link rel="bookmark" :to="link.url" :title="link.title">
                            {{link.title}}
                        </nuxt-link>
                    </h2>
                </div>
            </div>
        </article>
    </div>
</template>
<style lang="scss" scoped>

</style>