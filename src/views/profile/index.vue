<template>
    <div class="profile">
        <van-nav-bar title="个人中心"></van-nav-bar>
        <div class="profile-info">
            <template v-if="!$store.state.user.hasPermission">
                <img src="@/assets/logo.png" />
                <van-button size="small" to="/login">登录</van-button>
            </template>
            <template v-else>
                <!-- 头像上传 -->
                <img src="@/assets/logo.png" />
                <span>{{ $store.state.user.username }}</span>
            </template>
        </div>
        <template v-if="$store.state.user.menuPermission">
            <van-tabs type="card">
                <van-tab
                    :title="item.name"
                    v-for="(item,index) in $store.state.user.authList"
                    :key="index"
                    :to="item.path"
                ></van-tab>
            </van-tabs>
            <router-view></router-view>
        </template>
        <van-button v-has="'edit'">编辑</van-button>
        <van-button v-has="'remove'">删除</van-button>
        <div>
             <van-button @click="quite" >退出</van-button>
        </div>
       
    </div>
</template>
<script>
 import { createNamespacedHelpers } from 'vuex'
import * as Types from '@/store/action-types'
// 这里拿到的都是home 模块下的
let { mapMutations } = createNamespacedHelpers('user');
export default {
    components: {
        
    },
    methods: {
        ...mapMutations([Types.SET_PERMISSION]), 
        quite(){
            this[Types.SET_PERMISSION](false);
            localStorage.clear();
            this.$router.push('/login');
           // window.location.reload()

        }
    } 
};
</script>

<style lang="scss">
.profile {
    .profile-info {
        display: flex;
        align-items: center;
        height: 150px;
        padding: 0 15px;
        img {
            width: 100px;
            height: 100px;
        }
    }
}
</style>
