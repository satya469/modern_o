app.controller("Khaddalfancycntr",["$scope","$http","$stateParams","sessionService","Dialog","get_userser","$rootScope","deviceDetector","$interval","speech","$state","$filter",function(e,a,t,s,n,r,d,o,i,c,l,u){function h(){if(I){var e={getRows:function(e){setTimeout(function(){var a=I.slice(e.startRow,e.endRow),t=-1;I.length<=e.endRow&&(t=I.length),e.successCallback(a,t)},500)}};f.api.setDatasource(e)}}function y(e){I=e,h()}if(e.btnPlaceDis=!1,e.matchId=t.matchId,e.FancyID=t.FancyID,e.TypeID=t.TypeID,e.userType=sessionService.get('type'),e.sportId=t.sportId,e.UserTypeId=s.get("slctUseTypeID"),e.MatchName=t.matchName,e.messageVal=!1,r.userChipSetting(function(e){d.userPlcBtn=e,d.MyLenth=e.length}),e.GetBetValue=function(a,t){e.betValue=parseInt(a)+parseInt(t)},e.display_khaddaFancy=function(){0==e.showOdd1?(e.showOdd1=!0,e.messageVal=!1):(e.showOdd1=!1,e.messageVal=!1),e.oddValue=0,e.betValue=0,e.userType=sessionService.get('type'),e.UserTypeId=s.get("slctUseTypeID")},e.saveKhaddaBet=function(i){e.btnPlaceDis=!0;var l=document.getElementById("stake").value,u=e.FancyData[0].HeadName,h=t.sportId,m=(s.get("slctUseTypeID"),s.get("slctUseID")),I=sessionService.get('user_id'),f=s.get("slctParantID"),p=t.TypeID,g=t.FancyID;if("unknown"==o.device)var D="Desktop";else var D=o.device;var b='" browser: '+o.browser+" browser_version :"+o.browser_version+"  device: "+D+"  OS : "+o.os+" os_version: "+o.os_version+'"',w={userId:m,ParantId:f,loginId:I,betValue:l,FancyID:g,matchId:e.matchId,OddValue:e.oddValue,type:sessionService.get('type'),OddsNumber:i,TypeID:p,HeadName:u,SessInptNo:"null",SessInptYes:"null",sportId:h,FancyId:e.FancyID,pointDiff:"null",deviceInformation:b},v=a.post(BASE_URL+"Lstsavemstrcontroller/getUserInfo/"+s.get("slctUseID"));v.then(function(t){var o=parseInt(t.data.userInfo[0].mstrlock),i=parseInt(t.data.userInfo[0].lgnusrlckbtng),l=parseInt(t.data.userInfo[0].lgnusrCloseAc),u=parseInt(t.data.userInfo[0].stakeLimit),h=parseInt(t.data.userInfo[0].active),m=parseInt(t.data.userInfo[0].usetype),I=parseInt(e.betValue);1==o&&1==i&&1==l&&1==h&&3==m&&(0==u||u>=I)&&parseInt(d.Balance)>=I?e.checkValidation(w)?a({method:"POST",url:BASE_URL+"Lstsavemstrcontroller/saveUserFancy",data:w,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(a){r.GetWALLibiInfo(s.get("slctUseID")),e.UserBetData=a.UserBetData,e.scorePosition=a.scorePosition,n.autohide("Place Bet Successfully...","1000"),c.sayText("b"),e.btnPlaceDis=!1,e.showOdd1=!1,y(a.UserBetData)}):e.btnPlaceDis=!1:0==o?(n.autohide("user Lock","3000"),e.btnPlaceDis=!1):0==i?(n.autohide("user batting is Lock ","3000"),e.btnPlaceDis=!1):0==l?(n.autohide("user account closed","3000"),e.btnPlaceDis=!1):0==h?(n.autohide("user Inactive","3000"),e.btnPlaceDis=!1):3!=m?(n.autohide("Please select Valid user","3000"),e.btnPlaceDis=!1):0!=u&&I>=u?(n.autohide("Invalid Stake Limit","3000"),e.btnPlaceDis=!1):parseInt(d.Balance)<I&&(n.autohide("insufficient Balance","3000"),e.btnPlaceDis=!1)})},e.checkValidation=function(a){return""==a.betValue||a.betValue<=0?(n.autohide("You cannot play at zero Stake...",100),e.btnPlaceDis=!1,$("#betValue").focus(),!1):a.OddValue==angular.isUndefinedOrNull?(n.autohide("Fill The From Value",200),e.btnPlaceDis=!1,$("#betValue").focus(),!1):!0},3!=sessionService.get('type'))var m=[{headerName:"SNo.",width:30,field:"SrNo"},{headerName:"Username",field:"userName",width:100},{headerName:"Parent",field:"ParantName",width:100},{headerName:"Bet Value",field:"bet_value",width:90},{headerName:"Range",field:"OddsNumber",width:90},{headerName:"Score",field:"OddValue",width:90},{headerName:"Time",field:"dateTime",width:140},{headerName:"Fancy Name",field:"fancyName",width:110},{headerName:"Bet Id",width:65,field:"bet_id"}];else if(3==sessionService.get('type'))var m=[{headerName:"SNo.",width:30,field:"SrNo"},{headerName:"Parent",field:"ParantName",width:100},{headerName:"Bet Value",field:"bet_value",width:90},{headerName:"Range",field:"OddsNumber",width:90},{headerName:"Score",field:"OddValue",width:90},{headerName:"Time",field:"dateTime",width:140},{headerName:"Fancy Name",field:"fancyName",width:110},{headerName:"Bet Id",width:65,field:"bet_id"}];var I,f={enableSorting:!0,enableFilter:!0,debug:!0,rowSelection:"multiple",enableColResize:!0,paginationPageSize:500,columnDefs:m,rowModelType:"pagination"},p=document.querySelector("#myGrid");new agGrid.Grid(p,f),a.get(BASE_URL+"Lstsavemstrcontroller/getFancyData/"+t.matchId+"/"+t.FancyID+"/"+s.get("user_id")+"/"+s.get("type")+"/"+t.TypeID).success(function(a,t,s,n){e.FancyData=a.fancyForm,e.showOdd1=!1,e.scorePosition=a.scorePosition,e.showEven1=!1,e.ngValue=!1,e.UserBetData=a.UserBetData,y(a.UserBetData)}),e.RefreshData=function(){r.GetFancyData(t.matchId,t.FancyID,s.get("user_id"),s.get("type"),t.TypeID,function(a){e.scorePosition=a.data.scorePosition})},e.GetBetLst=function(){r.GetFancyData(t.matchId,t.FancyID,s.get("user_id"),s.get("type"),t.TypeID,function(a){"3"!=s.get("type")&&e.UserBetData.length!=a.data.UserBetData.length&&(e.scorePosition=a.data.scorePosition,e.UserBetData=a.data.UserBetData,c.sayText("b"),y(a.data.UserBetData)),2==a.data.fancyForm[0].active?(e.closeFancy=1,e.Msg="Fancy Closed"):0==a.data.fancyForm[0].active?(e.closeFancy=1,e.Msg="Fancy Inactive"):1==a.data.fancyForm[0].active&&(e.closeFancy=0,e.Msg="")}),"0"!=s.get("type")&&a({method:"POST",url:BASE_URL+"Geteventcntr/matchMarketLst/",data:{matchId:t.matchId,sportsId:4,user_id:s.get("user_id")},headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(e){try{"1"==u("filter")(e.getMatchFancy,{ID:t.FancyID})[0].IsPlay&&(d.$broadcast("changeSidebar_Market",{}),"1"==s.get("type")?l.go("dashboard.Masterdashboard"):"2"==s.get("type")?l.go("dashboard.Dealerdashboard"):"3"==s.get("type")&&l.go("dashboard.Userdashboard"))}catch(a){}})};var g=i(e.GetBetLst,1e3);e.$on("$destroy",function(e){i.cancel(g),g=angular.isUndefinedOrNull})}]);