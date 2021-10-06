function getSidebarMenuElement(engineInfo){
    console.log('getSidebarMenuElement(engineInfo) called');

    var engineInfoList = [{'engine': 'app engine', 'link': []}]

    if (engineInfo === 'app engine') {

    }
}


$(document).ready(function() {
    console.log( "document loaded" );

    function sidebarShow() {
        $('.left-main-sidebar').css('display', 'inline-block');
    }

    function sidebarClose() {
        $('.left-main-sidebar').css('display', 'none');
    }

    $('#menu-btn').click(function(){
        console.log('menu btn clicked');
        sidebarShow();
    });

    $('.sidebar-close-btn').click(function(){
        sidebarClose();
    });

    // $('.left-main-sidebar').click(function(){

    // })sidebar-menu-div
    $('.sidebar-menu').click(function(obj){
        console.log('clicked obj.target -=', obj.target);
        console.log('clicked obj.target.data("") -=', $(obj.target).parent().data('engine-info'));

        var engineInfo = $(obj.target).parent().data('engine-info');

        var leftMenuListHtmlStr = getLeftSubmenuElement(engineInfo);
        console.log('leftMenuListHtmlStr =', leftMenuListHtmlStr);
        $('#left-sidebar-link ').html(leftMenuListHtmlStr);

        sidebarClose();

        $('#selected-main-menu-text').text(engineInfo);

    });

    // 반응형 웹
    $('#responsive-dropdown-btn').click(function(obj){
       $('#dropdown-list').css('display', 'block');
    });

});
