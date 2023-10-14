<template>
    <div>
        <NuxtLink :to="$t('homePageURL')"> <img :src="imageURL + 'white-logo.svg'" width="152" height="42" alt="logo"></NuxtLink>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imageURL: process.env.baseImgUrl
        }
    }
}
</script>