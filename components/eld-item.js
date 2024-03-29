Component({

  behaviors: [],

  options: {
    multipleSlots: true
  },
  properties: {
    name: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      observer: function(newVal, oldVal) {} // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
    },
    iconPath: {
      type: String,
    },
    age: {
      type: String,
    },
    gender: {
      type: String,
    },
    checkInTime: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    address: {
      type: String,
    },
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
    show: function() {

    },
  },

  methods: {
    onEldItemTap: function() {
      wx: wx.navigateTo({
        url: '/pages/elddetial/elddetial?name=' + this.properties.name + '&age=' + this.properties.age +
          '&gender=' + this.properties.gender + '&iconPath=' + this.properties.iconPath +
          '&age=' + this.properties.age + '&gender=' + this.properties.gender + '&checkInTime=' + this.properties.checkInTime +
          '&phoneNumber=' + this.properties.phoneNumber + '&address=' + this.properties.address,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    },
  }

})