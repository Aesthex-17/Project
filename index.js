const wrapper=document.querySelector('.wrapper');
const LoginLink=document.querySelector('.Login-link');
const RegLink=document.querySelector('.register-link');
const btnpopup=document.querySelector('.btnLogin-popup');
const iconClose=document.querySelector('.icon-close');
const Btn=document.querySelector('.btn1');

RegLink.addEventListener('click',()=>{
   wrapper.classList.add('active');
});
LoginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
 });
 btnpopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
 });
 iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
 });
 Btn.addEventListener('click',()=>{
	wrapper.classList.add('active-popup');
 });