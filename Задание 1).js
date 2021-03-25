<script type="text/javascript">
var a = +prompt('Начало диапазона', '-4')
, b = +prompt('Конец диапазона', '17')
;
if (!isNaN(a) && !isNaN(b)) {
a = Math.ceil(a);
if (0 == a % 2) {
++a;
};
for (var i = a; i <= b; i += 2) {
document.write(i + '<br/>');
};
}
else {
alert('Некорректный ввод');
};
</script>