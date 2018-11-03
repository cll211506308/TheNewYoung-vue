<template>
  <el-row style="margin-top: 10px">
    <el-button v-if="!isAtt" type="primary" round size="mini" @click="att(fm)">关注此人</el-button>
    <el-button v-if="isAtt" type="primary" round size="mini" @click="delatt(fm)">取消关注</el-button>
  </el-row>
</template>

<script>
    export default {
        name: "att",
      data(){
          return{
            attUsers:[]
          }
      },
      props:['fm'],
      methods:{
        att(attId) {
          if (this.$store.state.data1 == null) {
            this.$message({
              message: '您还没登陆，请先登陆',
              type: 'warning'
            });
          }
          else {
            let that = this
            this.$axios.get('/friends/getAtt', {
              params: {
                userId: this.$store.state.data1, attentioneduserid: attId
              }
            })
              .then(function (response1) {
                if (response1.data.data.length == 1) {
                  that.$message({
                    message: '您已关注',
                    type: 'success'
                  });
                }
                else {
                  that.$axios.get('/friends/attention', {
                    params: {
                      userId: that.$store.state.data1, attentioneduserid: attId
                    }
                  })
                    .then(function (response2) {
                      if (response2.data.code == 200) {
                        that.$message({
                          message: '关注成功',
                          type: 'success'
                        });

                        that.$router.push({path: '/friends/likeuser/' + that.$store.state.data1})
                        setTimeout(() => {
                          that.$router.push({path: '/friends/'})
                        }, 1);

                        // that.$axios.get('users/att/' + that.$store.state.data1).then(
                        //   ((res1) => {
                        //     for (var i = 0; i < res1.data.data.length; i++) {
                        //       that.attUsers.push(res1.data.data[i].attentionedUserId)
                        //     }
                        //   })
                        // ).catch(err => {
                        //   console.log(err)
                        // })

                      }
                    })
                    .catch(function (error) {
                      console.log(error);
                    });

                }

              })
              .catch(function (error) {
                console.log(error);
              });
          }
        },

        delatt(attid){
          let that = this
          this.$axios.get('/friends/delAttention', {
            params: {
              userId:this.$store.state.data1,attentioneduserid:attid
            }
          })
            .then(function (response) {
              if(response.data.code == 200){
                that.$message({
                  message: '恭喜你，取消关注成功',
                  type: 'success'
                });

                that.$router.push({path: '/friends/likeuser/' + that.$store.state.data1})
                setTimeout(() => {
                  that.$router.push({path: '/friends/'})
                }, 1);

                // that.$axios.get('users/att/' + that.$store.state.data1).then(
                //   ((res1) => {
                //     for (var i = 0; i < res1.data.data.length; i++) {
                //       that.attUsers.push(res1.data.data[i].attentionedUserId)
                //     }
                //   })
                // ).catch(err => {
                //   console.log(err)
                // })

              }
            })
            .catch(function (error) {
              console.log(error);
            });
        },
      },
      created() {

        this.$axios.get('users/att/' + this.$store.state.data1).then(
          ((res1) => {
            for (var i = 0; i < res1.data.data.length; i++) {
              this.attUsers.push(res1.data.data[i].attentionedUserId)
            }
          })
        ).catch(err => {
          console.log(err)
        })

      },
      computed:{
        isAtt(){
          let that = this
         for(let i = 0;i<this.attUsers.length;i++){
           if(this.attUsers[i] == this.fm){
             return true
           }
         }
         return false
        }
      }
    }

</script>

<style scoped>

</style>
