<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Code Generator</title>
</head>
<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(45deg, #1ffff4, #e8eafb);
    }

    .qrcode-fram{
        width: 27rem;
        height: 34rem;
        border-radius: 23px;
        background: white;
        box-shadow: 0px 0px 20px #d900ff26;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
    }
    .qrcode-fram p{
        position: absolute;
        top: 37px;
        font-size: large;
        font-weight: 600;
        font-family: cursive;
        letter-spacing: 2px;
        color: #000000bd;
        text-shadow: 14px 5px 10px #00000052;
    }
    .qrcode-fram .qrcodeimg-frem{
        position: absolute;
        top: 6rem;
        width: 19rem;
        height: 19rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(45deg, #29c4bc, #2ebe66);
        border-radius: 23px;
        box-shadow: 5px 7px 20px #3eb1c08c;
    }
    .qrcode-fram .qrcodeimg-frem .qrcode-img{
        width: 18rem;
        height: 18rem;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 23px;
    }
    .qrcode-fram h2{
        position: absolute;
        bottom: 6rem;
        color: #1c1c1c;
        font-family: cursive;
        text-shadow: 14px 5px 10px #00000052;
    }
    .qrcode-fram .input-text{
        position: absolute;
        bottom: 2.3rem;
        width: 21rem;
        height: 2.3rem;
        background: linear-gradient(45deg, #29c4bc, #2ebe66);
        border-radius: 11px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 5px, 7px, 20px #3eb1c08c;
    }
    .qrcode-fram .input-text input{
        width: 20rem;
        height: 1.9rem;
        border-radius: 11px;
        border: none;
        outline: none;
        background: white;
        padding-left: 12px;
        font-size: larger;
        color: #1c1c1c;
    }
</style>
<body>
    <div class="qrcode-fram">
        <p>QRCode Generator</p>
        <div class="qrcodeimg-frem">
            <div class="qrcode-img">
                <div id="qrcode"></div>
            </div>
        </div>
        <h2>Enter Your Text</h2>
        <div class="input-text">
            <input type="text" name="qrcode" id="text" value="Hello World!">
        </div>
    </div>
</body>

<script src="./qrcode.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>
    var elem = document.getElementById("qrcode");
    var qrcode = new QRCode(elem, {
        width: 250,
        height: 250
    });

    function makeCode() {
        var elText = document.getElementById("text");
        qrcode.makeCode(elText.value);
    }
    makeCode();

    document.getElementById("text").onkeyup = function (e) {
        makeCode();
    }
</script>
</html>
