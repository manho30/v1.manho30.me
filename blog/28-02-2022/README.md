Make sure you have logged in into quizizz.com

[Phone User (Android Chrome)](https://github.com/manho30/quizizz_cheat#phone-user-android-chrome)

[Pc User (Windows/Mac/Linux OS)(#Phone User)


## Phone User
- Open up the console panel with code the code below to search bar.
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

- Open the console (_it's look like setting icon_) 
![img](https://raw.githubusercontent.com/manho30/quizizz_cheat/main/assets/figure2.jpg)

- Hit the bar below to type the code. 
![img](https://raw.githubusercontent.com/manho30/quizizz_cheat/main/assets/figure3.jpg)

- Type the code below and execute it. 
![img](https://raw.githubusercontent.com/manho30/quizizz_cheat/main/assets/figure4.jpg)
```JavaScript
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

You can now close the console. Now the good answer should be display in the question.


## Pc User (Windows/Mac/Linux Os)

- Right click and go choose inspect (Ctrl + Shift + I)
![img](https://raw.githubusercontent.com/manho30/quizizz_cheat/main/assets/figure5.jpg)

- Press on `console` and paste the code below
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

You can now close the console. Now the good answer should be display in the question. 
