<template>
    <div class="grid md:grid-cols-2 gap-4">
        <!-- Box 1 -->
        <div class="shadow-md bg-blue-100 p-10 text-center rounded">
            <h3 class="text-4xl text-blue-500 font-bold mb-4">感染確認</h3>
            <div class="text-2xl mb-4">
                <span class="font-bold">新たに確認された人数: </span>
                {{ numberWithCommas(stats.NewConfirmed) }}
            </div>
            <div class="text-2xl mb-4">
                <span class="font-bold">合計: </span>
                {{ numberWithCommas(stats.TotalConfirmed) }}
            </div>
        </div>
        <!-- Box 2 -->
        <div class="shadow-md bg-red-100 p-10 text-center rounded">
            <h3 class="text-4xl text-red-700 font-bold mb-4">死亡</h3>
            <div class="text-2xl mb-4">
                <span class="font-bold">新たに確認された人数: </span>
                {{ numberWithCommas(stats.NewDeaths) }}
            </div>
            <div class="text-2xl mb-4">
                <span class="font-bold">合計: </span>
                {{ numberWithCommas(stats.TotalDeaths) }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DataBoxes',
        props: ['stats'],
        methods: {
            numberWithCommas(num) {
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
        }
    }
</script>