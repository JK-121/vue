<template>
    <div>
        <select v-model="selectedDrink">
            <!-- :key=""(키값 잡아주는건 필수) v-for=(요소값, 인덱스 번호) -->
            <option :value="drink.drinkId" :key="i" v-for="(drink,i) in drinkList">{{drink.drinkName}}</option>
        </select>
        <table>
            <thead>
                <tr>
                    <th>제품코드</th>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>주문수</th>
<th>합계</th>
                   
                </tr>
            </thead>
            <tbody>
                <tr :key="drink.drinkId" v-for="drink in drinkList">
<td>{{drink.drinkId}}</td>
<td>{{drink.drinkName}}</td>
<td>{{drink.price}}</td>
<td>
    <input type="number" v-model="drink.qty">
</td>
<td>{{drink.price * drink.qty}}</td>
</tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            selectedDrink:"",
            drinkList: [{
                drinkId: "1",
                drinkName: "코카콜라",
                price: 1000,
                qty: 1
            },
            {
                drinkId: "2",
                drinkName: "스프라이트",
                price: 1200,
                qty: 1
            },
            {
                drinkId: "3",
                drinkName: "레쓰비",
                price: 500,
                qty: 1
            },
            {
                drinkId: "4",
                drinkName: "봉봉",
                price: 700,
                qty: 1
            },
            {
                drinkId: "5",
                drinkName: "밀키스",
                price: 800,
                qty: 1
            },
            {
                drinkId: "6",
                drinkName: "포카리",
                price: 900,
                qty: 1
            }
        ]
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>

<style scoped>
table {
    width: 1400px;
    margin: auto;
    height: 500px;
}
table,
th,
td {
    border-collapse: collapse;
}

th,
td {
    border: 1px solid rgb(185, 185, 185);
    padding: 10px;
}
</style>