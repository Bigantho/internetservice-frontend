<template>
    <v-container>
        <h1 class="text-center">Cobros realizados</h1>
        <v-table height="300px" fixed-header>
            <thead>
                <tr>
                    <th class="text-left">
                        #
                    </th>
                    <th class="text-left">
                        Plan 
                    </th>
                    <th class="text-left">
                        Costo
                    </th>
                    <th class="text-left">
                        Vendido por
                    </th>
                    <th class="text-left">
                        Cobrado por
                    </th>
                    <th class="text-left">
                        Fecha venta
                    </th>
                    <th class="text-left">
                        Fecha cobro
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.count }}</td>
                    <td>{{ item.plan }}</td>
                    <td>{{ item.cost }}</td>
                    <td>{{ item.soldBy }}</td>
                    <td>{{ item.chargedBy }}</td>
                    <td>{{ item.dateSale }}</td>
                    <td>{{ item.dateCharged }}</td>

                </tr>
            </tbody>
        </v-table>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        desserts: [
            {
                count: 1,
                plan: 'ATT 50MB',
                cost: '$60',
                soldBy: 'Maximo merido meridio',
                chargedBy: 'Marco Aurelio',
                dateSale: ' 2024-06-21 08:00',
                dateCharged: ' 2024-06-21 11:00'

            },
            {
                count: 2,
                plan: 'ATT 50MB',
                cost: '$60',
                soldBy: 'Maximo merido meridio',
                chargedBy: 'Marco Aurelio',
                dateSale: ' 2024-06-21 08:00',
                dateCharged: ' 2024-06-21 11:00'

            },
        ],
    })
}
</script>