/*this is put into theme.liquid*/

<script type="text/javascript">
document.onkeydown = function (event) {
event = (event || window.event);
if (event.keyCode == 123 || event.keyCode == 18)
{
return false;
}
}
document.addEventListener('contextmenu', event => event.preventDefault());
</script>