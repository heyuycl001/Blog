    // 节流的理解
    // 在设定时间内，只会执行一次
    function throttle(fn, wait) {
        let timer = null
        return function () {
            const _this = this;
            const args = arguments;
            if (!timer) {
                timer = setTimeout(() => {
                    fn.apply(_this, args)
                    timer = null;
                }, wait);
            }
        }
    }

    function handle() {
        console.log(Math.random());
    }
    window.addEventListener('click', throttle(handle, 1000));