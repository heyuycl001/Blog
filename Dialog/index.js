window.alert = (function () {
  class Dialog {
    constructor(content, option) {
      // 把后续在各个方法需要用到的属性挂载到实例上
      this.content = content
      this.option = option

      this.init()
    }

    /**
     * 生成元素
     * @param {*} type  元素类型
     * @param {*} cssText  元素样式
     */
    create (type, cssText) {
      let element = document.createElement(type)
      element.style.cssText = cssText
      return element
    }

    /*
    <div class="DIALOG">
      <div class="DIA-MAIN">
        <div class="DIA-HEADER">
          <h3 class="DIA-TITLE">系统温馨提示</h3>
          <i class="DIA-CLOSE">X</i>
        </div>
        <div class="DIA-BODY">
          用户名密码不匹配，请重新输入!
        </div>
        <div class="DIA-FOOTER">
          <button class="DIA-CONFIRM">确定</button>
          <button class="DIA-CANCEL">取消</button>
        </div>
      </div>
  	</div>
    */
    createElement () {
      this.$DIALOG = this.create('div', `
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9998;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .8);
        user-select: none;
        opacity: 0;
        transition: opacity .3s;
      `)
      this.$MAIN = this.create('div', `	
        position: absolute;
        top: 100px;
        left: 50%;
        margin-left: -200px;
        z-index: 9999;
        width: 400px;
        background: #FFF;
        border-radius: 3px;
        overflow: hidden;
        transform: translateY(-1000px);
        transition: transform .3s;
      `)
      this.$HEADER = this.create('div', `
        position: relative;
        box-sizing: border-box;
        padding: 0 10px;
        height: 40px;
        line-height: 40px;
        background: #2299EE;
        cursor: move;
      `)
      this.$TITLE = this.create('h3', `
        font-size: 18px;
        color: #FFF;
        font-weight: normal;
      `)
      this.$CLOSE = this.create('i', `
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 24px;
        font-style: normal;
        color: #FFF;
        font-family: 'Courier New';
        cursor: pointer;
      `)
      this.$BODY = this.create('div', `
        padding: 30px 10px;
        line-height: 30px;
        font-size: 16px;
      `)
      this.$FOOTER = this.create('div', `
        text-align: right;
        padding: 10px 10px;
        border-top: 1px solid #EEE;
      `)
      this.$CONFIRM = this.create('button', `
        margin: 0 5px;
        padding: 0 15px;
        height: 28px;
        line-height: 28px;
        border: none;
        font-size: 14px;
        cursor: pointer;
        color: #FFF;
        background: #2299EE;
      `)
      this.$CANCEL = this.create('button', `
        margin: 0 5px;
        padding: 0 15px;
        height: 28px;
        line-height: 28px;
        border: none;
        font-size: 14px;
        cursor: pointer;
        color: #000;
        background: #DDD;
      `)

      let {
        title,
        confirm
      } = this.option
      // HEADER
      this.$TITLE.innerHTML = title
      this.$CLOSE.innerHTML = 'X'
      this.$HEADER.appendChild(this.$TITLE)
      this.$HEADER.appendChild(this.$CLOSE)

      // BODY
      this.$BODY.innerHTML = this.content
      console.log(this.$BODY.innerHTML)

      // 把HEADER/BODY放进$MAIN
      this.$MAIN.appendChild(this.$HEADER)
      this.$MAIN.appendChild(this.$BODY)


      // 如果confirm为true,需要显示FOOTER(确定/取消)
      if (confirm) {
        this.$CONFIRM.innerHTML = '确定'
        this.$CANCEL.innerHTML = '取消'
        this.$FOOTER.appendChild(this.$CONFIRM)
        this.$FOOTER.appendChild(this.$CANCEL)
        // 把FOOTER放进main
        this.$MAIN.appendChild(this.$FOOTER)
      }

      // 整体放进来
      this.$DIALOG.appendChild(this.$MAIN)
      // 整体放进body
      document.body.appendChild(this.$DIALOG)

    }

    // 显示模态框
    show () {
      // this.$DIALOG.style.display = 'block'
      this.$DIALOG.style.opacity = '1'
      this.$MAIN.style.transform = 'translateY(0px)'

      //如果 confirm 为 false 默认3S后取消
      if (!this.option.confirm) {
        this.$timeout = setTimeout(() => {
          this.hide()
          clearTimeout(this.$timeout)
        }, 3000);
      }
    }

    /**
     * 隐藏模态框
     * @param {*} type 是怎么取消的。 点击确定/点击取消/默认3S取消
     */
    hide (type = '默认3S取消') {
      this.$MAIN.style.transform = 'translateY(-1000px)'
      this.$DIALOG.style.opacity = '0'

      // 移除创建的元素
      let fn = () => {
        // 触发handle函数
        if (typeof this.option.handle === 'function') {
          this.option.handle.call(this, type)
        }

        document.body.removeChild(this.$DIALOG)

        this.$DIALOG.removeEventListener('transitionend', fn)
      }
      this.$DIALOG.addEventListener('transitionend', fn)
    }

    down (ev) {
      // 移动先 清除 默认3S取消
      clearTimeout(this.$timeout)
      this.startX = ev.clientX
      this.startY = ev.clientY
      this.startL = this.$MAIN.offsetLeft;
      this.startT = this.$MAIN.offsetTop;
      this._move = this.move.bind(this)
      this._up = this.up.bind(this)
      document.addEventListener('mousemove', this._move)
      document.addEventListener('mouseup', this._up)
    }

    move (ev) {
      let boxOffsetL = ev.clientX
      let boxOffsetT = ev.clientY

      let left = boxOffsetL - this.startX + this.startL
      let top = boxOffsetT - this.startY + this.startT
      let minL = 0,
        minT = 0,
        maxL = this.$DIALOG.offsetWidth - this.$MAIN.offsetWidth,
        maxT = this.$DIALOG.offsetHeight - this.$MAIN.offsetHeight;
      left = left < minL ? minL : (left > maxL ? maxL : left);
      top = top < minT ? minT : (top > maxT ? maxT : top);
      this.$MAIN.style.left = left + 'px';
      this.$MAIN.style.top = top + 'px';
      this.$MAIN.style.marginLeft = 0
    }
    up (ev) {
      // 松开的时候，在打开默认取消
      this.show()
      document.removeEventListener('mousemove', this._move)
      document.removeEventListener('mouseup', this._up)
    }

    init () {
      this.createElement()
      this.$DIALOG.offsetWidth // =>阻断渲染队列,让上面的代码立即先渲染
      this.show()

      // 基于事件委托来实现 确定/取消/关闭/的事件操作
      this.$DIALOG.addEventListener('click', (ev) => {
        let target = ev.target
        // 正则匹配 事件源是 Button 或者 i 
        if (/^(BUTTON|I)$/i.test(target.tagName)) {
          // 先取消自动消失
          clearTimeout(this.$timeout)
          this.hide(target.innerHTML === '确定' ? '点击确定' : '点击取消')
        }
      })

      // 实现拖拽效果
      this.$HEADER.addEventListener('mousedown', this.down.bind(this))
    }
  }



  return function proxy (content, option = {}) {
    if (content === 'undefined') new Error('请输入内容')
    if (option === null || typeof option !== 'object') new Error('option 只能为对象')

    // 参数默认值
    option = Object.assign({
      title: '系统温馨提示',
      confirm: false,
      handle: null
    }, option)

    new Dialog(content, option)
  }
})()