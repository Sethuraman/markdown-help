/**
 * Created by sethu on 26/12/14.
 */
$(document).ready(function(){

    var getLocation=function(){
        var query = location.search;
        if (query) {
            var split = query.split('=');
            if(split.length==2 && split[0]=='?opentarget'){
                return query.split('=')[1];
            }
        }
        return 'welcome';
    };

    var loadArticle=function(location){
        $.get(location +'.md', function(data){
            $('.article').empty();
           $('.article').append(marked(data));
        });
    };

    var resetActiveSidebarItem=function(location){
        $("ul > li.active").removeClass("active");
        var liElement = $("a[href|='?opentarget=" + location + "']").parent();
        liElement.addClass("active");
    };

    var openTargetlocation=getLocation();
    loadArticle(openTargetlocation);
    resetActiveSidebarItem(openTargetlocation);
});

