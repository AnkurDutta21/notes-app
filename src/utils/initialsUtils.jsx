export const firstInitials = (string) => {
  const [name, title] = string?.split(' ');
    return name?.substring(0, 1).toUpperCase() + title?.substring(0, 1).toUpperCase();
  }
