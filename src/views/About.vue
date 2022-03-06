<template>
  <div  class="bg-image" 
     style="background-image: url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg');
            height: 100vh">
    <div>
      <span class="text middle" data-text="Covid Form"></span>
    </div>
    <div class="bg-image" 
     style="background-image: url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg');
            height: 100vh">
      
      <h1> Covid-19 Result</h1>
      <form @submit.prevent="addData">
        <div class="card-body ">
          <div class="form-floating mb-4">
            <input
              type="date"
              class="form-control"
              id="floatingInput"
              placeholder="date"
              v-model="date"
            />
            <label for="floatingInput">Date</label>
          </div>
          <div class="form-floating mb-4">
            <input
              type="name"
              class="form-control"
              id="floatingInput"
              placeholder="name"
              v-model="name"
            />
            <label for="floatingInput">Name & Lastname</label>
          </div>
          <div class="form-floating mb-4">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              v-model="atk"
            >
              <option value="+">+ positive</option>
              <option value="-">- negative</option>
            </select>
            <label for="floatingSelect">selects</label>
          </div>
          <div class="form-floating mb-4">
            <input
              type="tel"
              class="form-control"
              id="floatingInput"
              placeholder="phone number"
              v-model="tel"
            />
            <label for="floatingInput">Number telephone</label>
          </div>
          <div class="form-floating mb-4">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="email"
            />
            <label for="floatingInput">Email address</label>
          </div>

          <div class="d-grid gap-2 d-md-block">
            <button  type="submit" class="gradiant-bg btn btn">ADD DATA</button>
          </div>
        </div>
      </form>
      <div class="card-body">
        <table class="container table table-striped table-hover">
          <thead>
            <tr class="bg-warning">
              <th scope="col">Date</th>
              <th scope="col">Name & Lastname</th>
              <th scope="col">ATK result</th>
              <th scope="col">Number telephone</th>
              <th scope="col">Email address</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i, index) in csDoc" :key="index" align="center">
              <td>{{ i.data.date1 }}</td>
              <td>{{ i.data.name1 }}</td>
              <td>{{ i.data.atkresult }}</td>
              <td>{{ i.data.telnumber }}</td>
              <td>{{ i.data.email1 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
import db from "../plugins/firebase1";

export default {
  data() {
    return {
      csDoc: [],
      name: "",
      email: "",
      atk: "",
      tel: "",
      date: "",
    };
  },
  beforeMount() {
    this.readData();
  },
  methods: {
    async addData() {
      try {
        this.csDoc = [];
        const docRef = await addDoc(collection(db, "covidtable"), {
          name1: this.name,
          email1: this.email,
          atkresult: this.atk,
          telnumber: this.tel,
          date1: this.date,
        });
        this.name = "";
        this.email = "";
        this.atk = "";
        this.tel = "";
        this.date = "";
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    readData() {
      this.csDoc = [];
      const q = query(collection(db, "covidtable"));
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.csDoc.push({ id: doc.id, data: doc.data() });
        });
        // console.log("Current cities in CA: ", this.csDoc.join(", "));
      });
    },
  },
  
};


</script>

<style>

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
h1{
  font-size: 72px;
  font-weight: bold;
  background: linear-gradient( 80deg, #ffa69e, #faf3dd, #b8f2e6, #aed9e0, #5e6472);
  background-size: 50%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: gradient 2s infinite;
}

.gradiant-bg{
  font-size: 48px;
  font-weight: bold;
  background: linear-gradient( 80deg, #ffffff, #00ffff, #ff0000, #0077ff, #fffb0b , #ff8801);
  background-size: 50%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: gradient 2s infinite;
}
</style>


