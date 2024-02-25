
// swiper 
let swiper =new Swiper(".mySwiper",{
    slidesPerView :5,
    spaceBetween :5,

})
 
 // window scroll
 window.addEventListener('scroll' ,()=>{
    document.querySelector('.popup').style.display='none';
    document.querySelector('.add-post-popup').style.display='none';
    document.querySelector('.theme-customize').style.display='none';
    document.querySelector('.notification-box').style.display='none';



 })

 //     start Aside

  let menuItem = document.querySelectorAll('.menu-item');
  // active calss remove
let removeActive =()=>{
    menuItem.forEach(item=>{
        item.classList.remove('active')
    })
    
}
 // add the Active
  menuItem.forEach(item=>{
    item.addEventListener('click',()=>{
        removeActive()
        item.classList.add('active');
        document.querySelector('.notification-box').style.display='none'

    })
  })

  document.querySelector('#Notify-box').addEventListener('click',()=>{
    document.querySelector('.notification-box').style.display='block'
    document.querySelector('#notCounter1').style.display='none'
  })

  document.querySelector('#messageMenu').addEventListener('click',()=>{
    document.querySelector('#notCounter2').style.display='none'
    document.querySelector('.messages').classList.toggle('boxshadow1')

  })

// profile popup 
document.querySelectorAll("#my-profile-picture").forEach(AllProfile=>{
    AllProfile.addEventListener('click',()=>{
        document.querySelector('.popup').style.display='flex'
    })
})
document.querySelectorAll('.close').forEach(AllClose=>{
    AllClose.addEventListener('click',()=>{
        document.querySelector('.popup').style.display='none'
        document.querySelector('.add-post-popup').style.display='none';
        document.querySelector('.theme-customize').style.display='none';


    })
})

////// change profile picture

document.querySelector("#profile-upload").addEventListener('change',()=>{
    document.querySelectorAll('#my-profile-picture img').forEach(AllProfileImg=>{
        AllProfileImg.src=URL.createObjectURL(document.querySelector("#profile-upload").files[0])
    })
})



/// add post 

document.querySelector('#create-lg').addEventListener('click',()=>{
    document.querySelector('.add-post-popup').style.display='flex';
});

document.querySelector('#feed-pic-upload').addEventListener('change',()=>{
    document.querySelector('#postIMg').src=URL.createObjectURL
    (document.querySelector('#feed-pic-upload').files[0])
})


// add story 
document.querySelector('#add-story').addEventListener('change',()=>{
    document.querySelector('.story img').src=URL.createObjectURL(
        document.querySelector('#add-story').files[0] )
        document.querySelector('.add-story').style.display='none';
})

// mini button  input 

document.querySelector('.mini-button').addEventListener('click',()=>{
    document.querySelector('.add-post').classList.add('boxshadow1')
});

document.querySelector('.mini-button').addEventListener('dblclick',()=>{
    document.querySelector('.add-post-popup').style.display='flex';
});
// liked button 

document.querySelectorAll('.action-button span:first-child i').forEach(liked=>{
    liked.addEventListener('click',()=>{
        liked.classList.toggle('liked');
    })
})


setTimeout(()=>{
    document.querySelector('.input-post').classList.remove('boxshadow1')
    document.querySelector('.messages').classList.remove('boxshadow1')


}, 3000)

