<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <h2>Prijavite se u sistem Hiperion II</h2>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 sm6 offset-sm3>
                <v-text-field label="E-mail" v-model="email" :rules="emailRules" required>
                </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
                <v-text-field label="Password" v-model="password" :rules="passwordRules" :type="'password'" required>
                </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
                <v-btn @click="cancel">Cancel</v-btn>
                <v-btn @click="login" color="primary">Login</v-btn>
            </v-flex>
        </v-layout>
        <v-snackbar :timeout="6000" :top="true" v-model="showAlert">
            {{ message }}
        </v-snackbar>
    </v-container>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'login',
    data () {
        return {
            showAlert: false,
            message: '',
            email: '',
            emailRules: [
                v => !!v || 'Email je obavezan',
                v => /.+@.+/.test(v) || 'E-mail mora biti validan'
            ],
            password: '',
            passwordRules: [
                v => !!v || 'Password je obavezan'
            ]
        }
    },
    methods: {
        login: function () {
            const vm = this
            if(vm.password === 'test111') {
                if (vm.email === 'maid.susa@gmail.com') {
                    Vue.prototype.$appName = 'false';
                    this.$router.push({ path: '/homenew' })
                } else {
                    Vue.prototype.$appName = 'true';
                    this.$router.push({ path: '/homenew' })
                }
            }
            else {
                vm.showAlert = true
                vm.message = 'Email ili Password nisu validni!'
            }
        },
        cancel: function () {
            console.log('Korisnik je odbio da se prijavi!')
        }
    }
}
</script>

<style>

</style>
