var listViewId1 = "index";
var listViewId3 = "video";
var listViewId5 = "topic";
var listViewId7 = "me";
var isOpen1 = false;
var isOpen2 = false;
var isOpen3 = false;
var isOpen4 = false;
var meHeight = 0;
// var per=appcan.locStorage.getVal("per");
// per=Number(per);

function showMe(height){
    meHeight = height;
    if(isOpen4){
        showMeListView(listViewId7);
    }else{
        initMeLayout(listViewId7);
    }
}

function hideMe(){
    hideMeListView(listViewId7);
}

function showTopic(top,height){
    sTop=top;
    sHeight=height;
    if(isOpen3){
        showTopicListView(listViewId5);
    }else{
        initTopicLayout(listViewId5);
    }
}

function hideTopic(){
    hideTopicListView(listViewId5);
}

function showVideo(top,height){
    sTop=top;
    sHeight=height;
    if(isOpen2){
        showVideoListView(listViewId3);
    }else{
        initVideoLayout(listViewId3);
    }
}

function hideVideo(){
    hideVideoListView(listViewId3);
}

function showIndex(top,height){
    sTop=top;
    sHeight=height;
    if(isOpen1){
        showIndexListView(listViewId1);
    }else{
        initIndexLayout(listViewId1);
    }
}

function hideIndex(){
    hideIndexListView(listViewId1);
}

function initIndexLayout(id){
    var params = {
        listViewId:id,
        layout:{
            center:["res://layout_index_item00.xml",
            "res://layout_index_item01.xml",
            "res://layout_index_item02.xml",
            "res://layout_index_item03.xml",
            "res://layout_index_item1.xml",
            "res://layout_index_item2.xml",
            "res://layout_index_item3.xml"]
        }
    }
    uexNBListView.initLayout(JSON.stringify(params));
}

function initVideoLayout(id){
    var params = {
        listViewId:id,
        layout:{
            center:["res://layout_video_item1.xml",
            "res://layout_video_item01.xml"]
        }
    }
    uexNBListView.initLayout(JSON.stringify(params));
}

function initTopicLayout(id){
    var params = {
        listViewId:id,
        layout:{
            center:["res://layout_topic_item3.xml",
            "res://layout_topic_item4.xml",
            "res://layout_topic_item5.xml",
            "res://layout_topic_item03.xml",
            "res://layout_topic_item04.xml",
            "res://layout_topic_item05.xml"]
        }
    }
    uexNBListView.initLayout(JSON.stringify(params));
}

function initMeLayout(id){
    var params = {
        listViewId:id,
        layout:{
            center:["res://layout_me.xml",
             "res://layout_me1.xml",
             "res://layout_me00.xml",
             "res://layout_me01.xml"]
        }
    }
    uexNBListView.initLayout(JSON.stringify(params));
}

function setIndexItem(id,per){
    //var per=Number(per);
    var params = {
        listViewId:id,
        dataList:[
            {
                center:{
                    "type":"index-item1",
                    "title":"习近平在阿盟总部演讲 谈中国中东政策",
                    "isHasPic":2,
                    "markImg":"res://img/news.png",
                    "markVisible":0,
                    "source":"专题",
                    "comment":"648评论",
                    "time":"17分钟前",
                    "per":Math.round(4.5*per),
                    "peri":Math.round(1*per)
                }
            },
            {
                center:{
                    "layoutId":"index-item2",
                    "title":"福建7名贪官结拜兄弟对抗组织 被称葫芦娃组合",
                    "markImg":"res://img/hot.png",
                    "markVisible":0,
                    "source":"中国经济网",
                    "comment":"2962评论",
                    "time":"1小时前",
                    "picPath":"res://img/news/news1.png",
                    "per":Math.round(5*per),
                    "peri":Math.round(1*per)
                }
            },
            {
                center:{
                    "type":"index-item1",
                    "title":"未来五年我国将建十三个超级高铁站，有你家乡吗？",
                    "isHasPic":0,
                    "picPath1":"res://img/news/imgb0.png",
                    "picPath2":"res://img/news/imgb1.png",
                    "picPath3":"res://img/news/imgb2.png",
                    "markImg":"res://img/travel.png",
                    "markVisible":0,
                    "source":"高铁旅行",
                    "comment":"1754评论",
                    "time":"8分钟前",
                    "per":Math.round(4.5*per),
                    "peri":Math.round(1*per)
                    // "per1":Math.round(1.5*per),
                    // "per2":Math.round(1*per),
                }
            },
            {
                center:{
                    "layoutId":"index-item3",
                    "title":"全国迎最冷周末 多地低温破极值",
                    "picPath":"res://img/news/news2.png",
                    "markImg":"res://img/hot.png",
                    "markVisible":0,
                    "source":"专题",
                    "comment":"4502评论",
                    "time":"37分钟前",
                    "per":Math.round(11*per),
                    "peri":Math.round(1*per)
                }
            },
            {
                center:{
                    "type":"index-item1",
                    "title":"日本车站便当能甩中国高铁盒饭几条大街？",
                    "isHasPic":0,
                    "picPath1":"res://img/news/news3.png",
                    "picPath2":"res://img/news/news4.png",
                    "picPath3":"res://img/news/news5.png",
                    "markImg":"res://img/hot.png",
                    "markVisible":0,
                    "source":"日本旅游购物美...",
                    "comment":"754评论",
                    "time":"20分钟前",
                    "per":Math.round(4.5*per),
                    "peri":Math.round(1*per)
                    // "per1":Math.round(1.5*per),
                    // "per2":Math.round(1*per),
                }
            }
        ]
    }
    uexNBListView.setItems(JSON.stringify(params));
}

function setVideoItem(id,per){
    var params = {
        listViewId:id,
        dataList:[
            {
                center:{
                    "layoutId":"video-item1",
                    "picPath":"res://img/news/video1.jpg",
                    "title":"贾云馨说都来看我的大板牙",
                    "time":"4:05",
                    "favorable":"0",
                    "dislike":"0",
                    "comment":"0",
                    "per":Math.round(14*per),
                    "per0":Math.round(1.2*per)
                }
            },
            {
                center:{
                    "layoutId":"video-item1",
                    "picPath":"res://img/news/video2.jpg",
                    "title":"好重啊！",
                    "time":"5:15",
                    "favorable":"0",
                    "dislike":"0",
                    "comment":"0",
                    "per":Math.round(14*per),
                    "per0":Math.round(1.2*per)
                }
            },
            {
                center:{
                    "layoutId":"video-item1",
                    "picPath":"res://img/news/video3.jpg",
                    "title":"粑粑的假期",
                    "time":"47:05",
                    "favorable":"0",
                    "dislike":"0",
                    "comment":"0",
                    "per":Math.round(14*per),
                    "per0":Math.round(1.2*per)
                }
            },
            {
                center:{
                    "layoutId":"video-item1",                    
                    "picPath":"res://img/news/video4.jpg",
                    "title":"看我们的小花",
                    "time":"24:42",
                    "favorable":"0",
                    "dislike":"0",
                    "comment":"0",
                    "per":Math.round(14*per),
                    "per0":Math.round(1.2*per)
                }
            }
        ]
    }
    uexNBListView.setItems(JSON.stringify(params));
}

function updateFavoriteVideoListView(listViewId, index, num){
    //alert(listViewId+","+index+","+num);
    var params = {
        listViewId:listViewId,
        index:index,
        data:{
            center:{
                "favorable":""+num
            }
        }
    }
    uexNBListView.update(JSON.stringify(params));
}

function updateDislikeVideoListView(listViewId, index, num){
    var params = {
        listViewId:listViewId,
        index:index,
        data:{
            center:{
                "dislike":""+num
            }
        }
    }
    uexNBListView.update(JSON.stringify(params));
}

function updateCommentVideoListView(listViewId, index, num){
    var params = {
        listViewId:listViewId,
        index:index,
        data:{
            center:{
                "comment":""+num
            }
        }
    }
    uexNBListView.update(JSON.stringify(params));//更新数据
}

function setTopicItem(id,per){
    var params = {
        listViewId:id,
        dataList:[
            {
                center:{
                    "layoutId":"topic-item3",
                    // "concer-top":2,
                    "topicName":"我关注的话题"
                }
            },
            {
                center:{
                    "layoutId":"topic-item5",
                    "icon":"res://img/attention/4.png",
                    "topicName":"短发控",              
                    "per":Math.round(4*per),
                    "per1":Math.round(2*per)
                }
            },
            {
                center:{
                    "layoutId":"topic-item5",
                    "icon":"res://img/attention/5.png",
                    "topicName":"美甲",              
                    "per":Math.round(4*per),
                    "per1":Math.round(2*per)
                }
            },
            {
                center:{
                    "layoutId":"topic-item3",
                    // "concer-top":2,
                    "topicName":"可能感兴趣的话题"

                }
            },
            {
                center:{
                    "layoutId":"topic-item4",
                    "icon":"res://img/attention/1.png",
                    "description":"456345人已关注 398233条帖子",
                    "topicName":"爆料",                    
                    "per":Math.round(4*per),
                    "per1":Math.round(2*per)
                }
            },
            {
                center:{
                    "layoutId":"topic-item4",
                    "icon":"res://img/attention/2.png",
                    "description":"456345人已关注 398233条帖子",
                    "topicName":"韩剧",              
                    "per":Math.round(4*per),
                    "per1":Math.round(2*per)
                }
            },
            {
                center:{
                    "layoutId":"topic-item4",
                    "icon":"res://img/attention/3.png",
                    "description":"456345人已关注 398233条帖子",
                    "topicName":"双眼皮",              
                    "per":Math.round(4*per),
                    "per1":Math.round(2*per)
                }
            },
            {
                center:{
                    "layoutId":"topic-item4",
                    "icon":"res://img/attention/6.png",
                    "description":"456345人已关注 398233条帖子",
                    "topicName":"影视剧",              
                    "per":Math.round(4*per),
                    "per1":Math.round(2*per)
                }
            },
            {
                center:{
                    "layoutId":"topic-item4",
                    "icon":"res://img/attention/7.png",
                    "description":"456345人已关注 398233条帖子",
                    "topicName":"房市",              
                    "per":Math.round(4*per),
                    "per1":Math.round(2*per)
                }
            },
            {
                center:{
                    "layoutId":"topic-item4",
                    "icon":"res://img/attention/8.png",
                    "description":"456345人已关注 398233条帖子",
                    "topicName":"秋田犬",              
                    "per":Math.round(4*per),
                    "per1":Math.round(2*per)
                }
            }
        ]
    }
    uexNBListView.setItems(JSON.stringify(params));
}

function setMeItem(id,per){
    // alert(per);
    var params = {
        listViewId:id,
        dataList:[
            {
                center:{
                    "layoutId":"me",
                    "per0":Math.round(15*per),
                    "per":Math.round(3.5*per),
                    "per1":Math.round(4*per),
                    "per2":Math.round(3*per)
                }
            },
            {
                center:{
                    "layoutId":"me1",
                    "title":"离线",
                    "summary-visible":2,
                    "per":Math.round(3*per)
                }
            },
            {
                center:{
                    "layoutId":"me1",
                    "title":"活动",
                    "summary-visible":2,
                    "per":Math.round(3*per)
                }
            },
            {
                center:{
                    "layoutId":"me1",
                    "title":"商城",
                    "summary":"特卖 电影",
                    "summary-visible":0,
                    "per":Math.round(3*per)
                }
            },
            {
                center:{
                    "layoutId":"me1",
                    "title":"我要爆料",
                    "summary-visible":2,
                    "per":Math.round(3*per)
                }
            },
            {
                center:{
                    "layoutId":"me1",
                    "title":"反馈",
                    "summary-visible":2,
                    "per":Math.round(3*per)
                }
            }
        ]
    }
    uexNBListView.setItems(JSON.stringify(params));
}

function openMe(listViewId, top, height){
    var params = {
        listViewId:listViewId,
        left: 0,//(必选) 左间距
        top: top,//(必选) 上间距
        width:window.screen.width,//(必选) 宽
        height:height,//(必选) 高
        openType:0,//(可选) 打开方式,0-webView,1-window,2-容器
        swipeMode:3,//(可选) 侧滑模式，0-右滑，1-左滑，2-左右滑，3-不能滑。默认3
        refreshMode:0//(可选) 刷新模式，0-无，1-下拉，2-上拉，3-上拉下拉。默认3
    }
    uexNBListView.open(JSON.stringify(params));
}

function showMeListView(id){
    var params = {
        listViewId:id
    }
    uexNBListView.show(JSON.stringify(params));
}

function hideMeListView(id){
    var params = {
        listViewId:id
    }
    uexNBListView.hide(JSON.stringify(params));
}

function openTopic(listViewId, top, height){
    var params = {
        listViewId:listViewId,
        left: 0,//(必选) 左间距
        top: top,//(必选) 上间距
        width:window.screen.width,//(必选) 宽
        height:height,//(必选) 高
        openType:0,//(可选) 打开方式,0-webView,1-window,2-容器
        swipeMode:3,//(可选) 侧滑模式，0-右滑，1-左滑，2-左右滑，3-不能滑。默认3
        refreshMode:0//(可选) 刷新模式，0-无，1-下拉，2-上拉，3-上拉下拉。默认3
    }
    uexNBListView.open(JSON.stringify(params));
}

function showTopicListView(id){
    var params = {
        listViewId:id
    }
    uexNBListView.show(JSON.stringify(params));
}

function hideTopicListView(id){
    var params = {
        listViewId:id
    }
    uexNBListView.hide(JSON.stringify(params));
}

function openVideo(listViewId, top, height){
    var params = {
        listViewId:listViewId,
        left: 0,//(必选) 左间距
        top: top,//(必选) 上间距
        width:window.screen.width,//(必选) 宽
        height:height,//(必选) 高
        openType:0,//(可选) 打开方式,0-webView,1-window,2-容器
        swipeMode:3,//(可选) 侧滑模式，0-右滑，1-左滑，2-左右滑，3-不能滑。默认3
        refreshMode:0//(可选) 刷新模式，0-无，1-下拉，2-上拉，3-上拉下拉。默认3
    }
    uexNBListView.open(JSON.stringify(params));
}

function showVideoListView(id){
    var params = {
        listViewId:id
    }
    uexNBListView.show(JSON.stringify(params));
}

function hideVideoListView(id){
    var params = {
        listViewId:id
    }
    uexNBListView.hide(JSON.stringify(params));
}

function openIndex(listViewId, top, height){
    var params = {
        listViewId:listViewId,
        left: 0,//(必选) 左间距
        top: top,//(必选) 上间距
        width:window.screen.width,//(必选) 宽
        height:height,//(必选) 高
        openType:0,//(可选) 打开方式,0-webView,1-window,2-容器
        swipeMode:3,//(可选) 侧滑模式，0-右滑，1-左滑，2-左右滑，3-不能滑。默认3
        refreshMode:3//(可选) 刷新模式，0-无，1-下拉，2-上拉，3-上拉下拉。默认3
    }
    uexNBListView.open(JSON.stringify(params));
}

function showIndexListView(id){
    var params = {
        listViewId:id
    }
    uexNBListView.show(JSON.stringify(params));
}

function hideIndexListView(id){
    //alert(id);
    var params = {
        listViewId:id
    }
    uexNBListView.hide(JSON.stringify(params));
}

function deleteData(listViewId, index){
    var params = {
        listViewId:listViewId,
        indexes:[index]
    }
    uexNBListView.delete(JSON.stringify(params));
}

function addDataToStart(listViewId){
    if(listViewId == listViewId1){
        var params = {
            listViewId:listViewId,
            index:0,//添加到列表头部
            dataList:[
                {
                    center:{
                        "type":"index-item1",
                        "title":"最新新闻-热点",
                        "isHasPic":2,
                        "markImg":"res://img/hot.png",
                        "markVisible":0,
                        "source":"长安街知事",
                        "comment":"235评论",
                        "time":"1分钟前"
                    }
                }
            ]
        }
        uexNBListView.insert(JSON.stringify(params));
    }
}

function addDataToEnd(listViewId){
    if(listViewId == listViewId1){
        var params = {
            listViewId:listViewId,
            //index:0,//不传时，添加到列表末尾
            dataList:[
                {
                    center:{
                        "type":"index-item1",
                        "title":"更多新闻-热点",
                        "isHasPic":2,
                        "markImg":"res://img/hot.png",
                        "markVisible":2,
                        "source":"长安街知事",
                        "comment":"235评论",
                        "time":"1分钟前"
                    }
                }
            ]
        }
        uexNBListView.insert(JSON.stringify(params));
    }
}