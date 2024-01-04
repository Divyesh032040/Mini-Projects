
// const riverImg = document.getElementById('river');
// const allImg = document.getElementById('images');
// const google = document.getElementById('google');

document.querySelector('#images').addEventListener('click' , function(e){
  ///strict check 
  if (e.target.tagName == "IMG") {
      //its get access li in which is parent of Img 
      const removeIt = e.target.parentNode;
      //its remove that parent node means list 
      removeIt.remove();
      console.log(e.target.id)
  }
})

// another way to remove node 
 //removeIt.parentNode.removeChild(removeIt)












