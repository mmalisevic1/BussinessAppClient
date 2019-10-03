<template>
    <v-container grid-list-md fluid>
        <v-layout
            row
            align-center
            justify-space-around
            align-content-start>
            <v-flex xs2>
                <v-avatar
                    size="75"
                    align-content-start>
                    <img v-if="$appName === 'true'" :src="require('../assets/shero1.jpg')" alt="avatar">
                    <img v-else-if="$appName === 'false'" :src="require('../assets/prijavljen.jpg')" alt="avatar">
                </v-avatar>
            </v-flex>
            <v-flex xs10>
                <h6 class="display-1 text-sm-left" >Dobrodošli!</h6>
                <div class="text-sm-left">
                    <strong>Prijavljen kao: </strong>
                    <span v-if="$appName === 'true'" class="ma-0">Anes Šero</span>
                    <span v-else-if="$appName === 'false'" class="ma-0">Maid Suša</span>
                    <br>
                    <strong class="text-sm-left">Pozicija: </strong>
                    <span v-if="$appName === 'true'" class="ma-0">Glavni inženjer</span>
                    <span v-else-if="$appName === 'false'" class="ma-0">Generalni direktor</span>
                </div>
            </v-flex>
        </v-layout>
        <v-layout
            row
            align-center
            justify-center
            class="white--text">
            <v-flex xs12 class="mb5">
                <v-parallax :src="require('../assets/hero.jpg')" height="300">
                    <h1 class="white--text mb-2 display-3 text-xs-center font-weight-bold">Hiperion II</h1>
                    <div class="subheading mb-3 text-xs-center">Solarna elektrana</div>
                </v-parallax>
            </v-flex>
        </v-layout>
        <v-layout
            row
            align-center
            justify-center
            class="">
            <v-flex xs3>
                <v-card color="white">
                    <v-img
                        :src="require('../assets/stanje.jpg')"
                        aspect-ratio="2.75"
                        >
                    </v-img>
                    <v-card-title primary-title class="cardTitle">
                        <div>
                            <h4 class="headline mb-0 text-sm-left">Stanje</h4>
                            <div class="text-sm-left">Prikaz stanja elektrane, kvarova ...</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="orange" :to="'stanje'">Prikaži</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs3>
                <v-card color="white">
                    <v-img
                        :src="require('../assets/main.png')"
                        aspect-ratio="2.75"
                        >
                    </v-img>
                    <v-card-title primary-title class="cardTitle">
                        <div>
                            <h3 class="headline mb-0 text-sm-left">Proizvodnja</h3>
                            <div class="text-sm-left">Prikaz proizvodnje elektrane, dobiti ...</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="orange" href="/#/proizvodnja">Prikaži</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs3>
                <v-card color="white">
                    <v-img
                        :src="require('../assets/meteorologija.jpg')"
                        aspect-ratio="2.75"
                        >
                    </v-img>
                    <v-card-title primary-title class="cardTitle">
                        <div>
                            <h3 class="headline mb-0 text-sm-left">Meteorološki uslovi</h3>
                            <div class="text-sm-left">Vremenske karakteristike ...</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="orange" href="/#/vrijeme">Prikaži</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs3>
                <v-card color="white">
                    <v-img
                        :src="require('../assets/engineer.jpg')"
                        aspect-ratio="2.75"
                        >
                    </v-img>
                    <v-card-title primary-title class="cardTitle">
                        <div>
                            <h3 class="headline mb-0 text-sm-left">Ljudski resursi</h3>
                            <div class="text-sm-left">Pregled informacija o uposlenicima ...</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn v-if="$appName === 'true'" flat color="orange" href="/#/transactions" disabled="true">Prikaži</v-btn>
                        <v-btn v-else-if="$appName === 'false'" flat color="orange" href="/#/transactions">Prikaži</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import Srednja from './Srednja.vue'
export default {
    components: {
        Srednja
    },
    name: 'HomeNew',
    data () {
        return {
            hasAccess: this.globalReadOnlyProperty
        }
    },
    beforeCreate() {
        Vue.prototype.$appName = this.$appName;
    }
}
</script>
<style scoped>
    .cardTitle {
        padding-top: 12px !important;
        padding-bottom: 12px !important;
    }
</style>

