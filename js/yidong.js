
// 轮播图
{
    const bannerbox = document.querySelector(".banner-min")
    // console.log(bannerbox)
    const banners = document.querySelectorAll(".banner-min a img")
    // console.log(banners)
    const sliders = document.querySelectorAll(".lunbodian-box div")
    // console.log(sliders)
    const purv = document.querySelector(".xuanxiangka-left")
    const next = document.querySelector(".xuanxiangka-right")
    let now = 0
    let z = 10
    sliders.forEach(function (ele, index) {
        ele.onclick = function () {
            let t = 1
            if (index < now) {
                t = -1
            }
            animate(banners[now], {left: -740 * t}, 1000)
            banners[index].style.left = t * 740 + "px"
            banners[index].style.zIndex = z++
            animate(banners[index], {left: 0}, 1000)
            sliders[now].style.background = "#fff"
            sliders[index].style.background = "red"
            now = index
        }
    })

    let st = setInterval(move1, 3000)

    function move1() {
        var next = now + 1
        if (next === banners.length) {
            next = 0
        }
        animate(banners[now], {left: -740}, 1000)
        banners[next].style.zIndex = z++
        banners[next].style.left = "740px"
        animate(banners[next], {left: 0}, 1000)
        sliders[now].style.background = "#BAB0B4"
        sliders[next].style.background = "#CF1B77"
        now = next;
    }
    next.onclick=function () {
        move1()
    }

    bannerbox.onmouseover = function () {
        clearInterval(st)
    }
    bannerbox.onmouseout = function () {
        st = setInterval(move1, 3000)
    }
    window.addEventListener("blur", function () {
        clearInterval(st)
    })
    window.addEventListener("focus", function () {
        st = setInterval(move1, 3000)
    })

    //
    // let flag = true
    // purv.onclick = function () {
    //         move1();
    // }
    //
    // next.onclick = function () {
    //         move1();
    // }

}
// 分割图特效
{
    const bannerinner = document.querySelector(".section-inner")
    //获取元素
    // console.log(bannerinner)
    const banner = document.querySelectorAll(".section-one")//获取元素
    // console.log(banner)
    const prev = document.querySelector(".section-xuanxiangka-right")//获取元素
    console.log(prev)
    const next = document.querySelector(".section-xuanxiangka-left")//获取元素
    console.log(next)
    let st = setInterval(move, 2000)
    let num = 4
    let dir="dirright"

    function move() {
        if(dir=="dirright"){
            num++
        }else{
            num--
        }
//            num++;
        bannerinner.style.transition = "all 1s"
        bannerinner.style.marginLeft = -num * 300 + "px"
    }

    bannerinner.addEventListener("transitionend", function () {
        kaiguan = true;
        if (num == 12) {
            bannerinner.style.transition = "none";
            bannerinner.style.marginLeft = "-1200px";
            num = 4;
        }
        if (num == 0) {
            bannerinner.style.transition = "none";
            bannerinner.style.marginLeft = "-2400px";
            num = 8;
        }
    })
    banner.onmouseover = window.onblur = function () {//鼠标移入触发时间  终止
        clearInterval(st);
    };
    banner.onmouseout = window.onfocus = function () {//鼠标移入触发时间  继续开始
        st = setInterval(move, 2000);
    };

    let kaiguan = true//开关是真的
    next.onclick = function () {//左开关变成假的，变成假的鼠标过去不会移动
        dir="dirright"
        if (kaiguan) {
            kaiguan = false;
            move();
        }

    }
    prev.onclick = function () { //左开关变成假的，变成假的鼠标过去不会移动
        dir="left"
        if (kaiguan) {
            kaiguan = false;
//                num -= 2
            move()
        }
    }

}

// 公告部分点击特效
{
    const one = document.querySelectorAll(".gonggao-left-one>div")
    console.log(one)
    const two = document.querySelectorAll(".gonggao-right-two>div")
    console.log(two)
    const prev = document.querySelector("#jiankuohao .jiankuohao-prev")
    console.log(prev)
    const next = document.querySelector("#jiankuohao .jiankuohao-next")
    console.log(next)
    let num = 0
    next.onclick = (function () {
        num++
        if (num == one.length) {
            num = 0
        }
        for (var i = 0; i < one.length; i++) {
            one[i].style.display="none"
            two[i].style.display="none"
        }
        one[num].style.display="block"
        two[num].style.display="block"
    })

    prev.onclick = (function () {
        num--
        if (num === -1) {
            num = one.length-1
        }
        for (var i = 0; i < one.length; i++) {
            one[i].style.display="none"
            two[i].style.display="none"
        }
        one[num].style.display="block"
        two[num].style.display="block"
    })
}

