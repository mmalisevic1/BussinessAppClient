<template>
    <div>
        <v-navigation-drawer
      fixed
      clipped
      app
      v-model="drawer"
    >
      <v-list dense>
          <v-list-tile @click="menuAction(ndx)" v-bind:key="ndx">
            <v-list-tile-action>
              <v-icon>{{ pocetna.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ pocetna.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        <template v-for="(item, ndx) in menuItems">
          <!-- <v-layout
            row
            v-if="item.heading"
            align-center
            :key="ndx"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout> -->
          <!-- <v-list-group v-else-if="item.children" v-model="item.model" v-bind:key="ndx" no-action>
            <v-list-tile slot="item" @click="menuAction">
              <v-list-tile-action>
                <v-icon>{{ item.model ? item.icon : item['icon-alt'] }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click="menuAction"
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group> -->
          <!-- @click="menuAction(ndx)" -->
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
      <!-- <v-text-field
        light
        solo
        prepend-icon="search"
        placeholder="Search"
        style="max-width: 500px; min-width: 128px"
      ></v-text-field> -->
      <!-- <header-actions></header-actions> -->
    </v-toolbar>
    </div>
</template>
<script>
export default {
    name: 'Drawer',
    data: () => ({
    dialog: false,
    drawer: null,
    activeComponent: 1,
    pocetna: { icon: 'home', text: 'Početna stranica', to: '/homenew' },
    menuItems: [
      { icon: 'build', text: 'Stanje elektrane', to: '/stanje' },
      { icon: 'dashboard', text: 'Proizvodnja elektrane', to: '/proizvodnja' },
      { icon: 'wb_sunny', text: 'Meteorološki uslovi', to: '/vrijeme' },
      { icon: 'exit_to_app', text: 'Odjava', to: '/login' }
    ]
  }),
  beforeMount() {
    if (this.$appName === 'false') {
      this.menuItems.splice(this.menuItems.length - 2, 0, { icon: 'people', text: 'Ljudski resursi', to: '/transactions' });
    }
  },
  methods: {
    menuAction: function (ndx) {
      this.$router.push('/homenew');
    }
  }
}
</script>
<style scoped>

</style>
