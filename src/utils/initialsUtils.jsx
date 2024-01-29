export const firstInitials = (string) => {
  const [name, title] = string?.split(" ");
   if(name && title){
    return name?.substring(0, 1).toUpperCase() + title?.substring(0, 1).toUpperCase()
  }
  else{
    return name?.substring(0,1).toUpperCase()
  }
  
};
