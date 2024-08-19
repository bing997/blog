---
title: 17-项目案例：Web设计与定制网站
date: 2024-08-19T17:23:57+08:00
tags:
    - bootstrap
    - 教程
    - 项目案例
categories: bootstrap
cover:  https://bing997.github.io/blog/images/cover17.png
index_enable: true # 是否显示文章封面
aside_enable: true 
archives_enable: true 
position: both  # 封面显示的位置 三个值可配置left , right , both 
default_cover:   # 当没有设置cover时，默认的封面显示
sticky: false  # 设置为 true 即可置顶
description: "bootstrap"
---

## Web设计与定制网站

### 网站概述

#### 网站结构
**目标**：设计并定制一个完整的网站，包含多种功能页面，以满足不同的业务需求。

**主要页面**:
+ 首页
+ 关于我们
+ 我们的团队
+ 我们的服务
+ 我们的博客
+ 我们的定制
+ 脚注

**网站结构概述**:
+ **导航栏**: 提供主要页面链接。
+ **主内容区**: 根据页面类型显示相应内容。
+ **脚注**: 包含版权信息和其他链接。


#### 网站布局
**布局原则**:
+ 响应式设计: 确保网站在各种设备上显示良好。
+ 清晰导航: 提供明确的导航以帮助用户找到所需信息。
+ 视觉层次: 通过布局和样式设计引导用户注意重要信息。

**布局组件**:
+ 头部（Header）: 包含Logo和导航菜单。
+ 主内容区: 各个页面的主要内容展示区。
+ 侧边栏（可选）: 显示额外信息或链接。
+ 脚注（Footer）: 显示版权信息和网站链接。

#### 设计准备
**需求分析**: 确定网站的目标用户、主要功能和设计风格。
**设计工具**: 使用设计工具如Adobe XD、Figma等进行原型设计。
**素材准备**: 准备网站所需的图像、图标和其他多媒体素材。


### 设计主页面导航
```html
<!--导航-->
<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top" id="navbar">
    <a href="#" class="navbar-brand px-5"><b><i>刘飞</i></b><small>&nbsp;个人站点</small></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ml-5" id="navbarContent">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 nav-list">
            <li class="nav-item">
                <a href="#list1" class="nav-link">首页</a>
            </li>
            <li class="nav-item">
                <a href="#list2" class="nav-link">关于</a>
            </li>
            <li class="nav-item">
                <a href="#list3" class="nav-link">团队</a>
            </li>
            <li class="nav-item">
                <a href="#list4" class="nav-link">服务</a>
            </li>
            <li class="nav-item">
                <a href="#list5" class="nav-link">博客</a>
            </li>
            <li class="nav-item">
                <a href="#list6" class="nav-link">定制</a>
            </li>
        </ul>
        <div class="px-5 iconColor">
            <a href="#"><i class="fa fa-weixin"></i></a>
            <a href="#"><i class="fa fa-qq"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-google-plus"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>
        </div>
    </div>
</nav>
```

### 设计主页面内容
```html
<!--首页内容-->
<h4 id="list1" class="list"></h4>
<div class="img-b">
    <div class="jumbotron jumbotron-fluid text-white d-flex align-items-center m-0">
        <div class="container">
            <h1 class="display-4">专业网页设计10年</h1>
            <p class="lead">我们让每一个品牌都更加出色</p>
            <a href="javascript:;" class="btn btn-danger">了解更多</a>
        </div>
    </div>
</div>
<div class="bg-dark py-5 text-white">
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <h2><i class="fa fa-laptop mr-2"></i>网页设计与 <span class="text-white-50">发展</span></h2>
                <p>设计网页的目的不同，应选择不同的网页策划与设计方案</p>
            </div>
            <div class="col-lg-4">
                <h2><i class="fa fa-rocket mr-2"></i>网页设计与 <span class="text-white-50">品牌化</span></h2>
                <p>网页设计的主要目标，是通过使用合理的颜色、字体、图片、样式进行页面梅花</p>
            </div>
            <div class="col-lg-4">
                <h2><i class="fa fa-camera mr-2"></i>网页设计与 <span class="text-white-50">创意</span></h2>
                <p>在功能限定的情况下，尽可能给予用户完美的视觉体验</p>
            </div>
        </div>
    </div>
</div>
```

#### “关于我们”页面设计
```html
<!--关于我们-->
<h4 id="list2" class="list"></h4>
<div class="container">
    <h1 class="text-center">__关于我们__</h1>
    <p class="my-4">运营平台的强大流量资源与用户资源，把企业信息即时的展现在有需求的移动用户面前，促使用户关注您的企业产品与服务，并进一步与您的企业建立深入沟通，最终达成交易</p>
    <div class="row">
        <div class="col-lg-6">
            <h3 class="mb-4">我们的职责</h3>
            <ul>
                <li><i class="fa fa-angle-right"></i>负责对网站整体表现风格的定位，对用户视觉感受的整体把握。</li>
                <li><i class="fa fa-angle-right"></i>进行网页的具体设计制作。</li>
                <li><i class="fa fa-angle-right"></i>产品目录的平面设计。</li>
                <li><i class="fa fa-angle-right"></i>各类活动的广告设计。</li>
                <li><i class="fa fa-angle-right"></i>协助开发人员页面设计等工作。</li>
            </ul>
            <a href="javascript:;" class="btn btn-primary">开始你的工作吧</a>
        </div>
        <div class="col-lg-6">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593143278393&di=5cdacd851b265e108657a8355d5077f4&imgtype=0&src=http%3A%2F%2F7xil86.com2.z0.glb.qiniucdn.com%2Fuploads%2Fimages%2F2016%2F07%2F43.jpeg"
                 alt="about" class="img-fluid img-thumbnail">
        </div>
    </div>
    <div class="row no-gutters mt-5">
        <div class="col-md-6">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593143278383&di=1da1a7339ac418dbe776ed3979d94439&imgtype=0&src=http%3A%2F%2Fimg01.chrstatic.com%2Fimages%2Fphoto%2F201608%2F1471573521334syh8zy.jpg"
                 class="img-fluid" alt="">
        </div>
        <div class="col-md-6 bg-dark text-white px-5 pt-5">
            <h3 class="mb-4">工作的内容:</h3>
            <p class="">网页如门面，小到个人主页，大到大公司，大的政府部门以及国际组织等在网络上无不以网页作为自己的门面。当点击到网站时，首先映入眼帘的是
                该网页的设计，如内容的介绍、按钮的摆放、文字的组合、色彩的调用、使用的引导等。这一切都是网页设计的范畴，都是网页设计师的工作。</p>
        </div>
    </div>
</div>
```

#### “我们的团队”页面设计
```html
<!--我们的团队-->
<h4 id="list3" class="list"></h4>
<div class="container">
    <h1 class="text-center">__我们的团队__</h1>
    <p class="my-4">每一天我们都憧憬更高更远的未来，不断前行，加倍自信。团队协作是通向成功的保证，专注则让我们更加优秀。我们有着从业超过十年的技术总监群，
        也有年轻而具有活力的新生代力量，当业界顶尖的设计师同聚一堂，那一定可以创造奇迹。我们乐于接受新的挑战，也相信明天一定会更好。</p>
    <div class="row">
        <div class="col-12 col-md-4">
            <div class="box">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593145049739&di=7dff328db1e6eca2671fb26edabcfca2&imgtype=0&src=http%3A%2F%2Fimg3.cutv.com%2Fimages%2F2019%2F7%2F4%2F2019741562253671878_412.jpg"
                     class="img-fluid w-100" alt="">
            </div>
            <div class="bg-primary text-center py-2 iconColor">
                <a href="javascript:;"><i class="fa fa-weixin"></i></a>
                <a href="javascript:;"><i class="fa fa-qq"></i></a>
                <a href="javascript:;"><i class="fa fa-phone"></i></a>
            </div>
            <h2 class="text-center bg-dark text-white py-3">Wilson</h2>
        </div>
        <div class="col-12 col-md-4">
            <div class="box">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593145049739&di=7dff328db1e6eca2671fb26edabcfca2&imgtype=0&src=http%3A%2F%2Fimg3.cutv.com%2Fimages%2F2019%2F7%2F4%2F2019741562253671878_412.jpg"
                     class="img-fluid w-100" alt="">
            </div>
            <div class="bg-primary text-center py-2 iconColor">
                <a href="javascript:;"><i class="fa fa-weixin"></i></a>
                <a href="javascript:;"><i class="fa fa-qq"></i></a>
                <a href="javascript:;"><i class="fa fa-phone"></i></a>
            </div>
            <h2 class="text-center bg-dark text-white py-3">Anne</h2>
        </div>
        <div class="col-12 col-md-4">
            <div class="box">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593145049739&di=7dff328db1e6eca2671fb26edabcfca2&imgtype=0&src=http%3A%2F%2Fimg3.cutv.com%2Fimages%2F2019%2F7%2F4%2F2019741562253671878_412.jpg" class="img-fluid w-100" alt="">
            </div>
            <div class="bg-primary text-center py-2 iconColor">
                <a href="javascript:;"><i class="fa fa-weixin"></i></a>
                <a href="javascript:;"><i class="fa fa-qq"></i></a>
                <a href="javascript:;"><i class="fa fa-phone"></i></a>
            </div>
            <h2 class="text-center bg-dark text-white py-3">Kevin</h2>
        </div>
    </div>
    <div class="mt-4 bg1">
        <div class="row text-white">
            <div class="col-md-3 text-center py-5">
                <div><i class="fa fa-trophy fa-3x i-circle rounded-circle"></i></div>
                <h2 class="my-4">50</h2>
                <h5>获奖</h5>
            </div>
            <div class="col-md-3 text-center py-5">
                <div><i class="fa fa-code fa-3x i-circle rounded-circle"></i></div>
                <h2 class="my-4">358000</h2>
                <h5>代码行</h5>
            </div>
            <div class="col-md-3 text-center py-5">
                <div><i class="fa fa-globe fa-3x i-circle rounded-circle"></i></div>
                <h2 class="my-4">786</h2>
                <h5>全球客户</h5>
            </div>
            <div class="col-md-3 text-center py-5">
                <div><i class="fa fa-rocket fa-3x i-circle rounded-circle"></i></div>
                <h2 class="my-4">1280</h2>
                <h5>交付的项目</h5>
            </div>
        </div>
    </div>
</div>
```

#### “我们的服务”页面设计
```html
<!--我们的服务-->
<h4 id="list4" class="list"></h4>
<div class="container">
    <h1 class="text-center">__我们的服务__</h1>
    <p class="my-4">我们可以为您的公司提供全面服务--从检验到审核，到测试和分析以及认证。我们致力于为您的公司提供每个领域中的最佳解决方案。</p>
    <div class="row">
        <div class="col-md-6">
            <div class="row">
                <div class="col-md-4 text-center">
                    <i class="fa fa-diamond fa-3x i-circle rounded-circle"></i>
                </div>
                <div class="col-md-8">
                    <h4>认证</h4>
                    <p>在众多技术领域和国家地区、我们都已获得授信以验证您的体系、产品、人员或资产满足特定要求、并颁发证书正式确认。</p>
                    <a href="javascript:;" class="btn btn-primary">更多信息</a>
                </div>
            </div>
        </div>
        <div class="col-md-6 mb-5">
            <div class="row">
                <div class="col-md-4 text-center">
                    <i class="fa fa-mobile fa-3x i-circle rounded-circle"></i>
                </div>
                <div class="col-md-8">
                    <h4>咨询</h4>
                    <p>我们可以为您提供质量、安全、环境和社会责任方面的建议、全球行业基准和技术咨询服务。</p>
                    <a href="javascript:;" class="btn btn-primary">更多信息</a>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="row">
                <div class="col-md-4 text-center">
                    <i class="fa fa-rocket fa-3x i-circle rounded-circle"></i>
                </div>
                <div class="col-md-8">
                    <h4>培训</h4>
                    <p>我们提供全方位的培训服务，覆盖了与您业务活动相关的所有符合性问题。从而帮助您改进质量、安全、社会责任领域的能力，并且鼓励您考虑“人员因素”。</p>
                    <a href="javascript:;" class="btn btn-primary">更多信息</a>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="row">
                <div class="col-md-4 text-center">
                    <i class="fa fa-internet-explorer fa-3x i-circle rounded-circle"></i>
                </div>
                <div class="col-md-8">
                    <h4>检查与审核</h4>
                    <p>在全世界的每个经济领域中，我们都能够依照本地或国际标准和法规，或自愿要求，对您的设施、设备和产品实施检验--并审核您的系统与流程。</p>
                    <a href="javascript:;" class="btn btn-primary">更多信息</a>
                </div>
            </div>
        </div>
    </div>
</div>
```

#### “我们的博客”页面设计
```html
<!--我们的博客-->
<h4 id="list5" class="list"></h4>
<div class="container blog">
    <h1 class="text-center">__我们的博客__</h1>
    <p class="my-4">"乐于分享，加速成长，共同进步，和谐共赢"，不仅说到，并且做到了!知识不是力量，知识只是潜能，应用改变自我和世界才有价值，知行合一！
    分享知识会得到更多的知识以及更多超越知识的东西！分享是人与人间最基础的信任。</p>
    <div class="row">
        <div class="col-4">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593149879032&di=169f096c4a4dc42e4c161f78de01f698&imgtype=0&src=http%3A%2F%2Fimg.mw8.com%2F170620%2F1496967818.gif" class="img-fluid" alt="">
        </div>
        <div class="col-4">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593149879032&di=169f096c4a4dc42e4c161f78de01f698&imgtype=0&src=http%3A%2F%2Fimg.mw8.com%2F170620%2F1496967818.gif" class="img-fluid" alt="">
        </div>
        <div class="col-4 mb-4">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593149879032&di=169f096c4a4dc42e4c161f78de01f698&imgtype=0&src=http%3A%2F%2Fimg.mw8.com%2F170620%2F1496967818.gif" class="img-fluid" alt="">
        </div>
        <div class="col-4">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593149879032&di=169f096c4a4dc42e4c161f78de01f698&imgtype=0&src=http%3A%2F%2Fimg.mw8.com%2F170620%2F1496967818.gif" class="img-fluid" alt="">
        </div>
        <div class="col-4">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593149879032&di=169f096c4a4dc42e4c161f78de01f698&imgtype=0&src=http%3A%2F%2Fimg.mw8.com%2F170620%2F1496967818.gif" class="img-fluid" alt="">
        </div>
        <div class="col-4">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593149879032&di=169f096c4a4dc42e4c161f78de01f698&imgtype=0&src=http%3A%2F%2Fimg.mw8.com%2F170620%2F1496967818.gif" class="img-fluid" alt="">
        </div>
    </div>

</div>
```

#### “我们的定制”页面设计
```html
<!--我们的定制-->
<h4 id="list6" class="list"></h4>
<div class="container px-5">
    <h1 class="text-center">__我们的定制__</h1>
    <p class="my-4">我们的定制内容包括以下3种，您可以根据需要进行选择，期待与您的合作。</p>
    <div class="row text-white">
        <div class="col-4">
            <div class="text-center">
                <h5 class="bg-light py-3 m-0 text-success">创业基础</h5>
                <h5 class="bg-primary py-2 m-0">服务标准</h5>
            </div>
            <ul class="list-group list-group-flush text-center">
                <li class="list-group-item list-group-item-secondary">1-3年经验设计师</li>
                <li class="list-group-item list-group-item-secondary">2套LOGO设计方案</li>
                <li class="list-group-item list-group-item-secondary">3个工作日出设计初稿</li>
                <li class="list-group-item list-group-item-secondary">5个工作日出设计稿</li>
                <li class="list-group-item list-group-item-secondary">12项可编辑矢量源文件</li>
                <li class="list-group-item list-group-item-secondary py-4"><a href="javascript:;" class="btn btn-primary">现在定制</a></li>
            </ul>
        </div>
        <div class="col-4">
            <div class="text-center">
                <h5 class="bg-warning py-3 m-0 text-success">豪华套餐</h5>
                <h5 class="bg-primary py-2 m-0">服务标准</h5>
            </div>
            <ul class="list-group list-group-flush text-center">
                <li class="list-group-item list-group-item-secondary">3-5年经验设计师</li>
                <li class="list-group-item list-group-item-secondary">3套LOGO设计方案</li>
                <li class="list-group-item list-group-item-secondary">2个工作日出LOGO设计初稿</li>
                <li class="list-group-item list-group-item-secondary">5-8个工作日出设计稿</li>
                <li class="list-group-item list-group-item-secondary">30项可编辑矢量源文件</li>
                <li class="list-group-item list-group-item-secondary py-4"><a href="javascript:;" class="btn btn-primary">现在定制</a></li>
            </ul>
        </div>
        <div class="col-4">
            <div class="text-center">
                <h5 class="bg-light py-3 m-0 text-success">全部套餐</h5>
                <h5 class="bg-primary py-2 m-0">服务标准</h5>
            </div>
            <ul class="list-group list-group-flush text-center">
                <li class="list-group-item list-group-item-secondary">5年以上经验设计师</li>
                <li class="list-group-item list-group-item-secondary">4套LOGO设计方案</li>
                <li class="list-group-item list-group-item-secondary">5个工作日出LOGO设计初稿</li>
                <li class="list-group-item list-group-item-secondary">7-9个工作日出设计稿</li>
                <li class="list-group-item list-group-item-secondary">58项可编辑矢量源文件</li>
                <li class="list-group-item list-group-item-secondary py-4"><a href="javascript:;" class="btn btn-primary">现在定制</a></li>
            </ul>
        </div>
    </div>
</div>
```

### 设计脚注
```html
<!--设计脚注-->
<footer class="footer bg-dark text-white py-5 mt-5">
    <div class="iconColor text-center">
        <a href="javascript:;"><i class="fa fa-weixin fa-2x"></i></a>
        <a href="javascript:;" class="mx-3"><i class="fa fa-qq fa-2x"></i></a>
        <a href="javascript:;"><i class="fa fa-twitter fa-2x"></i></a>
        <a href="javascript:;" class="mx-3"><i class="fa fa-google-plus fa-2x"></i></a>
        <a href="javascript:;"><i class="fa fa-github fa-2x"></i></a>
    </div>
    <div class="text-center my-3">
        <p>Copyright &copy;2020.</p>
    </div>
</footer>
```

### 完整代码
#### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <title>Web设计与定制网站</title>
    <!--    Bootstrap核心css文件-->
    <link rel="stylesheet" href="https://cdn.bootcss.com/twitter-bootstrap/4.4.1/css/bootstrap.min.css">
    <!--    图标字体插件-->
    <link rel="stylesheet" href="../font-awesome-4.7.0/css/font-awesome.css">
    <!--    自定义样式-->
    <link rel="stylesheet" href="style.css">
</head>
<body data-spy="scroll" data-target="#navbar">
<!--导航-->
<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top" id="navbar">
    <a href="#" class="navbar-brand px-5"><b><i>刘飞</i></b><small>&nbsp;个人站点</small></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ml-5" id="navbarContent">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 nav-list">
            <li class="nav-item">
                <a href="#list1" class="nav-link">首页</a>
            </li>
            <li class="nav-item">
                <a href="#list2" class="nav-link">关于</a>
            </li>
            <li class="nav-item">
                <a href="#list3" class="nav-link">团队</a>
            </li>
            <li class="nav-item">
                <a href="#list4" class="nav-link">服务</a>
            </li>
            <li class="nav-item">
                <a href="#list5" class="nav-link">博客</a>
            </li>
            <li class="nav-item">
                <a href="#list6" class="nav-link">定制</a>
            </li>
        </ul>
        <div class="px-5 iconColor">
            <a href="#"><i class="fa fa-weixin"></i></a>
            <a href="#"><i class="fa fa-qq"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-google-plus"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>
        </div>
    </div>
</nav>
<!--首页内容-->
<h4 id="list1" class="list"></h4>
<div class="img-b">
    <div class="jumbotron jumbotron-fluid text-white d-flex align-items-center m-0">
        <div class="container">
            <h1 class="display-4">专业网页设计10年</h1>
            <p class="lead">我们让每一个品牌都更加出色</p>
            <a href="javascript:;" class="btn btn-danger">了解更多</a>
        </div>
    </div>
</div>
<div class="bg-dark py-5 text-white">
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <h2><i class="fa fa-laptop mr-2"></i>网页设计与 <span class="text-white-50">发展</span></h2>
                <p>设计网页的目的不同，应选择不同的网页策划与设计方案</p>
            </div>
            <div class="col-lg-4">
                <h2><i class="fa fa-rocket mr-2"></i>网页设计与 <span class="text-white-50">品牌化</span></h2>
                <p>网页设计的主要目标，是通过使用合理的颜色、字体、图片、样式进行页面梅花</p>
            </div>
            <div class="col-lg-4">
                <h2><i class="fa fa-camera mr-2"></i>网页设计与 <span class="text-white-50">创意</span></h2>
                <p>在功能限定的情况下，尽可能给予用户完美的视觉体验</p>
            </div>
        </div>
    </div>
</div>
<!--关于我们-->
<h4 id="list2" class="list"></h4>
<div class="container">
    <h1 class="text-center">__关于我们__</h1>
    <p class="my-4">运营平台的强大流量资源与用户资源，把企业信息即时的展现在有需求的移动用户面前，促使用户关注您的企业产品与服务，并进一步与您的企业建立深入沟通，最终达成交易</p>
    <div class="row">
        <div class="col-lg-6">
            <h3 class="mb-4">我们的职责</h3>
            <ul>
                <li><i class="fa fa-angle-right"></i>负责对网站整体表现风格的定位，对用户视觉感受的整体把握。</li>
                <li><i class="fa fa-angle-right"></i>进行网页的具体设计制作。</li>
                <li><i class="fa fa-angle-right"></i>产品目录的平面设计。</li>
                <li><i class="fa fa-angle-right"></i>各类活动的广告设计。</li>
                <li><i class="fa fa-angle-right"></i>协助开发人员页面设计等工作。</li>
            </ul>
            <a href="javascript:;" class="btn btn-primary">开始你的工作吧</a>
        </div>
        <div class="col-lg-6">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593143278393&di=5cdacd851b265e108657a8355d5077f4&imgtype=0&src=http%3A%2F%2F7xil86.com2.z0.glb.qiniucdn.com%2Fuploads%2Fimages%2F2016%2F07%2F43.jpeg"
                 alt="about" class="img-fluid img-thumbnail">
        </div>
    </div>
    <div class="row no-gutters mt-5">
        <div class="col-md-6">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593143278383&di=1da1a7339ac418dbe776ed3979d94439&imgtype=0&src=http%3A%2F%2Fimg01.chrstatic.com%2Fimages%2Fphoto%2F201608%2F1471573521334syh8zy.jpg"
                 class="img-fluid" alt="">
        </div>
        <div class="col-md-6 bg-dark text-white px-5 pt-5">
            <h3 class="mb-4">工作的内容:</h3>
            <p class="">网页如门面，小到个人主页，大到大公司，大的政府部门以及国际组织等在网络上无不以网页作为自己的门面。当点击到网站时，首先映入眼帘的是
                该网页的设计，如内容的介绍、按钮的摆放、文字的组合、色彩的调用、使用的引导等。这一切都是网页设计的范畴，都是网页设计师的工作。</p>
        </div>
    </div>
</div>
<!--我们的团队-->
<h4 id="list3" class="list"></h4>
<div class="container">
    <h1 class="text-center">__我们的团队__</h1>
    <p class="my-4">每一天我们都憧憬更高更远的未来，不断前行，加倍自信。团队协作是通向成功的保证，专注则让我们更加优秀。我们有着从业超过十年的技术总监群，
        也有年轻而具有活力的新生代力量，当业界顶尖的设计师同聚一堂，那一定可以创造奇迹。我们乐于接受新的挑战，也相信明天一定会更好。</p>
    <div class="row">
        <div class="col-12 col-md-4">
            <div class="box">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593145049739&di=7dff328db1e6eca2671fb26edabcfca2&imgtype=0&src=http%3A%2F%2Fimg3.cutv.com%2Fimages%2F2019%2F7%2F4%2F2019741562253671878_412.jpg"
                     class="img-fluid w-100" alt="">
            </div>
            <div class="bg-primary text-center py-2 iconColor">
                <a href="javascript:;"><i class="fa fa-weixin"></i></a>
                <a href="javascript:;"><i class="fa fa-qq"></i></a>
                <a href="javascript:;"><i class="fa fa-phone"></i></a>
            </div>
            <h2 class="text-center bg-dark text-white py-3">Wilson</h2>
        </div>
        <div class="col-12 col-md-4">
            <div class="box">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593145049739&di=7dff328db1e6eca2671fb26edabcfca2&imgtype=0&src=http%3A%2F%2Fimg3.cutv.com%2Fimages%2F2019%2F7%2F4%2F2019741562253671878_412.jpg"
                     class="img-fluid w-100" alt="">
            </div>
            <div class="bg-primary text-center py-2 iconColor">
                <a href="javascript:;"><i class="fa fa-weixin"></i></a>
                <a href="javascript:;"><i class="fa fa-qq"></i></a>
                <a href="javascript:;"><i class="fa fa-phone"></i></a>
            </div>
            <h2 class="text-center bg-dark text-white py-3">Anne</h2>
        </div>
        <div class="col-12 col-md-4">
            <div class="box">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593145049739&di=7dff328db1e6eca2671fb26edabcfca2&imgtype=0&src=http%3A%2F%2Fimg3.cutv.com%2Fimages%2F2019%2F7%2F4%2F2019741562253671878_412.jpg" class="img-fluid w-100" alt="">
            </div>
            <div class="bg-primary text-center py-2 iconColor">
                <a href="javascript:;"><i class="fa fa-weixin"></i></a>
                <a href="javascript:;"><i class="fa fa-qq"></i></a>
                <a href="javascript:;"><i class="fa fa-phone"></i></a>
            </div>
            <h2 class="text-center bg-dark text-white py-3">Kevin</h2>
        </div>
    </div>
    <div class="mt-4 bg1">
        <div class="row text-white">
            <div class="col-md-3 text-center py-5">
                <div><i class="fa fa-trophy fa-3x i-circle rounded-circle"></i></div>
                <h2 class="my-4">50</h2>
                <h5>获奖</h5>
            </div>
            <div class="col-md-3 text-center py-5">
                <div><i class="fa fa-code fa-3x i-circle rounded-circle"></i></div>
                <h2 class="my-4">358000</h2>
                <h5>代码行</h5>
            </div>
            <div class="col-md-3 text-center py-5">
                <div><i class="fa fa-globe fa-3x i-circle rounded-circle"></i></div>
                <h2 class="my-4">786</h2>
                <h5>全球客户</h5>
            </div>
            <div class="col-md-3 text-center py-5">
                <div><i class="fa fa-rocket fa-3x i-circle rounded-circle"></i></div>
                <h2 class="my-4">1280</h2>
                <h5>交付的项目</h5>
            </div>
        </div>
    </div>
</div>
<!--我们的服务-->
<h4 id="list4" class="list"></h4>
<div class="container">
    <h1 class="text-center">__我们的服务__</h1>
    <p class="my-4">我们可以为您的公司提供全面服务--从检验到审核，到测试和分析以及认证。我们致力于为您的公司提供每个领域中的最佳解决方案。</p>
    <div class="row">
        <div class="col-md-6">
            <div class="row">
                <div class="col-md-4 text-center">
                    <i class="fa fa-diamond fa-3x i-circle rounded-circle"></i>
                </div>
                <div class="col-md-8">
                    <h4>认证</h4>
                    <p>在众多技术领域和国家地区、我们都已获得授信以验证您的体系、产品、人员或资产满足特定要求、并颁发证书正式确认。</p>
                    <a href="javascript:;" class="btn btn-primary">更多信息</a>
                </div>
            </div>
        </div>
        <div class="col-md-6 mb-5">
            <div class="row">
                <div class="col-md-4 text-center">
                    <i class="fa fa-mobile fa-3x i-circle rounded-circle"></i>
                </div>
                <div class="col-md-8">
                    <h4>咨询</h4>
                    <p>我们可以为您提供质量、安全、环境和社会责任方面的建议、全球行业基准和技术咨询服务。</p>
                    <a href="javascript:;" class="btn btn-primary">更多信息</a>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="row">
                <div class="col-md-4 text-center">
                    <i class="fa fa-rocket fa-3x i-circle rounded-circle"></i>
                </div>
                <div class="col-md-8">
                    <h4>培训</h4>
                    <p>我们提供全方位的培训服务，覆盖了与您业务活动相关的所有符合性问题。从而帮助您改进质量、安全、社会责任领域的能力，并且鼓励您考虑“人员因素”。</p>
                    <a href="javascript:;" class="btn btn-primary">更多信息</a>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="row">
                <div class="col-md-4 text-center">
                    <i class="fa fa-internet-explorer fa-3x i-circle rounded-circle"></i>
                </div>
                <div class="col-md-8">
                    <h4>检查与审核</h4>
                    <p>在全世界的每个经济领域中，我们都能够依照本地或国际标准和法规，或自愿要求，对您的设施、设备和产品实施检验--并审核您的系统与流程。</p>
                    <a href="javascript:;" class="btn btn-primary">更多信息</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!--我们的博客-->
<h4 id="list5" class="list"></h4>
<div class="container blog">
    <h1 class="text-center">__我们的博客__</h1>
    <p class="my-4">"乐于分享，加速成长，共同进步，和谐共赢"，不仅说到，并且做到了!知识不是力量，知识只是潜能，应用改变自我和世界才有价值，知行合一！
    分享知识会得到更多的知识以及更多超越知识的东西！分享是人与人间最基础的信任。</p>
    <div class="row">
        <div class="col-4">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593149879032&di=169f096c4a4dc42e4c161f78de01f698&imgtype=0&src=http%3A%2F%2Fimg.mw8.com%2F170620%2F1496967818.gif" class="img-fluid" alt="">
        </div>
        <div class="col-4">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593149879032&di=169f096c4a4dc42e4c161f78de01f698&imgtype=0&src=http%3A%2F%2Fimg.mw8.com%2F170620%2F1496967818.gif" class="img-fluid" alt="">
        </div>
        <div class="col-4 mb-4">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593149879032&di=169f096c4a4dc42e4c161f78de01f698&imgtype=0&src=http%3A%2F%2Fimg.mw8.com%2F170620%2F1496967818.gif" class="img-fluid" alt="">
        </div>
        <div class="col-4">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593149879032&di=169f096c4a4dc42e4c161f78de01f698&imgtype=0&src=http%3A%2F%2Fimg.mw8.com%2F170620%2F1496967818.gif" class="img-fluid" alt="">
        </div>
        <div class="col-4">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593149879032&di=169f096c4a4dc42e4c161f78de01f698&imgtype=0&src=http%3A%2F%2Fimg.mw8.com%2F170620%2F1496967818.gif" class="img-fluid" alt="">
        </div>
        <div class="col-4">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593149879032&di=169f096c4a4dc42e4c161f78de01f698&imgtype=0&src=http%3A%2F%2Fimg.mw8.com%2F170620%2F1496967818.gif" class="img-fluid" alt="">
        </div>
    </div>

</div>
<!--我们的定制-->
<h4 id="list6" class="list"></h4>
<div class="container px-5">
    <h1 class="text-center">__我们的定制__</h1>
    <p class="my-4">我们的定制内容包括以下3种，您可以根据需要进行选择，期待与您的合作。</p>
    <div class="row text-white">
        <div class="col-4">
            <div class="text-center">
                <h5 class="bg-light py-3 m-0 text-success">创业基础</h5>
                <h5 class="bg-primary py-2 m-0">服务标准</h5>
            </div>
            <ul class="list-group list-group-flush text-center">
                <li class="list-group-item list-group-item-secondary">1-3年经验设计师</li>
                <li class="list-group-item list-group-item-secondary">2套LOGO设计方案</li>
                <li class="list-group-item list-group-item-secondary">3个工作日出设计初稿</li>
                <li class="list-group-item list-group-item-secondary">5个工作日出设计稿</li>
                <li class="list-group-item list-group-item-secondary">12项可编辑矢量源文件</li>
                <li class="list-group-item list-group-item-secondary py-4"><a href="javascript:;" class="btn btn-primary">现在定制</a></li>
            </ul>
        </div>
        <div class="col-4">
            <div class="text-center">
                <h5 class="bg-warning py-3 m-0 text-success">豪华套餐</h5>
                <h5 class="bg-primary py-2 m-0">服务标准</h5>
            </div>
            <ul class="list-group list-group-flush text-center">
                <li class="list-group-item list-group-item-secondary">3-5年经验设计师</li>
                <li class="list-group-item list-group-item-secondary">3套LOGO设计方案</li>
                <li class="list-group-item list-group-item-secondary">2个工作日出LOGO设计初稿</li>
                <li class="list-group-item list-group-item-secondary">5-8个工作日出设计稿</li>
                <li class="list-group-item list-group-item-secondary">30项可编辑矢量源文件</li>
                <li class="list-group-item list-group-item-secondary py-4"><a href="javascript:;" class="btn btn-primary">现在定制</a></li>
            </ul>
        </div>
        <div class="col-4">
            <div class="text-center">
                <h5 class="bg-light py-3 m-0 text-success">全部套餐</h5>
                <h5 class="bg-primary py-2 m-0">服务标准</h5>
            </div>
            <ul class="list-group list-group-flush text-center">
                <li class="list-group-item list-group-item-secondary">5年以上经验设计师</li>
                <li class="list-group-item list-group-item-secondary">4套LOGO设计方案</li>
                <li class="list-group-item list-group-item-secondary">5个工作日出LOGO设计初稿</li>
                <li class="list-group-item list-group-item-secondary">7-9个工作日出设计稿</li>
                <li class="list-group-item list-group-item-secondary">58项可编辑矢量源文件</li>
                <li class="list-group-item list-group-item-secondary py-4"><a href="javascript:;" class="btn btn-primary">现在定制</a></li>
            </ul>
        </div>
    </div>
</div>
<!--设计脚注-->
<footer class="footer bg-dark text-white py-5 mt-5">
    <div class="iconColor text-center">
        <a href="javascript:;"><i class="fa fa-weixin fa-2x"></i></a>
        <a href="javascript:;" class="mx-3"><i class="fa fa-qq fa-2x"></i></a>
        <a href="javascript:;"><i class="fa fa-twitter fa-2x"></i></a>
        <a href="javascript:;" class="mx-3"><i class="fa fa-google-plus fa-2x"></i></a>
        <a href="javascript:;"><i class="fa fa-github fa-2x"></i></a>
    </div>
    <div class="text-center my-3">
        <p>Copyright &copy;2020.</p>
    </div>
</footer>
<!--引入js文件-->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
<!--<script src="../jquery-3.4.1/Popper.js"></script>-->
<!--Bootstrap核心JavaScript文件-->
<script src="https://cdn.bootcss.com/twitter-bootstrap/4.4.1/js/bootstrap.min.js"></script>
</body>
</html>
```

#### CSS 
```css
#navbar{
    height: 60px;
    box-shadow: 0 1px 10px red;
}
.list{
    height: 50px;
}
.nav_list li{
    margin-left: 10px;
}
.nav-list li:hover{
    border-bottom: 2px solid white;
}
.iconColor a{
    color: white;
}
.iconColor a:hover i{
    color: red;
    transform: scale(1.5);
}
.active{
    border-bottom: 2px solid red;
}
.navbar-brand:hover{
    transform: scale(1.5);
}
.img-b{
    background: url("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1447425589,2489704120&fm=26&gp=0.jpg");
    background-size: 1150px 568px;
}
.jumbotron{
    height: 500px;
    background: rgba(0,0,255,0.6);
}
ul li{
    list-style: none;
}
img{
    transition: all 0.2s ease-in;
}
img:hover{
    transform: scale(1.05);
}
p{
    text-indent: 2em;
}
.bg1{
    background: #7870E8;
    padding: 30px 0;
}
.i-circle{
    padding: 20px 20px;
    background: white;
    color: #7870E8;
}
.i-circle1{
    padding: 20px 35px;
    background: white;
    color: #7870E8;
}
.i-circle:hover{
    transform: scale(1.1);
}
.i-circle1:hover{
    transform: scale(1.1);
}
```