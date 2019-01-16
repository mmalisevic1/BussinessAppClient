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
    data: () => ({
        headers: [
            { text: 'Datum', align: 'center', sortable: false, value: 'date' },
            { text: 'Temperatura', align: 'center', sortable: false, value: 'type' },
            { text: 'Osvijetljenost', align: 'center', sortable: false, value: 'description' },
            { text: 'Panel', align: 'center', sortable: false, value: 'paymentAmt' }
        ],
        vrijeme: [
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
        ]
    })
}
</script>
<style scoped>

</style>
