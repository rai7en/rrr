function go(id){
  var v=document.getElementById('vid');if(id!=='s3'&&v&&!v.paused)v.pause();
  document.querySelectorAll('.screen').forEach(function(s){s.classList.toggle('on',s.id===id)});
}
function unlock(){
  var n=document.getElementById('nm').value.trim().toLowerCase(),p=document.getElementById('pw').value.trim();
  if(n!=='rathii'||p!=='192005'){document.getElementById('err').textContent='Name or password is wrong. Try again.';return}
  document.getElementById('err').textContent='';go('sr');
}
function untie(){
  var r=document.getElementById('rib');if(r.classList.contains('undo'))return;
  r.classList.add('undo');setTimeout(function(){go('s2')},1300);
}
function playVideo(){
  var v=document.getElementById('vid');
  if(v.videoWidth&&v.videoHeight)v.parentElement.style.aspectRatio=v.videoWidth+'/'+v.videoHeight;
  v.style.display='block';
  document.getElementById('play').style.display='none';
  v.play();
}
document.getElementById('rib').addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' ')untie()});
