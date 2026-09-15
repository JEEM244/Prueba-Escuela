function currentUser(){const id=localStorage.getItem('ce_session');return getCollection('usuarios').find(u=>u.id===id)||null}
function requireRole(role){const u=currentUser();if(!u||u.rol!==role){window.location.href='../index.html';return null}return u}
function login(email,password){const u=getCollection('usuarios').find(x=>x.email.toLowerCase()===email.toLowerCase()&&x.password===password&&x.activo);if(!u)return false;localStorage.setItem('ce_session',u.id);return true}
function logout(){localStorage.removeItem('ce_session');window.location.href='../index.html'}