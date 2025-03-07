<template>
    <div class="page-404">
        <el-empty description="Sahifa topilmadi"/>
        <router-link to="/" class="router-link"> 
            <el-button type="primary" plain>
                Bosh Sahifa

            </el-button>
        </router-link>
           
    </div> 
</template>
<style>
.page-404{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 65px);
}
</style>