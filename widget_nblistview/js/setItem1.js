function setIndexItem1(id,per){
    var params = {
        listViewId:id,
        dataList:[
            {
                center:{
                    "type":"index-item00",
                    "title":"习近平在阿盟总部演讲 谈中国中东政策",
                    "markImg":"res://img/news.png",
                    // "markVisible":0,
                    "source":"专题",
                    "comment":"648评论",
                    "time":"17分钟前",
                    "peri":Math.round(1*per),
                    "perw":Math.round(1*per)
                }
            },
            {
                center:{
                    "layoutId":"index-item02",
                    "title":"福建7名贪官结拜兄弟对抗组织 被称葫芦娃组合",
                    "markImg":"res://img/hot.png",
                    // "markVisible":0,
                    "source":"经济网",
                    "comment":"29评论",
                    "time":"30分钟前",
                    "picPath":"res://img/news/news1.png",
                    "peri":Math.round(1*per),
                    "perw":Math.round(1*per)
                }
            },
            {
                center:{
                    "type":"index-item01",
                    "title":"未来五年我国将建十三个超级高铁站，有你家乡吗？",
                    "picPath1":"res://img/news/imgb0.png",
                    "picPath2":"res://img/news/imgb1.png",
                    "picPath3":"res://img/news/imgb2.png",
                    "markImg":"res://img/travel.png",
                    // "markVisible":0,
                    "source":"高铁旅行",
                    "comment":"754评论",
                    "time":"20分钟前",
                    "peri":Math.round(1*per),
                    "perw":Math.round(1*per)
                }
            },
            {
                center:{
                    "layoutId":"index-item03",
                    "title":"全国迎最冷周末 多地低温破极值",
                    "picPath":"res://img/news/news2.png",
                    "markImg":"res://img/hot.png",
                    // "markVisible":0,
                    "source":"专题",
                    "comment":"4502评论",
                    "time":"37分钟前",
                    "per":Math.round(12*per),
                    "peri":Math.round(1*per),
                    "perw":Math.round(1*per)
                }
            },
            {
                center:{
                    "type":"index-item01",
                    "title":"日本车站便当能甩中国高铁盒饭几条大街？",
                    "picPath1":"res://img/news/news3.png",
                    "picPath2":"res://img/news/news4.png",
                    "picPath3":"res://img/news/news5.png",
                    "markImg":"res://img/hot.png",
                    // "markVisible":0,
                    "source":"日本旅游",
                    "comment":"754评论",
                    "time":"20分钟前",
                    "peri":Math.round(1*per),
                    "perw":Math.round(1*per)
                }
            }
        ]
    }
    uexNBListView.setItems(JSON.stringify(params));
}

function setVideoItem1(id,per){
    var params = {
        listViewId:id,
        dataList:[
            {
                center:{
                    "layoutId":"video-item01",
                    "picPath":"res://img/news/video1.jpg",
                    "title":"贾云馨说都来看我的大板牙",
                    "time":"4:05",
                    "favorable":"0",
                    "dislike":"0",
                    "comment":"0",
                    "per":Math.round(14*per),
                    "per0":Math.round(1.2*per),
                    "per1":Math.round(1.2*per),
                    "per2":Math.round(1.2*per),
                    "per3":Math.round(1.2*per),
                    "per4":Math.round(1.2*per),
                    "per5":Math.round(1.2*per),
                    "per6":Math.round(1.2*per),
                    "per7":Math.round(1.2*per),
                    
                }
            },
            {
                center:{
                    "layoutId":"video-item01",
                    "picPath":"res://img/news/video2.jpg",
                    "title":"好重啊！",
                    "time":"5:15",
                    "favorable":"0",
                    "dislike":"0",
                    "comment":"0",
                    "per":Math.round(14*per),
                    "per0":Math.round(1.2*per),
                    "per1":Math.round(1.2*per),
                    "per2":Math.round(1.2*per),
                    "per3":Math.round(1.2*per),
                    "per4":Math.round(1.2*per),
                    "per5":Math.round(1.2*per),
                    "per6":Math.round(1.2*per),
                    "per7":Math.round(1.2*per),
                }
            },
            {
                center:{
                    "layoutId":"video-item01",
                    "picPath":"res://img/news/video3.jpg",
                    "title":"粑粑的假期",
                    "time":"47:05",
                    "favorable":"0",
                    "dislike":"0",
                    "comment":"0",
                    "per":Math.round(14*per),
                    "per0":Math.round(1.2*per),
                    "per1":Math.round(1.2*per),
                    "per2":Math.round(1.2*per),
                    "per3":Math.round(1.2*per),
                    "per4":Math.round(1.2*per),
                    "per5":Math.round(1.2*per),
                    "per6":Math.round(1.2*per),
                    "per7":Math.round(1.2*per),
                }
            },
            {
                center:{
                    "layoutId":"video-item01",
                    "picPath":"res://img/news/video4.jpg",
                    "title":"看我们的小花",
                    "time":"24:42",
                    "favorable":"0",
                    "dislike":"0",
                    "comment":"0",
                    "per":Math.round(14*per),
                    "per0":Math.round(1.2*per),
                    "per1":Math.round(1.2*per),
                    "per2":Math.round(1.2*per),
                    "per3":Math.round(1.2*per),
                    "per4":Math.round(1.2*per),
                    "per5":Math.round(1.2*per),
                    "per6":Math.round(1.2*per),
                    "per7":Math.round(1.2*per),
                }
            }
        ]
    }
    uexNBListView.setItems(JSON.stringify(params));
}

function setTopicItem1(id,per){
    var params = {
        listViewId:id,
        dataList:[
            {
                center:{
                    "layoutId":"topic-item03",
                    // "concer-top":2,
                    "topicName":"我关注的话题"
                }
            },
            {
                center:{
                    "layoutId":"topic-item05",
                    "icon":"res://img/attention/4.png",
                    "topicName":"短发控",
                    "per0":Math.round(3.7*per),
                    "per1":Math.round(2.2*per),
                }
            },
            {
                center:{
                    "layoutId":"topic-item05",
                    "icon":"res://img/attention/5.png",
                    "topicName":"美甲",
                    "per0":Math.round(3.7*per),
                    "per1":Math.round(2.2*per),
                }
            },
            {
                center:{
                    "layoutId":"topic-item03",
                    // "concer-top":2,
                    "topicName":"可能感兴趣的话题"

                }
            },
            {
                center:{
                    "layoutId":"topic-item04",
                    "icon":"res://img/attention/1.png",
                    "description":"456345人已关注 398233条帖子",
                    "topicName":"爆料",
                    "per0":Math.round(3.7*per),
                    "per1":Math.round(2.2*per),
                }
            },
            {
                center:{
                    "layoutId":"topic-item04",
                    "icon":"res://img/attention/2.png",
                    "description":"456345人已关注 398233条帖子",
                    "topicName":"韩剧",
                    "per0":Math.round(3.7*per),
                    "per1":Math.round(2.2*per),
                }
            },
            {
                center:{
                    "layoutId":"topic-item04",
                    "icon":"res://img/attention/3.png",
                    "description":"456345人已关注 398233条帖子",
                    "topicName":"双眼皮",
                    "per0":Math.round(3.7*per),
                    "per1":Math.round(2.2*per),
                }
            },
            {
                center:{
                    "layoutId":"topic-item04",
                    "icon":"res://img/attention/6.png",
                    "description":"456345人已关注 398233条帖子",
                    "topicName":"影视剧",
                    "per0":Math.round(3.7*per),
                    "per1":Math.round(2.2*per),
                }
            },
            {
                center:{
                    "layoutId":"topic-item04",
                    "icon":"res://img/attention/7.png",
                    "description":"456345人已关注 398233条帖子",
                    "topicName":"房市",
                    "per0":Math.round(3.7*per),
                    "per1":Math.round(2.2*per),
                }
            },
            {
                center:{
                    "layoutId":"topic-item04",
                    "icon":"res://img/attention/8.png",
                    "description":"456345人已关注 398233条帖子",
                    "topicName":"秋田犬",
                    "per0":Math.round(3.7*per),
                    "per1":Math.round(2.2*per),
                }
            }
        ]
    }
    uexNBListView.setItems(JSON.stringify(params));
}

function setMeItem1(id,per){
    var params = {
        listViewId:id,
        dataList:[
            {
                center:{
                    "layoutId":"me00",
                    "per0":Math.round(15*per),
                    "per1":Math.round(3.5*per),
                    "per2":Math.round(3.5*per),
                    "per3":Math.round(3.5*per),
                    "per4":Math.round(3.5*per),
                    "per5":Math.round(3.5*per),
                    "per6":Math.round(3.5*per),
                    "per7":Math.round(3.5*per),
                    "per8":Math.round(3.5*per),
                   "per":Math.round(4*per)
                }
            },
            {
                center:{
                    "layoutId":"me01",
                    "title":"离线",
                    "summary-visible":2,
                     "per":Math.round(4*per)
                }
            },
            {
                center:{
                    "layoutId":"me01",
                    "title":"活动",
                    "summary-visible":2,
                     "per":Math.round(4*per)
                }
            },
            {
                center:{
                    "layoutId":"me01",
                    "title":"商城",
                    "summary":"特卖 电影",
                    "summary-visible":0,
                     "per":Math.round(4*per)
                }
            },
            {
                center:{
                    "layoutId":"me01",
                    "title":"我要爆料",
                    "summary-visible":2,
                     "per":Math.round(4*per)
                }
            },
            {
                center:{
                    "layoutId":"me01",
                    "title":"反馈",
                    "summary-visible":2,
                     "per":Math.round(4*per)
                }
            }
        ]
    }
    uexNBListView.setItems(JSON.stringify(params));
}


function addDataToStart1(listViewId){
    if(listViewId == listViewId1){
        var params = {
            listViewId:listViewId,
            index:0,//添加到列表头部
            dataList:[
                {
                    center:{
                        "type":"index-item00",
                        "title":"最新新闻-热点",
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

function addDataToEnd1(listViewId){
    //alert("addDataToEnd1");
    if(listViewId == listViewId1){
        var params = {
            listViewId:listViewId,
            index:10,//不传时，添加到列表末尾
            dataList:[
                {
                    center:{
                        "type":"index-item00",
                        "title":"更多新闻-热点",
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

