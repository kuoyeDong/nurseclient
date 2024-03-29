Component({

  behaviors: [],

  options: {
    multipleSlots: true
  },
  properties: {
    name: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function(newVal, oldVal) {} // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
    },
    iconPath: {
      type: String,
      value: ''
    },
    messageTime: {
      type: String,
      value: ''
    },
    callTaskId: {
      type: String
    },
    /* 任务完成状态 */
    status: {
      type: String
    },
    elderId: {
      type: String
    }
  },
  data: {

  }, // 私有数据，可用于模版渲染

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function() {},
    moved: function() {},
    detached: function() {},
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function() {}, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready: function() {},

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function() {},
  },

  methods: {
    onMessageItemTap: function() {
      wx: wx.navigateTo({
        url: '/pages/ssodetial/ssodetial?name=' + this.properties.name + '&iconPath=' + this.properties.iconPath +
          '&messageTime=' + this.properties.messageTime + '&callTaskId=' + this.properties.callTaskId + '&status=' + this.properties.status +
          '&elderId=' + this.properties.elderId,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    },
  }

})