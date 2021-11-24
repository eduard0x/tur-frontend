<template>
  <div>
    <div id="menu">
      <ul>
        <li id="logo"> <span>*</span><span>ProximaX EDLX</span></li>
        <li id="listed-assets"><span>*</span><span>Listed Assets</span></li>
        <li id="asset-events"><span>*</span><span>Asset Events</span></li>
        <li id="asset-holders"><span>*</span><span>Asset Holders</span></li>
        <li id="issuers"><span>*</span><span>Issuers</span></li>
        <li id="assert-transfers"><span>*</span><span>Assert Transfers</span></li>
        <li id="otc-trades"><span>*</span><span>OTC Traders</span></li>
        <li id="bulk-transfers"><span>*</span><span>Bulk Traders</span></li>
        <li id="funding"><span>*</span><span>Funding</span></li>
        <li id="offers"><span>*</span><span>Offers</span></li>
        <li id="users"><span>*</span><span>Users</span></li>
        <li id="settings"><span>*</span><span>Settings</span></li>
        
      </ul>
    </div>
    <div id="content">
      <div id="voting">

        <div class="header">
          <h1>Polls</h1>
          <button name="refresh">
            
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0625 11.4223C9.15617 12.235 8.1275 12.735 6.9765 12.9223C5.8255 13.1096 4.69783 12.969 3.5935 12.5003C2.48917 12.0003 1.61683 11.2606 0.9765 10.2813C0.336167 9.30196 0.0106667 8.20812 0 6.99979H1C1.01033 8.05179 1.29933 8.99446 1.867 9.82779C2.43467 10.6611 3.20817 11.2705 4.1875 11.6558C5.16683 12.0308 6.14867 12.1038 7.133 11.8748C8.11733 11.6458 8.96883 11.1458 9.6875 10.3748H8.2345C8.0885 10.3748 7.96867 10.328 7.875 10.2343C7.78133 10.1406 7.7345 10.0235 7.7345 9.88279C7.7345 9.74212 7.78133 9.62496 7.875 9.53129C7.96867 9.43763 8.0885 9.38546 8.2345 9.37479H10.5625C10.6978 9.38513 10.8125 9.43729 10.9065 9.53129C11.0005 9.62529 11.0527 9.73996 11.063 9.87529V12.2033C11.0527 12.3493 11.0005 12.4691 10.9065 12.5628C10.8125 12.6565 10.6953 12.7033 10.555 12.7033C10.4147 12.7033 10.2975 12.6565 10.2035 12.5628C10.1095 12.4691 10.0627 12.3493 10.063 12.2033V11.4218L10.0625 11.4223ZM2.3125 3.62529H3.7655C3.9115 3.62529 4.03133 3.67213 4.125 3.76579C4.21867 3.85946 4.2655 3.97663 4.2655 4.11729C4.2655 4.25796 4.21867 4.37513 4.125 4.46879C4.03133 4.56246 3.9115 4.61463 3.7655 4.62529H1.4375C1.30217 4.61496 1.1875 4.56279 1.0935 4.46879C0.9995 4.37479 0.947333 4.26012 0.937 4.12479V1.79679C0.947333 1.65079 0.9995 1.53096 1.0935 1.43729C1.1875 1.34363 1.30467 1.29679 1.445 1.29679C1.58533 1.29679 1.7025 1.34363 1.7965 1.43729C1.8905 1.53096 1.93733 1.65079 1.937 1.79679V2.57829C2.84333 1.76563 3.872 1.26563 5.023 1.07829C6.174 0.890958 7.30683 1.03163 8.4215 1.50029C9.52583 2.00029 10.3957 2.73996 11.031 3.71929C11.6663 4.69863 11.9893 5.79246 12 7.00079H11C10.9897 5.94879 10.7007 5.00613 10.133 4.17279C9.56533 3.33946 8.79183 2.73013 7.8125 2.34479C6.83317 1.96979 5.85133 1.89679 4.867 2.12579C3.88267 2.35479 3.03117 2.85479 2.3125 3.62579V3.62529Z" fill="#303A49"/>
          </svg>



            
            
            
            <span>Refresh</span>
</button>
        </div>
        
        <div class="body">
          <div class="tab">
            <button class="tablinks" @click.prevent="setActive('pending')" :class="{active: isActive('pending')}">Pending for vote (3)</button>
            <button class="tablinks" @click.prevent="setActive('closed')" :class="{active: isActive('closed')}">Voted & closed (6)</button>
          </div>
          <div class="tab-content tab-cont">
              <div id="pending" class="tab-pane fade" :class="{'active show':isActive('pending')}">
            <h3>Pending</h3>
            
              </div>

          <div id="closed" class="tab-pane fade" :class="{'active show':isActive('closed')}">
            <h3>Closed</h3>
            
          </div>
        </div>

          </div>
          
      </div>
      
    </div>
  </div>
  

</template>

<script>


export default {
  
  name: "inicio",
  data(){
    return{
      itemActive : 'pending'
      }

  },
  methods:{
    isActive(menuItem){
      return menuItem === this.itemActive;
    },

    setActive(item){
      this.itemActive = item
    }
    

  
  }
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  div{
    margin-top: 0px;
    
    display: flex;
    flex-direction: row;
    
    
   
  }

   #menu{
     background-color: rgb(41, 39, 39);
     width: 250px;
     height: 600px;
    }

    #menu ul{
      list-style:none;
      width:100%;
    }

    #menu li{
      padding: 10px;
      color:white;
      
      margin: 0;

    }

    #logo{
      background-color: rgb(22, 10, 63);
      font-weight: 600;
    }
  
  #content{
    background-color: rgb(216, 216, 216);
    width: 100%;
    height: 600px;
  }

  #voting{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-color: #D0D0D0;
  }

  #voting .header{
    
    padding:24px 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    text-align: center;
  }

  #voting .header h1{
    font-size: 24px;
    font-weight: 700;
    color: #0FB95B;
  }

  #voting .header button{
    padding: 12px 17px;
    background-color: transparent;
    border: 1px solid #4C5665;
    border-radius: 5px;
    color: #4C5665;
    font-size: 13px;
    line-height: 16px;
    font-weight: 500;
    text-align: center;
  }

  #voting .header button span{
      margin-left: 10px;
  }
  


  #voting .body{
    width: 100%;
    height: 372px;
    border: 1px solid #F4F6FA;
    box-shadow:0px 2px 12px rgba(0, 0, 0, 0.06);
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
  }

  /* Style the tab */
.tab {
  overflow: hidden;
  background: #EDFFF1;
/* General/Borderline */

  border-box:1px solid #F4F6FA;  
  
  box-sizing: border-box;
  border-radius: 4px 0px 0px 0px;
  
}

/* Style the buttons that are used to open the tab content */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 13px 17px;
  transition: 0.3s;
  color:#0FB95B;
  font-size: 13px;
  font-weight: 500;
  
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #FFFFFF;
  color:#4C5665;
  margin-bottom: -1px;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color:#FFFFFF;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 16px;
  background-color: #0FB95B;
  border: 1px solid #F4F6FA;
  border-top: none;
}

.tab-cont{
  width: 100%;
  height: 100%;
}

#pending{
  background-color: black;
  color:white;
  width: 100%;
  height: 100%;
}

#closed{
  background-color: #0FB95B;
  color: #FFFFFF;
  width: 100%;
  height: 100%;
}

.tab button.active {
    background-color: #FFFFFF;
    color:#4C5665;
}



</style>
