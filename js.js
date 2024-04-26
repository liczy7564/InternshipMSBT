$(document).ready(function(){

 
    // 返回上一瀏覽紀錄
  $(".Backbutton").on("click",function(){
    window.history.back();
  });

    //證照 Skill
  let container_Certifications=document.querySelector(".container_Certifications");
  $.ajax({
    url:"Json/Certificate.json",
    success:function(result){
      for(let i=0;i<result.length;i++){
      container_Certifications.innerHTML+="<div class='about_Skill_5 mar_auto'><p>"+
      result[i]['name']+"</p></div><div class='about_Skill_2 text_center'><p>"+
      result[i]['wh']+"</p></div><div class='about_Skill_3 text_center'><p>"+
      result[i]['date']+"</p></div>"
      }
    }
  });

	let Skill=document.querySelector(".container_Skill");
  $.ajax({
    url:"Json/skill.json",
    success:function(result){
      for(let i=0;i<result.length;i++){
      Skill.innerHTML+="<div class='about_Skill_3 .mar_auto'><p>"+
      result[i]['name']+"</p></div><div class='about_Skill_4 text_center'><p>"+
      result[i]['what']+"</p></div><div class='about_Skill_3'><p>"+
      result[i]['about']+"</p></div>"
      }
    }
  });
  // 大學經歷
  let Activity_1=document.querySelector(".container_Activity_1");
  $.ajax({
    url:"Json/Activity.json",
    success:function(result){
      for(let i=0;i<5;i++){
        Activity_1.innerHTML+="<div class='row'><div class='col-5'><p>"+
      result[i]['time']+"</p></div><div class='col-7'><p>"+
      result[i]['name']+"</p></div></div>"
      }
    }
  });
  let Activity_2=document.querySelector(".container_Activity_2");
  $.ajax({
    url:"Activity.json",
    success:function(result){
      for(let i=5;i<10;i++){
        Activity_2.innerHTML+="<div class='row'><div class='col-5'><p>"+
      result[i]['time']+"</p></div><div class='col-7'><p>"+
      result[i]['name']+"</p></div></div>"
      }
    }
  });
  let Activity_3=document.querySelector(".container_Activity_3");
  $.ajax({
    url:"Json/Activity.json",
    success:function(result){
      for(let i=10;i<16;i++){
        Activity_3.innerHTML+="<div class='row'><div class='col-5'><p>"+
      result[i]['time']+"</p></div><div class='col-7'><p>"+
      result[i]['name']+"</p></div></div>"
      }
    }
  });
  let Activity_4=document.querySelector(".container_Activity_4");
  $.ajax({
    url:"Activity.json",
    success:function(result){
      for(let i=16;i<20;i++){
        Activity_4.innerHTML+="<div class='row'><div class='col-3'><p>"+
      result[i]['time']+"</p></div><div class='col-9'><p>"+
      result[i]['name']+"</p></div></div>"
      }
    }
  });
  let album=document.querySelector(".album");
  $.ajax({
    url:"Json/album.json",
    success:function(result){
      var html = "<div class='carousel-inner'>";
     
      for(let i=0;i<result.length;i++){
        html +="<div class='carousel-item Memoirs_block '><img src='"+
      result[i]['img']+"'class=' Memoirs_img'><p>"+
      result[i]['text']+"</p></div>"
      }
      html +="</div><div class='carousel-control-prev carousel_2'  data-bs-target='#carousel' data-bs-slide='prev'></div><div class='carousel-control-next carousel_2' data-bs-target='#carousel' data-bs-slide='next'></div>";
      album.innerHTML+=html;
      $(".Memoirs_block:first").addClass("active");
    }
  });
  let ajax_cooperate=document.querySelector(".ajax_cooperate");
  $.ajax({
    url:"Json/cooperate.json",
    success:function(result){
      for(let i=0;i<result.length;i++){
        if(result[i]['type_2'] === null){
          result[i]['type_2'] = "";
        }
        if(result[i]['link_2'] === null){
          result[i]['link_2'] = "";
        }
        if(result[i]['link_title_2'] === null){
          result[i]['link_title_2'] = "";
        }
      }
      for(let i=0;i<result.length;i++){
      ajax_cooperate.innerHTML+="<div class='cooperate_block'><"+result[i]['media']+" class='cooperate_img'loading='lazy' src='"+
      result[i]['media_src']+"' style='width: 100%;' alt=''></"+result[i]['media']+"><h6 >"+
      result[i]['Name']+"</h6><div class='cooperate_contact'><span class='title_2'>"+
      result[i]['type_1']+"</span><br><a href='"+result[i]['link_1']+"'>"+result[i]['link_title_1']+"</a><br><span class='title_2'>"+
      result[i]['type_2']+"</span><br><a href='"+result[i]['link_2']+"'>"+result[i]['link_title_2']+"</a><br>"
      }
    }
  });
  

  // 主選項打開副選項
  let Main_option= document.getElementsByClassName("Main_options"); 
  let Secondary = document.getElementsByClassName("Secondary"); 
  Secondary[0].style.display = "block";
  $(".Main_options").on("click",function(){
    let num = $(this).attr("value");
    Main_options(num);
    // 滾到第一個標題
    var offsetTop = $('.about_me').height()+$('.header').height()+2;

    $('html, body').animate({
        scrollTop: offsetTop
    }, 100); // 捲動的時間（毫秒）
  });


 // 主選項樣式
  function Main_options(num) { 
    let i;
    for (i = 0; i < Secondary.length; i++) {
      Secondary[i].style.display = "none";
      Main_option[i].style.color="#A6A6A6"; 
    }
    Secondary[num].style.display = "block";
    Main_option[num].style.color="#fff";
  }	

   // 主選項打開副選項
  let work_option= document.getElementsByClassName("work_options");
  let work_container = document.getElementsByClassName("work_container"); 
  work_container[0].style.color= "#efefef"; 
  
  $(".work_options").on("click",function(){
    let value1 = $(this).attr("value");
    work_options(value1);

    workContainers.forEach(workContainer => {
    const containerRect = document.querySelector('.Slide_leftright').getBoundingClientRect();
    var currentScrollLeft = $('#marker').scrollLeft();
    var targetOffset = $(".work_container[value='"+value1+"']").offset().left;
    
    var ans=currentScrollLeft-containerRect.left+targetOffset-42;
    $('#marker').animate({scrollLeft: ans}, 500);
    });
  });
  const container = $('.Slide_leftright');
  const workContainers = document.querySelectorAll('.work_container');

  //滑動位置顯示上色
  function work_showelementor() {
    const valuesArray = [];
    workContainers.forEach(workContainer => {
          const elementRect = workContainer.getBoundingClientRect();
          const containerRect = document.querySelector('.Slide_leftright').getBoundingClientRect();
          if (
              elementRect.left<= containerRect.right-40 &&
              elementRect.left>= containerRect.left-90
          ) {
            let value = workContainer.getAttribute("value");
            let numericValue = parseInt(value, 10);
            valuesArray.push(numericValue );
          } 
      });
      work_options(...valuesArray);
  }
//點擊標題位置顯示上色
  function work_options(value1,value2) { 
    let i;
    for (i = 0; i < work_container.length; i++) { 
      work_option[i].style.color="#8d8d8d"; 
      }
    if (value1 !== undefined && value1 !== null) {
      work_option[value1].style.color="#474032";
    }
    if (value2 !== undefined && value2 !== null) {
      work_option[value2].style.color = "#474032";
    }
  }	
// 添加点击事件监听器到容器
  container.click(function() {
    work_showelementor();
  });
  $('#marker').scroll(function() {
    work_showelementor();
  });

  $(".work_1_more").click(function(){
    $(".work_1_more_open").slideToggle("slow");

    let work_1_more=document.querySelector(".work_1_more");


setTimeout(function() {
    if ($('.work_1_more_open').css('display') === 'none') {
        work_1_more.innerHTML = "查看說明";
      }else{
        work_1_more.innerHTML = "收起說明";
      }
    }, 1000);

  });
  $(".Internship_experience_more").click(function(){
    $(".Internship_experience_else").slideToggle("slow");
  });
  // let open=document.querySelector(".open");
	// open.innerHTML += "開獎";
  // 置頂按鈕

  $(function(){
    $('.top-Anchor').click(function(){ 
      $('html,body').animate({scrollTop:0}, 333);
    });
    $(window).scroll(function() {
      if ( $(this).scrollTop() > 300 ){
        $(".top-Anchor").fadeIn(222);
      } else {
        $(".top-Anchor").stop().fadeOut(222);
      }
    }).scroll();
  });


});
