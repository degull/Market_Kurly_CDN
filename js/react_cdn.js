function WrapComponent(){
   return (
      <div id="wrap">

         <TopModalComponent/>
         <HeaderComponent/>
         <MainComponent/>
         <FooterComponent/>
         <IntroModalComponent/>
         <GoTopComponent/>
         <QuickMenuComponent/>
      </div>
   )
}

//탑모달
function TopModalComponent(){
   return (
      <div id="topModal">
         <div className="container">
            <h2><a href="#">지금 가입하고 인기상품 <strong>100원</strong>에 받아가세요!</a></h2>
            <a href="#" className="top-modal-close"><img src="./img/ico_close_fff_84x84.png" alt=""/></a>
         </div>
      </div>
   )
}


//헤더
function HeaderComponent(){
   return(
      <header id="header">
         <div className="row1">
            <div className="container">
               <ul>
                  <li><a href="./member/sign_up">회원가입</a></li>
                  <li><i>|</i></li>
                  <li><a href="./member/login">로그인</a></li>
                  <li><i>|</i></li>
                  <li className="service-box">
                     <a href="./member/board/board1" className="service-center-btn">고객센터<img src="./img/ico_down_16x10.png" alt=""/></a>
                     <div className="top-tooltip">
                        <ul>
                           <li><a href="./member/board/board1/">공지사항</a></li>
                           <li><a href="./member/board/board2/">자주하는 질문</a></li>
                           <li><a href="./member/board/board3/">1:1문의</a></li>
                           <li><a href="./member/board/board4/">대량주문 문의</a></li>
                        </ul>
                     </div>
                  </li>
               </ul>
            </div>
         </div>

         <div className="row2">
            <div className="container">
               <div className="left">
                  <ul>
                     <li>
                        <h1>
                           <a href="#">
                              <img src="./img/logo_kurly.svg" alt=""/>
                              <span>마켓컬리</span>
                           </a>
                        </h1>
                     </li>
                     <li>
                        <i>|</i>
                     </li>
                     <li>
                        <span>
                           <a href="#">뷰티컬리<img src="./img/n_red.svg" alt=""/></a>
                        </span>
                     </li>
                  </ul>
               </div>

               <div className="center">
                  <form name="search_form" action="./search.php">
                     <div className="search-box">
                        <input type="text" placeholder="검색어를 입력해주세요"/>
                        <a href="#" className="search-btn"><img src="./img/search.svg" alt=""/></a>
                     </div>
                  </form>
               </div>

               <div className="right">
                  <div className="map-tooltip-box">
                     <a href="#" className="map-tooltip-btn"><img src="./img/map.svg" alt=""/></a>
                     <div className="map-tooltip-menu">
                        <ul>
                           <li>
                              <em>배송지를 등록하고<br/></em>
                              <span>구매 가능한 상품을 확인하세요!</span>
                           </li>
                           <li>
                              <button className="login-btn">로그인</button>
                              <button className="address-search-btn"><img src="./img/search_white.png" alt=""/><span>주소검색</span></button>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div>
                     <a href="#"><img src="./img/heart.svg" alt=""/></a>
                  </div>
                  <div>
                     <a href="#"><img src="./img/cart.svg" alt=""/></a>
                  </div>
               </div>
            </div>
         </div>

         {/* <!-- scrollTop 값이 100px 이상아면 헤더영역 scroll event 발생(고정) --> */}
         <div className="row3">
            <div className="container">
               <div className="left">
                  <a href="#" title="카테고리">
                     <img src="./img/line.svg" alt=""/>
                     <strong>카테고리</strong>
                  </a>
               </div>
               <div className="center">
                  <ul>
                     <li><a href="./sub1/" className="main-btn" title="신상품">신상품</a></li>
                     <li><a href="./sub2/" className="main-btn" title="베스트">베스트</a></li>
                     <li><a href="./sub3/" className="main-btn" title="알뜰쇼핑">알뜰쇼핑</a></li>
                     <li><a href="./sub4/" className="main-btn" title="특가혜택">특가/혜택</a></li>
                  </ul>
               </div>
               <div className="right">
                  <span>
                     <a href="#">
                        <em>샛별<i>·</i>택배</em><strong>배송안내</strong>
                     </a>
                  </span>
               </div>
            </div>
         </div>
      </header>
   )
}

//메인
function MainComponent(){
   return(
      <main id="main">
         <section id="section1">
            <div className="slide-container">
               <div className="slide-view">
                  <ul className="slide-wrap">
                     <li className="slide slide19"><a href="#"><img src="./img/slide19.jpg" alt=""/></a></li>
                     <li className="slide slide1"><a href="#"><img src="./img/slide1.jpg" alt=""/></a></li>
                     <li className="slide slide2"><a href="#"><img src="./img/slide2.jpg" alt=""/></a></li>
                     <li className="slide slide3"><a href="#"><img src="./img/slide3.jpg" alt=""/></a></li>
                     <li className="slide slide4"><a href="#"><img src="./img/slide4.jpg" alt=""/></a></li>
                     <li className="slide slide5"><a href="#"><img src="./img/slide5.jpg" alt=""/></a></li>
                     <li className="slide slide6"><a href="#"><img src="./img/slide6.jpg" alt=""/></a></li>
                     <li className="slide slide7"><a href="#"><img src="./img/slide7.jpg" alt=""/></a></li>
                     <li className="slide slide9"><a href="#"><img src="./img/slide9.jpg" alt=""/></a></li>
                     <li className="slide slide10"><a href="#"><img src="./img/slide10.jpg" alt=""/></a></li>
                     <li className="slide slide11"><a href="#"><img src="./img/slide11.jpg" alt=""/></a></li>
                     <li className="slide slide12"><a href="#"><img src="./img/slide12.jpg" alt=""/></a></li>
                     <li className="slide slide13"><a href="#"><img src="./img/slide13.jpg" alt=""/></a></li>
                     <li className="slide slide15"><a href="#"><img src="./img/slide15.jpg" alt=""/></a></li>
                     <li className="slide slide16"><a href="#"><img src="./img/slide16.jpg" alt=""/></a></li>
                     <li className="slide slide17"><a href="#"><img src="./img/slide18.jpg" alt=""/></a></li>
                     <li className="slide slide18"><a href="#"><img src="./img/slide18.jpg" alt=""/></a></li>
                     <li className="slide slide19"><a href="#"><img src="./img/slide19.jpg" alt=""/></a></li>
                     <li className="slide slide1"><a href="#"><img src="./img/slide1.jpg" alt=""/></a></li>
                  </ul>
               </div>

               <span className="arrow arrow-left-box"><a href="#" className="arrow-left-btn" title="slide preview"><i></i></a></span>
               <span className="arrow arrow-right-box"><a href="#" className="arrow-right-btn" title="slide next"><i></i></a></span>

               <span className="page-box">
                  <em className="current-page">1</em> <i>/</i> <em className="total-page">17</em>
               </span>
            </div>
         </section>

         <section id="section2" className="section-slide-public">
            <div className="title"><h2>이 상품 어때요? </h2></div>
            <div className="slide-container">
               <div className="slide-view">
                  <ul className="slide-wrap">
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (1).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>

                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>  
                           </div>  
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>  
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">  
                             
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>   
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">   
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>   
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide5">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">   
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>  
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide6">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide7">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide8">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div> 
                           <div className="caption-box"> 
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>   
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide9">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">   
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>  
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide10">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">   
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>  
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>  
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide11">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">   
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>   
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide12">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide13">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide14">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide15">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide16">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide17">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide18">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide19">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide20">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>        
                  </ul>
               </div>

               <a href="#" className="arrow-btn arrow-left"><img src="./img/left_cir.svg" alt=""/></a>
               <a href="#" className="arrow-btn arrow-right"><img src="./img/left_cir.svg" alt=""/></a>
            </div>
         </section>

         <section id="section3">
            <div className="container">
               <a href="#">
                  <img src="./img/banner1.jpg" alt=""/>
               </a>
            </div>
         </section>

         <section id="section4" className="section-slide-public">
            <div className="title"><h2>놓치면 후회할 가격 </h2></div>
            <div className="slide-container">
               <div className="slide-view">
                  <ul className="slide-wrap">
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (1).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>

                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>  
                           </div>  
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>  
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">  
                             
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>   
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">   
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>   
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide5">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">   
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>  
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide6">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide7">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide8">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div> 
                           <div className="caption-box"> 
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>   
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide9">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">   
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>  
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide10">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">   
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>  
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>  
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide11">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">   
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>   
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide12">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide13">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide14">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide15">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide16">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide17">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide18">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide19">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide20">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>        
                  </ul>
               </div>

               <a href="#" className="arrow-btn arrow-left"><img src="./img/left_cir.svg" alt=""/></a>
               <a href="#" className="arrow-btn arrow-right"><img src="./img/left_cir.svg" alt=""/></a>
            </div>
         </section>

         <section id="section5">
            <div className="container">
               <a href="#">
                  <img src="./img/banner2.jpg" alt=""/>
               </a>
            </div>
         </section>

         <section id="section6" className="section-slide-public">
            <div className="title"><h2>1만원대 후기가 많은 인기상품 </h2><span>최근 2주간 후기를 가장 많이 남겨주셨어요</span></div>
               <div className="slide-container">
                  <div className="slide-view">
                  <ul className="slide-wrap">
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (1).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>

                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>  
                           </div>  
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>  
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">  
                             
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>   
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">   
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>   
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide5">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">   
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>  
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide6">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide7">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide8">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div> 
                           <div className="caption-box"> 
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>   
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide9">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">   
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>  
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide10">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">   
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>  
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>  
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide11">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">   
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>   
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide12">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide13">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide14">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide15">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide16">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide17">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide18">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide19">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide20">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>        
                  </ul>
               </div>

               <a href="#" className="arrow-btn arrow-left"><img src="./img/left_cir.svg" alt=""/></a>
               <a href="#" className="arrow-btn arrow-right"><img src="./img/left_cir.svg" alt=""/></a>
            </div>
         </section>

         <section id="section7">
            <div className="container">
               <a href="#">
                  <img src="./img/banner3.jpg" alt=""/>
               </a>
            </div>
         </section>

         <section id="section8" className="section-slide-public">
            <div className="title"><h2>지금 가장 핫한 상품</h2></div>
               <div className="slide-container">
                  <div className="slide-view">
                  <ul className="slide-wrap">
                     <li className="slide slide1">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (1).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>

                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>  
                           </div>  
                        </div>
                     </li>
                     <li className="slide slide2">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>  
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide3">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">  
                             
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>   
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide4">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">   
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>   
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide5">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">   
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>  
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide6">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide7">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide8">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div> 
                           <div className="caption-box"> 
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>   
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide9">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">   
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>  
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide10">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">   
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>  
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>  
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide11">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">   
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>   
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>   
                              <h4>43,900원</h4>   
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide12">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide13">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide14">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide15">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide16">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide17">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide18">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide19">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>
                     <li className="slide slide20">
                        <div className="gap">
                           <div className="img-box">
                              <a href="#">
                                 <img src="./img/slide-2 (10).jpg" alt=""/>
                                 <span><img src="./img/cart_cir.svg" alt=""/></span>
                              </a>
                           </div>
                           <div className="caption-box">    
                              <h2><strong>[경남제약]</strong> 결콜라겐 플러스 60포</h2>    
                              <h3><em>75%</em><strong><span>10,975원</span></strong></h3>    
                              <h4>43,900원</h4>    
                              <h4> 후기 109</h4>    
                           </div>
                        </div>
                     </li>        
                  </ul>
               </div>

               <a href="#" className="arrow-btn arrow-left"><img src="./img/left_cir.svg" alt=""/></a>
               <a href="#" className="arrow-btn arrow-right"><img src="./img/left_cir.svg" alt=""/></a>
               </div>
         </section>

         <section id="section9">
            <div className="container">
               <a href="#">
                  <img src="./img/banner4.jpg" alt=""/>
               </a>
            </div>
         </section>
      </main>
   )
}

//푸터
function FooterComponent(){
   return(
      <footer id="footer">
         <div class="row row1">
            <div class="container">
               <div class="row1-1">
                  <div class="left">
                     <ul>
                        <li><h1>고객행복센터</h1></li>
                        <li><h2><a href="tel:1644-1107">1644-1107</a><span>월~토요일 오전 7시 ~ 오후 6시</span></h2></li>
                        <li>
                           <ul>
                              <li>
                                 <a href="#">카카오톡 문의</a>
                                 <div>
                                    <p>월~토요일 | 오전7시 ~ 오후 6시</p>
                                    <p>일/공휴일 | 오전7시 ~ 오후 1시</p>
                                 </div>
                              </li>
                              <li>
                                 <a href="#">1:1 문의</a>
                                 <div>
                                    <p>365일</p>
                                    <p>고객센터 운영시간에 순차적으로 답변드리겠습니다.</p>
                                 </div>
                              </li>
                              <li>
                                 <a href="#">대량주문 문의</a>
                                 <div>
                                    <p>월~금요일 | 오전9시 ~ 오후 6시</p>
                                    <p>점심시간  | 낮 12시 ~ 오후 1시</p>
                                 </div>
                              </li>
                           </ul>
                        </li>
                        <li>
                           <span>
                           비회원 문의 : <a href="mailto:">help@kurlycorp.com</a><br/>
                           비회원 대량주문 문의 : <a href="mailto:">kurlygift@kurlycorp.com</a>
                           </span>
                        </li>
                     </ul>
                  </div>
               <div class="right">
                  <ul>
                     <li>
                        <a href="#">컬리소개</a>
                        <a href="#">컬리소개영상</a>
                        <a href="#">인재채용</a>
                        <a href="#">이용약관</a>
                        <a href="#">개인정보처리방침</a>
                        <a href="#">이용안내</a>
                     </li>
                     <li>
                        <address>
                           법인명(상호):주식회사 컬리 <i>|</i> 사업자등록번호 : 261-81-23567 <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2618123567&apv_perm_no=">사업자정보확인</a><br/>
                           통신판매업 : 제 2018-서울강남-01646호 <i>|</i> 개인정보보호책임자 : 이원준<br/>
                           주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) <i>|</i> 대표이사 : 김솔아<br/>
                           입점문의 : <a href="mailto:skytmdgus591@naver.com">입점문의하기</a> <i>|</i> 제휴문의 : <a href="mailto:business@kurlycorp.com">business@kurlycorp.com</a><br/>
                           채용문의 : <a href="mailto:recuit@kurlycorp.com">recuit@kurlycorp.com</a><br/>
                           팩스 : 070 - 7500 - 6098
                        </address>
                     </li>
                     <li>
                        <a href="#"><img src="./img/ico_instagram.png" alt=""/></a>
                        <a href="#"><img src="./img/ico_fb.png" alt=""/></a>
                        <a href="#"><img src="./img/ico_blog.png" alt=""/></a>
                        <a href="#"><img src="./img/ico_naverpost.png" alt=""/></a>
                        <a href="#"><img src="./img/ico_youtube.png" alt=""/></a>
                     </li>
                  </ul>
               </div>
            </div>
            <div class="row1-2">
               <a href="#" title="isms">
                  <img src="<?=$home_path?>img/logo_isms.svg" alt=""/>
                  <span>
                     [인증범위] 컬리 쇼핑몰 서비스 개발·운영<br/>
                     (심사받지 않은 물리적 인프라 제외)<br/>
                     [유효기간] 2022.01.19 ~ 2025.01.18<br/>
                  </span>
               </a>
               <a href="#" title="privacy">
                  <img src="<?=$home_path?>img/logo_privacy.svg" alt=""/>
                  <span>
                     개인정보보호 우수 웹사이트 ·<br/>
                     개인정보처리시스템 인증 (ePRIVACY PLUS)<br/>
                  </span>
               </a>
               <a href="#" title="tosspayments">
                  <img src="<?=$home_path?>img/logo_tosspayments.svg" alt=""/>
                  <span>
                     토스페이먼츠 구매안전(에스크로)<br/>
                     서비스를 이용하실 수 있습니다.<br/>
                  </span>
               </a>
               <a href="#" title="wooriBank">
                  <img src="<?=$home_path?>img/logo_wooriBank.svg" alt=""/>
                  <span>
                     고객님이 현금으로 결제한 금액에 대해 우리은행과<br/>
                     채무지급보증 계약을 체결하여 안전거래를 보장하고<br/>
                     있습니다.<br/>
                  </span>
               </a>
            </div>
         </div>
      </div>

      <div class="row row2">
         <div class="container">
            <div>
               컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.<br/>
               마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.<br/>
            </div>
            <p>© KURLY CORP. ALL RIGHTS RESERVED</p>
         </div>
      </div>
      </footer>
   )
}

//팝업
function IntroModalComponent(){
   return(
      <div id="introModal">
         <div class="container">
            <div class="wrap">
               <div class="img-box">
                  <img src="./img/popup.jpg" alt=""/>
               </div>
               <div class="btn-box">
                  <button class="close-open-none-btn">다시 안 보기</button>
                  <button class="close-btn">닫기</button>
               </div>
            </div>
         </div>
   </div>
   )
}

//gotop
function GoTopComponent(){
   return(
      <div id="goTop">
         <a href="#"><img src="/img/gotop.png" alt=""/></a>
      </div>
   )
}

//퀵메뉴
function QuickMenuComponent(){
   return(
      <div id="quickMenu">
         <ul>
            <li><a href="#"><img src="/img/quick.webp" alt=""/></a></li>
            <li><a href="#">등급별 혜택</a></li>
            <li><a href="#">레시피</a></li>
         </ul>
   </div>

   )
} 






ReactDOM.render(
   <WrapComponent/>,
   document.getElementById('root')
);