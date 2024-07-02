<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
                <v-text-field v-model="user" prepend-inner-icon="mdi-account-outline" name="user" label="Usuario"
                    type="text"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="4">
                <v-text-field v-model="password" prepend-inner-icon="mdi-key-outline"
                    :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'"
                    hint="At least 8 characters" label="Contraseña" name="input-10-1" counter
                    @click:append-inner="show1 = !show1"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="4">
                <v-btn size="x-large" @click=goToUrl()>Ingresar</v-btn>

            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        user: '',
        password: '',
        show1: false,

    }),
    methods: {
        goToUrl() {
            this.$router.push({ name: 'paymentCreate' });
        }
    }
}
</script>