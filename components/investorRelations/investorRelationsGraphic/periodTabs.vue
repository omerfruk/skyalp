<template>
    <div class="graphic-tabs container">
        <ul class="tabs-content">
            <li @click="selectedTab = 1">
                Periyotlar
            </li>
            <li @click="selectedTab = 2">
                1
            </li>
            <li @click="selectedTab = 3">
                5
            </li>
            <li @click="selectedTab = 4">
                15
            </li>
            <li @click="selectedTab = 5">
                30
            </li>
            <li @click="selectedTab = 6">
                60
            </li>
            <li @click="selectedTab = 7">
                G
            </li>
            <li @click="selectedTab = 8">
                H
            </li>
            <li @click="selectedTab = 9">
                A
            </li>
            <li @click="selectedTab = 10">
                Y
            </li>
        </ul>
        <periodOneGraphic v-if="selectedTab === 1"/>
    </div>
</template>
<script>
import periodOneGraphic from './periodOneGraphic.vue';

export default {
    components:{periodOneGraphic},
    data(){
        return{
            selectedTab: 1
        }
    }
}
</script>
<style lang="scss" scoped>
.graphic-tabs{
    .tabs-content{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #dbdbdb;
        li{
            cursor: pointer;
        }
    }
}
</style>