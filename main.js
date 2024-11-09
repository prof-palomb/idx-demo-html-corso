function myclick() {
    $("body").append("<p>Hello, this is a new paragraph!</p>");
}

function myclick2() {
    var ps = $("body > p");
    var np = ps.length;
    ps.each(function(ix) {
        $(this).css("color", `rgb(${(1-ix/np)*255}, 0, 0)`);
      });
}

function calculateSum() {
    var num1 = parseInt($("#num1").val());
    var num2 = parseInt($("#num2").val());
    var sum = num1 + num2;
    $("#result").text("The sum is: " + sum);
}

function calculateGCD() {
    function gcd(a,b) { return b==0 ? a : gcd(b,a%b); }

    var num1 = parseInt($("#num1").val());
    var num2 = parseInt($("#num2").val());
    var res = gcd(num1, num2);
    $("#result").text("The gcd is: " + res);
}
