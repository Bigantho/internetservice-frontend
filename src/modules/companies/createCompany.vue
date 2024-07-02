<template>
    <h1 class="text-center">Creacion de compañias</h1>
    <v-container>
        <v-row>
            <v-col>
                <v-text-field v-model="nameCompany" :counter="10" label="Nombre" hide-details required></v-text-field>
            </v-col>
            <v-col>
                <v-btn prepend-icon="mdi-plus" color="green" variant="outlined">
                    Agregar
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
    <v-container>
        <v-data-table-virtual :headers="headers" :items="items" height="400" item-value="name">
            <template v-slot:item.accions="{ item }">
                <v-btn density="comfortable" icon base-color="#db1f43" @click="$router.push({name: ''})" >
                            <v-icon color="white" >
                                mdi-delete-outline                            
                            </v-icon>
                        <v-tooltip
                                activator="parent" location="top">Eliminar</v-tooltip></v-btn>
            </template>
        </v-data-table-virtual>
    </v-container>
</template>

<script setup>
import { ref } from 'vue'

const nameCompany = ref('')
const companiesData = ref([

])
const headers = ref([
    { title: '#', align: 'center', key: 'autoIncrement' },
    { title: 'Nombre', align: '', key: 'name' },
    { title: 'Fecha de creacion', align: '', key: 'dateCreated' },
    { title: 'Acciones', align: '', key: 'accions' }
])
const items = ref([{
    autoIncrement: '1',
    name: 'att',
    dateCreated: '05-05-2023',
    accions: 'delete'

}, {
    autoIncrement: '2',
    name: 'att',
    dateCreated: '05-05-2023',
    accions: 'delete'

},
{
    autoIncrement: '3',
    name: 'att',
    dateCreated: '05-05-2023',
    accions: 'delete'

}
])

</script>