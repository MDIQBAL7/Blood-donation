
//  Nav functionality start 

 const menuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileItems = document.querySelectorAll('.mobile-item');

  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('translate-x-0');

    if(!isOpen) {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.add('translate-x-0');

      mobileItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.remove('opacity-0','translate-x-10');
          item.classList.add('opacity-100','translate-x-0');
        }, index * 100);
      });
    } else {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('translate-x-full');

      mobileItems.forEach((item) => {
        item.classList.add('opacity-0','translate-x-10');
        item.classList.remove('opacity-100','translate-x-0');
      });
    }
  });

//  Nav functionality end 



// login and registration functionality start 
let generatedOTP = null;
let otpVerified = false;

// ===== Modal Functions =====
function openModal(id) {
  const modal = document.getElementById(id);
  const box = modal.querySelector("div");
  modal.classList.remove("hidden");
  setTimeout(() => {
    box.classList.remove("scale-95","opacity-0");
    box.classList.add("scale-100","opacity-100");
  }, 10);
}

function closeModal(id){
  const modal=document.getElementById(id);
  const box=modal.querySelector("div");
  box.classList.remove("scale-100","opacity-100");
  box.classList.add("scale-95","opacity-0");
  setTimeout(()=> modal.classList.add("hidden"),200);
}

function switchToLogin(){closeModal('registerModal'); setTimeout(()=>openModal('loginModal'),250);}
function switchToRegister(){closeModal('loginModal'); setTimeout(()=>openModal('registerModal'),250);}

// ===== OTP System =====
function sendOTP(){
  const phone=document.getElementById('phone').value;
  const phoneRegex=/^\+8801[0-9]{8}$/;
  if(!phoneRegex.test(phone)){
    alert("❌ সঠিক বাংলাদেশি ফোন নাম্বার দিন (+8801XXXXXXXX)");
    return;
  }
  generatedOTP=Math.floor(100000+Math.random()*900000);
  console.log("Generated OTP:",generatedOTP);
  alert("📲 OTP পাঠানো হয়েছে (demo). Console দেখুন।");
  document.getElementById('otpInput').classList.remove('hidden');
  document.getElementById('verifyBtn').classList.remove('hidden');
}

function verifyOTP(){
  const entered=document.getElementById('otpInput').value;
  if(entered==generatedOTP){
    otpVerified=true;
    alert("✅ OTP সফলভাবে ভেরিফাই হয়েছে");
    document.getElementById('otpInput').classList.add('hidden');
    document.getElementById('verifyBtn').classList.add('hidden');
  } else {
    alert("❌ OTP ভুল");
  }
}

// ===== NID Image Upload Preview =====
function previewNID(event){
  const file=event.target.files[0];
  if(file){
    const reader=new FileReader();
    reader.onload=function(e){
      document.getElementById('nidPreview').src=e.target.result;
      document.getElementById('nidPreview').classList.remove('hidden');
    }
    reader.readAsDataURL(file);
  }
}

// ===== Registration Submit =====
document.getElementById('registerForm').addEventListener('submit',function(e){
  const nidFile=document.getElementById('nidFile').files.length;
  if(!otpVerified){
    e.preventDefault();
    alert("❌ ফোন OTP ভেরিফাই করুন আগে");
  } else if(!nidFile){
    e.preventDefault();
    alert("❌ NID ইমেজ আপলোড করুন");
  } else {
    alert("✅ Registration সফলভাবে Complete!");
  }
});



  // Preview uploaded NID image
  document.getElementById('nidUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = document.getElementById('nidPreview');
        img.src = e.target.result;
        img.classList.remove('hidden');
      }
      reader.readAsDataURL(file);
    }
  });
// login and registration functionality end

// dooner search functionality start 


// dooner search functionality end