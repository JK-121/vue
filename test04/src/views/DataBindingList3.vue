<template>
    <div>
        <select v-model="selectedGender">
        <option value="">전체</option>
        <option value="male">남자</option>
        <option value="female">여자</option>
        </select><button @click="getUserList">조회</button>

           <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>성별</th>
                    <th>나이</th>
                    <th>잔액</th>

                   
                </tr>
            </thead>
            <tbody>
                <tr :key="user._id" v-for="user in userList">
<td>{{user.name}}</td>
<td>{{user.gender}}</td>
<td>{{user.age}}</td>
<td>{{user.balance}}</td>
</tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "",
    components: {},
    data() {
        return {
            url: "https://07495398-ac0d-4c0e-a4a1-0b565ccd5d11.mock.pstmn.io/getUserList",
            userList: [],
            selectedGender:""
        };
    },
    setup() {},
    created() {},
    mounted() {
        // this.getUserList();
    },
    unmounted() {},
    methods: {
       async getUserList(){
var userList = (await axios.get(this.url)).data.data;
if(this.selectedGender == "") {
this.userList = userList;
} else {
this.userList = userList.filter((u) => u.gender == this.selectedGender);
}
console.log(this.userList);
        },
    }
}
</script>

<style scoped>
table {
    width: 1200px;
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