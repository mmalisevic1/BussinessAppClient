<template>
    <v-container text-xs-center>
        <v-layout
            row
            wrap
            align-center
            justify-space-between
            fill-height>
            <v-flex xs4>
                <v-card
                    class="mt-3 mx-1"
                    max-width="400"
                >
                    <v-sheet
                        class="v-sheet--offset mx-auto"
                        color="info"
                        elevation="12"
                        max-width="calc(100% - 32px)"
                        >
                        <div max-height="25%">
                            <apexchart type="line" height="350" :options="chartOptionsLine" :series="seriesLine" />
                        </div>
                        
                    </v-sheet>

                    <v-card-text class="pt-0">
                        <div class="title font-weight-light mb-2">Mjerenje napona</div>
                        <div class="subheading font-weight-light grey--text">Mjerna jedinica: [kV]</div>
                        <v-divider class="my-2"></v-divider>
                        <v-icon
                            class="mr-2"
                            small
                        >
                            history
                        </v-icon>
                        <span class="caption grey--text font-weight-light">posljednje mjerenje prije 26 minuta</span>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <v-card
                    class="mt-3 mx-1"
                    max-width="400"
                >
                    <v-sheet
                        class="v-sheet--offset mx-auto"
                        color="red"
                        elevation="12"
                        max-width="calc(100% - 32px)"
                        >
                        <div max-height="25%">
                            <apexchart type="line" height="350" :options="chartOptionsLine1" :series="seriesLine1" />
                        </div>
                        
                    </v-sheet>

                    <v-card-text class="pt-0">
                        <div class="title font-weight-light mb-2">Mjerenje struje</div>
                        <div class="subheading font-weight-light grey--text">Mjerna jedinica: [A]</div>
                        <v-divider class="my-2"></v-divider>
                        <v-icon
                            class="mr-2"
                            small
                        >
                            history
                        </v-icon>
                        <span class="caption grey--text font-weight-light">posljednje mjerenje prije 26 minuta</span>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <v-card
                    class="mt-3 mx-1"
                    max-width="400"
                >
                    <v-sheet
                        class="v-sheet--offset mx-auto"
                        color="green"
                        elevation="12"
                        max-width="calc(100% - 32px)"
                        >
                        <div max-height="25%">
                            <apexchart type="line" height="350" :options="chartOptionsLine2" :series="seriesLine2" />
                        </div>
                        
                    </v-sheet>

                    <v-card-text class="pt-0">
                        <div class="title font-weight-light mb-2">Mjerenje frekvencije</div>
                        <div class="subheading font-weight-light grey--text">Mjerna jedinica: [Hz]</div>
                        <v-divider class="my-2"></v-divider>
                        <v-icon
                            class="mr-2"
                            small
                        >
                            history
                        </v-icon>
                        <span class="caption grey--text font-weight-light">posljednje mjerenje prije 26 minuta</span>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 mt-5>
                <v-card style="width:100%">
                    <v-card-title>
                        <span class="pr-3 primary--text">
                            Podaci o proizvodnji
                        </span>
                    </v-card-title>
                    <v-data-table
                        :headers="headers"
                        :items="proizvodnja"
                        :search="search"
                        item-key="_id">
                        <!-- Slot to specify how items are rendered -->
                        <template slot="items" slot-scope="props">
                            <tr>
                            <td class="text-xs-center">{{ props.item.datum }}</td>
                            <td class="text-xs-left">{{ props.item.prosjek }}</td>
                            <td class="text-xs-left">{{ props.item.dobit }}</td>
                            </tr>
                        </template>

                        <template slot="pageText" slot-scope="{ pageStart, pageStop, itemsLength }">
                            Od {{ pageStart }} do {{ pageStop }} od ukupno {{ itemsLength }}
                        </template>
                    </v-data-table>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        seriesLine: [{
        data: [0, 10, -10, 10, -10, 10]
    }],
    seriesLine1: [{
        data: [0, 50, -50, 25, -25, 50]
    }],
    seriesLine2: [{
        data: [50, 50, 50, 50, 50, 50]
    }],
    chartOptionsLine: {
        chart: {
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            lineCap: 'butt',
            colors: '#ffffff'
        },
        tooltip: {
            enabled: false
        },
        markers: {
            size: 0
        },
        xaxis: {
            labels: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: true
            }
        }
    },
    chartOptionsLine1: {
        chart: {
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            lineCap: 'butt',
            colors: '#ffffff'
        },
        tooltip: {
            enabled: false
        },
        markers: {
            size: 0
        },
        xaxis: {
            labels: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: true
            }
        }
    },
    chartOptionsLine2: {
        chart: {
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            lineCap: 'butt',
            colors: '#ffffff'
        },
        tooltip: {
            enabled: false
        },
        markers: {
            size: 0
        },
        xaxis: {
            labels: {
                show: false
            }
        },
        yaxis: {
            min: 0,
            max: 150,
            labels: {
                show: true
            }
        }
    },
    headers: [
        { text: 'Datum', align: 'center', sortable: false, value: 'date' },
        { text: 'Prosječna prizvodnja', align: 'left', sortable: false, value: 'description' },
        { text: 'Ostvarena dobit', align: 'left', sortable: false, value: 'description' }
    ],
    proizvodnja: [
        {
            '_id': '5a8245999f63531c3ce288ba',
            'datum': '20.12.2018',
            'prosjek': '52 kWh',
            'dobit': '780 KM'
        },
        {
            '_id': '5a8245999f63531c3ce288bb',
            'datum': '21.12.2018',
            'prosjek': '59 kWh',
            'dobit': '804 KM'
        },
        {
            '_id': '5a8245999f63531c3ce288bc',
            'datum': '22.12.2018',
            'prosjek': '41 kWh',
            'dobit': '699 KM'
        },
        {
            '_id': '5a8245999f63531c3ce288bd',
            'datum': '23.12.2018',
            'prosjek': '48 kWh',
            'dobit': '752 KM'
        }
    ]
    })
}
</script>
<style>
    .v-sheet--offset {
        top: -24px;
        position: relative;
    }
</style>


