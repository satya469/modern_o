app.controller("Sportstypecontroller",["$scope","$http",function(e,t){t.get(BASE_URL+"Createmastercontroller/SportTypeMst").success(function(t,r,s,o){e.sportData=t;var a=new Date;e.FromDate=a.getFullYear()+"-"+("0"+(a.getMonth()+1)).slice(-2)+"-"+("0"+a.getDate()).slice(-2),e.sportTypeId=t.id,e.sportTypeId="cr000"+t.id}).error(function(t,r,s,o){e.ResponseDetails="Data: "+t+"<br />status: "+r+"<br />headers: "+jsonFilter(s)+"<br />config: "+jsonFilter(o)}),e.submitForm=function(){var r={Sport_name:e.Sport_name,Sport_id:e.Sport_id.id};t({method:"POST",url:BASE_URL+"Createmastercontroller/saveSportType/",data:r,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(r){0==r.errors?(e.message=r.message,t.get(BASE_URL+"Createmastercontroller/SportTypeMst").success(function(t,r,s,o){e.sportData=t;var a=new Date;e.FromDate=a.getFullYear()+"-"+("0"+(a.getMonth()+1)).slice(-2)+"-"+("0"+a.getDate()).slice(-2),e.sportTypeId=t.id,e.sportTypeId="cr000"+t.id}).error(function(t,r,s,o){e.ResponseDetails="Data: "+t+"<br />status: "+r+"<br />headers: "+jsonFilter(s)+"<br />config: "+jsonFilter(o)})):(e.message=r.message,t.get(BASE_URL+"Createmastercontroller/SportTypeMst").success(function(t,r,s,o){e.sportData=t;var a=new Date;e.FromDate=a.getFullYear()+"-"+("0"+(a.getMonth()+1)).slice(-2)+"-"+("0"+a.getDate()).slice(-2),e.sportTypeId=t.id,e.sportTypeId="cr000"+t.id}).error(function(t,r,s,o){e.ResponseDetails="Data: "+t+"<br />status: "+r+"<br />headers: "+jsonFilter(s)+"<br />config: "+jsonFilter(o)}))})}}]);