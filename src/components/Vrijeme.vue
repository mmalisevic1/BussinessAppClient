<template>
    <v-container text-xs-center>
        <v-layout
            row
            align-start
            align-content-start
            wrap>
            <v-flex xs12>
                <weather 
                    api-key="1e7dec8773c32de5d4cbac1705fabb32"
                    title="Vrijeme"
                    latitude="43.993900"
                    longitude="18.170679"
                    language="bs"
                    bar-color="#82B1FF"
                    text-color="#1976D2"
                    units="si">
                </weather>
            </v-flex>
            <v-flex xs12 mb-5>
                <v-date-picker
                    v-model="date"
                    :allowed-dates="allowedDates"
                    @input="odabraniDatum"
                    full-width
                    landscape
                    class="mt-3">
                </v-date-picker>
            </v-flex>
            <v-flex xs12>
                <v-card style="width:100%">
                    <v-card-title>
                        <span class="pr-3 primary--text">
                            Vremenske karakteristike za odabrani datum
                        </span>
                    </v-card-title>
                    <v-data-table
                        :headers="headers"
                        :items="vrijeme"
                        :search="search"
                        item-key="_id">
                        <!-- Slot to specify how items are rendered -->
                        <template slot="items" slot-scope="props">
                            <tr>
                            <td class="text-xs-center">{{ props.item.datum }}</td>
                            <td class="text-xs-left">{{ props.item.temperatura }}</td>
                            <td class="text-xs-left">{{ props.item.osvijetljenost }}</td>
                            <td class="text-xs-left">{{ props.item.panel }}</td>
                            </tr>
                        </template>

                        <template slot="pageText" slot-scope="{ pageStart, pageStop }">
                            Od {{ pageStart }} do {{ pageStop }} od ukupno 125
                        </template>
                    </v-data-table>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    <!-- <h3>Proba</h3> 43.993900, 18.170679 -->
</template>
<script>
import VueWeatherWidget from 'vue-weather-widget';
import 'vue-weather-widget/dist/css/vue-weather-widget.css';

export default {
    components: {
        'weather': VueWeatherWidget
    },
    name: 'Vrijeme',
    beforeCreate() {
        Vue.prototype.$appName = this.$appName;
    },
    data: () => ({
        headers: [
            { text: 'Datum', align: 'center', sortable: false, value: 'date' },
            { text: 'Temperatura', align: 'center', sortable: false, value: 'type' },
            { text: 'Osvijetljenost', align: 'center', sortable: false, value: 'description' },
            { text: 'Panel', align: 'center', sortable: false, value: 'paymentAmt' }
        ],
        switch: true,
        date: new Date().toISOString().substr(0, 10),
        vrijeme: [],
        vrijemeProljece1: [
            {
            '_id': '5a8245999f63531c3ce288ba',
            'datum': '20.12.2018',
            'temperatura': '15°C',
            'osvijetljenost': '68%',
            'panel': 'Panel 1'
            },
            {
            '_id': '5a8245999f63531c3ce288bb',
            'datum': '20.12.2018',
            'temperatura': '20°C',
            'osvijetljenost': '55%',
            'panel': 'Panel 2'
            },
            {
            '_id': '5a8245999f63531c3ce288bc',
            'datum': '20.12.2018',
            'temperatura': '10°C',
            'osvijetljenost': '50%',
            'panel': 'Panel 3'
            },
            {
            '_id': '5a8245999f63531c3ce288bd',
            'datum': '20.12.2018',
            'temperatura': '20°C',
            'osvijetljenost': '52%',
            'panel': 'Panel 4'
            },
            {
            '_id': '5a8245999f63531c3ce288be',
            'datum': '20.12.2018',
            'temperatura': '18°C',
            'osvijetljenost': '54%',
            'panel': 'Panel 5'
            }
        ],
        vrijemeProljece2: [
            {
            '_id': '5a8245999f63531c3ce288ba',
            'datum': '20.12.2018',
            'temperatura': '16°C',
            'osvijetljenost': '67%',
            'panel': 'Panel 1'
            },
            {
            '_id': '5a8245999f63531c3ce288bb',
            'datum': '20.12.2018',
            'temperatura': '21°C',
            'osvijetljenost': '54%',
            'panel': 'Panel 2'
            },
            {
            '_id': '5a8245999f63531c3ce288bc',
            'datum': '20.12.2018',
            'temperatura': '17°C',
            'osvijetljenost': '49%',
            'panel': 'Panel 3'
            },
            {
            '_id': '5a8245999f63531c3ce288bd',
            'datum': '20.12.2018',
            'temperatura': '20°C',
            'osvijetljenost': '51%',
            'panel': 'Panel 4'
            },
            {
            '_id': '5a8245999f63531c3ce288be',
            'datum': '20.12.2018',
            'temperatura': '19°C',
            'osvijetljenost': '53%',
            'panel': 'Panel 5'
            }
        ],
        vrijemeLjeto1: [
            {
            '_id': '5a8245999f63531c3ce288ba',
            'datum': '20.12.2018',
            'temperatura': '25°C',
            'osvijetljenost': '78%',
            'panel': 'Panel 1'
            },
            {
            '_id': '5a8245999f63531c3ce288bb',
            'datum': '20.12.2018',
            'temperatura': '26°C',
            'osvijetljenost': '65%',
            'panel': 'Panel 2'
            },
            {
            '_id': '5a8245999f63531c3ce288bc',
            'datum': '20.12.2018',
            'temperatura': '30°C',
            'osvijetljenost': '90%',
            'panel': 'Panel 3'
            },
            {
            '_id': '5a8245999f63531c3ce288bd',
            'datum': '20.12.2018',
            'temperatura': '26°C',
            'osvijetljenost': '72%',
            'panel': 'Panel 4'
            },
            {
            '_id': '5a8245999f63531c3ce288be',
            'datum': '20.12.2018',
            'temperatura': '28°C',
            'osvijetljenost': '84%',
            'panel': 'Panel 5'
            }
        ],
        vrijemeLjeto2: [
            {
            '_id': '5a8245999f63531c3ce288ba',
            'datum': '20.12.2018',
            'temperatura': '26°C',
            'osvijetljenost': '88%',
            'panel': 'Panel 1'
            },
            {
            '_id': '5a8245999f63531c3ce288bb',
            'datum': '20.12.2018',
            'temperatura': '31°C',
            'osvijetljenost': '95%',
            'panel': 'Panel 2'
            },
            {
            '_id': '5a8245999f63531c3ce288bc',
            'datum': '20.12.2018',
            'temperatura': '24°C',
            'osvijetljenost': '70%',
            'panel': 'Panel 3'
            },
            {
            '_id': '5a8245999f63531c3ce288bd',
            'datum': '20.12.2018',
            'temperatura': '27°C',
            'osvijetljenost': '92%',
            'panel': 'Panel 4'
            },
            {
            '_id': '5a8245999f63531c3ce288be',
            'datum': '20.12.2018',
            'temperatura': '29°C',
            'osvijetljenost': '64%',
            'panel': 'Panel 5'
            }
        ],
        vrijeme1: [
            {
            '_id': '5a8245999f63531c3ce288ba',
            'datum': '20.12.2018',
            'temperatura': '5°C',
            'osvijetljenost': '68%',
            'panel': 'Panel 1'
            },
            {
            '_id': '5a8245999f63531c3ce288bb',
            'datum': '20.12.2018',
            'temperatura': '2°C',
            'osvijetljenost': '55%',
            'panel': 'Panel 2'
            },
            {
            '_id': '5a8245999f63531c3ce288bc',
            'datum': '20.12.2018',
            'temperatura': '-1°C',
            'osvijetljenost': '50%',
            'panel': 'Panel 3'
            },
            {
            '_id': '5a8245999f63531c3ce288bd',
            'datum': '20.12.2018',
            'temperatura': '0°C',
            'osvijetljenost': '52%',
            'panel': 'Panel 4'
            },
            {
            '_id': '5a8245999f63531c3ce288be',
            'datum': '20.12.2018',
            'temperatura': '1°C',
            'osvijetljenost': '54%',
            'panel': 'Panel 5'
            }
        ],
        vrijeme2: [
            {
            '_id': '5a8245999f63531c3ce288ba',
            'datum': '20.12.2018',
            'temperatura': '4°C',
            'osvijetljenost': '67%',
            'panel': 'Panel 1'
            },
            {
            '_id': '5a8245999f63531c3ce288bb',
            'datum': '20.12.2018',
            'temperatura': '1°C',
            'osvijetljenost': '54%',
            'panel': 'Panel 2'
            },
            {
            '_id': '5a8245999f63531c3ce288bc',
            'datum': '20.12.2018',
            'temperatura': '-2°C',
            'osvijetljenost': '49%',
            'panel': 'Panel 3'
            },
            {
            '_id': '5a8245999f63531c3ce288bd',
            'datum': '20.12.2018',
            'temperatura': '-1°C',
            'osvijetljenost': '51%',
            'panel': 'Panel 4'
            },
            {
            '_id': '5a8245999f63531c3ce288be',
            'datum': '20.12.2018',
            'temperatura': '0°C',
            'osvijetljenost': '53%',
            'panel': 'Panel 5'
            }
        ]
    }),
    methods: {
        allowedDates: function(val) {
            var d1 = new Date();
            var d2 = new Date(val);
            return d2 <= d1;
        },
        odabraniDatum: function() {
            var season = '';
            switch(this.date.substring(5, 7)) {
                case '12':
                case '01':
                case '02':
                    season = 'winter';
                break;
                case '03':
                case '04':
                case '05':
                    season = 'spring';
                break;
                case '06':
                case '07':
                case '08':
                    season = 'summer';
                break;
                case '09':
                case '10': 
                case '11':
                    season = 'fall';
                break;
            }
            if (season === 'winter') {
                if (this.switch === true) {
                    this.vrijeme = this.vrijeme1;
                } else {
                    this.vrijeme = this.vrijeme2;
                }
                this.switch = !this.switch;
            }
            if (season === 'spring' || season === 'fall') {
                if (this.switch === true) {
                    this.vrijeme = this.vrijemeProljece1;
                } else {
                    this.vrijeme = this.vrijemeProljece2;
                }
                this.switch = !this.switch;
            }
            if (season === 'summer') {
                if (this.switch === true) {
                    this.vrijeme = this.vrijemeLjeto1;
                } else {
                    this.vrijeme = this.vrijemeLjeto2;
                }
                this.switch = !this.switch;
            }
            for (let index = 0; index < this.vrijeme.length; index++) {
                this.vrijeme[index].datum = this.date;
            }
        }
    }
}
</script>
<style scoped>

</style>
