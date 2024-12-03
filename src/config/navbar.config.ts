export const navbarMenuList = [
  {
    text: 'Search',
    link: 'search',
    icon: 'fa-solid fa-magnifying-glass',
  },
  {
    text: 'Activity',
    link: 'activity',
    icon: 'fa-regular fa-bell',
  },
]

export const recipeCollectionMenuList = [
  {
    text: 'All',
    link: 'recipeCollection',
    icon: 'fa-solid fa-book-bookmark',
  },
  {
    text: 'Saved',
    link: 'recipeCollection',
    icon: 'fa-regular fa-bookmark',
  },
  {
    text: 'Your Recipes',
    link: 'users/recipes',
    icon: 'fa-regular fa-user',
  },
  {
    text: 'Published',
    link: 'users/recipes?isPublic=1',
    icon: 'fa-solid fa-globe',
  },
  {
    text: 'Private',
    link: 'users/recipes?isPublic=0',
    icon: 'fa-solid fa-lock',
  },
]
