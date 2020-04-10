<template>
    <div class="detail-content">
        <el-card class="detail-main">
            <div class="img-block">
                <img  :src="productDetail.rela[mainPicIndex].filePath ? 'http://www.cqrzm.com/repo/tb/'+productDetail.rela[mainPicIndex].filePath :''">
                <div class="thumb-list">
                    <div v-for="(thumb,index) in productDetail.thumb" class="thumb" :class="{is_active_thumb: activeThumbIndex===index+1}" :key="index" @click="selectThumb(index)">
                        <img :src="'http://www.cqrzm.com/sm/file/show?fileId='+thumb.id">
                    </div>
                </div>
            </div>
            <div class="desc-content">
                <p class="product-name">{{productDetail.product.productName}}</p>
                <p>{{productDetail.product.productInfo}}</p>
                <div class="sold-out">
                    <span class="left-sold">
                        交易成功<span class="num">{{productDetail.product.soldedCount}}</span>笔
                    </span>
                    <span>
                        累计评价<span class="num">{{productDetail.product.totalComment}}</span>条
                    </span>
                </div>
                <ul class="product-attr">
                    <li><span class="attr-title">价格</span>
                        <span class="attr-content num price-tag">￥{{priceDiscounted}}</span>
                        <span class="attr-content num price-tag origin-price">￥{{priceOrigin}}</span>
                    </li>
                    <li><span class="attr-title">运费</span><span class="attr-content">包邮</span></li>
                    <li>
                        <span class="attr-title">尺码</span>
                        <span class="attr-content">
                            <div class="size-box"  v-for="(item,index) in productDetail.product.sizeList" :key="index" :class="{is_active: activeIndex===index+1}" @click="selectSize(item.preProductPrice,item.productPrice,index)">{{item.size}}</div>
                        </span>
                    </li>
                    <li>
                        <span class="attr-title">数量</span>
                        <span class="attr-content">
                            <el-input-number v-model="buyNum" @change="handleChangeBuy" :min="1" :max="productDetail.product.inventoryCount" label="描述文字"></el-input-number>
                            <span>库存{{productDetail.product.inventoryCount}}件</span>
                        </span>
                    </li>
                </ul>
                <div class="action-list">
                    <button class="purchase" @click="buyNow">立即购买</button>
                    <button class="favourite" @click="addToCart"><span class="el-icon-shopping-bag-2"></span>加入购物袋</button>
                </div>
            </div>
        </el-card>


        <div class="description">
            <div class="recommend">
                <el-card>
                    <div class="fellow-buy">大家都在买</div>
                    <div class="hot-item" v-for="(item,index) in hotList" :key="index">
                        <router-link :to="{path:'/detail',query:{productId: item.id}}">
                            <img :src="'http://www.cqrzm.com/repo/tb/'+item.relaList[0].filePath">
                                <div><span>{{item.productName}}</span></div>
                            <div class="price"><strong>￥{{item.productPrice}}</strong></div>
                        </router-link>
                    </div>
                </el-card>
            </div>

            <div class="detail-comment">
                <el-card>
                    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                        <el-tab-pane label="产品详情" name="first">
                            <div class="desc-wrap">
                                <div class="product-title">{{productDetail.product.descs[0]}}</div>
                                <table id="desc-table">
                                    <tr>
                                        <td>产品参数:</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr v-for="num in descRow" :key="num">
                                        <td>{{productDetail.product.descs[(num-1)*3+1]}}</td>
                                        <td>{{productDetail.product.descs[(num-1)*3+2]}}</td>
                                        <td>{{productDetail.product.descs[(num-1)*3+3]}}</td>
                                    </tr>
                                </table>
                            </div>

                            <div v-for="(item,index) in productDetail.products" :key="index">
                                <img  class="description-img" :src="'http://www.cqrzm.com/repo/tb/'+item.filePath">
                            </div>
                        </el-tab-pane>
                        <el-tab-pane :label="'产品评论('+commentsTotal+')'" name="second">
                            <div class="comment-row" v-for="(item,index) in comments" :key="index">
                                <div class="comment-left">
                                    <img :src="'http://www.cqrzm.com/sm/file/show?fileId='+item.id">
                                    <div>{{item.userName}}</div>
                                </div>
                                <div class="comment-right">
                                    <el-rate
                                            v-model="item.star"
                                            disabled
                                            show-score
                                            text-color="#ff9900"
                                            score-template="{value}">
                                    </el-rate>
                                    <div class="ping-txt">{{item.pingTxt}}</div>
                                </div>
                            </div>
                            <div class="pager-block">
                                <el-pagination
                                        @size-change="handleSizeChange"
                                        @current-change="handleCurrentChange"
                                        :current-page="currentPage"
                                        :page-size="20"
                                        prev-text="上一页"
                                        next-text="下一页"
                                        layout="  prev, pager, next, total,jumper,slot"
                                        :total="commentsTotal">
                                    <slot name="-"><button id="confirmJump" >确定</button></slot>
                                </el-pagination>

                            </div>
                        </el-tab-pane>

                    </el-tabs>
                </el-card>
            </div>
        </div>

    </div>
</template>
<script>
    import {getProductDetail,commentList} from "@/api/api";
    import {fetchHotSell} from "@/api/api";


    export default{
        name: 'ProductDetail',
        data(){
            return{
                productDetail:{
                    product:{
                        productInfo:'',
                        productPrice: 100,
                        sizeList:[],
                        inventoryCount:1,
                        descs:[]
                    },
                    indexs:[{}],
                    thumb:[{}],
                    rela:[{}],
                    products:[],
                },
                commentNum: 0,
                priceOrigin: 0,
                priceDiscounted: 0,
                buyNum:1,
                activeIndex: 0,
                activeThumbIndex:1,
                activeName:'first',
                comments:[],
                commentsTotal:0,
                currentPage:1,
                mainPicIndex:0,
                hotList:[],
            }
        },
        computed:{
          descRow(){
              if(this.productDetail.product.descs.length){
                  return Math.ceil((this.productDetail.product.descs.length-1)/3)
              }else{
                  return 0;
              }
          }
        },
        watch:{
            $route:{
                handler(newVal,oldVal){
                    if(newVal.query.productId!==oldVal.query.productId){
                        getProductDetail(newVal.query.productId,(result)=>{
                            this.productDetail = result.data
                            this.priceDiscounted = result.data.product.productPrice
                            this.priceOrigin = result.data.product.preProductPrice
                        })
                        commentList({
                            productId: newVal.query.productId,
                            page: 1,
                            pageSize: 20
                        },(res)=>{
                            this.comments = res.data.comments;
                            this.commentsTotal = res.data.total;
                        })
                    }
                },
                intermidate: true,
                deep:true
            }
        },
        props:{

        },
        created(){
            getProductDetail(this.$route.query.productId,(result)=>{
                this.productDetail = result.data
                this.priceDiscounted = result.data.product.productPrice
                this.priceOrigin = result.data.product.preProductPrice
            })
            commentList({
                productId: this.$route.query.productId,
                page: 1,
                pageSize: 20
            },(res)=>{
                this.comments = res.data.comments;
                this.commentsTotal = res.data.total;
            })
            fetchHotSell((res)=>{
                this.hotList = res.data
            })

        },
        methods:{
            handleChangeBuy(){

            },
            selectSize(origin,discount,index){
                this.priceOrigin = origin;
                this.priceDiscounted = discount;
                this.activeIndex = index+1;
            },
            selectThumb(index){
                this.mainPicIndex = index
                this.activeThumbIndex = index+1;
            },
            handleClick(){

            },
            buyNow(){
                if(this.activeIndex===0){
                    this.$message.error('请选择尺寸')
                    return
                }
                let orderitems=[]
                let size = this.productDetail.product.sizeList[this.activeIndex-1].size
                let fileId = this.productDetail.thumb[0].id
                let productId = this.productDetail.product.id
                orderitems.push({productName: this.productDetail.product.productName,
                    productId: productId, totalPrice: this.priceDiscounted*this.buyNum,
                    unitPrice: this.priceDiscounted,size: size,count: this.buyNum,fileId: fileId})
                this.$router.push({name:'Purchase', params:{orderItems: orderitems}})
            },
            addToCart(){
                if(this.activeIndex===0){
                    this.$message.error('请选择尺寸')
                    return
                }
                let cartItems = []
                if(localStorage['cartItems']){
                    cartItems = JSON.parse(localStorage['cartItems'])
                }
                let existIndex = cartItems.findIndex((item)=>{
                    return item.productId===this.productDetail.product.id && item.size === this.productDetail.product.sizeList[this.activeIndex-1].size && item.unitPrice=== this.priceDiscounted
                })

                if(existIndex>=0){
                    cartItems[existIndex]['count']+=this.buyNum
                    cartItems[existIndex]['totalPrice'] = cartItems[existIndex].count*cartItems[existIndex].unitPrice
                }else{
                    cartItems.push({
                        productId: this.productDetail.product.id,
                        fileId: this.productDetail.thumb[0].id,
                        filePath: this.productDetail.thumb[0].filePath,
                        productName: this.productDetail.product.productName,
                        totalPrice: this.priceDiscounted*this.buyNum,
                        count: this.buyNum,
                        size: this.productDetail.product.sizeList[this.activeIndex-1].size,
                        unitPrice: this.priceDiscounted
                    })
                }
                this.$store.state.cartItems = cartItems
                localStorage['cartItems'] = JSON.stringify(cartItems)
                this.$message.success('添加购物车成功！')
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.queryPage(val)
            },
            queryPage(pageNum){
                this.currentPage = pageNum
                let _this = this
                commentList({
                    productId: _this.productDetail.product.id,
                    page: pageNum,
                    pageSize: 20
                },(res)=>{
                    this.comments = res.data.comments;
                    this.commentsTotal = res.data.total;
                })

            },
        }
    }
</script>
<style scoped>
    .detail-content{
        width:1200px;
        margin:auto;
    }
    .detail-main{
        text-align: left;
        margin-top: 20px;
    }
    .detail-main img{
        height: 500px;
        width: 360px;
    }
    .img-block{
        width: 360px;
        vertical-align: top;
        display: inline-block;
    }
    .thumb{
        width: 50px;
        height: 50px;
        padding:5px;
        display:inline-block;
    }
    .is_active_thumb{
        background-color: #f7c85c;
    }
    .thumb img{
        width: 100%;
        height: 100%;
    }
    .desc-wrap{
        padding:20px;
        color: #444444;
        font-size: 14px;
    }
    .product-title{
        margin-bottom: 30px;
    }
    #desc-table{
        width:100%;
    }
    #desc-table tr td{
        display: table-cell;
        width: 33%;
        height: 16px;
        line-height: 29px;
    }
    .desc-content{
        display:inline-block;
        padding: 0px 40px;
        width: calc(100% - 440px);
        height: 580px;
        position: relative;
    }
    .desc-content .product-name{
        font-weight: bold;
        font-size: 17px;
    }
    .sold-out{
        border: 1px dashed #7e8080;
        border-right: none;
        border-left: none;
        color: #7e8080;
        text-align: center;
        padding: 10px 0;
    }
    .num{
        color: #f7c85c;
    }
    .sold-out>span{
        padding: 0 30px;
    }
    .sold-out>span+span{
        border-left: 1px dashed #7e8080;
    }
    .size-box{
        display:inline-block;
        border: 1px solid #7e8080;
        padding: 7px;
        margin-right: 20px;
        font-weight: bold;
    }
    .size-box.is_active{
        background-color: #ffc541cf;
        color: white;
        border: 1px solid #ffc541cf;
    }
    .attr-content{
        margin-left: 30px;
    }
    .price-tag{
        font-size: 25px;
        font-weight: bold;
    }
    .origin-price{
        text-decoration:line-through;
        font-size: 14px;
    }
    .product-attr li{
        list-style: none;
        height: 50px;
        vertical-align: middle;
    }
    .product-attr{
        /*border-bottom: 1px dashed #7e8080;*/
    }
    .action-list{
        padding-left: 40px;
        position: absolute;
        bottom: 0px;
        border-top: 1px dashed #7e8080;
        width: 675px;
    }
    .purchase,.favourite{
        width: 200px;
        height: 44px;
        font-size: 20px;
        font-weight: 300;
        background: white;
        border: 1px solid black;
        margin: 30px;
    }
    .favourite{
        background: #f7c85c;
        color: white;
        border: 1px solid #f7c85c;;
    }
    .purchase{
        margin-left: 0px;
    }

    .description{
        margin-top:30px;
        text-align:left;
    }
    .recommend,.detail-comment{
        display: inline-block;
        vertical-align: top ;
    }
    .recommend .el-card__body,.detail-comment .el-card__body{
        padding:0px;
    }
    .recommend{
        width:220px;
        margin-right:30px;
    }
    .detail-comment{
        width: 950px;
    }
    .description-img{
        width:100%;
        height: auto;
    }
    .fellow-buy{
        text-align:center;
        height: 50px;
        color: white;
        background-color: black;
        vertical-align: middle;
        line-height:50px;
    }
    .comment-row{
        padding:20px;
    }
    .comment-left{
        display: inline-block;
        width:90px;
        padding:0 30px;
    }
    .comment-right{
        display:inline-block;
        background-color: #FCF9FC;
        border-radius: 3px;
        vertical-align: top;
        /*height:250px;*/
        padding:30px;
        width: calc(100% - 210px);
    }
    .comment-left img{
        width:90px;
        height:90px;
    }
    .el-rate{
        border-bottom: 1px dashed gray;
        padding-bottom:20px;
    }
    .ping-txt{
        padding: 20px 0;
    }
    .pager-block{
        padding: 20px 30px;
        text-align: center;
    }
    #confirmJump{
        border: 1px solid #7e8080;
        margin-left: 15px;
    }
</style>
<style>
    body{
        background-color: #EEEDF0 !important;
    }
    .recommend .el-card__body,.detail-comment .el-card__body{
        padding:0px;
    }
    .recommend .el-card,.detail-comment .el-card{
        box-shadow:none;
        border-radius: 0px;
    }
    .detail-comment .el-tabs__item{
        border-bottom:3px solid #f7c85c !important;
    }
    .detail-comment .el-tabs__item.is-active{
        background-color: #f7c85c;
        color: white;
    }
    .comment-right .el-rate__icon{
        font-size:35px;
    }
    .comment-right .el-rate__text{
        font-size:23px;
        color: #c9272a !important;
    }
    .hot-item{
        height:300px;
        padding: 15px 10px;
    }
    .hot-item a{
        color: black;
        text-decoration: none;
    }

    .hot-item img{
        width:100%;
        height:250px;
    }
    .hot-item .price{
        padding-bottom:15px;
        border-bottom: 1px dashed #7e8080;
    }

</style>
