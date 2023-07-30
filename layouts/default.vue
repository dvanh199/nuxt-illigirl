<script setup>
    const site_url = ref("https://illigirl.com/")
    const site_name = ref("illigirl.com")
    const q = ref("")
    const btnSearch = () =>{
        navigateTo(`/porn/${q.value}`);
    }
    useHead({
        titleTemplate: '%s - lligirl.com',
    })
</script>
<template>
    <div class="navbar-container">
        <div class="centerbox">
            <header class="site-header">
                <nuxt-link :to="site_url" title="Free Hot Naked Girls Porn and Sexy Nude Porn Gallery">
                    {{site_name.toUpperCase()}}
                </nuxt-link>
            </header>
            <nav class="topnavbar" role="navigation">
                <div class="topnavbar-menu">
                    <ul id="topnavi" class="nuxt-link">
                        <nuxt-link to="/" class="nav-link">Home</nuxt-link>
                        <nuxt-link to="/contact-us" title="Contact Us">Contact Us</nuxt-link>
                        <nuxt-link to="/privacy-policy" title="Privacy Policy">Privacy Policy</nuxt-link>
                        <nuxt-link to="/dmca" title="dmca">DMCA</nuxt-link>
                        <nuxt-link to="/categories" title="Categories">Categories</nuxt-link>
                        <nuxt-link to="/disclaimer" title="Disclaimer">Disclaimer</nuxt-link>
                    </ul>
                </div>
            </nav>
            <div class="search-form">                
                <input type="text" class="searchtitle" name="search-title" v-model="q" placeholder="Search Pornstar / porn keyword" />
                <button @click="btnSearch()" @keyup.enter="btnSearch()" class="search-btn" type="button"> <img src="/img/search.png"> </button>                
            </div>
            <div class="clear"></div>
        </div>
    </div>
    <div class="themesminioutbox">
    <div class="centerbox">
        <slot />        
        <div style="clear:both"></div>
    </div>
    <div class="footer">
        <footer class="centerbox">
        <div class="bottom-nav">
            <span>
                <nuxt-link :to="site_url" title="Free Hot Naked Girls Porn and Sexy Nude Porn Gallery">{{site_name}}</nuxt-link> Copyright &copy; 2015. </span>
                <nuxt-link to="/dmca">DMCA</nuxt-link> | <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link> | <nuxt-link to="/contact-us">Contact Us</nuxt-link>
            <br />
            <nuxt-link to="compliance"> 18 U.S.C. 2257 Record-Keeping Requirements Compliance Statement</nuxt-link>
        </div>
        <div id="dmca-copyright">
            <p>{{site_name}} is Images search engine and does not host any files, No Images files are indexed hosted cached or stored on our server, They are located on Bing search engine and Google Search, We only help you to search the link source to the other server. cloudzsexy.com is not responsible for third party website content. It is illegal for you to distribute copyrighted files without permission. The images files you download with cloudzsexy.com must be for time shifting, personal, private, non commercial use only and remove the files after listening. If one of this file is your intelectual property (copyright infringement) or child pornography / immature sounds, please <a href="#">send report</a> or email to <a href="#" class="__cf_email__" data-cfemail="">illigirldotcom[at]fixcaicc4ne.com</a> to us. </p>
        </div>
        </footer>
    </div>
    </div>
</template>
<style scoped>
    .nuxt-link{
        color:#fff;
        text-decoration:none;
        padding:13px;;
    }
</style>