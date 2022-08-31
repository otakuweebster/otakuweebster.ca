$(function()
{
    const bannerDiv = $(".welcomebanner");
    const aboutMe = $("#aboutMe");
    const portfolio = $("#portfolio");
    const logo = $("#logo");

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

    function bannerAnimate()
    {
        if (bannerDiv.is(':visible'))
        {
            bannerDiv.slideUp(500);
        }

    }

    /**
     * Below is where, depending on the location of the page, slides up the big welcome sign banner
     */
    aboutMe.on("click", function () {
        bannerAnimate();
    });

    portfolio.on("click", function () {
        bannerAnimate();
    })

    logo.on("click", function () {
        bannerDiv.slideDown(500);
    })








})