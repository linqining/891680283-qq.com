<template>
    <div class="address-card">
        <div class="head-line"></div>
        <div class="first-line">
            <span class="username">
                {{username}}
            </span>
            <span v-if="is_default" class="default_address">默认地址</span>
        </div>

        <div class="second-line">
            <span class="phone">{{phone}}</span>
            <span class="receive-date">{{receive_time}}</span>
        </div>
        <div class="third-line">
            <span class="el-icon-location-outline"></span>
            <span class="city">{{city}}</span>
            <span class="address">{{address}}</span>
        </div>
        <img v-if="is_selected" :src="line" class="selected-img">
        <div class="bottom-line"></div>
    </div>
</template>
<script>
    import line from '@/assets/image/address/selected.png'
    export default{
        name:'AddressCard',
        data(){
            return{
                line: line,
            }
        },
        props:{
           username:{
               type: String,
               required: true,
           },
            is_default:{
               type: Boolean,
                default: false
            },
            phone:{
               type: String,
                required: true
            },
            receive_time:{
               type: String,
                default: ''
            },
            city:{
               type: String,
                required: true
            },
            address:{
               type: String,
                required: true,
            },
            is_selected:{
               type: Boolean,
                default:false,
            }
        }
    }
</script>
<style scoped>
    .address-card{
        position:relative;
        width: 300px;
        height: 160px;
        border: 1px solid #DEDBDC;
        padding: 21px 24px;
        display:inline-block;
        vertical-align:top;
    }
    .head-line,.bottom-line{
        position: absolute;
        height: 4px;
        width:100%;
        left:0px;
        background-image: url("~@/assets/image/address/line.png");
    }
    .head-line{
        top:0px;
    }
    .bottom-line{
        bottom:0px;
    }
    .username{
        font-size:12px;
        float: left;
    }
    .default_address{
        float:right;
        font-size:12px;
    }
    .first-line{
        height:24px;
        padding-bottom:12px;
        border-bottom:1px dashed #DEDBDC;
    }
    .phone{
        float:left;
    }
    .receive-date{
        float:right;
    }
    .second-line{
        padding: 20px 0;
        height: 14px;
    }
    .third-line{
        text-align: left;
        font-size:14px;
    }
    .city{
        font-weight:bold;
        padding: 0 15px;
    }
    .selected-img{
        position: absolute;
        right: 0px;
        bottom: 0px;
        z-index: 2;
    }
</style>
