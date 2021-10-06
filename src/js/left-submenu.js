function getLeftSubmenuElement(engineInfo) {
    // 실질적으로는 네트워크 통신으로 정보를 받아와야겠지만, 이번 과제에서 HTML, JS만으로 구현하기 위하여 아래와 같이 정보 입력
    if (engineInfo === 'app engine') {
        var menuList = [{'submenuText': 'App engine submenu1', 'url': '#', 'imgUrl': '/src/image/award-fill.svg'},
                        {'submenuText': 'App engine submenu2', 'url': '#', 'imgUrl': '/src/image/bag-fill.svg'},
                        {'submenuText': 'App engine submenu3', 'url': '#', 'imgUrl': '/src/image/bookmark-plus-fill.svg'}]
    } else if (engineInfo === 'compute engine') {
        var menuList = [{'submenuText': 'Compute engine submenu1', 'url': '#', 'imgUrl': '/src/image/bag-fill.svg'},
                        {'submenuText': 'Compute engine submenu2', 'url': '#', 'imgUrl': '/src/image/bookmark-plus-fill.svg'},
                        {'submenuText': 'Compute engine submenu3', 'url': '#', 'imgUrl': '/src/image/award-fill.svg'}]
    } else if (engineInfo === 'container engine') {
        var menuList = [{'submenuText': 'Container engine submenu1', 'url': '#', 'imgUrl': '/src/image/bookmark-plus-fill.svg'},
                        {'submenuText': 'Container engine submenu2', 'url': '#', 'imgUrl': '/src/image/award-fill.svg'},
                        {'submenuText': 'Container engine submenu3', 'url': '#', 'imgUrl': '/src/image/bag-fill.svg'}]
    }

    let menuListHtmlStr = ''
    menuList.forEach(obj => {
        menuListHtmlStr = menuListHtmlStr + `<div class="left-submenu" onclick="location.href = '${obj.url}'">
                                                 <img src="${obj.imgUrl}" style="width: 20px; height: 20px;">
                                                 <span class="left-submenu-text">${obj.submenuText}</span>
                                             </div>`
    })

    return menuListHtmlStr;

}

var leftSubmenuElement = `<div class="left-submenu">
<img src="./src/image/award-fill.svg" style="width: 20px; height: 20px;">
<span class="left-submenu-text">App Engine submenu1</span>
</div>`

