<template>
    <v-container>
       



        <h1 class="text-center">Cobros pendientes</h1>
        <v-row>
            <v-col cols="4">
                <v-select v-model="intervalSelected" :items="intervals" item-title="name" return-object item-value="id"
                    density="comfortable" label="Proximos cobros en"></v-select>

            </v-col>
        </v-row>
    </v-container>
    <v-container>
        <v-data-table-virtual :headers="headers" :items="paymentsData" height="400" item-value="name">
            <template v-slot:item.accions="{ item }">
                <v-btn density="comfortable" icon base-color="#66904E" @click="$router.push({ name: 'paymentCreate' })">
                    <v-icon color="white">
                        mdi-currency-usd
                    </v-icon>
                    <v-tooltip activator="parent" location="top">Cobrar</v-tooltip>
                </v-btn>
            </template>
        </v-data-table-virtual>
    </v-container>
</template>

<script setup>
import { ref } from 'vue'

const headers = ref([
    {
        title: '#',
        align: 'center',
        key: 'autoIncrement'
    },
    {
        title: 'Plan',
        align: 'center',
        key: 'plan'
    },
    {
        title: 'Costo',
        align: 'center',
        key: 'cost'
    },
    {
        title: 'Vendido por',
        align: 'center',
        key: 'soldBy'
    },
    {
        title: 'Cobrado por',
        align: 'center',
        key: 'chargedBy'
    },
    {
        title: 'Fecha de venta',
        align: 'center',
        key: 'dateSale'
    },
    {
        title: 'Seguiente cobro',
        align: 'center',
        key: 'dateNextPayment'
    },
    {
        title: 'Ultimo cobro',
        align: 'center',
        key: 'dateCharged'
    },
    {
        title: 'Acciones',
        align: 'center',
        key: 'accions'
    }
])
const paymentsData = ref([
    {
        autoIncrement: 1,
        plan: 'ATT 50MB',
        cost: '$60',
        soldBy: 'Maximo merido meridio',
        chargedBy: 'Marco Aurelio',
        dateSale: ' 2024-06-21 08:00',
        dateNextPayment: ' 2024-07-21 08:00',
        dateCharged: ' 2024-06-21 11:00'

    },
    {
        autoIncrement: 2,
        plan: 'ATT 50MB',
        cost: '$60',
        soldBy: 'Maximo merido meridio',
        chargedBy: 'Marco Aurelio',
        dateSale: ' 2024-06-21 08:00',
        dateNextPayment: '2024-07-21 08:00',
        dateCharged: ' 2024-06-21 11:00'

    },
],)
const intervals = ref([
    {
        id: 1,
        name: '7 dias'
    },
    {
        id: 2,
        name: '15 dias'
    },
    {
        id: 3,
        name: '1 mes'
    },

])
const intervalSelected = ref('')
const admins = ref([
    ['Management', 'mdi-account-multiple-outline'],
    ['Settings', 'mdi-cog-outline'],
])
const cruds = ref([
    ['Create', 'mdi-plus-outline'],
    ['Read', 'mdi-file-outline'],
    ['Update', 'mdi-update'],
    ['Delete', 'mdi-delete'],
])

</script>