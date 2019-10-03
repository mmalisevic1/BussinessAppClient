<template>
  <!-- <v-navigation-drawer
      fixed
      clipped
      app
      v-model="drawer"
    >
      <v-list dense>
        <template v-for="(item, ndx) in menuItems">
          <v-list-tile :to="item.to" v-bind:key="ndx">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue darken-3"
      dark
      app
      clipped-left
      fixed
    >
      <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? '' : 'min-width: 72px'" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-xs-only">Hiperion II</span>
      </v-toolbar-title>
    </v-toolbar> -->

    <!-- @click="menuAction(ndx)" -->
    <v-content>
      <v-container fluid>
        <v-layout>
            <!-- <stanje-elektrane v-show="activeComponent == 1"></stanje-elektrane>
            <proizvodnja v-show="activeComponent == 2"></proizvodnja>
            <vrijeme v-show="activeComponent == 3"></vrijeme>
            <transactions v-show="activeComponent == 4"></transactions>
            <edit-transaction v-show="activeComponent == 4"></edit-transaction> -->
            <v-fade-transition mode="out-in">
              <router-view />
            </v-fade-transition>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
import Transactions from './Transactions.vue'
import EditTransaction from './EditTransactions.vue'
import StanjeElektrane from './StanjeElektrane.vue'
import Proizvodnja from './Proizvodnja.vue'
import Vrijeme from './Vrijeme.vue'

export default {
  name: 'Home',
  components: {
    Transactions,
    EditTransaction,
    StanjeElektrane,
    Proizvodnja,
    Vrijeme
  },
  data: () => ({
    dialog: false,
    drawer: null,
    activeComponent: 1,
    menuItems: [
      { icon: 'home', text: 'Početna stranica', to: '/homenew' },
      { icon: 'build', text: 'Stanje elektrane', to: '/stanje' },
      { icon: 'dashboard', text: 'Proizvodnja elektrane', to: '/proizvodnja' },
      { icon: 'wb_sunny', text: 'Meteorološki uslovi', to: '/vrijeme' }
    ]
  }),
  methods: {
    menuAction: function (ndx) {
      if (ndx == 0) {
        this.$router.push('/homenew');
      }
      this.activeComponent = ndx;
    },
    showProfile: function () {
      console.log('show profile clicked!')
    }
  }
}
</script>
