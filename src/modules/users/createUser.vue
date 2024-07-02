<template>
    <h1 class="text-center">Creacion de usuario</h1>
    <v-container>
        <v-row>
            <v-col>
                <v-text-field v-model="name" :counter="10" label="Nombre" hide-details required></v-text-field>
            </v-col>
            <v-col>
                <v-text-field v-model="user" :counter="10" label="Usuario" hide-details required></v-text-field>
            </v-col>
            <v-col>
                <v-text-field v-model="email" :counter="10" label="Correo" hide-details required></v-text-field>
            </v-col>

        </v-row>
        <v-row>
            <v-col>
                <v-text-field v-model="password" :counter="10" label="Contraseña" hide-details required></v-text-field>
            </v-col>
           <v-col>
            <v-select label="Role"
            :items="['Admin', 'Supervisor', 'Super Admin', 'Ventas', 'Customer']"></v-select>
           </v-col>
            <v-col>
                <v-btn label="Precio" prepend-icon="mdi-content-save"> Guardar </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-container>
                <v-data-table-server :headers="headers" :items="items" disable-sort height="400" item-value="name" :header-props="{align: 'center'}">
                    <template v-slot:item.accions="{ item }">
                        <v-btn density="comfortable" icon base-color="#db1f43" @click="$router.push({ name: '' })">
                            <v-icon color="white">
                                mdi-delete-outline
                            </v-icon>
                            <v-tooltip activator="parent" location="top">Eliminar</v-tooltip></v-btn>
                    </template>
                </v-data-table-server>
            </v-container>
        </v-row>
    </v-container>
</template>
<script setup>
import { ref } from 'vue'

const headers = ref([
    { title: '#', align: 'center', key: 'autoIncrement' },
    { title: 'Nombre', align: 'center', key: 'name' },
    { title: 'Usuario', align: 'center', key: 'user' },
    { title: 'Password', align: 'center', key: 'password' },
    { title: 'Rol', align: 'center', key: 'role' },
    { title: 'Estado', align: 'center', key: 'status'},
    { title: 'Fecha de creacion', align: 'center', key: 'dateCreated' },

])
const items = ref([
    {
        autoIncrement: '1',
        name: 'Anthony',
        user: 'avasquez',
        password: 'avas*****',
        role: 'admin',
        status: 'Activo',
        dateCreated: '06-02-2023'
    },
    {
        autoIncrement: '2',
        name: 'Anthony',
        user: 'avasquez',
        password: 'avas*****',
        role: 'admin',
        status: 'Activo',
        dateCreated: '06-02-2023'
    },
    {
        autoIncrement: '3',
        name: 'Anthony',
        user: 'avasquez',
        password: 'avas*****',
        role: 'admin',
        status: 'Desactivado',
        dateCreated: '06-02-2023'
    }
])
</script>