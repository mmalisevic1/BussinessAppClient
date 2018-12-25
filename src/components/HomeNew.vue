<template>
    <v-container grid-list-md fluid>
        <v-layout
            row
            align-center
            justify-space-around
            align-content-start>
            <v-flex xs2>
                <v-avatar
                    size="125"
                    align-content-start>
                    <img :src="require('../assets/prijavljen.jpg')" alt="avatar">
                </v-avatar>
            </v-flex>
            <v-flex xs10>
                <h4 class="display-1 text-sm-left" >Dobrodošli!</h4>
                <div class="text-sm-left">
                    <strong>Prijavljen kao: </strong>
                    <br/>
                    <strong class="text-sm-left">Pozicija: </strong>
                </div>
            </v-flex>
        </v-layout>
        <v-layout
            row
            align-center
            justify-center
            class="white--text mb-5">
            <v-flex xs12 class="mb5">
                <v-parallax :src="require('../assets/hero.jpg')" height="600">
                    <h1 class="white--text mb-2 display-3 text-xs-center font-weight-bold">Hiperion II</h1>
                    <div class="subheading mb-3 text-xs-center">Solarna elektrana</div>
                </v-parallax>
            </v-flex>
        </v-layout>
        <v-layout
            row
            align-center
            justify-center
            class="mt-5">
            <v-flex xs3>
                <v-card color="white">
                    <v-img
                        :src="require('../assets/stanje.jpg')"
                        aspect-ratio="2.75"
                        >
                    </v-img>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0 text-sm-left">Stanje</h3>
                            <div class="text-sm-left">Prikaz stanja elektrane, kvarova ...</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="orange">Prikaži</v-btn>
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
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0 text-sm-left">Proizvodnja</h3>
                            <div class="text-sm-left">Prikaz proizvodnje elektrane, dobiti ...</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="orange">Prikaži</v-btn>
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
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0 text-sm-left">Meteorološki uslovi</h3>
                            <div class="text-sm-left">Vremenske karakteristike ...</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="orange">Prikaži</v-btn>
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
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0 text-sm-left">Ljudski resursi</h3>
                            <div class="text-sm-left">Pregled informacija o uposlenicima ...</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="orange">Prikaži</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>

