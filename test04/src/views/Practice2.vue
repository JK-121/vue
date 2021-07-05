<template>
  <div>
    <button @click="inputAmount(coin)" :key="coin" v-for="coin in coins">
      {{ coin }}원 투입
    </button>
    <br />
    <br>
    <label>자판기 잔액:</label>
    <input type="text" v-model="total_vending_amount" readonly />
    <label>투입금액:</label>
    <input type="text" v-model="total_input_amount" readonly />
    <label>잔고:</label>
    <input type="text" v-model="total_customer_amount" readonly />
    <br />
    <br>
    <button
      @click="requestDrink(drink.drinkId)"
      :class="{ active: drink.price <= total_input_amount }"
      :key="drink.dirnkId"
      v-for="drink in drinkList"
    >
      {{ drink.drinkName }} ({{ drink.price }}원, 재고:{{ drink.stock }})
    </button>
    <br />
    <br>
    <div
      style="
        width: 1100px;
        height: 300px;
        overflow-y: auto;
        border: 2px solid #222;
        margin: auto;
      "
    >
      <p :key="i" v-for="(msg, i) in messsageList">{{ msg }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      coins: [100, 500, 1000],
      total_vending_amount: 1000,
      total_input_amount: 0,
      total_customer_amount: 10000,
      messsageList: [],
      drinkList: [
        {
          drinkId: "1",
          drinkName: "코카콜라",
          price: 700,
          stock: 5,
        },
        {
          drinkId: "2",
          drinkName: "오렌지주스",
          price: 1200,
          stock: 5,
        },
        {
          drinkId: "3",
          drinkName: "커피",
          price: 500,
          stock: 5,
        },
        {
          drinkId: "4",
          drinkName: "물",
          price: 700,
          stock: 5,
        },
        {
          drinkId: "5",
          drinkName: "보리차",
          price: 1200,
          stock: 5,
        },
        {
          drinkId: "6",
          drinkName: "포카리",
          price: 1000,
          stock: 5,
        },
        {
          drinkId: "7",
          drinkName: "뽀로로",
          price: 1300,
          stock: 5,
        },
      ],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    inputAmount(amount) {
      // var output = document.getElementById("output");
      if (amount <= this.total_customer_amount) {
        //내 지갑의 잔고가 투입하려는 금액만큼 있는지 체크
        this.total_input_amount += amount;
        this.total_customer_amount -= amount;
        this.total_vending_amount += amount;
        this.messsageList.push(`${amount}원이 투입되었습니다.`);
        this.messsageList.push(
          `총 투입 금액은 ${this.total_input_amount}원 입니다.`
        );
        this.messsageList.push(
          `현재 잔고는 ${this.total_customer_amount}원 입니다.`
        );
      } else {
        this.messsageList.push(
          `현재 잔고가 ${this.total_customer_amount}원 입니다.`
        );
        this.messsageList.push(`${amount}원을 투입할 수 없습니다.`);
      }
    },
    requestDrink(drinkId) {
      let drink = this.drinkList.filter((d) => d.drinkId == drinkId)[0];
      if (drink.stock > 0) {
        if (drink.price <= this.total_input_amount) {
          let changes = this.total_input_amount - drink.price; //거스름돈
          if (changes <= this.total_vending_amount) {
            this.total_vending_amount -= changes;
            this.total_input_amount = 0;
            this.total_customer_amount += changes;
            drink.stock--;
            this.messsageList.push(
              `${drink.drinkName}를(을) 구매하는데 성공했습니다.`
            );
            this.messsageList.push(
              `현재 잔고는 ${this.total_customer_amount}원 입니다.`
            );
          } else {
            this.messsageList.push(
              `현재 자판기 잔액이 ${this.total_vending_amount} 입니다. 선택한 음료를 구매할 수 없습니다.`
            );
          }
        }
      } else {
        this.messsageList.push(
          `${drink.drinkName} 재고가 부족합니다.`
        );
      }
    },
  },
};
</script>
<style scoped>
.active {
  background-color: pink;
}
</style>