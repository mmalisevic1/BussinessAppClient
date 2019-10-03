<template>
<v-container fluid>
  <v-layout>
      <div style="width: 100%;">
      <v-card style="width: 100%;">
    <v-card-title>
      <span class="pr-3 primary--text">
        Uposlenici solarne elektrane Hiperion II
      </span>
      <!-- <v-btn flat icon class="pr-2" @click="gotoMonth(-1)">
        <v-icon>keyboard_arrow_left</v-icon>
      </v-btn>
      <v-btn flat icon class="pr-2" @click="gotoCurrentMonth">
        <v-icon>today</v-icon>
      </v-btn>
      <v-btn flat icon @click="gotoMonth(1)">
        <v-icon>keyboard_arrow_right</v-icon>
      </v-btn> -->
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="Pretraga"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
    </v-card-title>
    <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        item-key="_id"
      >
      <!-- Slot to specify how items are rendered -->
      <template slot="items" slot-scope="props">
        <tr>
          <td>
            <v-edit-dialog
              lazy
            > {{ props.item.transactionDate }}
              <v-text-field
                slot="input"
                label="Edit"
                v-model="props.item.transactionDate"
                single-line
              ></v-text-field>
            </v-edit-dialog>
          </td>
          <td class="text-xs-center">{{ props.item.transactionType }}</td>
          <td class="text-xs-center" @click="props.expanded = !props.expanded">
            {{ props.item.description }}
          </td>
          <td class="text-xs-center">{{ props.item.charge }}</td>
          <!-- <td class="text-xs-right">{{ props.item.deposit }}</td>
          <td class="text-xs-right">{{ props.item.balance }}</td> -->
          <td class="justify-center">
            <v-icon small class="mr-2" @click="editItem(props.item)">
              edit </v-icon>
            <v-icon small @click="deleteItem(props.item)">
              delete </v-icon>
          </td>
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
  </div>
  <edit-transactions @updateEmployee="updateEmployee" @addEmployee="addEmployee" ref="editTransactionComp" :editedItem="this.itemToEdit"></edit-transactions>
  </v-layout>
</v-container>


</template>

<script>
import EditTransactions from './EditTransactions.vue';
export default {
  name: 'transactions',
  components: {
    EditTransactions
  },
  beforeCreate() {
        Vue.prototype.$appName = this.$appName;
  },
  data () {
    return {
      itemToEdit: {},
      months: [
        { name: 'Zero', abrev: 'ZZZ', index: 0 },
        { name: 'January', abrev: 'Jan', index: 1 },
        { name: 'February', abrev: 'Feb', index: 2 },
        { name: 'March', abrev: 'Mar', index: 3 },
        { name: 'April', abrev: 'Apr', index: 4 },
        { name: 'May', abrev: 'May', index: 5 },
        { name: 'June', abrev: 'Jun', index: 6 },
        { name: 'July', abrev: 'Jul', index: 7 },
        { name: 'August', abrev: 'Aug', index: 8 },
        { name: 'September', abrev: 'Sep', index: 9 },
        { name: 'October', abrev: 'October', index: 10 },
        { name: 'November', abrev: 'Nov', index: 11 },
        { name: 'December', abrev: 'Dec', index: 12 }
      ],
      currentMonth: 5,
      currentYear: 2018,
      balanceCharges: 0,
      balanceDeposits: 0,
      max25chars: (v) => v.length <= 25 || 'Input too long!',
      pagination: {},
      headers: [
        { text: 'Ime i prezime', align: 'center', sortable: true, value: 'transactionDate' },
        { text: 'Pozicija', align: 'center', sortable: false, value: 'transactionType' },
        { text: 'Broj telefona', align: 'center', sortable: false, value: 'description' },
        { text: 'Status', align: 'center', sortable: false, value: 'charge' },
        { text: 'Akcije', align: 'center', value: 'name', sortable: false }
      ],
      search: '',
      items: [
        {
          '_id': '1',
          'userId': '5a777f0a75f64a1698221d98',
          'transactionDate': 'Damir Hasanović',
          'transactionType': 'Inženjer',
          'description': '061/111-111',
          'charge': 'Aktivan'
        },
        {
          '_id': '2',
          'userId': '5a777f0a75f64a1698221d98',
          'transactionDate': 'Nura Tanković-Imamović',
          'transactionType': 'Inženjer',
          'description': '062/222-222',
          'charge': 'Aktivan'
        },
        {
          '_id': '3',
          'userId': '5a777f0a75f64a1698221d98',
          'transactionDate': 'Mahir Haskić',
          'transactionType': 'Tehničar',
          'description': '063/000-000',
          'charge': 'Aktivan'
        },
        {
          '_id': '4',
          'userId': '5a777f0a75f64a1698221d98',
          'transactionDate': 'Kenan Ibrahimović',
          'transactionType': 'Tehničar',
          'description': '064/333-333',
          'charge': 'Aktivan'
        },
        {
          '_id': '5',
          'userId': '5a777f0a75f64a1698221d98',
          'transactionDate': 'Salko Bečić',
          'transactionType': 'Tehničar',
          'description': '061/123-456',
          'charge': 'Aktivan'
        },
        {
          '_id': '6',
          'userId': '5a777f0a75f64a1698221d98',
          'transactionDate': 'Sanja Bešlija',
          'transactionType': 'Rukovodilac sektora za opće poslove',
          'description': '062/567-452',
          'charge': 'Bolovanje'
        },
        {
          '_id': '7',
          'userId': '5a777f0a75f64a1698221d98',
          'transactionDate': 'Tahir Omerović',
          'transactionType': 'Tehnički sekretar',
          'description': '061/774-524',
          'charge': 'Godišnji odmor'
        }
      ]
    }
  },
  methods: {
    getTransactionsByMonth: function () {

    },
    getPreviousMonthsBalances: function () {

    },
    mapTransaction: function (tx) {
      const me = this
      const transDate = new Date(tx.transactionDate)
      let transaction = {
        transactionDate: me.months[transDate.getUTCMonth() + 1].abrev + '-' + transDate.getUTCDate(),
        transactionType: tx.transactionType,
        description: tx.description,
        charge: me.moneyFormatter(tx.charge),
        deposit: me.moneyFormatter(tx.deposit),
        balance: me.moneyFormatter(me.calcRunningBalance(tx))
      }
      return transaction
    },
    moneyFormatter: function (amount) {
      let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
        // the default value for minimumFractionDigits depends on the currency
        // and is usually already 2
      })
      return formatter.format(amount)
    },
    calcRunningBalance: function (tx) {
      // any new charges?
      if (tx && tx.charge > 0) { this.balanceCharges += tx.charge } else if (tx && tx.deposit > 0) {
        this.balanceDeposits += tx.deposit
      }
      return this.balanceCharges - this.balanceDeposits
    },
    gotoMonth: function (increment) {
      let newMonth = this.currentMonth += increment
      // Sanity checks now...
      if (newMonth > 12) {
        newMonth = 1
        this.currentYear += 1
      } else if (newMonth < 1) {
        newMonth = 12
        this.currentYear -= 1
      }

      this.currentMonth = newMonth
      // Load selected month transaction data now...
      this.getPreviousMonthsBalances()
      this.getTransactionsByMonth()
    },
    gotoCurrentMonth: function () {
      let dt = new Date(Date.now())
      this.currentMonth = dt.getUTCMonth() + 1
      this.currentYear = dt.getUTCFullYear()

      // Load selected month transaction data now...
      this.getPreviousMonthsBalances()
      this.getTransactionsByMonth()
    },
    editItem (item) {
        //this.editedIndex = this.items.indexOf(item)
        this.itemToEdit = Object.assign({}, item)
        this.$refs.editTransactionComp._data.editedItem = Object.assign({}, item);
        console.log(this.$refs.editTransactionComp._data.editedItem);
        this.$refs.editTransactionComp._data.dialog = true;
    },
    updateEmployee (item) {
      var editedIndex = this.items.findIndex(f => f._id == item._id)
      var editedItemFinal = Object.assign({}, item)
      if (editedIndex > -1) {
        Object.assign(this.items[editedIndex], editedItemFinal)
      }
    },
    addEmployee (item) {
      var index = Math.max.apply(Math, this.items.map(m => m._id)) + 1;
      item._id = `${index}`;
      this.items.push(item);
    },
    deleteItem (item) {
      const index = this.items.indexOf(item)
      confirm('Da li ste sigurni da želite obrisati ovog uposlenika?') && this.items.splice(index, 1)
    }
  },
  mounted: async function () {
    // const me = this
    await this.getPreviousMonthsBalances()
    await console.log(this.balanceCharges)
    await console.log(this.balanceDeposits)

    await this.getTransactionsByMonth()
  }
}
</script>

<style scoped>
    .transactions {
        width: 100%;
    }
</style>
