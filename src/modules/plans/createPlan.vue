<template>
    <h1 class="text-center">Creacion de planes</h1>
    <v-container>
        <v-row>
            <v-col>
                <v-text-field v-model="name" :counter="10" label="Nombre" hide-details required></v-text-field> </v-col>
            <v-col>
                <v-text-field v-model="price" :counter="10" label="Precio" hide-details required></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-select label="Compañia" :items="items">

                </v-select>
            </v-col>
            <v-col>
                <v-textarea label="Descripcion"></v-textarea>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        amount: '',
        items: ['att', 'verizon'],
    }),
}
</script>