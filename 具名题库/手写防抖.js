    // 防抖的理解
    // 频繁触发的时,只有最后一次会触发事件
    function debounce(fn, wait) {
        let timer = null
        return function () {
            const _this = this
            const args = arguments
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(function () {
                fn.apply(_this, args)
            }, wait);
        }
    }

    function handle() {
        console.log(Math.random());
    }
    window.addEventListener('click', debounce(handle, 1000));