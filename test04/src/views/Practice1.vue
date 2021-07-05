<template>
    
<div class="box-container">
        <div class="box1">
            <table>
                <tr style="height: 32.5%;">
                    <td><img src="http://th1.tmon.kr/thumbs/image/3cc/3fa/d56/475318fb7_700x700_95_FIT.jpg"
                            widht="150px;" height="150px;">

                    </td>
                    <td><img src="http://img.danawa.com/prod_img/500000/188/376/img/5376188_1.jpg?shrink=360:360&_v=20180523170653"
                            widht="130px;" height="130px;">

                    </td>
                    <td><img src="http://img.danawa.com/prod_img/500000/264/205/img/2205264_1.jpg?shrink=360:360&_v=20180529103258"
                            widht="130px;" height="130px;">

                    </td>
                </tr>
                <tr style="height: 10%;">
                    <td><input type="button" value="W1000" id="btnDrink1" class="btn">
                    </td>
                    <td><input type="button" value="W1200" id="btnDrink2" class="btn">
                    </td>
                    <td><input type="button" value="W500" id="btnDrink3" class="btn"></td>
                </tr>
                <tr style="height: 32.5%;">
                    <td><img v-bind:src="imgBong"
                            widht="120px;" height="120px;">

                    </td>
                    <td><img src="http://img.danawa.com/prod_img/500000/191/554/img/2554191_1.jpg?shrink=360:360&_v=20170227171125"
                            widht="160px;" height="160px;">

                    </td>
                    <td><img src="http://img.danawa.com/prod_img/500000/217/969/img/1969217_1.jpg?shrink=360:360&_v=20170801100349"
                            widht="150px;" height="150px;">

                    </td>
                </tr>
                <tr style="height: 10%;">
                    <td><input type="button" value="W700" id="btnDrink4" class="btn"></td>
                    <td><input type="button" value="W800" id="btnDrink5" class="btn"></td>
                    <td><input type="button" value="W900" id="btnDrink6" class="btn"></td>
                </tr>
                <tr
                    style="height: 15%; background-image: url('https://image.newsis.com/2021/05/07/NISI20210507_0000742217_web.jpg');">
                    <td colspan="3">

                    </td>
                </tr>
            </table>
        </div>
        <div class="box2">
            <div style="position: relative; top: 10px; left: 10px;">
                <div style="color: white; font-size: 20px; padding-bottom: 5px;">자판기 잔액</div><input type="text" name=""
                    id="total_vending_amount" value="1000" readonly><br><br>
                <div style="color: white; font-size: 20px; padding-bottom: 5px;">투입금액</div><input type="text" name=""
                    id="total_input_amount" value="0" readonly><br><br>
                <div style="color: white; font-size: 20px; padding-bottom: 5px;">내 잔액</div><input type="text" name=""
                    id="total_customer_amount" value="10000" readonly>
            </div><br><br>
            <div style="text-align: center;">
                <input type="button" value="100" style="width: 70px; height: 70px; border-radius: 50%; font-size: 20px;"
                    onclick="inputAmount(100);">
                <input type="button" value="500" style="width: 70px; height: 70px; border-radius: 50%; font-size: 20px;"
                    onclick="inputAmount(500);">
                <input type="button" value="1000" style="width: 140px; height: 70px; font-size: 20px;"
                    onclick="inputAmount(1000);">
            </div>
            <br>
            <br>
            <br><br><br><br><br><br><br><br><br><br><br>
            <div class="box3" id="output"
                style="margin: auto; width:90%;height:150px; border:1px solid rgb(151, 151, 151);"></div>
        </div>
        </div>
    
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
       return {
           imgBong: "https://kr.misumi-ec.com/linked/material/fs/ADO1/PHOTO/10157.jpg?$product_main$",

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

 @import url(//fonts.googleapis.com/earlyaccess/hanna.css);

        * {
            box-sizing: border-box;
            font-family: 'Hanna', sans-serif;

        }

        .box-container {
            display: flex;
            margin: auto;
            width: 900px;
            height: 800px;
            border: 1px solid rgb(158, 158, 158);

        }

        .box1 {
            width: 600px;

            color: black;

        }

        .box2 {
            /* background-color: rgba(83, 137, 236, 0.877); */
            background-image: url('https://mblogthumb-phinf.pstatic.net/20160921_237/ppanppane_1474429787832yFK7y_PNG/%C4%DA%C4%AB%C4%DD%B6%F3_%B7%CE%B0%ED_%283%29.png?type=w800');
            width: 300px;
            border-left: solid 1px rgb(158, 158, 158);
        }


        img {
            display: inline-block;

        }

        table,
        tr,
        td {
            border-collapse: collapse;

        }

        tr {
            border-bottom: solid 1px rgb(158, 158, 158);
        }

        table {
            margin: auto;
            width: 100%;
            height: 100%;
        }

        tr,
        td {
            text-align: center;
        }

        .btn {
            border-radius: 20px;
            width: 80px;
            height: 50px;
        }

        .box3 {
            overflow: auto;
            -ms-overflow-style: none;
        }

        .box3::-webkit-scrollbar {
            display: none;
        }
</style>