app.controller("Betentrycontroller",["$scope","$http",function(e,r){r.get("Createmastercontroller/betEntry").success(function(r,t,a,s){e.playerData=r,e.bet_id="pl000"+r.bet_id}).error(function(r,t,a,s){e.ResponseDetails="Data: "+r+"<br />status: "+t+"<br />headers: "+jsonFilter(a)+"<br />config: "+jsonFilter(s)}),e.submitForm=function(){var t={Sport_id:1,team_id:e.team_id.id,player_name:e.player_name};r({method:"POST",url:"Createmastercontroller/savePlayer/",data:t,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(t){0==t.errors?(e.message=t.message,r.get("Createmastercontroller/getPlayerId").success(function(r,t,a,s){e.playerData=r,e.playerId="pl000"+r.id}).error(function(r,t,a,s){e.ResponseDetails="Data: "+r+"<br />status: "+t+"<br />headers: "+jsonFilter(a)+"<br />config: "+jsonFilter(s)})):(e.message=t.message,r.get("Createmastercontroller/getPlayerId").success(function(r,t,a,s){e.playerData=r,e.playerId="pl000"+r.id}).error(function(r,t,a,s){e.ResponseDetails="Data: "+r+"<br />status: "+t+"<br />headers: "+jsonFilter(a)+"<br />config: "+jsonFilter(s)}))})}}]);