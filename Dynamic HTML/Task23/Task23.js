var reInteger = /^\d+$/;

function isInteger(s) {
    return reInteger.test(s)
}

if (isInteger("1a11"))
    document.write("Int");
else
    document.write("Not an integer");