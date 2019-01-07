<template>
    <div>
        <weather 
            api-key="1e7dec8773c32de5d4cbac1705fabb32"
            title="Vrijeme"
            latitude="43.993900"
            longitude="18.170679"
            language="bs"
            bar-color="#FF9800"
            text-color="#FF9800"
            units="si">
        </weather>
        <v-date-picker
            v-model="date"
            full-width
            landscape
            class="mt-3"
        ></v-date-picker>
    </div>
    
    <!-- <h3>Proba</h3> 43.993900, 18.170679 -->
</template>
<script>
import VueWeatherWidget from 'vue-weather-widget';
import 'vue-weather-widget/dist/css/vue-weather-widget.css';

export default {
    components: {
        'weather': VueWeatherWidget
    }
}
</script>
<style scoped>

</style>
