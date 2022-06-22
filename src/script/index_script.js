$(function()
{

    setTimeout(clearSplash, 4000);
    setTimeout(fadeCopyright, 1500);

    function clearSplash()
    {
        $("#splashscreen").css("display", "none");
    }

    function fadeCopyright()
    {
        $("#copyright").fadeOut(1000);
    }
})