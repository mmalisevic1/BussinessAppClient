<template>
    <v-container text-xs-center>
        <v-layout
            row
            align-start
            align-content-start
            wrap>
            <v-flex xs2>
                <v-switch v-model="uPogonu" disabled>
                    <template slot="label">
                        <div class="primary--text">
                            Elektrana u pogonu
                        </div>
                    </template>
                </v-switch>
            </v-flex>
        </v-layout>
        <v-layout
            row
            align-center
            justify-space-around
            wrap>
            <v-flex xs4 mb-5>
                <v-alert
                    :value="true"
                    outline
                    type="warning">
                    <v-layout
                        align-center
                        row
                        spacer>
                        <v-flex xs4 sm2 md1>
                            <v-avatar size="36px">
                                <img :src="require('../assets/damir.jpg')" alt="radnik">
                            </v-avatar>
                        </v-flex>
                        <v-flex sm5 md3 pl-2 mr-1 hidden-xs-only>
                            <strong>{{prijavljeni[0].uposlenik}}</strong>
                        </v-flex>
                        <v-flex no-wrap xs5 sm3 ml-1>
                            {{prijavljeni[0].opis}}
                        </v-flex>
                    </v-layout>
                </v-alert>
                <v-alert
                    :value="true"
                    outline
                    type="warning">
                    <v-layout
                        align-center
                        row
                        spacer>
                        <v-flex xs4 sm2 md1>
                            <v-avatar size="36px">
                                <img :src="require('../assets/nura.jpg')" alt="radnik">
                            </v-avatar>
                        </v-flex>
                        <v-flex sm5 md3 pl-2 mr-1 hidden-xs-only>
                            <strong>{{prijavljeni[1].uposlenik}}</strong>
                        </v-flex>
                        <v-flex no-wrap xs5 sm3 ml-1>
                            {{prijavljeni[1].opis}}
                        </v-flex>
                    </v-layout>
                </v-alert>
                <v-alert
                    :value="true"
                    type="error">
                    <v-layout
                        align-center
                        row
                        spacer>
                        <v-flex xs4 sm2 md1>
                            <v-avatar size="36px">
                                <img :src="require('../assets/damir.jpg')" alt="radnik">
                            </v-avatar>
                        </v-flex>
                        <v-flex sm5 md3 mr-1 pl-2 hidden-xs-only>
                            <strong>{{prijavljeni[0].uposlenik}}</strong>
                        </v-flex>
                        <v-flex no-wrap xs5 sm3 ml-1>
                            {{prijavljeni[2].opis}}
                        </v-flex>
                    </v-layout>
                </v-alert>
                <v-alert
                    :value="true"
                    dismissible
                    outline
                    type="success">
                    <v-layout
                        align-center
                        row
                        spacer>
                        <v-flex xs4 sm2 md1>
                            <v-avatar size="36px">
                                <img :src="require('../assets/salko.jpg')" alt="radnik">
                            </v-avatar>
                        </v-flex>
                        <v-flex sm5 md3 mr-1 pl-2 hidden-xs-only>
                            <strong>{{popravljeni[0].uposlenik}}</strong>
                        </v-flex>
                        <v-flex no-wrap xs5 sm3 ml-1>
                            {{popravljeni[0].opis}}
                        </v-flex>
                    </v-layout>
                </v-alert>
                <v-alert
                    :value="true"
                    type="error">
                    <v-layout
                        align-center
                        row
                        spacer>
                        <v-flex xs4 sm2 md1>
                            <v-avatar size="36px">
                                <img :src="require('../assets/mahir.jpg')" alt="radnik">
                            </v-avatar>
                        </v-flex>
                        <v-flex sm5 md3 mr-1 pl-2 hidden-xs-only>
                            <strong>{{prijavljeni[3].uposlenik}}</strong>
                        </v-flex>
                        <v-flex no-wrap xs5 sm3 ml-1>
                            {{prijavljeni[3].opis}}
                        </v-flex>
                    </v-layout>
                </v-alert>
            </v-flex>
            <v-flex xs4 mb-5>
                <apexchart height="350" type="radialBar" ma-0 :options="chartOptionsBar" :series="seriesBar"></apexchart>
            </v-flex>
            <v-flex xs4 mb-5>
                <div>
                    <apexchart type="line" height="350" :options="chartOptionsLine" :series="seriesLine" />
                </div>
            </v-flex>
            <v-flex xs6 pr-1>
                <v-card style="width:100%">
                    <v-card-title>
                        <span class="pr-3 primary--text">
                            Prijavljeni kvarovi i prijetnje od strane sistema
                        </span>
                    </v-card-title>
                    <v-data-table
                        :headers="headers"
                        :items="prijavljeni"
                        :search="search"
                        item-key="_id">
                        <!-- Slot to specify how items are rendered -->
                        <template slot="items" slot-scope="props">
                            <tr>
                            <td class="text-xs-center">{{ props.item.datum }}</td>
                            <td class="text-xs-left">{{ props.item.sektor }}</td>
                            <td class="text-xs-left">{{ props.item.opis }}</td>
                            <td class="text-xs-left">{{ props.item.uposlenik }}</td>
                            </tr>
                        </template>

                        <template slot="pageText" slot-scope="{ pageStart, pageStop, itemsLength }">
                            Od {{ pageStart }} do {{ pageStop }} od ukupno {{ itemsLength }}
                        </template>
                    </v-data-table>
                </v-card>
            </v-flex>
            <v-flex xs6 pl-1>
                <v-card style="width:100%">
                    <v-card-title>
                        <span class="pr-3 primary--text">
                            Popravljeni kvarovi i smetnje
                        </span>
                    </v-card-title>
                    <v-data-table
                        :headers="headers"
                        :items="popravljeni"
                        :search="search"
                        item-key="_id">
                        <!-- Slot to specify how items are rendered -->
                        <template slot="items" slot-scope="props">
                            <tr>
                            <td class="text-xs-center">{{ props.item.datum }}</td>
                            <td class="text-xs-left">{{ props.item.sektor }}</td>
                            <td class="text-xs-left">{{ props.item.opis }}</td>
                            <td class="text-xs-left">{{ props.item.uposlenik }}</td>
                            </tr>
                        </template>

                        <template slot="expand" slot-scope="props">
                            <v-card flat class="pl-5">
                            <v-card-text class="text-xs-left">
                                <v-text-field label="Note" v-model="props.item.notes"></v-text-field>
                            </v-card-text>
                            </v-card>
                        </template>

                        <template slot="pageText" slot-scope="{ pageStart, pageStop, itemsLength }">
                            From {{ pageStart }} to {{ pageStop }} out of {{ itemsLength }}
                        </template>
                    </v-data-table>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
import Vue from 'vue';
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

export default {
    name: 'StanjeElektrane',
    data: () => ({
        uPogonu: true,
        seriesBar: [70],
        chartOptionsBar: {
            labels: ['Popravljeni kvarovi']
        },
        seriesLine: [{
          name: 'Broj kvarova',
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5]
        }],
        chartOptionsLine: {
          chart: {
            type: 'line',
            shadow: {
              enabled: false,
              color: '#bbb',
              top: 3,
              left: 2,
              blur: 3,
              opacity: 1
            },
          },
          stroke: {
            width: 7,
            curve: 'smooth'
          },

          xaxis: {
            type: 'datetime',
            categories: ['2018/02/01', '2018/03/01', '2018/04/01', '2018/05/01', '2018/06/01', '2018/07/01', '2018/08/01',
              '2018/09/01', '2018/10/01', '2018/11/01', '2018/12/01', '2019/01/01'
            ],
          },
          title: {
            text: 'Pregled kvarova u godini',
            align: 'left',
            style: {
              fontSize: "16px",
              color: '#666'
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              gradientToColors: ['#FDD835'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100]
            },
          },
          markers: {
            size: 4,
            opacity: 0.9,
            colors: ["#FFA41B"],
            strokeColor: "#fff",
            strokeWidth: 2,
             
            hover: {
              size: 7,
            }
          },
          yaxis: {
            min: 0,
            max: 40,
            title: {
              text: 'Kvarovi',
            },
          }
        },
        headers: [
            { text: 'Datum', align: 'center', sortable: false, value: 'date' },
            { text: 'Sektor', align: 'center', sortable: false, value: 'type' },
            { text: 'Vrsta kvara', align: 'center', sortable: false, value: 'description' },
            { text: 'Inženjer / tehničar', align: 'center', sortable: false, value: 'paymentAmt' }
        ],
        prijavljeni: [
            {
            '_id': '5a8245999f63531c3ce288ba',
            'userId': '5a777f0a75f64a1698221d98',
            'datum': '20.12.2018',
            'sektor': 'Paneli (34,46)',
            'opis': 'Moguće napuknuće panela',
            'uposlenik': 'Damir Hasanović'
            },
            {
            '_id': '5a8245999f63531c3ce288bb',
            'userId': '5a777f0a75f64a1698221d97',
            'datum': '20.12.2018',
            'sektor': 'Panel 24 - invertor',
            'opis': 'Moguć kratak spoj na vodu',
            'uposlenik': 'Nura Tanković-Imamović'
            },
            {
            '_id': '5a8245999f63531c3ce288bc',
            'userId': '5a777f0a75f64a1698221d98',
            'datum': '19.12.2018',
            'sektor': 'Panel 58',
            'opis': 'Kvar na panelu',
            'uposlenik': 'Damir Hasanović'
            },
            {
            '_id': '5a8245999f63531c3ce288bd',
            'userId': '5a777f0a75f64a1698221d96',
            'datum': '18.12.2018',
            'sektor': '(20, 18)',
            'opis': 'Kvar u invertoru',
            'uposlenik': 'Mahir Haskić'
            },
            {
            '_id': '5a8245999f63531c3ce288be',
            'userId': '5a777f0a75f64a1698221d95',
            'datum': '16.12.2018',
            'sektor': 'Mreža',
            'opis': 'Kvar na vodu, invertor',
            'uposlenik': 'Kenan Ibrahimović'
            }
        ],
        popravljeni: [
            {
            '_id': '5a8245999f63531c3ce288ba',
            'userId': '5a777f0a75f64a1698221d94',
            'datum': '19.12.2018',
            'sektor': 'Meteorološka stanica',
            'opis': 'Kvar na meteorološkoj stanici',
            'uposlenik': 'Salko Bečić'
            }
        ]
    })
}
</script>
<style scoped>

</style>
