<template>
<div class="page">
    <div class="sidebar" :class="{ 'withsidebar' : Showspan }">
        <span class="show-span" @click="Showspan = !Showspan"></span>
        <h3 class="title-sidebar">Shop</h3>
        <ul>
          <li>
            <a class="active link" href="index.html">
              <i class="fa fa-tachometer" aria-hidden="true"></i>
              <span :class="{ 'showspan' : Showspan }">Dashboard</span>
            </a>
          </li>
          <li>
            <a class="link" href="settings.html">
              <i class="fa fa-cog" aria-hidden="true"></i>
              <span :class="{ 'showspan' : Showspan }">Settings</span>
            </a>
          </li>
          <li>
            <a class="link" href="profile.html">
              <i class="fa fa-user" aria-hidden="true"></i>
              <span :class="{ 'showspan' : Showspan }">Profile</span>
            </a>
          </li>
          <li>
            <a class="link" href="projects.html">
              <i class="fa fa-lock" aria-hidden="true"></i>
              <span :class="{ 'showspan' : Showspan }">Projects</span>
            </a>
          </li>
          <li>
            <a class="link" href="courses.html">
              <i class="fa fa-foursquare" aria-hidden="true"></i>
              <span :class="{ 'showspan' : Showspan }">Courses</span>
            </a>
          </li>
          <li>
            <a class="link" href="friends.html">
              <i class="fa fa-briefcase" aria-hidden="true"></i>
              <span :class="{ 'showspan' : Showspan }">Friends</span>
            </a>
          </li>
          <li>
            <a class="link" href="files.html">
              <i class="fa fa-file" aria-hidden="true"></i>
              <span :class="{ 'showspan' : Showspan }">Files</span>
            </a>
          </li>
          <li>
            <a class="link" href="plans.html">
              <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
              <span :class="{ 'showspan' : Showspan }">Plans</span>
            </a>
          </li>
        </ul>
    </div>
    <div class="content">
        <!-- Start Head -->
        <div class="head">
          <div class="search">
            <input type="search" placeholder="Type A Keyword" />
          </div>
          <div class="icons">
            <span class="notification">
              <i class="fa fa-bell" aria-hidden="true"></i>
            </span>
            <img src="@/assets/avatar.png" alt="" />
          </div>
        </div>
        <!-- End Head -->
        <h1>Dashboard</h1>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="wrapper">
                            <!-- Start Welcome Widget -->
                            <div class="welcome">
                                <div class="intro">
                                <div class="welcome-title">
                                    <h2>Welcome</h2>
                                    <p>Elzero</p>
                                </div>
                                <img src="@/assets/welcome.png" alt="" />
                                </div>
                                <img src="@/assets/avatar.png" alt="" class="avatar" />
                                <div class="info-welcome">
                                    <div class="info-welcome-title">Osama Elzero <span>Developer</span></div>
                                    <div class="info-welcome-title">80 <span>Projects</span></div>
                                    <div class="info-welcome-title">$8500 <span>Earned</span></div>
                                </div>
                                <a class="btn-profile visit" href="profile.html">Profile</a>
                            </div>
                            <!-- End Welcome Widget -->
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="quick-draft">
                            <!-- Start Quick Widget -->
                            <div class="Quick">
                                <h2>Quick Draft</h2>
                                <h6>Write A Draft For Your Ideas</h6>
                                <form action="">
                                    <input class="input-title" type="text" placeholder="title">
                                    <textarea class="input-description" name="" id="" cols="30" rows="10" placeholder="You Thought"></textarea>
                                </form>
                                <a class="btn-save visit" href="profile.html">Save</a>
                            </div>
                            <!-- End Quick Widget -->
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="target-pro">
                            <h2>Yearly Targets</h2>
                            <h6>Targets Of The Year</h6>
                            <div class="target">
                                <div class="icon">
                                    <i class="fa fa-usd" aria-hidden="true"></i>
                                </div>
                                <div class="details">
                                    <span class="money">Money</span>
                                    <span class="dollar">20.00 $</span>
                                    <div class="progress">
                                        <span class="por">
                                            <span class="num-por">40%</span>                                
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="target">
                                <div class="icon">
                                    <i class="fa fa-usd" aria-hidden="true"></i>
                                </div>
                                <div class="details">
                                    <span class="money">Money</span>
                                    <span class="dollar">20.00 $</span>
                                    <div class="progress">
                                        <span class="por">
                                            <span class="num-por">40%</span>                                
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="target">
                                <div class="icon">
                                    <i class="fa fa-usd" aria-hidden="true"></i>
                                </div>
                                <div class="details">
                                    <span class="money">Money</span>
                                    <span class="dollar">20.00 $</span>
                                    <div class="progress">
                                        <span class="por">
                                            <span class="num-por">40%</span>                                
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="tickets">
                            <h2>Tickets Statistics</h2>
                            <h6>Everything About Support Tickets</h6>
                            <div class="borderr">
                                <div class="box">
                                    <span>
                                        <i style="color: #008e68;" class="fa fa-address-book-o" aria-hidden="true"></i>
                                    </span>
                                    <h3 class="number">2500</h3>
                                    <h6 class="status">Total</h6>
                                </div>
                                <div class="box">
                                    <span>
                                        <i style="color: #5cabfa;" class="fa fa-address-card" aria-hidden="true"></i>
                                    </span>
                                    <h3 class="number">1600</h3>
                                    <h6 class="status">Sup</h6>
                                </div>
                                <div class="box">
                                    <span>
                                        <i style="color: #ff77c9;" class="fa fa-area-chart" aria-hidden="true"></i>
                                    </span>
                                    <h3 class="number">1248</h3>
                                    <h6 class="status">Techni</h6>
                                </div>
                                <div class="box">
                                    <span>
                                        <i style="color: #ffa977;" class="fa fa-balance-scale" aria-hidden="true"></i>
                                    </span>
                                    <h3 class="number">2597</h3>
                                    <h6 class="status">Poup</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="latest">
                            <h2>Latest News</h2>
                            <div class="test">
                                <img src="data:image/jpeg;base64,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" alt="">
                                <div class="info">
                                    <h3>Created SASS Section</h3>
                                    <p>New SASS Examples & Tutorials</p>
                                </div>
                                <div class="btn-shap">3 Days Ago</div>
                            </div>
                            <div class="test">
                                <img src="data:image/jpeg;base64,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" alt="">
                                <div class="info">
                                    <h3>Created SASS Section</h3>
                                    <p>New SASS Examples & Tutorials</p>
                                </div>
                                <div class="btn-shap">3 Days Ago</div>
                            </div>
                            <div class="test">
                                <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="">
                                <div class="info">
                                    <h3>Created SASS Section</h3>
                                    <p>New SASS Examples & Tutorials</p>
                                </div>
                                <div class="btn-shap">3 Days Ago</div>
                            </div>
                            <div class="test">
                                <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png" alt="">
                                <div class="info">
                                    <h3>Created SASS Section</h3>
                                    <p>New SASS Examples & Tutorials</p>
                                </div>
                                <div class="btn-shap">3 Days Ago</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </div>
</div>
</template>

<script>

export default {
  components: {
    
  },
  data() {
    return {
        Showspan: false
    }
  }
}
</script>

<style scoped>
.latest {
    background-color: white;
    padding: 15px;
    border-radius: 7px;
    text-align: left;
    overflow: hidden;
}
.latest .test {
    display: flex;
    align-items: center;
}
.latest .test:not(:last-of-type) {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
}
.latest .test img {
    width: 100px;
    border-radius: 6px;
    margin-right: 15px;
}
.latest .test .info {
    flex-grow: 1;
}
.latest .test .info p {
    margin: 0;
    font-size: 14px;
    color: #888;
}
.latest .test .info h3 {
    font-weight: bold;
    margin: 0;
    font-size: 16px;
    color: black;
}

.latest .test .btn-shap {
    background: #e4e4e4;
    padding: 5px 11px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 100;
}









.tickets {
    background-color: white;
    padding: 15px;
    border-radius: 7px;
    text-align: left;
    overflow: hidden;
}
.tickets > h6 {
    font-size: 15px;
    color: #888;
}
.tickets .borderr {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}
.tickets .box {
    border: 1px solid #ccc;
    width: calc(50% - 11px);
    padding: 34px;
    text-align: center;
    border-radius: 20px;
}
.tickets .box span .fa {
    font-size: 27px;
    margin-bottom: 10px;
}
.tickets .box .number {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 6px;
}
.tickets .box .status {
    color: #888;
    font-size: 13px;
}







.target-pro {
    background-color: white;
    padding: 15px;
    border-radius: 7px;
    text-align: left;
    overflow: hidden;
    margin-bottom: 10px;
}
.target-pro .target {
    display: flex;
    align-items: center;
    margin-bottom: 34px;
}
.target-pro h6,
.target-pro h2 {
    text-align: left;
}
.target-pro h6 {
    font-size: 15px;
    color: #888;
}
.target-pro .details .money {
    color: #888;
    font-size: 14px;
}
.target-pro .details .dollar {
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 10px;
}
.target-pro .target .icon {
    background-color: rgb(0 117 255 / 20%);
    width: 80px;
    height: 80px;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-right: 15px;
}
.target-pro .details span {
    display: block;
}
.target-pro .details {
    flex: 1;
    text-align: left;
}
.target-pro .progress {
    background: red;
    height: 4px;
    position: relative;
}
.target-pro .progress span {
    position: absolute;
    left: 0;
    top: 0;
    width: 80%;
    height: 100%;
    background: #0075ff;
}
.target-pro .progress span span {
    position: absolute;
}
/*.target-pro .progress .por span::before {
    content: '';
}
.target-pro .progress .por span::after {
    content: '';
}*/




::-webkit-scrollbar {
    width: 15px;
}
::-webkit-scrollbar-track {
    background-color: white;
}
::-webkit-scrollbar-trumb {
    background-color: rgb(13, 0, 255);
}
::-webkit-scrollbar-trumb:hover {
    background-color: rgb(72, 0, 255);
}
* {
  box-sizing: border-box;
}
body {
  font-family: "Open Sans", sans-serif;
  margin: 0;
}
*:focus {
  outline: none;
}

.page {
    display: flex;
    background: #f1f5f9;
    min-height: 200vh;
}

.sidebar {
    width: 250px;
    box-shadow: 0 0 10px #ddd;
    padding: 20px;
    background: white;
    position: relative;
}
.sidebar .show-span {
    display: none;
}
.title-sidebar {
    margin-bottom: 50px;
    margin-top: 0;
    text-align: center;
    position: relative;
}
.title-sidebar::before {
    content: '';
    position: absolute;
    background: black;
    width: 80px;
    height: 2px;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
}
.title-sidebar::after {
    content: '';
    background: black;
    height: 20px;
    width: 20px;
    position: absolute;
    border-radius: 50%;
    bottom: -28px;
    left: 50%;
    transform: translateX(-50%);
    border: 3px solid white;
}
ul {
    list-style: none;
    padding: 0;
}
ul li .link {
    display: flex;
    margin-bottom: 13px;
    font-size: 14px;
    color: black;
    padding-bottom: 10px;
    align-items: center;
    text-decoration: none;
    transition: .2s;
}
ul li .link:hover {
    background-color: #f6f6f6;
}
.sidebar ul li .link span {
    font-size: 14px;
    margin-left: 10px;
}

.content {
    overflow: hidden;
    width: 100%;
}
.head {
    background: white;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
}
.head .icons img {
    width: 32px;
    height: 32px;
    margin-left: 15px;
}
.search {
    position: relative;
}
.search::before {
    content: '\f002';
    font-family: auto;
    position: absolute;
    font-weight: 900;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
}
.search input {
    border-radius: 10px;
    width: 207px;
    border: 1px solid #ccc;
    padding: 10px 30px;
    font-size: 14px;
    margin-left: 2px;
}
.notification {
    position: relative;
}
.notification::before {
    content: '';
    position: absolute;
    background: red;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    right: 0;
    top: -6px;
}
.notification.fa {
    font-size: 18px;
}


.content h1 {
    margin: 20px 20px 40px;
    position: relative;
    text-align: left;
    color: black;
}
.content h1::before {
    content: '';
    position: absolute;
    width: 82px;
    height: 2px;
    background: black;
    bottom: -7px;
    left: 4px;
}
.wrapper {
    margin-bottom: 20px;
}
.wrapper .welcome {
    overflow: hidden;
    background-color: white;
    border-radius: 10px;
}
.intro {
    background-color: #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}
.intro img {
    width: 200px;
}
.info-welcome {
    display: flex;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 50px 12px;
    margin: 21px 0px;
}
.intro .welcome-title {
    text-align: left;
}
.info-welcome-title {
    flex: 1;
}
.info-welcome-title span {
    color: #888;
    font-size: 14px;
    display: block;
}
.welcome .btn-profile {
    background-color: #2196f3;
    color: white;
    padding: 2px 8px;
    border-radius: 6px;
    text-decoration: none;
    font-size: 14px;
    margin: 0 15px 15px auto;
    display: block;
    width: fit-content;
}
.welcome .avatar {
    width: 64px;
    height: 64px;
    border: 2px solid white;
    border-radius: 50%;
    padding: 2px;
    box-shadow: 0 0 5px #ddd;
    margin-right: 350px;
    margin-top: -32px;
}

.quick-draft {
    background-color: white;
    padding: 15px;
    border-radius: 7px;
    text-align: left;
    overflow: hidden;
    margin-bottom: 10px;
}
.quick-draft h6 {
    font-size: 15px;
    color: #888;
}
.quick-draft .input-title,
.quick-draft .input-description {
    background-color: #eee;
    border: none;
    width: 100%;
    border-radius: 5px;
    padding: 6px 12px;
    margin-bottom: 15px;
}
.quick-draft .input-description {
    height: 211px;
}
.quick-draft .btn-save {
    background-color: #2196f3;
    color: white;
    padding: 2px 8px;
    border-radius: 6px;
    text-decoration: none;
    font-size: 14px;
    margin: 0 15px 0 auto;
    display: block;
    width: fit-content;
}
/* start media */
@media (max-width: 983px) {
    .sidebar {
        width: 58px;
        transition: .2s;
    }
    .sidebar .show-span {
        display: block;
    }
    .sidebar .show-span::before {
        content: '\f105';
        background: white;
        width: 20px;
        height: 20px;
        top: 84px;
        right: -12px;
        position: absolute;
        border-radius: 50%;
        box-shadow: 0 0 10px #ddd;
    }
    .sidebar:hover::before {
        top: 74px;
    }
    .sidebar > h3 {
        font-size: 13px;
        margin-bottom: 31px;
        margin-left: -7px;
    }
    .sidebar ul li .link span {
        display: none;
    }
    ul li .link {
        padding-bottom: 20px;
    }
    .title-sidebar::before,
    .title-sidebar::after {
        display: none;
    }
    .sidebar.withsidebar {
        width: 140px;
        position: absolute;
        z-index: 999;
        height: 100vh;
    }
    .sidebar ul li .link span.showspan {
        display: block;
    }


    .head .search input {
        border-radius: 10px;
        width: 136px;
        border: 1px solid #ccc;
        padding: 6px 24px;
        font-size: 10px;
        margin-left: 2px;
    }

    .intro img {
        width: 160px;
    }
    .welcome .avatar {
        margin-right: 0; 
    }
    .info-welcome {
        padding: 17px 12px;
        display: block;
    }
    .info-welcome-title {
        flex: 1;
        margin-bottom: 22px;
    }












    .latest {
        text-align: center;
    }
    .latest h2 {
        margin-bottom: 30px;
    }
    .latest .test {
        display: block;
        text-align: center;
    }
    .latest .test .info {
        margin-top: 12px;
    }
    .latest .test .btn-shap {
        width: fit-content;
        margin: 10px auto;
    }
    
}
/* end media */
</style>



