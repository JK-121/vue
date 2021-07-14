<template>
    
        <div style="margin:outo;">
    <div>
      <center>
        <img src="https://tmembership.tworld.co.kr:8000/img_pl/poc/201609/img_1474679248672.png" alt=""></center>
    </div>
    <h1>
      <center>아웃백에 오신걸 환영합니다</center>
    </h1>
    <div>
      <select name="" id="menu" class="sel" @change="selectMenu">
           <option value="" selected hidden>메뉴를 선택하세요.</option>
         <option :value="menu.price" :key="menu.menuId" v-for="menu in menus">{{menu.menuName}}</option>

      </select>
      <input type="number" min="0" style="width: 40px; height: 30px;" id="count" 
      v-model="menus.qty">
      <button style="width:50px; height:30px;" @click="inputMenu()">추가</button>
      <button style="width:50px; height:30px;" onclick="">삭제</button>
      &nbsp;
      <label>총액</label>&nbsp;
      <input type="text" style="height: 30px; text-align: right;" id="totalPrice" readonly
     v-model="totalprice">
    </div>
    <br>
    <div>
      <select name="" id="card" class="sel">
          <option value="" selected hidden>할인을 선택하세요.</option>
        <option :value="card.cardId" :key="i" v-for="(card,i) in creditCards">{{card.cardName}}</option>
      </select>
      <select name="" id="coupon" class="sel">
          <option value="" selected hidden>쿠폰을 선택하세요.</option>
       <option :value="coupon.couponId" :key="i" v-for="(coupon,i) in coupons">{{coupon.title}}</option>
      </select>
      <button style="width:50px; height:30px;" onclick="">적용</button>
      &nbsp;
      <label>계산금액</label>&nbsp;
      <input type="text" style="height: 30px; width: 100px; text-align: right;" id="finalPrice" readonly>
    </div>
  
  <br>
  <div class="txt">
    <p :key="i" v-for="(msg, i) in messsageList">{{ msg }}</p>
  </div>
  </div>
  
    
</template>
<script>
export default {
    
    messsageList: [],
    name: "",
    components: {},
    data() {
        return {
            totalPrice: (this.price * this.qty),
            messsageList: [],

            menus : [{
        menuId: 1,
        menuName: "무제한 샐러드바",
        price: 25000,
        qty: 0
      },
      {
        menuId: 2,
        menuName: "안심 스테이크(150g)",
        price: 35500,
        qty: 0
      },
      {
        menuId: 3,
        menuName: "립아이 스테이크(220g)",
        price: 22500,
        qty: 0
      },
      {
        menuId: 4,
        menuName: "채끝 등심 스테이크(210g)",
        price: 30500,
        qty: 0
      },
      {
        menuId: 5,
        menuName: "자몽에이드",
        price: 6500,
        qty: 0
      },
      {
        menuId: 6,
        menuName: "애플망고에이드",
        price: 6500,
        qty: 0
      },
      {
        menuId: 7,
        menuName: "생맥주",
        price: 400,
        qty: 0
      }
    ],

    //할인 종류
     cardTypes : [{
        cardType: "CREDIT",
        title: "신용카드"
      },
      {
        cardType: "TELECOM",
        title: "통신사"
      },
      {
        cardType: "OKCASHBAG",
        title: "OK캐시백"
      },
      {
        cardType: "POINT",
        title: "포인트결제"
      }
    ],
    //할인 카드/통신사/포인트/OK캐시백
     creditCards : [{
        cardId: 1,
        cardType: "CREDIT",
        cardName: "CJ ONE 삼성카드",
        discount: 30,
        discountType: "%"
      },
      {
        cardId: 2,
        cardType: "CREDIT",
        cardName: "CJ ONE 신한카드",
        discount: 30,
        discountType: "%"
      },
      {
        cardId: 3,
        cardType: "CREDIT",
        cardName: "The CJ 카드",
        discount: 22,
        discountType: "%"
      },
      {
        cardId: 4,
        cardType: "CREDIT",
        cardName: "삼성 6 V4카드",
        discount: 20,
        discountType: "%"
      },
      {
        cardId: 5,
        cardType: "CREDIT",
        cardName: "신한 Lady카드",
        discount: 20,
        discountType: "%"
      },
      {
        cardId: 6,
        cardType: "CREDIT",
        cardName: "삼성 SFC",
        discount: 20,
        discountType: "%"
      },
      {
        cardId: 7,
        cardType: "CREDIT",
        cardName: "삼성 S클라스",
        discount: 20,
        discountType: "%"
      },
      {
        cardId: 8,
        cardType: "CREDIT",
        cardName: "하나 Yes OK Saver",
        discount: 20,
        discountType: "%"
      },
      {
        cardId: 9,
        cardType: "CREDIT",
        cardName: "홈플러스 하나줄리엣카드",
        discount: 20,
        discountType: "%"
      },
      {
        cardId: 10,
        cardType: "CREDIT",
        cardName: "하나 줄리엣카드 & Yes 4u shopping",
        discount: 20,
        discountType: "%"
      },
      {
        cardId: 11,
        cardType: "CREDIT",
        cardName: "KB Star",
        discount: 20,
        discountType: "%"
      },
      {
        cardId: 12,
        cardType: "CREDIT",
        cardName: "이마트 KB카드",
        discount: 15,
        discountType: "%"
      },
      {
        cardId: 13,
        cardType: "TELECOM",
        cardName: "KT 멤버십 일반 할인",
        discount: 5,
        discountType: "%"
      },
      {
        cardId: 14,
        cardType: "TELECOM",
        cardName: "KT 멤버십 VIP 할인",
        discount: 15,
        discountType: "%"
      },
      {
        cardId: 15,
        cardType: "TELECOM",
        cardName: "T 멤버십 실버 할인",
        discount: 5,
        discountType: "%"
      },
      {
        cardId: 16,
        cardType: "TELECOM",
        cardName: "T 멤버십 VIP/골드 할인",
        discount: 15,
        discountType: "%"
      },
      {
        cardId: 17,
        cardType: "OKCASHBAG",
        cardName: "OK캐시백",
        discount: 30,
        discountType: "%"
      },
      {
        cardId: 18,
        cardType: "POINT",
        cardName: "BC Top 포인트",
        discount: 100,
        discountType: "%"
      },
      {
        cardId: 19,
        cardType: "POINT",
        cardName: "기아멤버스 카드",
        discount: 20,
        discountType: "%"
      },
      {
        cardId: 20,
        cardType: "POINT",
        cardName: "삼성카드 포인트",
        discount: 100,
        discountType: "%"
      },
      {
        cardId: 21,
        cardType: "POINT",
        cardName: "현대카드 M",
        discount: 20,
        discountType: "%"
      },
      {
        cardId: 22,
        cardType: "POINT",
        cardName: "신한 Hi-Point 카드",
        discount: 20,
        discountType: "%"
      },
      {
        cardId: 23,
        cardType: "POINT",
        cardName: "블루멤버스 카드",
        discount: 20,
        discountType: "%"
      }
    ],

    //할인쿠폰
     coupons : [{
        couponId: 1,
        title: "5% 할인쿠폰(중복할인 가능)",
        discount: 5,
        doubleDiscount: true,
        discountType: "%"
      },
      {
        couponId: 2,
        title: "10% 할인쿠폰(중복할인 가능)",
        discount: 10,
        doubleDiscount: true,
        discountType: "%"
      },
      {
        couponId: 3,
        title: "15% 할인쿠폰(중복할인 가능)",
        discount: 15,
        doubleDiscount: true,
        discountType: "%"
      },
      {
        couponId: 4,
        title: "5000 할인쿠폰(중복할인 가능)",
        discount: 5000,
        doubleDiscount: true,
        discountType: ""
      },
      {
        couponId: 5,
        title: "10,000 할인쿠폰(중복할인 가능)",
        discount: 10000,
        doubleDiscount: true,
        discountType: ""
      },
      {
        couponId: 6,
        title: "20,000 할인쿠폰(중복할인 가능)",
        discount: 20000,
        doubleDiscount: true,
        discountType: ""
      },
      {
        couponId: 7,
        title: "5% 할인쿠폰(중복할인 불가능)",
        discount: 5,
        doubleDiscount: false,
        discountType: "%"
      },
      {
        couponId: 8,
        title: "10% 할인쿠폰(중복할인 불가능)",
        discount: 10,
        doubleDiscount: false,
        discountType: "%"
      },
      {
        couponId: 9,
        title: "15% 할인쿠폰(중복할인 불가능)",
        discount: 15,
        doubleDiscount: false,
        discountType: "%"
      },
      {
        couponId: 10,
        title: "5000 할인쿠폰(중복할인 불가능)",
        discount: 5000,
        doubleDiscount: false,
        discountType: ""
      },
      {
        couponId: 11,
        title: "10,000 할인쿠폰(중복할인 불가능)",
        discount: 10000,
        doubleDiscount: false,
        discountType: ""
      },
      {
        couponId: 12,
        title: "20,000 할인쿠폰(중복할인 불가능)",
        discount: 20000,
        doubleDiscount: false,
        discountType: ""
      }
    ]



        };
    },
    computed: {
    
  },
    setup() {},
    created() {
        this.menus = this.menus.map((m) => {
      return {
        menuId: m.menuId,
        menuName: m.menuName,
        price: m.price,
        qty: 0,
        isSelected: false,
      };
    });
    },
    mounted() {},
    unmounted() {},
    methods: {
      selectMenu() {
          
      },

      inputMenu() {

      }

    }
}


    

</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/hanna.css);

    * {
      box-sizing: border-box;
      font-family: 'Hanna', sans-serif;

    }

    .box-container {
     

      width: 560px;
    }

    .txt {
      width: 560px;
      height: 100px;
      border:1px solid black;
      overflow: auto;
      -ms-overflow-style: none;
      margin: auto;
    }

    .txt::-webkit-scrollbar {
      display: none;
    }

    .sel {
      height: 30px;
      width: 150px;

    }
</style>