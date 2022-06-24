$(function()
{

    setTimeout(clearSplash, 4000);
    setTimeout(fadeCopyright, 1500);

    function clearSplash()
    {
        $("#splashscreen").css("display", "none");
        $(".self_navbar").css("z-index", 1000);
    }

    function fadeCopyright()
    {
        $("#copyright").fadeOut(1000);
    }
})