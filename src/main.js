//打包的时候运行编译下面所有的代码
require('babel-runtime/regenerator')
//引入客户端变化的支持热更新
require('webpack-hot-middleware/client?reload=true')
//debugger
import Vue  from 'vue'
import Hello from './components/Hello.vue'

new Vue({
  el: '#app',
  template: '<div><hello></hello></div>',
  components: {Hello}
})
