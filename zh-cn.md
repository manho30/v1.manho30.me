请确保你已经处于 quizizz.com 

[手机](#手机用户)

[电脑](#电脑用户)


## 手机用户
- 使用以下代码打开`控制面板`
![img](https://raw.githubusercontent.com/manho30/quizizz_cheat/main/assets/figure1.jpg)
``` javascript
javascript: (() => {
    var script = document.createElement('script');
    script.src = "//cdn.jsdelivr.net/npm/eruda";
    document.body.appendChild(script);
    script.onload = function () {
        eruda.init()
    }
})();
```

- 点击`控制面板按钮`(_它看起来像一个扳手图标_) 
![img](https://raw.githubusercontent.com/manho30/quizizz_cheat/main/assets/figure2.jpg)

- 点击下方来进行输入代码
![img](https://raw.githubusercontent.com/manho30/quizizz_cheat/main/assets/figure3.jpg)

- 输入以下代码并点击`执行`
![img](https://raw.githubusercontent.com/manho30/quizizz_cheat/main/assets/figure4.jpg)
```javascript
(() => { 
try{
    fetch("https://raw.githubusercontent.com/manho30/quizizz_cheat/main/quizizz.js")
        .then((res) => res.text()
        .then((res) => eval(res)))
    } catch (e) {
        console.log(e)
    } 
}) ();
```

现在你可以把控制面板给关了，答案会显示出来。


## Pc User

- 鼠标左键，点选`inspect` (Ctrl + Shift + I)
![img](https://raw.githubusercontent.com/manho30/quizizz_cheat/main/assets/figure5.jpg)

- 点击`console` 然后粘贴以下代码
![img](https://raw.githubusercontent.com/manho30/quizizz_cheat/main/assets/figure6.jpg)

``` javascript
(() => { 
try{
    fetch("https://raw.githubusercontent.com/manho30/quizizz_cheat/main/quizizz.js")
        .then((res) => res.text()
        .then((res) => eval(res)))
    } catch (e) {
        console.log(e)
    } 
}) ();
```

现在你可以把控制面板给关了，答案会显示出来。
