<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-primary" @click="tracking()">Tracking</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-primary" @click="check_rate()">Rate</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-primary" @click="check_status()">Check Status</button>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col">
      <div class="card text-center">
        <div class="card-header">
          Response
        </div>
        <div class="card-body">
          <h5 class="card-title">{{message}}</h5>
        </div>
        <div class="card-footer text-muted">
          Status: {{status}}
        </div>
      </div>
      </div>

    </div>
    <hr>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      message: "",
      status: "",
      rate: {
              "delivery": "fedex",
              "shipper": {
                  "name": "Sender",
                  "company": "Company",
                  "phone_number" : "555-555-5555",
                  "address": "Main Street",
                  "city": "Harrison",
                  "state": "AR",
                  "postal_code": "72601",
                  "country_code": "US"
              },
              "recipient": {
                  "name": "Recipient",
                  "company": "Company",
                  "phone_number": "555-555-5555",
                  "address": "Main Street",
                  "city": "Franklin Park",
                  "state": "IL",
                  "postal_code": "60131",
                  "country_code": "US",
                  "residential": "false"
              },
              "packages": [
                  {
                      "weight": {"units": "LB", "value": "6"},
                      "dimensions": {"length": "5", "width": 5, "height": 4, "units": "IN" }
                  }
               ],
              "shipping_options": {
                "packaging_type": "YOUR_PACKAGING",
                "drop_off_type": "REGULAR_PICKUP"
    }
}
    };
  },
  created: function(){
    console.log("Home created")
    let socket = new WebSocket("ws://localhost:3000/cable/messages");
    console.log(socket)
    //this.sockets.subscribe('messages', (data) => {
    //  this.msg = data.message;
    //});

  },
  methods: {
    tracking(){
      this.$http.get('http://localhost:3000/delivery_tracking/tracking/fedex/287383').then(response => {
        console.log(response)
        this.message = response.body;
      }, response => {
        console.log(response)
        this.message = response.body;
        this.status = response.status
      });
    },
    check_rate(){
      this.$http.post('http://localhost:3000/delivery_tracking/rate', this.rate).then(response => {
        console.log(response)
        this.message = response.body;
        this.status = response.status
      }, response => {
        console.log(response)
        this.message = response.body;
        this.status = response.status
      });
    },
    check_status(){
      this.$http.get('http://localhost:3000/delivery_tracking/satatus_delivery/fedex/287383').then(response => {
        console.log(response)
        this.message = response.body;
        this.status = response.status
      }, response => {
        console.log(response)
        this.message = response.body;
        this.status = response.status
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
