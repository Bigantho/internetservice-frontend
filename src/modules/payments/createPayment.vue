<template>
  <h1 class="text-center">
    Registro de venta
  </h1>
  <br>

  <v-form v-model="valid">
    <h3>Informacion del servicio
    </h3>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-select label="Servicio" :items="items"></v-select> </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="plan.amount" :counter="10" label="Monto" hide-details required readonly></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-select v-model="plan.soldBy" label="Vendido por" :items="['Anthony', 'Marco Aurelio']"></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-text-field v-model="dateTookFormatted" v-bind="props" label="Fecha de venta" hide-details required>
              </v-text-field>
            </template>
            <v-date-picker v-model="dateTook"></v-date-picker>
          </v-menu>
        </v-col>
        <v-col>
          <v-checkbox v-model="recurringCharged"label="Cobro recurente" hint="Cobros"> </v-checkbox>
        </v-col>
      </v-row>
    </v-container>
    <h3>Informacion del cliente
    </h3>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="client.firstname" :counter="10" label="First name" hide-details
            required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="client.lastname" :counter="10" label="Last name" hide-details required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="client.address" label="Direccion" required>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="client.city" label="Ciudad" required>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="client.state" label="Estado" required>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="client.country" label="Pais" required>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="client.zipcode" label="Zipcode" required>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="client.phoneNumber" label="Telefono" required>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="email" label="E-mail" hide-details required></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <h3>Informacion de tarjeta</h3>
    <v-container>
      <v-row>
        <v-col cols="12">
        </v-col>
        <v-col cols="12" md="4">
          <v-checkbox v-model="sameAddress" color="red" label="Usar misma direccion de cliente"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="creditCard.cardOwener" label="Nombre del titular" required>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="creditCard.cardNumber" label="Numero de tarjeta" required>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="creditCard.cardExpDate" label="Fecha de expiracion (MMYY)" required>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="creditCard.cardCvc" label="Codigo de seguridad" required>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="creditCard.cardAddress" label="Direccion" required>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="creditCard.cardCity" label="Ciudad" required>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="creditCard.cardState" label="Estado" required>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="creditCard.cardCountry" label="Pais" required>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="creditCard.cardZipcode" label="Zipcode" required>
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<style scoped></style>
<script setup>
import { ref, reactive, watch } from 'vue';
import { useDate } from 'vuetify';

const valid = ref(false);
const recurringCharged = ref(false)
const   sameAddress = ref(false)
const nameRules = [
  value => {
    if (value) return true;
    return 'Name is required.';
  },
  value => {
    if (value?.length <= 10) return true;
    return 'Name must be less than 10 characters.';
  }
];

const email = ref('');

const emailRules = [
  value => {
    if (value) return true;
    return 'E-mail is required.';
  },
  value => {
    if (/.+@.+\..+/.test(value)) return true;
    return 'E-mail must be valid.';
  }
];

const items = ref([
  'Att 50Mb - $49.99',
  'Verizon 30MB - $55',
  'Spectrum 1GB - $89.99'
]);

const select = ref(null);
const menu = ref(false);

const client = reactive({
  firstname: '',
  lastname: '',
  address: '',
  city: '',
  state: '',
  country: '',
  zipcode: '',
  phoneNumber: '',
  email: ''
});

const creditCard = reactive({
  cardOwner: '',
  cardNumber: '',
  cardExpDate: '',
  cardCvc: '',
  cardAddress: '',
  cardCity: '',
  cardState: '',
  cardCountry: '',
  cardZipcode: ''
});

const plan = reactive({
  amount: '',
  soldBy: ''
});


const date = useDate()
const dateTook = ref(null)
const dateTookFormatted = ref(null)
watch(dateTook, (val) => {
    dateTookFormatted.value = date.format(val, 'keyboardDate')
})

</script>