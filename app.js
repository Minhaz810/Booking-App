var app = Vue.createApp({
    data() {
      return {
        confirmed:false,
        seatStates: {
          sold: {
            text: "Sold",
            color: "#ff0000"
          },
          available: {
            text: "Available",
            color: "#fff"
          },
          booked: {
            text: "Booked",
            color: "gray"
          },
          selected: {
            text: "Selected",
            color: "#00ff00"
          }
        },
        seats: [
          {
            name: "A1",
            type: "available",
            price: 500,
            is_premium:"premium"
          },
          {
            name: "A2",
            type: "sold",
            price: 500,
            is_premium:"premium"
          },
          {
            name: "A3",
            type: "available",
            price: 500,
            is_premium:"premium"
          },
          {
            name: "A4",
            type: "available",
            price: 500,
            is_premium:"premium"
          },
          {
            name: "B1",
            type: "available",
            price: 450,
            is_premium:"premium"
          },
          {
            name: "B2",
            type: "available",
            price: 450,
            is_premium:"premium"
          },
          {
            name: "B3",
            type: "available",
            price: 450,
            is_premium:"premium"
          },
          {
            name: "B4",
            type: "available",
            price: 450,
            is_premium:"premium"
          },
          {
            name: "C1",
            type:"available",
            price: 500
          },
          {
            name: "C2",
            type: "available",
            price: 500
          },
          {
            name: "C3",
            type: "available",
            price: 500
          },
          {
            name: "C4",
            type: "available",
            price: 500
          },
          {
            name: "D1",
            type: "available",
            price: 400
          },
          {
            name: "D2",
            type: "available",
            price: 400
          },
          {
            name: "D3",
            type: "available",
            price: 400
          },
          {
            name: "D4",
            type: "available",
            price: 400
          },
          {
            name: "E1",
            type: "Selected",
            price: 300
          },
          {
            name: "E2",
            type: "available",
            price: 300
          },
          {
            name: "E3",
            type: "available",
            price: 300
          },
          {
            name: "E4",
            type: "available",
            price: 300
          },
          {
            name: "F1",
            type: "available",
            price: 300
          },
          {
            name: "F2",
            type: "available",
            price: 300
          },
          {
            name: "F3",
            type: "available",
            price: 300
          },
          {
            name: "F4",
            type: "sold",
            price: 300
          },
          {
            name: "G1",
            type: "booked",
            price: 300
          },
          {
            name: "G2",
            type: "available",
            price: 300
          },
          {
            name: "G3",
            type: "available",
            price: 300
          },
          {
            name: "G4",
            type: "available",
            price: 300
          },
          
        ],
          appliedCoupon: null,
          couponCode: "",
          coupons: [
            {
              code: "100TAKAOFF",
              discount: 100
            },
            {
              code: "200TAKAOFF",
              discount: 200
            }
            ],
      };
    },
    watch:{
      couponCode(newValue) {
        if (newValue.length === 10) {
          let searchedCoupons = this.coupons.filter(
            (item) => item.code === newValue
          );
      
          if (searchedCoupons.length === 1) {
            this.appliedCoupon = searchedCoupons[0];
            this.couponCode = "";
          } else {
            alert("Coupon not valid!");
          }
        }
      }
    },
    computed:{
      selectedSeats(){
        let n=this.seats.filter((item)=>item.type==="selected")
        return n
      },
      totalCost(){
        let count=0;
        this.selectedSeats.forEach((seat) => {
          count+=seat.price
        });
        if (this.appliedCoupon!=null){
          count-=this.appliedCoupon.discount
        }
        return count
      }
    },
    methods: {
      onClick(i){
  
        if (this.selectedSeats.length>=4){
          alert("You can not select more than 4 seats")
          return
        }
        if (this.seats[i].type=="booked"){
          alert("Already Booked!")
          return
        }
        else if (this.seats[i].type=="sold"){
          alert("Already Sold!")
          return
        }
        
          this.seats[i].type= this.seats[i].type==="selected" ? "available" :"selected"
      },
      confirm() {
        if (!this.name && !this.mobile){
          alert("Both name and mobile no is required!")
          return;
        }
        if (!this.name) {
          alert("Name Required");
          return;
        }
        if (!this.mobile) {
          alert("Mobile No Required");
          return;
        }
        if (isNaN(this.mobile) ){
          alert("Enter Valid Mobile No")
        }
        if (this.mobile.length!=11){
          alert("Enter Valid Mobile No")
        }
      
        this.confirmed = true;
      },
      resetData(){
        this.confirmed=false
        this.name=null
        this.mobile=null
        this.appliedCoupon=""

        this.seats.forEach((seat)=>{

          if (seat.type==="selected"){
            seat.type="sold"
          }
        })
      }
    },
  });
  
  app.mount("#app");