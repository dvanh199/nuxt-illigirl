<script setup>
    const q = useRoute().params.id ? useRoute().params.id.replace(/-/gi," ") : navigateTo("/")
    const { data: links } = await useFetch(`/api/porn/?q=porn ${q}`)
    useSeoMeta({
        title: q,
        ogTitle: q,
        keywords: q + ', Download Top Hot Photo Gallery, Download Top naked Photo Collection, Download Popular Nude girl, Download Hot Teen Photos, asian teen',
        description: q + ', Download free top Nude Porn photo gallery and free naked Girls Porn Pics collection in high resolution, List Popular Nude model Picture, Hot Teen Photos gallery.',
        ogDescription: q + ', Download free top Nude Porn photo gallery and free naked Girls Porn Pics collection in high resolution, List Popular Nude model Picture, Hot Teen Photos gallery.',
    })
</script>
<template>
    <div class="content" id="page">
        <article class="article">
            <h1 class="home-title">{{q}}</h1>
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

<style scoped>
    .nuxt-link{
        color:#fff;
        text-decoration:none;
        padding:13px;;
    }
</style>