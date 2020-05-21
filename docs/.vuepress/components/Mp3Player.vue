<template>
   <div style=" margin-left: 20px; margin-right:20px  ">
     音乐
    <el-switch
      v-model="isPlay"
      @change="play">
    </el-switch>
    <audio ref="music" loop autoplay>
      <source src="../public/mp3/song.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        // dialogTableVisible:false,  preload="auto"
        isPlay:false,
      }
    },
    methods:{
      play(){
        if(this.$refs.music.paused){// 判断是否正在播放 返回布尔值
          this.$refs.music.play()
        }else{
          this.$refs.music.pause()
        }
        this.isPlay=!this.$refs.music.paused
          console.log(this.$refs.music.paused)
      }
    }
  }
</script>
