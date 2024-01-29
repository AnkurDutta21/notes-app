export const modalValidations = (name, color) => {
  let errMessage = {
    name:'',
    color:''
  }

  if (!name) {
    errMessage.name = "Enter a valid group name"
  } 
  

  if (!color) {
    errMessage.color = "Select a color"
  }

console.log(errMessage,'1111111111111111111')
  return { validation : errMessage}
}